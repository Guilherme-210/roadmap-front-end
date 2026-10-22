import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHeader } from "@/components/ui";
import mockData from "./mock.json";

export const metadata: Metadata = mockData.metadata;

export default function JavaScriptTopicsPage() {
  const { breadcrumbs, header, topics, quickActions } = mockData;

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Breadcrumbs de Navegação */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Cabeçalho da Documentação de JavaScript */}
      <div className="w-full rounded-2xl border border-border-subtle bg-card p-6 sm:p-8 shadow-sm">
        <PageHeader
          badge={header.badge}
          title={header.title}
          description={header.description}
        />
      </div>

      {/* Seção de Listagem de Tópicos da Linguagem */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-foreground">
              Tópicos &amp; Métodos Documentados
            </h2>
            <p className="text-xs sm:text-sm text-text-muted mt-0.5">
              Cada tópico contém o resumo conceitual, assinatura, boas práticas e laboratório com colapse no topo.
            </p>
          </div>
          <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
            {topics.length} tópicos
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="rounded-2xl border border-border-subtle bg-card p-6 space-y-4 transition-all hover:border-amber-500/50 hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    {topic.badge}
                  </span>
                  <span className="text-[11px] font-mono text-text-muted">
                    {topic.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground font-mono">
                    {topic.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-text-muted leading-relaxed">
                    {topic.summary}
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-muted/60 font-mono text-xs text-foreground overflow-x-auto border border-border-subtle">
                  {topic.signature}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {topic.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded bg-muted text-text-muted"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border-subtle">
                <Link
                  href={topic.href}
                  className="inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-sm transition-all hover:scale-[1.01]"
                >
                  <span>{topic.cta}</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ações Rápidas de Navegação */}
      <section className="rounded-2xl border border-border-subtle bg-card/60 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-semibold text-foreground">
            Aprofunde seus estudos teóricos e práticos
          </h4>
          <p className="text-xs text-text-muted mt-0.5">
            Acompanhe a grade curricular com 28 aulas ou utilize o editor livre.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={quickActions.courseLink.href}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-muted hover:bg-muted/80 text-foreground border border-border-subtle transition-colors"
          >
            <span>{quickActions.courseLink.label}</span>
          </Link>
          <Link
            href={quickActions.playgroundLink.href}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border border-amber-500/30 transition-colors"
          >
            <span>{quickActions.playgroundLink.label}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
