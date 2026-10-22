"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { runnerRegistry } from "@/lib/runner";
import type { CodePlaygroundProps } from "@/types/playground";
import type { ExecutionError, LogEntry, RunnerStatus } from "@/types/runner";
import { CodeConsole } from "./code-console";
import { CodeControls } from "./code-controls";
import { CodeEditor } from "./code-editor";

export function CodePlayground({
  initialCode,
  language = "javascript",
  title,
  description,
  isReadOnly = false,
  showControls = true,
  showConsole = true,
  height = "360px",
  layout = "split",
  autoRun = false,
  timeoutMs = 5000,
  maxCodeSizeBytes,
  maxLogEntries,
  maxLogMessageBytes,
  maxOutputBytes,
  onCodeChange,
  className = "",
  collapsible = false,
  defaultOpen = true,
}: CodePlaygroundProps) {
  const playgroundId = useId();
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [code, setCode] = useState(initialCode);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<ExecutionError | null>(null);
  const [executionTimeMs, setExecutionTimeMs] = useState<number | null>(null);
  const executionSequence = useRef(0);

  // Obtém o executor registrado para a linguagem configurada via RunnerRegistry
  const runner = runnerRegistry.get(language);
  const isExecutable = Boolean(runner && runner.isExecutable);

  // Sincroniza estado se a propriedade initialCode mudar externamente (padrão oficial React sem efeito)
  const [prevInitialCode, setPrevInitialCode] = useState(initialCode);
  if (initialCode !== prevInitialCode) {
    setPrevInitialCode(initialCode);
    setCode(initialCode);
  }

  // Limpeza de recursos e término de execuções ativas ao desmontar
  useEffect(() => {
    return () => {
      executionSequence.current += 1;
      runner?.stop?.();
    };
  }, [runner]);

  const handleCodeChange = useCallback(
    (newCode: string) => {
      setCode(newCode);
      onCodeChange?.(newCode);
    },
    [onCodeChange]
  );

  const handleRun = useCallback(async () => {
    if (!runner || !isExecutable || isRunning) return;
    const execution = ++executionSequence.current;

    // Conforme requisito: execução consecutiva sem misturar resultados antigos
    setLogs([]);
    setError(null);
    setIsRunning(true);
    setExecutionTimeMs(null);

    try {
      const result = await runner.run(code, {
        timeoutMs,
        maxCodeSizeBytes,
        maxLogEntries,
        maxLogMessageBytes,
        maxOutputBytes,
        onLog: (newEntry) => {
          if (execution !== executionSequence.current) return;
          setLogs((prev) => [...prev, newEntry]);
        },
        onStatusChange: (status: RunnerStatus) => {
          if (execution !== executionSequence.current) return;
          if (status === "completed" || status === "error" || status === "terminated") {
            setIsRunning(false);
          }
        },
      });

      if (execution !== executionSequence.current) return;
      setLogs(result.logs);
      setExecutionTimeMs(result.executionTimeMs);
      if (!result.success && result.error) {
        setError(result.error);
      }
    } catch (err) {
      if (execution !== executionSequence.current) return;
      const errObj: ExecutionError = {
        name: err instanceof Error ? err.name : "ExecutionError",
        message: err instanceof Error ? err.message : String(err),
      };
      setError(errObj);
    } finally {
      if (execution === executionSequence.current) setIsRunning(false);
    }
  }, [
    code,
    isExecutable,
    isRunning,
    maxCodeSizeBytes,
    maxLogEntries,
    maxLogMessageBytes,
    maxOutputBytes,
    runner,
    timeoutMs,
  ]);

  const handleStop = useCallback(() => {
    if (!runner) return;
    runner.stop?.();
    setIsRunning(false);
  }, [runner]);

  const handleClear = useCallback(() => {
    setLogs([]);
    setError(null);
    setExecutionTimeMs(null);
  }, []);

  const handleReset = useCallback(() => {
    setCode(initialCode);
    onCodeChange?.(initialCode);
  }, [initialCode, onCodeChange]);

  // Execução automática na inicialização caso habilitado
  const hasAutoRan = useRef(false);
  useEffect(() => {
    if (autoRun && !hasAutoRan.current && isExecutable) {
      hasAutoRan.current = true;
      handleRun();
    }
  }, [autoRun, handleRun, isExecutable]);

  const canReset = code !== initialCode;

  return (
    <section
      aria-labelledby={`playground-title-${playgroundId}`}
      className={`flex flex-col w-full rounded-2xl border border-subtle bg-card shadow-md overflow-hidden ${className}`}
    >
      {/* Cabeçalho do Playground (Suporta modo Colapsável quando requisitado em páginas de estudo) */}
      {collapsible ? (
        <header className="border-b border-border-subtle bg-card">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls={`playground-content-${playgroundId}`}
            className="w-full px-5 py-3.5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <div className="flex items-center gap-2.5">
                <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                <h3
                  id={`playground-title-${playgroundId}`}
                  className="text-sm sm:text-base font-bold text-foreground tracking-tight"
                >
                  {title || "Playground de Código Interativo"}
                </h3>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  {language}
                </span>
              </div>
              {description && (
                <span className="text-xs text-text-muted hidden md:inline-block">
                  &bull; {description}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-amber-500 select-none">
              <span>{isOpen ? "Recolher Playground" : "Expandir Playground"}</span>
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
        </header>
      ) : (
        (title || description) && (
          <header className="px-5 py-4 border-b border-border-subtle bg-card">
            {title && (
              <h3
                id={`playground-title-${playgroundId}`}
                className="text-base sm:text-lg font-bold text-foreground tracking-tight flex items-center gap-2"
              >
                <span>{title}</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  {language}
                </span>
              </h3>
            )}
            {description && (
              <p className="text-xs sm:text-sm text-text-muted mt-1">
                {description}
              </p>
            )}
          </header>
        )
      )}

      {/* Conteúdo do Playground: Controles, Editor e Console */}
      {(!collapsible || isOpen) && (
        <div id={`playground-content-${playgroundId}`}>
          {/* Barra de Controles de Execução */}
          {showControls && (
            <div className="p-3 border-b border-border-subtle bg-background/50">
              <CodeControls
                isRunning={isRunning}
                onRun={handleRun}
                onStop={handleStop}
                onClear={handleClear}
                onReset={handleReset}
                canReset={canReset}
                isReadOnly={isReadOnly}
                language={language}
                isExecutable={isExecutable}
              />
            </div>
          )}

          {/* Área Central: Editor e Console */}
          <div
            className={`p-3 sm:p-4 gap-4 ${
              layout === "split" && showConsole
                ? "grid grid-cols-1 lg:grid-cols-12"
                : "flex flex-col"
            }`}
          >
            {/* Painel do Editor */}
            <div
              className={`${
                layout === "split" && showConsole
                  ? "lg:col-span-7 flex flex-col"
                  : "w-full"
              }`}
            >
              <CodeEditor
                value={code}
                onChange={handleCodeChange}
                language={language}
                readOnly={isReadOnly}
                height={height}
                onRunShortcut={handleRun}
              />
            </div>

            {/* Painel do Console */}
            {showConsole && (
              <div
                className={`${
                  layout === "split"
                    ? "lg:col-span-5 flex flex-col mt-4 lg:mt-0"
                    : "w-full mt-2"
                }`}
              >
                <CodeConsole
                  logs={logs}
                  isRunning={isRunning}
                  error={error}
                  onClear={handleClear}
                  executionTimeMs={executionTimeMs}
                  maxHeight={height}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
