import type { Metadata } from "next";
import Link from "next/link";
import { CodePlayground } from "@/components/playground";
import { booleanExample } from "@/data/examples/javascript/boolean";

export const metadata: Metadata = {
  title: "Aula 01: Booleans & Coerção de Tipos",
  description:
    "Estudo prático e interativo sobre Booleans, valores Truthy/Falsy, coerção implícita e operadores lógicos em JavaScript.",
};

export default function BooleanPage() {
  const example = booleanExample;

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Breadcrumbs de Navegação */}
      <nav aria-label="Navegação estrutural" className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
        <Link href="/" className="hover:text-[var(--foreground)] transition-colors">
          Início
        </Link>
        <span>/</span>
        <span className="text-[var(--text-muted)]">Aulas</span>
        <span>/</span>
        <span className="text-[var(--text-muted)]">JavaScript</span>
        <span>/</span>
        <span className="text-amber-500 font-medium">Booleans &amp; Coerção</span>
      </nav>

      {/* Cartão de Cabeçalho da Aula */}
      <div className="w-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-6 sm:p-8 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-500">
          <span>Aula 01 &bull; Tipos Primitivos</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--foreground)]">
          Estudo sobre Booleans &amp; Coerção de Tipos
        </h1>

        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed max-w-3xl">
          Nesta aula exploramos os conceitos de truthy, falsy, operadores lógicos (<code className="text-amber-500 font-mono">&amp;&amp;</code>, <code className="text-amber-500 font-mono">||</code>, <code className="text-amber-500 font-mono">??</code>) e as regras de conversão do motor JavaScript.
        </p>

        {/* Resumo Rápido de Falsy vs Truthy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--muted)]/40 p-4 font-mono text-xs sm:text-sm space-y-2">
            <div className="text-[var(--text-muted)] font-semibold font-sans uppercase text-[11px] tracking-wider text-rose-500">
              Valores Falsy (Convertem para false):
            </div>
            <div className="text-[var(--foreground)]">
              <span className="text-purple-400">Boolean</span>(<span className="text-amber-500">{`""`}</span>) === <span className="text-blue-400">false</span>
            </div>
            <div className="text-[var(--foreground)]">
              <span className="text-purple-400">Boolean</span>(<span className="text-amber-500">0</span>) === <span className="text-blue-400">false</span>
            </div>
            <div className="text-[var(--foreground)]">
              <span className="text-purple-400">Boolean</span>(<span className="text-amber-500">null</span>) === <span className="text-blue-400">false</span>
            </div>
            <div className="text-[var(--foreground)]">
              <span className="text-purple-400">Boolean</span>(<span className="text-amber-500">undefined</span>) === <span className="text-blue-400">false</span>
            </div>
          </div>

          <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--muted)]/40 p-4 font-mono text-xs sm:text-sm space-y-2">
            <div className="text-[var(--text-muted)] font-semibold font-sans uppercase text-[11px] tracking-wider text-emerald-500">
              Pegadinhas Truthy (Convertem para true):
            </div>
            <div className="text-[var(--foreground)]">
              <span className="text-purple-400">Boolean</span>(<span className="text-amber-500">{`"0"`}</span>) === <span className="text-blue-400">true</span>
            </div>
            <div className="text-[var(--foreground)]">
              <span className="text-purple-400">Boolean</span>(<span className="text-amber-500">{`"false"`}</span>) === <span className="text-blue-400">true</span>
            </div>
            <div className="text-[var(--foreground)]">
              <span className="text-purple-400">Boolean</span>(<span className="text-amber-500">[]</span>) === <span className="text-blue-400">true</span>
            </div>
            <div className="text-[var(--foreground)]">
              <span className="text-purple-400">Boolean</span>(<span className="text-amber-500">&#123;&#125;</span>) === <span className="text-blue-400">true</span>
            </div>
          </div>
        </div>
      </div>

      {/* Seção do Playground Interativo */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              Playground Interativo
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Modifique o código abaixo e clique em <strong>Executar</strong> (ou use <kbd className="px-1.5 py-0.5 rounded bg-[var(--muted)] text-[var(--foreground)] border border-[var(--border-subtle)] font-mono text-xs">Ctrl + Enter</kbd>) para testar os resultados no console.
            </p>
          </div>
        </div>

        <CodePlayground
          initialCode={example.initialCode}
          language={example.language}
          title={example.title}
          description={example.description}
          height="420px"
          layout="split"
        />
      </section>

      {/* Dicas e Detalhes da Aula */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-4 space-y-2">
          <div className="text-amber-500 font-semibold text-sm">
            Coerção Estrita (===)
          </div>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            Prefira sempre o comparador estrito <code className="text-amber-500 font-mono">===</code> ao comparador frouxo <code className="text-amber-500 font-mono">==</code> para evitar conversões implícitas imprevisíveis.
          </p>
        </div>

        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-4 space-y-2">
          <div className="text-amber-500 font-semibold text-sm">
            Atalho Duplo NOT (!!)
          </div>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            O operador <code className="text-amber-500 font-mono">!!valor</code> é um atalho idiomático amplamente usado em JavaScript para converter qualquer valor em booleano estrito.
          </p>
        </div>

        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-4 space-y-2">
          <div className="text-amber-500 font-semibold text-sm">
            Diferença entre || e ??
          </div>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed">
            O operador <code className="text-amber-500 font-mono">||</code> avalia falsy (incluindo <code className="font-mono">0</code> e <code className="font-mono">&quot;&quot;</code>), enquanto <code className="text-amber-500 font-mono">??</code> só considera <code className="font-mono">null</code> ou <code className="font-mono">undefined</code>.
          </p>
        </div>
      </div>
    </div>
  );
}
