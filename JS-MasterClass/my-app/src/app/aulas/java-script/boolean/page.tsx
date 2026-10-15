import type { Metadata } from "next";
import { CodePlayground } from "@/components/playground";
import {
  Breadcrumbs,
  PageHeader,
  FeatureCardsGrid,
  LessonNavigation,
  CoercionCard,
} from "@/components/ui";
import { booleanExample } from "@/data/examples/javascript/boolean";
import booleanMock from "./mock.json";

export const metadata: Metadata = booleanMock.metadata;

export default function BooleanPage() {
  const example = booleanExample;

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-8">
      {/* Breadcrumbs de Navegação Componentizados */}
      <Breadcrumbs items={booleanMock.breadcrumbs} />

      {/* Cartão de Cabeçalho da Aula */}
      <div className="w-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-6 sm:p-8 shadow-sm space-y-4">
        <PageHeader
          badge={booleanMock.header.badge}
          title={booleanMock.header.title}
          description={
            <span>
              Nesta aula exploramos os conceitos de truthy, falsy, operadores lógicos (
              <code className="text-amber-500 font-mono">&amp;&amp;</code>,{" "}
              <code className="text-amber-500 font-mono">||</code>,{" "}
              <code className="text-amber-500 font-mono">??</code>) e as regras de conversão do motor JavaScript.
            </span>
          }
        />

        {/* Resumo Rápido de Falsy vs Truthy Componentizado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <CoercionCard
            title={booleanMock.falsyCard.title}
            items={booleanMock.falsyCard.items}
            variant="rose"
          />
          <CoercionCard
            title={booleanMock.truthyCard.title}
            items={booleanMock.truthyCard.items}
            variant="emerald"
          />
        </div>
      </div>

      {/* Seção do Playground Interativo com Colapse no Topo */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            {booleanMock.playgroundSection.title}
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            {booleanMock.playgroundSection.description}
          </p>
        </div>

        {/* Instância do CodePlayground no modo Colapsável */}
        <CodePlayground
          initialCode={example.initialCode}
          language={example.language}
          title={example.title}
          description={example.description}
          height="420px"
          layout="split"
          collapsible={true}
          defaultOpen={true}
        />
      </section>

      {/* Dicas e Detalhes da Aula Componentizados */}
      <div className="pt-2">
        <FeatureCardsGrid cards={booleanMock.tips} columns={3} />
      </div>

      {/* Navegação entre lições Componentizada */}
      <LessonNavigation
        previous={booleanMock.navigationFooter.previous}
        next={booleanMock.navigationFooter.next}
      />
    </div>
  );
}
