import type { Metadata } from "next";
import { CodePlayground } from "@/components/playground";
import { getDefaultPlaygroundExample } from "@/data/examples";

export const metadata: Metadata = {
  title: "Playground Interativo",
  description:
    "Ambiente experimental com Monaco Editor e execução JavaScript em sandbox descartável.",
};

export default function PlaygroundPage() {
  const example = getDefaultPlaygroundExample();

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-6">
      {/* Cabeçalho da Página */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-500">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span>Sandbox experimental e descartável</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
          Playground JavaScript
        </h1>

        <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-3xl leading-relaxed">
          Experimente algoritmos, teste recursos assíncronos e inspecione a saída do console
          em tempo real. O código é executado por um Worker dentro de um iframe de origem opaca,
          permitindo interromper loops infinitos sem conceder acesso direto à origem da aplicação.
        </p>

        {/* Badges de recursos suportados */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="px-2.5 py-1 rounded-md bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--border-subtle)] font-medium">
            Linguagem: <strong className="text-amber-500">JavaScript (ESNext)</strong>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--border-subtle)] font-medium">
            Isolamento: <strong className="text-emerald-500">origem opaca + Worker</strong>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--border-subtle)] font-medium">
            Atalho: <strong className="font-mono text-amber-500">Ctrl + Enter</strong>
          </span>
        </div>
      </div>

      {/* Componente Playground Principal Reutilizável */}
      <div className="pt-2">
        <CodePlayground
          initialCode={example.initialCode}
          language={example.language}
          title={example.title}
          description={example.description}
          height="420px"
          layout="split"
        />
      </div>

      {/* Dicas e Informações Técnicas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-4 space-y-2">
          <div className="flex items-center gap-2 text-amber-500 font-semibold text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Execução Assíncrona</span>
          </div>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            Escreva <code className="text-amber-500 font-mono">await</code> diretamente no topo do seu código sem precisar envolver em funções IIFE.
          </p>
        </div>

        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-4 space-y-2">
          <div className="flex items-center gap-2 text-amber-500 font-semibold text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Segurança & Isolamento</span>
          </div>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            O executor usa origem opaca e bloqueio de rede. Este laboratório continua classificado para uso experimental/local, não para código público em produção.
          </p>
        </div>

        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-4 space-y-2">
          <div className="flex items-center gap-2 text-amber-500 font-semibold text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Controle de Loops Infinitos</span>
          </div>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            Se acidentalmente disparar um loop infinito, utilize o botão <strong>Interromper</strong> ou aguarde o timeout de 5 segundos.
          </p>
        </div>
      </div>
    </div>
  );
}

