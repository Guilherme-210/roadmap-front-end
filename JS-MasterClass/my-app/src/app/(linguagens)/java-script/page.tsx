import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHeader } from "@/components/ui";
import mockData from "./mock.json";

export const metadata: Metadata = mockData.metadata;

export default function JavaScriptCoursesPage() {
  const { breadcrumbs, header, courseCard } = mockData;

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Breadcrumbs de Navegação */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Cabeçalho da Trilha de JavaScript */}
      <div className="w-full rounded-2xl border border-border-subtle bg-card p-6 sm:p-8 shadow-sm">
        <PageHeader
          badge={header.badge}
          title={header.title}
          description={header.description}
        />
      </div>

      {/* Cartão do Curso: JavaScript MasterClass do Rodrigo Branas */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">
          Cursos Disponíveis
        </h2>

        <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-[var(--card-bg)] to-transparent p-6 sm:p-8 transition-all hover:border-amber-500/50">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  {courseCard.badge}
                </span>
                <span className="text-xs text-text-muted font-medium">
                  {courseCard.instructor}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground">
                  {courseCard.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {courseCard.description}
                </p>
              </div>

              {/* Estatísticas Rápidas do Curso */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {courseCard.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-muted/50 border border-border-subtle"
                  >
                    <span className="block text-[11px] text-text-muted">
                      {stat.label}
                    </span>
                    <span className="block text-sm font-semibold text-foreground mt-0.5">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA de Acesso */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center md:items-end">
              <Link
                href={courseCard.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
              >
                <span>{courseCard.cta}</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
