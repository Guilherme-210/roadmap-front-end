import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageHeader } from "@/components/ui";
import { SITE_MAP } from "@/config/navigation";
import mockData from "./mock.json";

export const metadata: Metadata = mockData.metadata;

export default function MapaDoSitePage() {
  const { breadcrumbs, header, sections } = mockData;

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Breadcrumbs de Navegação */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Cartão de Cabeçalho do Mapa do Site */}
      <div className="w-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-6 sm:p-8 shadow-sm space-y-4">
        <PageHeader
          badge={header.badge}
          title={header.title}
          description={header.description}
        />
      </div>

      {/* Visão Geral da Árvore de Navegação (Baseada em SITE_MAP) */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-bold text-[var(--foreground)]">
            Árvore de Navegação Principal & Subnavegações
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
            Cada seção principal do header possui seu próprio conjunto de subrotas e aulas vinculadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SITE_MAP.map((section) => (
            <div
              key={section.id}
              className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-6 space-y-4 shadow-sm"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                      Seção
                    </span>
                    {section.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                        {section.badge}
                      </span>
                    )}
                  </div>
                  <Link
                    href={section.href}
                    className="text-lg font-bold text-[var(--foreground)] hover:text-amber-500 transition-colors"
                  >
                    {section.label}
                  </Link>
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  {section.subItems.length} links
                </span>
              </div>

              {section.description && (
                <p className="text-xs text-[var(--text-muted)]">
                  {section.description}
                </p>
              )}

              {/* Subitens da Seção */}
              <div className="space-y-1.5 pt-1">
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Subnavegações disponíveis:
                </h4>
                <ul className="space-y-1 max-h-56 overflow-y-auto pr-2 divide-y divide-[var(--border-subtle)]/40">
                  {section.subItems.map((sub) => (
                    <li key={sub.id} className="pt-1.5 first:pt-0">
                      <Link
                        href={sub.href}
                        className="group flex items-center justify-between py-1 text-xs text-[var(--foreground)] hover:text-amber-500 transition-colors"
                      >
                        <span className="group-hover:translate-x-1 transition-transform">
                          {sub.label}
                        </span>
                        {sub.badge && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-[var(--muted)] text-[var(--text-muted)]">
                            {sub.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seções Temáticas Complementares */}
      <section className="space-y-4 pt-4 border-t border-[var(--border-subtle)]">
        <h2 className="text-lg font-bold text-[var(--foreground)]">
          Categorias Temáticas do Portal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sections.map((sec) => (
            <div
              key={sec.id}
              className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-5 space-y-3"
            >
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-500">
                  {sec.badge}
                </span>
                <h3 className="text-sm font-bold text-[var(--foreground)]">
                  {sec.title}
                </h3>
              </div>
              <p className="text-xs text-[var(--text-muted)]">
                {sec.description}
              </p>
              <ul className="space-y-1 text-xs">
                {sec.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-[var(--nav-link-color)] hover:text-amber-500 transition-colors line-clamp-1"
                    >
                      • {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

