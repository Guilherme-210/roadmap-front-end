import type { Metadata } from "next";
import {
  Breadcrumbs,
  PageHeader,
  FeatureCardsGrid,
  LessonNavigation,
  type FeatureCardItem,
} from "@/components/ui";
import { CodePlayground } from "@/components/playground";
import mockData from "./mock.json";

export const metadata: Metadata = mockData.metadata;

interface SnippetData {
  language: string;
  code: string;
  caption?: string;
}

export default function LessonPage() {
  const {
    breadcrumbs,
    header,
    topics,
    keyTakeaways,
    codeSnippet,
    navigationFooter,
  } = mockData;

  const snippet = codeSnippet as unknown as SnippetData | null;

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Breadcrumbs de Navegação */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Cartão de Cabeçalho da Aula */}
      <div className="w-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-6 sm:p-8 shadow-sm space-y-6">
        <PageHeader
          badge={header.badge}
          title={header.title}
          description={header.description}
        />

        {/* Tópicos Abordados */}
        {topics && topics.length > 0 && (
          <div className="pt-2 border-t border-[var(--border-subtle)] space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-500">
              Tópicos Abordados na Aula
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {topics.map((topic: string, idx: number) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--foreground)]"
                >
                  <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Pontos Chave da Aula (se houver) */}
      {keyTakeaways && keyTakeaways.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)]">
            Conceitos Essenciais
          </h3>
          <FeatureCardsGrid
            cards={keyTakeaways as FeatureCardItem[]}
            columns={keyTakeaways.length > 2 ? 3 : 2}
          />
        </section>
      )}

      {/* Exemplo de Código & Playground Interativo com Colapse */}
      {snippet && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-[var(--foreground)]">
                Laboratório Prático da Aula
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                {snippet.caption ||
                  "Experimente e modifique os trechos de código discutidos nesta aula."}
              </p>
            </div>
          </div>

          <CodePlayground
            initialCode={snippet.code}
            language={snippet.language || "javascript"}
            title={`Playground • ${header.title}`}
            description={snippet.caption}
            height="380px"
            layout="split"
            collapsible={true}
            defaultOpen={false}
          />
        </section>
      )}

      {/* Espaço Preparado para Conteúdo em Markdown (.md) */}
      <section className="w-full rounded-2xl border border-dashed border-[var(--border-subtle)] bg-[var(--muted)]/20 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
            .md Slot
          </span>
          <h3 className="text-sm sm:text-base font-bold text-[var(--foreground)]">
            Anotações & Conteúdo Detalhado da Aula
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
          Esta seção está estruturada para receber as notas em Markdown (<strong>.md</strong>) escritas durante o acompanhamento da aula de Rodrigo Branas.
        </p>

        <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border-subtle)] text-xs text-[var(--text-muted)] font-mono space-y-1">
          <p className="text-amber-500 font-semibold">{"// Estrutura da aula:"}</p>
          <p>- Título: {header.title}</p>
          <p>- Módulo: {header.badge}</p>
        </div>
      </section>

      {/* Navegação Sequencial entre Lições */}
      <LessonNavigation
        previous={navigationFooter.previous}
        next={navigationFooter.next}
      />
    </div>
  );
}
