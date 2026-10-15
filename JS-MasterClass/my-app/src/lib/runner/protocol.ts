import type {
  ExecutionError,
  LogEntry,
  LogLevel,
  RunnerOptions,
} from "@/types/runner";

export const RUNNER_PROTOCOL = "playground-runner/v1" as const;

export const DEFAULT_RUNNER_LIMITS = Object.freeze({
  timeoutMs: 5_000,
  maxCodeSizeBytes: 100_000,
  maxLogEntries: 200,
  maxLogMessageBytes: 8_192,
  maxOutputBytes: 64_000,
});

export const ABSOLUTE_RUNNER_LIMITS = Object.freeze({
  timeoutMs: { min: 100, max: 30_000 },
  maxCodeSizeBytes: { min: 1_024, max: 500_000 },
  maxLogEntries: { min: 1, max: 1_000 },
  maxLogMessageBytes: { min: 256, max: 32_768 },
  maxOutputBytes: { min: 1_024, max: 512_000 },
});

export interface RunnerLimits {
  timeoutMs: number;
  maxCodeSizeBytes: number;
  maxLogEntries: number;
  maxLogMessageBytes: number;
  maxOutputBytes: number;
}

interface ProtocolEnvelope {
  protocol: typeof RUNNER_PROTOCOL;
  channelId: string;
  executionId: string;
  type: string;
}

export interface StartExecutionMessage extends ProtocolEnvelope {
  type: "start";
  payload: {
    code: string;
    limits: RunnerLimits;
  };
}

export interface StopExecutionMessage extends ProtocolEnvelope {
  type: "stop";
}

export type HostToExecutorMessage =
  | StartExecutionMessage
  | StopExecutionMessage;

export interface ExecutorReadyMessage extends Omit<ProtocolEnvelope, "executionId"> {
  type: "ready";
  executionId: "";
}

export interface ExecutorLogMessage extends ProtocolEnvelope {
  type: "log";
  payload: LogEntry;
}

export interface ExecutorSuccessMessage extends ProtocolEnvelope {
  type: "success";
  payload: {
    duration: number;
    returnValue?: string;
  };
}

export interface ExecutorErrorMessage extends ProtocolEnvelope {
  type: "error";
  payload: {
    duration: number;
    error: ExecutionError;
  };
}

export interface ExecutorStoppedMessage extends ProtocolEnvelope {
  type: "stopped";
}

export type ExecutorToHostMessage =
  | ExecutorReadyMessage
  | ExecutorLogMessage
  | ExecutorSuccessMessage
  | ExecutorErrorMessage
  | ExecutorStoppedMessage;

const LOG_LEVELS = new Set<LogLevel>([
  "log",
  "info",
  "warn",
  "error",
  "system",
]);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isFiniteNonNegativeNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value) && value >= 0;
}

function isBoundedString(value: unknown, maxLength: number): value is string {
  return typeof value === "string" && value.length <= maxLength;
}

function isBoundedUtf8String(value: unknown, maxBytes: number): value is string {
  return typeof value === "string" && utf8ByteLength(value) <= maxBytes;
}

function isExecutionError(value: unknown): value is ExecutionError {
  if (!isRecord(value)) return false;
  return (
    isBoundedString(value.name, 128) &&
    isBoundedString(value.message, 16_384) &&
    (value.stack === undefined || isBoundedString(value.stack, 32_768)) &&
    (value.line === undefined || isFiniteNonNegativeNumber(value.line)) &&
    (value.column === undefined || isFiniteNonNegativeNumber(value.column))
  );
}

function isLogEntry(value: unknown, limits: RunnerLimits): value is LogEntry {
  if (!isRecord(value)) return false;
  if (!isBoundedString(value.id, 128)) return false;
  if (typeof value.level !== "string" || !LOG_LEVELS.has(value.level as LogLevel)) {
    return false;
  }
  if (!isBoundedUtf8String(value.formattedText, limits.maxLogMessageBytes)) return false;
  if (!isFiniteNonNegativeNumber(value.timestamp)) return false;
  return (
    Array.isArray(value.messages) &&
    value.messages.length <= 20 &&
    value.messages.every((message) =>
      isBoundedUtf8String(message, limits.maxLogMessageBytes)
    )
  );
}

export function resolveRunnerLimits(options?: RunnerOptions): RunnerLimits {
  const clamp = (value: number | undefined, key: keyof RunnerLimits) => {
    const fallback = DEFAULT_RUNNER_LIMITS[key];
    if (typeof value !== "number" || !Number.isFinite(value)) return fallback;
    const bounds = ABSOLUTE_RUNNER_LIMITS[key];
    return Math.min(bounds.max, Math.max(bounds.min, Math.floor(value)));
  };

  return {
    timeoutMs: clamp(options?.timeoutMs, "timeoutMs"),
    maxCodeSizeBytes: clamp(options?.maxCodeSizeBytes, "maxCodeSizeBytes"),
    maxLogEntries: clamp(options?.maxLogEntries, "maxLogEntries"),
    maxLogMessageBytes: clamp(
      options?.maxLogMessageBytes,
      "maxLogMessageBytes"
    ),
    maxOutputBytes: clamp(options?.maxOutputBytes, "maxOutputBytes"),
  };
}

export function utf8ByteLength(value: string): number {
  if (typeof TextEncoder !== "undefined") {
    return new TextEncoder().encode(value).byteLength;
  }
  return unescape(encodeURIComponent(value)).length;
}

export function isExecutorMessage(
  value: unknown,
  expected: {
    channelId: string;
    executionId: string;
    limits: RunnerLimits;
  }
): value is ExecutorToHostMessage {
  if (!isRecord(value)) return false;
  if (value.protocol !== RUNNER_PROTOCOL) return false;
  if (value.channelId !== expected.channelId) return false;
  if (typeof value.type !== "string") return false;

  if (value.type === "ready") {
    return value.executionId === "";
  }

  if (value.executionId !== expected.executionId) return false;

  if (value.type === "stopped") return true;
  if (!isRecord(value.payload)) return false;

  if (value.type === "log") {
    return isLogEntry(value.payload, expected.limits);
  }

  if (value.type === "success") {
    return (
      isFiniteNonNegativeNumber(value.payload.duration) &&
      (value.payload.returnValue === undefined ||
        isBoundedUtf8String(
          value.payload.returnValue,
          expected.limits.maxLogMessageBytes
        ))
    );
  }

  if (value.type === "error") {
    return (
      isFiniteNonNegativeNumber(value.payload.duration) &&
      isExecutionError(value.payload.error)
    );
  }

  return false;
}

export function createProtocolMessage<T extends HostToExecutorMessage>(
  message: T
): T {
  return message;
}
