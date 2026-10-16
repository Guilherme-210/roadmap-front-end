import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHeader, FeatureCardsGrid, type FeatureCardItem } from "@/components/ui";
import { JS_MASTERCLASS_COURSE } from "@/data/courses/javascript-masterclass";
import mockData from "./mock.json";

export const metadata: Metadata = mockData.metadata;

export default function JavaScriptMasterClassHubPage() {
  const { breadcrumbs, header, courseStats, startCourseLink, studyTips } = mockData;
  const { modules } = JS_MASTERCLASS_COURSE;

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Breadcrumbs de Navegação */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Cabeçalho do Curso */}
      <div className="w-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-6 sm:p-8 shadow-sm space-y-6">
        <PageHeader
          badge={header.badge}
          title={header.title}
          description={header.description}
        />

        {/* Estatísticas Rápidas do Curso */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {courseStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[var(--muted)]/50 border border-[var(--border-subtle)]"
            >
              <span className="block text-[11px] text-[var(--text-muted)] font-medium">
                {stat.label}
              </span>
              <span className="block text-base sm:text-lg font-bold text-[var(--foreground)] mt-0.5">
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Botão de Início Rápido */}
        <div className="pt-2 flex flex-wrap gap-4 items-center">
          <Link
            href={startCourseLink.href}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
          >
            <span>{startCourseLink.label}</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <span className="text-xs text-[var(--text-muted)]">
            Instrutor: <strong className="text-[var(--foreground)]">{JS_MASTERCLASS_COURSE.instructor}</strong>
          </span>
        </div>
      </div>

      {/* Dicas de Estudo e Metodologia */}
      <div className="pt-2">
        <FeatureCardsGrid cards={studyTips as FeatureCardItem[]} columns={3} />
      </div>

      {/* Grade de Módulos e Lições */}
      <section className="space-y-6 pt-4">
        <div>
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            Grade Curricular do Curso
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
            {JS_MASTERCLASS_COURSE.totalLessons} lições organizadas por módulos sequenciais do curso ministrado por Rodrigo Branas.
          </p>
        </div>

        <div className="space-y-6">
          {modules.map((mod, modIdx) => (
            <div
              key={mod.id}
              className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] overflow-hidden shadow-sm"
            >
              {/* Cabeçalho do Módulo */}
              <div className="p-5 sm:p-6 border-b border-[var(--border-subtle)] bg-[var(--muted)]/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
                    Módulo 0{modIdx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-[var(--foreground)]">
                    {mod.title.replace(/^Módulo \d+:\s*/, "")}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    {mod.description}
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--card-bg)] border border-[var(--border-subtle)] text-[var(--foreground)] self-start sm:self-center">
                  {mod.lessons.length} {mod.lessons.length === 1 ? "aula" : "aulas"}
                </span>
              </div>

              {/* Lista de Aulas do Módulo */}
              <div className="divide-y divide-[var(--border-subtle)]">
                {mod.lessons.map((lesson) => {
                  const lessonUrl = `/aulas/java-script/java-script-masterclass/${lesson.slug}`;
                  const isPdf = lesson.type === "pdf";

                  return (
                    <Link
                      key={lesson.id}
                      href={lessonUrl}
                      className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:px-6 gap-3 hover:bg-[var(--muted)]/40 transition-colors"
                    >
                      <div className="flex items-start sm:items-center gap-3.5">
                        {/* Indicador de Número */}
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--muted)] border border-[var(--border-subtle)] flex items-center justify-center text-xs font-bold font-mono text-[var(--foreground)] group-hover:border-amber-500/50 group-hover:text-amber-500 transition-colors">
                          {lesson.number}
                        </div>

                        {/* Título e Introdução Resumida */}
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm sm:text-base text-[var(--foreground)] group-hover:text-amber-500 transition-colors">
                              {lesson.title}
                            </span>
                            {/* Tag do Tipo: Vídeo ou PDF */}
                            <span
                              className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${
                                isPdf
                                  ? "bg-rose-500/10 text-rose-500 border border-rose-500/20"
                                  : "bg-blue-500/10 text-blue-500 border border-blue-500/20"
                              }`}
                            >
                              {isPdf ? (
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              ) : (
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              )}
                              {lesson.type}
                            </span>
                          </div>
                          <p className="text-xs text-[var(--text-muted)] line-clamp-1">
                            {lesson.introduction}
                          </p>
                        </div>
                      </div>

                      {/* Botão de Navegação / Ação */}
                      <div className="flex items-center justify-end gap-2 text-xs font-semibold text-amber-500 opacity-80 group-hover:opacity-100 transition-opacity">
                        <span>Acessar Aula</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
