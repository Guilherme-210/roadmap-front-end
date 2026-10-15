import type { ExecutionError, LogEntry, SupportedLanguage } from "./runner";

export type PlaygroundLayout = "split" | "stacked";

export interface CodeEditorProps {
  value: string;
  onChange?: (value: string) => void;
  language?: string;
  readOnly?: boolean;
  height?: string | number;
  theme?: "vs-dark" | "light" | "auto";
  onRunShortcut?: () => void;
  className?: string;
}

export interface CodeConsoleProps {
  logs: LogEntry[];
  isRunning?: boolean;
  error?: ExecutionError | null;
  onClear?: () => void;
  executionTimeMs?: number | null;
  maxHeight?: string | number;
  className?: string;
}

export interface CodeControlsProps {
  isRunning: boolean;
  onRun: () => void;
  onStop: () => void;
  onClear: () => void;
  onReset?: () => void;
  canReset?: boolean;
  isReadOnly?: boolean;
  language?: SupportedLanguage;
  isExecutable?: boolean;
  className?: string;
}

export interface CodePlaygroundProps {
  initialCode: string;
  language?: SupportedLanguage;
  title?: string;
  description?: string;
  isReadOnly?: boolean;
  showControls?: boolean;
  showConsole?: boolean;
  height?: string | number;
  layout?: PlaygroundLayout;
  autoRun?: boolean;
  timeoutMs?: number;
  maxCodeSizeBytes?: number;
  maxLogEntries?: number;
  maxLogMessageBytes?: number;
  maxOutputBytes?: number;
  onCodeChange?: (code: string) => void;
  className?: string;
  collapsible?: boolean;
  defaultOpen?: boolean;
}

