"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef } from "react";
import type { OnMount } from "@monaco-editor/react";
import { useTheme } from "@/hooks/use-theme";
import type { CodeEditorProps } from "@/types/playground";

function EditorSkeleton({ height }: { height: string | number }) {
  return (
    <div
      style={{ height }}
      className="flex flex-col items-center justify-center w-full bg-[var(--card-bg)] border border-[var(--border-subtle)] rounded-xl animate-pulse p-4 text-[var(--text-muted)] text-sm"
      aria-label="Carregando editor de código..."
      role="status"
    >
      <div className="flex items-center gap-2 mb-2">
        <svg
          className="animate-spin h-5 w-5 text-amber-500"
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
        <span className="font-medium">Carregando editor Monaco...</span>
      </div>
      <div className="text-xs text-[var(--text-muted)]">
        Preparando realce de sintaxe e ambiente de edição
      </div>
    </div>
  );
}

// Carregamento dinâmico do Monaco Editor compatível com SSR e Next.js App Router
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => <EditorSkeleton height="350px" />,
});

export function CodeEditor({
  value,
  onChange,
  language = "javascript",
  readOnly = false,
  height = "350px",
  theme = "auto",
  onRunShortcut,
  className = "",
}: CodeEditorProps) {
  const currentAppTheme = useTheme();
  const onRunRef = useRef(onRunShortcut);

  useEffect(() => {
    onRunRef.current = onRunShortcut;
  }, [onRunShortcut]);

  // Determina o tema do Monaco com base nas preferências globais
  const resolvedTheme =
    theme === "auto"
      ? currentAppTheme === "dark"
        ? "vs-dark"
        : "light"
      : theme;

  const handleEditorMount: OnMount = useCallback((editor, monaco) => {
    // Configura o atalho de teclado Ctrl+Enter / Cmd+Enter para executar o código
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      onRunRef.current?.();
    });

    // Foco sutil e acessibilidade
    editor.updateOptions({
      tabSize: 2,
      minimap: { enabled: false },
      fontSize: 14,
      fontFamily: "'Fira Code', 'JetBrains Mono', Consolas, Menlo, monospace",
      fontLigatures: true,
      lineNumbers: "on",
      scrollBeyondLastLine: false,
      automaticLayout: true,
      wordWrap: "on",
      padding: { top: 12, bottom: 12 },
      smoothScrolling: true,
      cursorBlinking: "smooth",
      roundedSelection: true,
    });
  }, []);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] shadow-xs transition-colors duration-200 ${className}`}
      aria-label={`Editor de código para ${language}`}
    >
      <MonacoEditor
        height={height}
        language={language}
        value={value}
        onChange={(val) => onChange?.(val ?? "")}
        theme={resolvedTheme}
        options={{
          readOnly,
          domReadOnly: readOnly,
        }}
        onMount={handleEditorMount}
        loading={<EditorSkeleton height={height} />}
      />
    </div>
  );
}
