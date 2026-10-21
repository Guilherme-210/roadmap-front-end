import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHeader, FeatureCardsGrid, type FeatureCardItem } from "@/components/ui";
import mockData from "./mock.json";

export const metadata: Metadata = mockData.metadata;

export default function DocumentationLanguagesPage() {
  const { breadcrumbs, header, languages, documentationFeatures } = mockData;

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      {/* Breadcrumbs de Navegação */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Cabeçalho da Documentação Geral */}
      <div className="w-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-6 sm:p-8 shadow-sm">
        <PageHeader
          badge={header.badge}
          title={header.title}
          description={header.description}
        />
      </div>

      {/* Seção 1: Listagem de Linguagens Documentadas */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-[var(--foreground)]">
            Linguagens Documentadas
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
            Selecione uma linguagem para acessar sua árvore de tópicos, guias conceituais e exemplos executáveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languages.map((lang) => {
            const isAvailable = lang.status === "active";

            return (
              <div
                key={lang.id}
                className={`relative rounded-2xl border transition-all flex flex-col justify-between p-6 sm:p-7 ${
                  isAvailable
                    ? "border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-[var(--card-bg)] to-transparent hover:border-amber-500/60 shadow-sm"
                    : "border-[var(--border-subtle)] bg-[var(--card-bg)]/60 opacity-80"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                        isAvailable
                          ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                          : "bg-slate-500/10 text-slate-400 border-slate-500/20"
                      }`}
                    >
                      {isAvailable && (
                        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      )}
                      {lang.badge}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      {lang.id}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[var(--foreground)]">
                      {lang.name}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                      {lang.description}
                    </p>
                  </div>

                  {/* Tópicos em Destaque */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                      Tópicos em Destaque:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {lang.featuredTopics.map((topic, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--muted)]/70 text-[var(--foreground)] border border-[var(--border-subtle)]"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Grid de Estatísticas */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {lang.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-[var(--muted)]/40 border border-[var(--border-subtle)]"
                      >
                        <span className="block text-[10px] text-[var(--text-muted)]">
                          {stat.label}
                        </span>
                        <span className="block text-xs font-semibold text-[var(--foreground)] mt-0.5">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botão de Ação */}
                <div className="pt-6 mt-4 border-t border-[var(--border-subtle)]">
                  {isAvailable ? (
                    <Link
                      href={lang.href}
                      className="inline-flex w-full items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all hover:scale-[1.01]"
                    >
                      <span>{lang.cta}</span>
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
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="w-full py-2.5 rounded-xl bg-[var(--muted)] text-[var(--text-muted)] text-sm font-medium cursor-not-allowed border border-[var(--border-subtle)]"
                    >
                      {lang.cta}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Seção 2: Recursos e Diretrizes da Documentação */}
      <section className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
        <h2 className="text-xl font-bold text-[var(--foreground)]">
          Como a documentação está estruturada
        </h2>
        <FeatureCardsGrid
          cards={documentationFeatures as FeatureCardItem[]}
          columns={3}
        />
      </section>
    </div>
  );
}
