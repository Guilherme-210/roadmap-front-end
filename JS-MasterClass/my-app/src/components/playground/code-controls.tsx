"use client";

import type { CodeControlsProps } from "@/types/playground";

export function CodeControls({
  isRunning,
  onRun,
  onStop,
  onClear,
  onReset,
  canReset = false,
  isReadOnly = false,
  language = "javascript",
  isExecutable = true,
  className = "",
}: CodeControlsProps) {
  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-3 p-3 bg-card border border-border-subtle rounded-xl ${className}`}
      role="toolbar"
      aria-label="Controles de execução de código"
    >
      {/* Grupo Esquerdo: Ações Primárias (Executar / Interromper) */}
      <div className="flex items-center gap-2">
        {isRunning ? (
          <button
            type="button"
            onClick={onStop}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-lg shadow-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 cursor-pointer animate-pulse"
            aria-label="Interromper execução do código"
            title="Interromper código em execução (Stop)"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect x="6" y="6" width="12" height="12" rx="2" />
            </svg>
            <span>Interromper</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={onRun}
            disabled={!isExecutable}
            className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer ${
              isExecutable
                ? "bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-amber-500/20 active:scale-[0.98]"
                : "bg-muted text-text-muted cursor-not-allowed opacity-60"
            }`}
            aria-label={`Executar código (${isExecutable ? "Ctrl+Enter" : "Linguagem não executável"})`}
            title={
              isExecutable
                ? "Executar código (Ctrl + Enter)"
                : `Execução para ${language} ainda não disponível`
            }
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Executar</span>
            <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-[10px] font-mono bg-black/15 text-slate-950/80 rounded border border-black/10">
              Ctrl+↵
            </kbd>
          </button>
        )}

        {/* Status Indicator */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full bg-muted text-text-muted border border-border-subtle">
          <span
            className={`w-2 h-2 rounded-full ${
              isRunning
                ? "bg-amber-400 animate-ping"
                : isExecutable
                ? "bg-emerald-500"
                : "bg-slate-400"
            }`}
          />
          <span className="font-medium">
            {isRunning
              ? "Executando..."
              : isExecutable
              ? "Pronto"
              : "Somente Leitura"}
          </span>
        </div>
      </div>

      {/* Grupo Direito: Ações Auxiliares (Limpar Console / Restaurar Código) */}
      <div className="flex items-center gap-2">
        {onReset && !isReadOnly && (
          <button
            type="button"
            onClick={onReset}
            disabled={!canReset || isRunning}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-border-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
              canReset && !isRunning
                ? "bg-card text-foreground hover:bg-muted hover:text-amber-500 cursor-pointer"
                : "opacity-40 cursor-not-allowed text-text-muted"
            }`}
            aria-label="Restaurar código original do exemplo"
            title="Restaurar código inicial"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span className="hidden sm:inline">Restaurar</span>
          </button>
        )}

        <button
          type="button"
          onClick={onClear}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-foreground hover:text-amber-500 bg-card hover:bg-muted border border-border-subtle rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
          aria-label="Limpar console de saída"
          title="Limpar saídas do console"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          <span className="hidden sm:inline">Limpar</span>
        </button>
      </div>
    </div>
  );
}

