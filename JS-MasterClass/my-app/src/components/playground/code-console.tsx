"use client";

import { useState } from "react";
import type { CodeConsoleProps } from "@/types/playground";
import type { LogLevel } from "@/types/runner";

const LEVEL_STYLES: Record<
  LogLevel,
  {
    container: string;
    badge: string;
    icon: string;
    label: string;
  }
> = {
  log: {
    container: "text-foreground border-l-2 border-slate-400/30 pl-3",
    badge: "bg-slate-500/10 text-text-muted border-slate-500/20",
    icon: "log",
    label: "LOG",
  },
  info: {
    container: "text-sky-300 border-l-2 border-sky-500/60 bg-sky-500/5 pl-3 py-1 rounded-r",
    badge: "bg-sky-500/20 text-sky-400 border-sky-500/30",
    icon: "info",
    label: "INFO",
  },
  warn: {
    container: "text-amber-300 border-l-2 border-amber-500/70 bg-amber-500/5 pl-3 py-1 rounded-r",
    badge: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    icon: "warn",
    label: "WARN",
  },
  error: {
    container: "text-rose-300 border-l-2 border-rose-500/80 bg-rose-500/10 pl-3 py-1.5 rounded-r",
    badge: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    icon: "error",
    label: "ERRO",
  },
  system: {
    container: "text-purple-300 border-l-2 border-purple-500/60 bg-purple-500/5 pl-3 py-1 rounded-r",
    badge: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    icon: "system",
    label: "SISTEMA",
  },
};

function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3,
  });
}

export function CodeConsole({
  logs,
  isRunning = false,
  error = null,
  onClear,
  executionTimeMs = null,
  maxHeight = "350px",
  className = "",
}: CodeConsoleProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (logs.length === 0) return;
    const text = logs
      .map((entry) => `[${formatTimestamp(entry.timestamp)}] [${entry.level.toUpperCase()}] ${entry.formattedText}`)
      .join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback gracioso caso clipboard não esteja disponível
    }
  };

  return (
    <div
      className={`flex flex-col w-full rounded-xl border border-border-subtle bg-card shadow-xs overflow-hidden transition-colors duration-200 ${className}`}
      role="region"
      aria-label="Console de saída de código"
    >
      {/* Barra de Cabeçalho do Console */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-muted/50 border-b border-border-subtle">
        <div className="flex items-center gap-2">
          {/* Ícone de Terminal */}
          <svg
            className="w-4 h-4 text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-xs font-semibold tracking-wide uppercase text-foreground">
            Console
          </span>

          {logs.length > 0 && (
            <span className="px-1.5 py-0.5 text-[10px] font-mono font-medium rounded-full bg-card text-text-muted border border-border-subtle">
              {logs.length} {logs.length === 1 ? "saída" : "saídas"}
            </span>
          )}

          {executionTimeMs !== null && !isRunning && (
            <span
              className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
              title="Tempo total de execução"
            >
              <span>⚡</span>
              <span>{executionTimeMs}ms</span>
            </span>
          )}
        </div>

        {/* Ações do Console */}
        <div className="flex items-center gap-2">
          {isRunning && (
            <div className="flex items-center gap-1.5 text-xs text-amber-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-[11px]">Executando...</span>
            </div>
          )}

          {logs.length > 0 && (
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1 px-2 py-1 text-xs text-text-muted hover:text-foreground rounded hover:bg-card transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 cursor-pointer"
              title="Copiar todas as saídas"
              aria-label="Copiar saídas do console"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>{copied ? "Copiado!" : "Copiar"}</span>
            </button>
          )}

          {onClear && (
            <button
              type="button"
              onClick={onClear}
              disabled={logs.length === 0}
              className={`p-1 rounded text-text-muted hover:text-foreground hover:bg-card transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 ${
                logs.length === 0 ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
              }`}
              title="Limpar console"
              aria-label="Limpar console"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Área de Visualização dos Logs */}
      <div
        style={{ minHeight: "180px", maxHeight }}
        className="p-4 overflow-y-auto font-mono text-xs leading-relaxed space-y-2 bg-card"
        role="log"
        aria-live="polite"
      >
        {/* Estado Vazio */}
        {logs.length === 0 && !isRunning && !error && (
          <div className="flex flex-col items-center justify-center h-full min-h-[160px] text-center text-text-muted">
            <svg
              className="w-8 h-8 mb-2 text-[var(--border-subtle)] stroke-[1.5]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 17l6-6-6-6m8 14h8"
              />
            </svg>
            <p className="font-medium text-xs text-foreground/80">
              Nenhuma saída gerada ainda
            </p>
            <p className="text-[11px] mt-1 max-w-xs text-text-muted">
              Clique no botão <span className="font-semibold text-amber-500">Executar</span> ou pressione{" "}
              <kbd className="px-1 py-0.5 rounded bg-muted border border-border-subtle text-[10px]">
                Ctrl+Enter
              </kbd>{" "}
              para testar o código.
            </p>
          </div>
        )}

        {/* Estado de Carregamento inicial quando nenhum log foi recebido ainda */}
        {isRunning && logs.length === 0 && (
          <div className="flex items-center justify-center h-full min-h-[160px] text-amber-500 gap-2">
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            <span className="text-xs font-sans font-medium">
              Executando no sandbox descartável...
            </span>
          </div>
        )}

        {/* Lista de Saídas de Log */}
        {logs.map((entry) => {
          const style = LEVEL_STYLES[entry.level] || LEVEL_STYLES.log;

          return (
            <div
              key={entry.id}
              className={`flex flex-col sm:flex-row items-start sm:items-baseline gap-2 transition-opacity ${style.container}`}
            >
              <div className="flex items-center gap-1.5 shrink-0 select-none">
                <span className="text-[10px] text-text-muted opacity-60">
                  {formatTimestamp(entry.timestamp)}
                </span>
                <span
                  className={`px-1.5 py-0.2 rounded text-[9px] font-bold border tracking-wider ${style.badge}`}
                >
                  {style.label}
                </span>
              </div>

              <div className="flex-1 overflow-x-auto whitespace-pre-wrap break-words w-full">
                {entry.formattedText}
              </div>
            </div>
          );
        })}

        {error && !logs.some((entry) =>
          entry.level === "error" && entry.formattedText.includes(error.message)
        ) && (
          <div className="text-rose-300 border-l-2 border-rose-500/80 bg-rose-500/10 pl-3 py-1.5 rounded-r">
            <span className="font-semibold">{error.name}:</span>{" "}
            <span>{error.message}</span>
          </div>
        )}
      </div>
    </div>
  );
}
