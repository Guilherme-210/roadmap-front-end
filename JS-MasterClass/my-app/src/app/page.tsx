import Link from "next/link";
import { BrandIcon } from "@/components/brand-icon";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Lado Esquerdo: Apresentação Principal */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Badge de status */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span>Do Básico aos Padrões Avançados</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] leading-[1.1]">
            Domine o{" "}
            <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              JavaScript Moderno
            </span>{" "}
            com Maestria
          </h1>

          {/* Subtítulo / Descrição */}
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
            Aprenda a fundo tipos primitivos, coerção, escopo léxico, closures,
            event loop, Promises, protótipos e arquitetura modular com exemplos
            práticos e exercícios do mundo real.
          </p>

          {/* Destaques rápidos */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[var(--text-muted)] pt-2">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Conteúdo Prático & Direto</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>TypeScript & Next.js Turbopack</span>
            </div>
          </div>

          {/* Botões de Ação (CTAs) */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/playground"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/25 hover:from-amber-400 hover:to-amber-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Abrir Playground Interativo</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <Link
              href="/javascript"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--muted)] hover:border-amber-500/40 transition-all"
            >
              <span>Documentação: Array.map()</span>
            </Link>
          </div>
        </div>

        {/* Lado Direito: Card Ilustrativo com o Novo Ícone */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-8 shadow-2xl backdrop-blur-sm transition-transform hover:-translate-y-1 duration-300">
            {/* Efeito sutil de brilho no topo do card */}
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

            <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-3">
                <BrandIcon size={44} />
                <div>
                  <h3 className="text-base font-bold text-[var(--foreground)]">JS MasterClass</h3>
                  <p className="text-xs text-[var(--text-muted)]">Módulo 01 &bull; Fundamentos</p>
                </div>
              </div>
              <span className="rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-500">
                Ativo
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--muted)]/50 p-4">
                <div className="text-xs font-mono text-[var(--text-muted)] mb-1">{"// Exemplo de código"}</div>
                <code className="text-xs sm:text-sm font-mono text-amber-500 block">
                  const isMastered = Boolean(deepUnderstanding);
                </code>
                <p className="text-xs text-[var(--text-muted)] mt-2">
                  Entenda exatamente o que o JavaScript avalia por trás dos panos.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="rounded-lg border border-[var(--border-subtle)] p-3 text-center">
                  <div className="text-xl font-bold text-amber-500">100%</div>
                  <div className="text-[11px] text-[var(--text-muted)] mt-0.5">Tipado & Modular</div>
                </div>
                <div className="rounded-lg border border-[var(--border-subtle)] p-3 text-center">
                  <div className="text-xl font-bold text-amber-500">Dark/Light</div>
                  <div className="text-[11px] text-[var(--text-muted)] mt-0.5">Suporte Nativo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
