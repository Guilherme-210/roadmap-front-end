/**
 * Tipos e contratos fundamentais para a camada de execução de código (CodeRunner).
 *
 * Esta arquitetura foi concebida para ser agnóstica de linguagem, permitindo
 * que novos executores (como TypeScript, Python via Pyodide, etc.) sejam adicionados
 * futuramente sem qualquer alteração na interface de usuário.
 */

export type SupportedLanguage = "javascript" | "typescript" | "python" | "html" | "css" | "json" | (string & {});

export type LogLevel = "log" | "info" | "warn" | "error" | "system";

export interface LogEntry {
  id: string;
  level: LogLevel;
  /** Argumentos já serializados. Nunca contém objetos vindos do executor. */
  messages: string[];
  formattedText: string;
  timestamp: number;
}

export interface ExecutionError {
  name: string;
  message: string;
  stack?: string;
  line?: number;
  column?: number;
}

export interface ExecutionResult {
  success: boolean;
  logs: LogEntry[];
  error?: ExecutionError | null;
  executionTimeMs: number;
  returnValue?: unknown;
}

export type RunnerStatus = "idle" | "running" | "completed" | "error" | "terminated";

export interface RunnerOptions {
  /**
   * Tempo máximo de execução em milissegundos antes do cancelamento automático.
   * Padrão recomendado: 5000ms.
   */
  timeoutMs?: number;

  /** Tamanho máximo do código UTF-8 aceito pelo executor. */
  maxCodeSizeBytes?: number;

  /** Quantidade máxima de entradas emitidas pelo console. */
  maxLogEntries?: number;

  /** Tamanho máximo de uma entrada de console já formatada. */
  maxLogMessageBytes?: number;

  /** Orçamento total, em bytes, para a saída de console. */
  maxOutputBytes?: number;

  /**
   * Callback invocado em tempo real a cada nova saída de log interceptada.
   */
  onLog?: (entry: LogEntry) => void;

  /**
   * Callback invocado quando o status do executor é alterado.
   */
  onStatusChange?: (status: RunnerStatus) => void;
}

/**
 * Contrato de execução (CodeRunner).
 * Qualquer implementação de executor de linguagem deve atender a esta interface.
 */
export interface CodeRunner {
  /**
   * Identificador da linguagem atendida por este executor.
   */
  readonly language: SupportedLanguage;

  /**
   * Indica se a linguagem suporta execução no ambiente atual.
   */
  readonly isExecutable: boolean;

  /**
   * Nome amigável do executor para exibição na UI.
   */
  readonly displayName?: string;

  /**
   * Executa o código fornecido e retorna o resultado estruturado.
   */
  run(code: string, options?: RunnerOptions): Promise<ExecutionResult>;

  /**
   * Interrompe imediatamente qualquer execução em andamento.
   */
  stop?(): void;

  /**
   * Libera recursos alocados (ex: workers, URLs criadas).
   */
  dispose?(): void;
}

