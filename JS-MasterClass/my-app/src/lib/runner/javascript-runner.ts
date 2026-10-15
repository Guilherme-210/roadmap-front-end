import type {
  CodeRunner,
  ExecutionError,
  ExecutionResult,
  LogEntry,
  RunnerOptions,
  SupportedLanguage,
} from "@/types/runner";
import { formatLogArgs, safeSerialize } from "./formatter";
import { createWorkerScript } from "./worker-script";

export class JavaScriptRunner implements CodeRunner {
  readonly language: SupportedLanguage = "javascript";
  readonly isExecutable = true;
  readonly displayName = "JavaScript (V8 / Isolated Worker)";

  private activeWorker: Worker | null = null;
  private activeBlobUrl: string | null = null;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;
  private isTerminatedByUser = false;

  /**
   * Executa o código JavaScript fornecido.
   * No navegador, utiliza um Web Worker isolado gerado via Blob URL.
   * Em ambientes sem suporte a Web Worker (como testes unitários em Node.js),
   * utiliza uma estratégia de emulação segura com captura de console.
   */
  async run(code: string, options?: RunnerOptions): Promise<ExecutionResult> {
    // Interrompe qualquer execução anterior pendente para evitar vazamentos e conflitos
    this.stop();

    this.isTerminatedByUser = false;
    options?.onStatusChange?.("running");

    if (typeof window !== "undefined" && typeof Worker !== "undefined") {
      return this.runInWorker(code, options);
    }

    return this.runInNodeFallback(code, options);
  }

  /**
   * Interrompe a execução atual imediatamente.
   */
  stop(): void {
    if (this.activeWorker) {
      this.isTerminatedByUser = true;
      this.activeWorker.terminate();
      this.activeWorker = null;
    }

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }

    if (this.activeBlobUrl) {
      URL.revokeObjectURL(this.activeBlobUrl);
      this.activeBlobUrl = null;
    }
  }

  /**
   * Libera recursos alocados.
   */
  dispose(): void {
    this.stop();
  }

  /**
   * Execução isolada em Web Worker no navegador.
   */
  private runInWorker(code: string, options?: RunnerOptions): Promise<ExecutionResult> {
    return new Promise<ExecutionResult>((resolve) => {
      const logs: LogEntry[] = [];
      const startTime = performance.now();
      const timeoutMs = options?.timeoutMs ?? 5000;

      try {
        const workerScript = createWorkerScript();
        const blob = new Blob([workerScript], { type: "application/javascript" });
        const blobUrl = URL.createObjectURL(blob);
        this.activeBlobUrl = blobUrl;

        const worker = new Worker(blobUrl);
        this.activeWorker = worker;

        const cleanup = () => {
          if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = null;
          }
          if (this.activeWorker === worker) {
            this.activeWorker = null;
          }
          if (this.activeBlobUrl === blobUrl) {
            URL.revokeObjectURL(blobUrl);
            this.activeBlobUrl = null;
          }
        };

        // Timeout de proteção contra loops infinitos
        this.timeoutId = setTimeout(() => {
          worker.terminate();
          cleanup();

          const timeoutError: ExecutionError = {
            name: "ExecutionTimeoutError",
            message: `Tempo limite de execução excedido (${timeoutMs}ms). A execução foi interrompida para proteger a aplicação.`,
          };

          const timeoutLog: LogEntry = {
            id: `system-timeout-${Date.now()}`,
            level: "error",
            messages: [timeoutError.message],
            formattedText: `[Timeout] ${timeoutError.message}`,
            timestamp: Date.now(),
          };

          logs.push(timeoutLog);
          options?.onLog?.(timeoutLog);
          options?.onStatusChange?.("terminated");

          resolve({
            success: false,
            logs,
            error: timeoutError,
            executionTimeMs: timeoutMs,
          });
        }, timeoutMs);

        worker.onmessage = (e: MessageEvent) => {
          const { type, payload } = e.data || {};

          if (type === "log" && payload) {
            const entry: LogEntry = payload;
            logs.push(entry);
            options?.onLog?.(entry);
          } else if (type === "success") {
            cleanup();
            const totalTime = performance.now() - startTime;
            options?.onStatusChange?.("completed");
            resolve({
              success: true,
              logs,
              returnValue: payload?.returnValue,
              executionTimeMs: Math.round(payload?.duration || totalTime),
            });
          } else if (type === "error") {
            cleanup();
            const totalTime = performance.now() - startTime;
            const errorObj: ExecutionError = payload?.error || {
              name: "RuntimeError",
              message: "Erro desconhecido durante a execução.",
            };

            const errorLog: LogEntry = {
              id: `worker-err-${Date.now()}`,
              level: "error",
              messages: [errorObj.message],
              formattedText: `${errorObj.name}: ${errorObj.message}`,
              timestamp: Date.now(),
            };
            logs.push(errorLog);
            options?.onLog?.(errorLog);

            options?.onStatusChange?.("error");
            resolve({
              success: false,
              logs,
              error: errorObj,
              executionTimeMs: Math.round(payload?.duration || totalTime),
            });
          }
        };

        worker.onerror = (err) => {
          cleanup();
          const totalTime = performance.now() - startTime;

          if (this.isTerminatedByUser) {
            options?.onStatusChange?.("terminated");
            const interruptedLog: LogEntry = {
              id: `system-interrupted-${Date.now()}`,
              level: "warn",
              messages: ["Execução interrompida pelo usuário."],
              formattedText: "[Interrompido] Execução cancelada pelo usuário.",
              timestamp: Date.now(),
            };
            logs.push(interruptedLog);
            options?.onLog?.(interruptedLog);

            resolve({
              success: false,
              logs,
              error: {
                name: "AbortError",
                message: "Execução interrompida manualmente.",
              },
              executionTimeMs: Math.round(totalTime),
            });
            return;
          }

          const message = typeof err.message === "string" ? err.message : "Erro no Web Worker";
          const errorObj: ExecutionError = {
            name: "WorkerError",
            message,
          };

          const errorLog: LogEntry = {
            id: `err-${Date.now()}`,
            level: "error",
            messages: [message],
            formattedText: `WorkerError: ${message}`,
            timestamp: Date.now(),
          };
          logs.push(errorLog);
          options?.onLog?.(errorLog);

          options?.onStatusChange?.("error");
          resolve({
            success: false,
            logs,
            error: errorObj,
            executionTimeMs: Math.round(totalTime),
          });
        };

        // Envia o código para o worker iniciar a execução
        worker.postMessage({ code });
      } catch (err) {
        const errorObj: ExecutionError = {
          name: "InitializationError",
          message: err instanceof Error ? err.message : "Falha ao inicializar o executor.",
        };
        options?.onStatusChange?.("error");
        resolve({
          success: false,
          logs,
          error: errorObj,
          executionTimeMs: 0,
        });
      }
    });
  }

  /**
   * Fallback de execução em ambiente Node.js / testes automatizados.
   */
  private async runInNodeFallback(
    code: string,
    options?: RunnerOptions
  ): Promise<ExecutionResult> {
    const logs: LogEntry[] = [];
    const startTime = performance.now();

    const pushLog = (level: LogEntry["level"], args: unknown[]) => {
      const entry: LogEntry = {
        id: Math.random().toString(36).substring(2, 9),
        level,
        messages: args.map((a) => safeSerialize(a, 1)),
        formattedText: formatLogArgs(args),
        timestamp: Date.now(),
      };
      logs.push(entry);
      options?.onLog?.(entry);
    };

    // Salva referências originais de console
    const origLog = console.log;
    const origInfo = console.info;
    const origWarn = console.warn;
    const origError = console.error;

    console.log = (...args: unknown[]) => pushLog("log", args);
    console.info = (...args: unknown[]) => pushLog("info", args);
    console.warn = (...args: unknown[]) => pushLog("warn", args);
    console.error = (...args: unknown[]) => pushLog("error", args);

    try {
      const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor as new (
        ...args: string[]
      ) => (...args: unknown[]) => Promise<unknown>;

      const runnerFn = new AsyncFunction(code);
      const returnValue = await runnerFn();
      const executionTimeMs = Math.round(performance.now() - startTime);

      options?.onStatusChange?.("completed");
      return {
        success: true,
        logs,
        returnValue: returnValue !== undefined ? safeSerialize(returnValue, 0) : undefined,
        executionTimeMs,
      };
    } catch (err) {
      const executionTimeMs = Math.round(performance.now() - startTime);
      const errorObj: ExecutionError = {
        name: err instanceof Error ? err.name : "RuntimeError",
        message: err instanceof Error ? err.message : String(err),
        stack: err instanceof Error ? err.stack : undefined,
      };

      const errorLog: LogEntry = {
        id: `err-${Date.now()}`,
        level: "error",
        messages: [errorObj.message],
        formattedText: `${errorObj.name}: ${errorObj.message}`,
        timestamp: Date.now(),
      };
      logs.push(errorLog);
      options?.onLog?.(errorLog);

      options?.onStatusChange?.("error");
      return {
        success: false,
        logs,
        error: errorObj,
        executionTimeMs,
      };
    } finally {
      // Restaura métodos do console
      console.log = origLog;
      console.info = origInfo;
      console.warn = origWarn;
      console.error = origError;
    }
  }
}
