import type {
  CodeRunner,
  ExecutionError,
  ExecutionResult,
  LogEntry,
  RunnerOptions,
  RunnerStatus,
  SupportedLanguage,
} from "@/types/runner";
import {
  RUNNER_PROTOCOL,
  createProtocolMessage,
  isExecutorMessage,
  resolveRunnerLimits,
  utf8ByteLength,
  type RunnerLimits,
} from "./protocol";
import { createExecutorFrameDocument } from "./worker-script";

interface ActiveExecution {
  executionId: string;
  channelId: string;
  iframe: HTMLIFrameElement;
  limits: RunnerLimits;
  logs: LogEntry[];
  outputBytes: number;
  timeoutId: ReturnType<typeof setTimeout>;
  finish: (
    status: RunnerStatus,
    result: Omit<ExecutionResult, "logs" | "executionTimeMs"> & {
      executionTimeMs?: number;
    }
  ) => void;
}

function secureId(): string {
  if (typeof crypto === "undefined" || typeof crypto.getRandomValues !== "function") {
    throw new Error("Gerador criptográfico indisponível no navegador.");
  }
  if (typeof crypto.randomUUID === "function") return crypto.randomUUID();
  const bytes = new Uint8Array(24);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function safeCallback(callback: (() => void) | undefined): void {
  try {
    callback?.();
  } catch {
    // Callbacks pertencem à UI e não podem quebrar o ciclo de vida do runner.
  }
}

function createSystemLog(
  executionId: string,
  level: LogEntry["level"],
  text: string
): LogEntry {
  return {
    id: `${executionId}:system:${Date.now()}`,
    level,
    messages: [text],
    formattedText: text,
    timestamp: Date.now(),
  };
}

/**
 * Runner browser-only. O código não é executado nesta classe nem na origem da
 * aplicação. Cada execução recebe um iframe sandboxed de origem opaca; esse
 * iframe cria um Worker descartável para preservar a responsividade.
 */
export class JavaScriptRunner implements CodeRunner {
  readonly language: SupportedLanguage = "javascript";
  readonly isExecutable = true;
  readonly displayName = "JavaScript (Opaque Sandbox + Worker)";

  private active: ActiveExecution | null = null;

  async run(code: string, options?: RunnerOptions): Promise<ExecutionResult> {
    this.stop();

    const limits = resolveRunnerLimits(options);
    const provisionalId = "rejected";
    if (utf8ByteLength(code) > limits.maxCodeSizeBytes) {
      const error: ExecutionError = {
        name: "CodeSizeLimitError",
        message: `O código excede o limite de ${limits.maxCodeSizeBytes} bytes.`,
      };
      const log = createSystemLog(provisionalId, "error", error.message);
      safeCallback(() => options?.onLog?.(log));
      safeCallback(() => options?.onStatusChange?.("error"));
      return { success: false, logs: [log], error, executionTimeMs: 0 };
    }

    if (
      typeof window === "undefined" ||
      typeof document === "undefined" ||
      typeof HTMLIFrameElement === "undefined"
    ) {
      const error: ExecutionError = {
        name: "UnsupportedEnvironmentError",
        message: "O executor JavaScript isolado está disponível apenas no navegador.",
      };
      safeCallback(() => options?.onStatusChange?.("error"));
      return { success: false, logs: [], error, executionTimeMs: 0 };
    }

    safeCallback(() => options?.onStatusChange?.("running"));

    return new Promise<ExecutionResult>((resolve) => {
      let executionId: string;
      let channelId: string;
      try {
        executionId = secureId();
        channelId = secureId();
      } catch (cause) {
        const error: ExecutionError = {
          name: "InitializationError",
          message: cause instanceof Error ? cause.message : "Falha ao criar identificadores seguros.",
        };
        safeCallback(() => options?.onStatusChange?.("error"));
        resolve({ success: false, logs: [], error, executionTimeMs: 0 });
        return;
      }

      const logs: LogEntry[] = [];
      const startedAt = performance.now();
      const iframe = document.createElement("iframe");
      iframe.hidden = true;
      iframe.tabIndex = -1;
      iframe.setAttribute("aria-hidden", "true");
      iframe.setAttribute("sandbox", "allow-scripts");
      iframe.setAttribute("referrerpolicy", "no-referrer");
      iframe.title = "Executor JavaScript isolado";

      let finished = false;
      let started = false;

      const cleanup = () => {
        window.removeEventListener("message", handleMessage);
        iframe.removeEventListener("error", handleFrameError);
        clearTimeout(active.timeoutId);
        iframe.remove();
        if (this.active === active) this.active = null;
      };

      const finish: ActiveExecution["finish"] = (status, result) => {
        if (finished) return;
        finished = true;
        const measuredTime = Math.max(0, Math.round(performance.now() - startedAt));
        cleanup();
        safeCallback(() => options?.onStatusChange?.(status));
        resolve({
          ...result,
          logs: [...logs],
          executionTimeMs: result.executionTimeMs ?? measuredTime,
        });
      };

      const active: ActiveExecution = {
        executionId,
        channelId,
        iframe,
        limits,
        logs,
        outputBytes: 0,
        timeoutId: setTimeout(() => {
          const error: ExecutionError = {
            name: "ExecutionTimeoutError",
            message: `Tempo limite de execução excedido (${limits.timeoutMs}ms).`,
          };
          const log = createSystemLog(executionId, "error", `[Timeout] ${error.message}`);
          const logBytes = utf8ByteLength(log.formattedText);
          if (
            logs.length < limits.maxLogEntries &&
            active.outputBytes + logBytes <= limits.maxOutputBytes
          ) {
            active.outputBytes += logBytes;
            logs.push(log);
            safeCallback(() => options?.onLog?.(log));
          }
          finish("terminated", {
            success: false,
            error,
            executionTimeMs: limits.timeoutMs,
          });
        }, limits.timeoutMs),
        finish,
      };

      function handleFrameError() {
        const error: ExecutionError = {
          name: "InitializationError",
          message: "Falha ao carregar o contexto isolado do executor.",
        };
        finish("error", { success: false, error });
      }

      const handleMessage = (event: MessageEvent) => {
        if (finished || this.active !== active) return;
        if (event.source !== iframe.contentWindow || event.origin !== "null") return;
        if (!isExecutorMessage(event.data, { channelId, executionId, limits })) return;

        const message = event.data;
        if (message.type === "ready") {
          if (started || !iframe.contentWindow) return;
          started = true;
          iframe.contentWindow.postMessage(
            createProtocolMessage({
              protocol: RUNNER_PROTOCOL,
              channelId,
              executionId,
              type: "start",
              payload: { code, limits },
            }),
            "*"
          );
          return;
        }

        if (message.type === "log") {
          if (logs.length >= limits.maxLogEntries) return;
          const entryBytes = utf8ByteLength(message.payload.formattedText);
          if (active.outputBytes + entryBytes > limits.maxOutputBytes) return;
          active.outputBytes += entryBytes;
          logs.push(message.payload);
          safeCallback(() => options?.onLog?.(message.payload));
          return;
        }

        if (message.type === "success") {
          finish("completed", {
            success: true,
            returnValue: message.payload.returnValue,
            executionTimeMs: Math.round(message.payload.duration),
          });
          return;
        }

        if (message.type === "error") {
          const log = createSystemLog(
            executionId,
            "error",
            `${message.payload.error.name}: ${message.payload.error.message}`
          );
          const logBytes = utf8ByteLength(log.formattedText);
          if (
            logs.length < limits.maxLogEntries &&
            active.outputBytes + logBytes <= limits.maxOutputBytes
          ) {
            active.outputBytes += logBytes;
            logs.push(log);
            safeCallback(() => options?.onLog?.(log));
          }
          finish("error", {
            success: false,
            error: message.payload.error,
            executionTimeMs: Math.round(message.payload.duration),
          });
        }
      };

      this.active = active;
      window.addEventListener("message", handleMessage);
      iframe.addEventListener("error", handleFrameError, { once: true });

      try {
        iframe.srcdoc = createExecutorFrameDocument(channelId, window.location.origin);
        document.body.appendChild(iframe);
      } catch (cause) {
        const error: ExecutionError = {
          name: "InitializationError",
          message: cause instanceof Error ? cause.message : "Falha ao inicializar o executor.",
        };
        finish("error", { success: false, error });
      }
    });
  }

  stop(): void {
    const active = this.active;
    if (!active) return;

    try {
      active.iframe.contentWindow?.postMessage(
        createProtocolMessage({
          protocol: RUNNER_PROTOCOL,
          channelId: active.channelId,
          executionId: active.executionId,
          type: "stop",
        }),
        "*"
      );
    } catch {
      // O descarte abaixo continua sendo a forma efetiva de cancelamento.
    }

    const error: ExecutionError = {
      name: "AbortError",
      message: "Execução interrompida manualmente.",
    };
    const log = createSystemLog(
      active.executionId,
      "warn",
      "[Interrompido] Execução cancelada pelo usuário."
    );
    const logBytes = utf8ByteLength(log.formattedText);
    if (
      active.logs.length < active.limits.maxLogEntries &&
      active.outputBytes + logBytes <= active.limits.maxOutputBytes
    ) {
      active.outputBytes += logBytes;
      active.logs.push(log);
    }
    active.finish("terminated", { success: false, error });
  }

  dispose(): void {
    this.stop();
  }
}
