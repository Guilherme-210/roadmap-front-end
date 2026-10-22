import type { Metadata } from "next";
import { CodePlayground } from "@/components/playground";
import {
  Breadcrumbs,
  PageHeader,
  FeatureCardsGrid,
  LessonNavigation,
  CoercionCard,
  type FeatureCardItem,
} from "@/components/ui";
import booleanMock from "./mock.json";

export const metadata: Metadata = booleanMock.metadata;

export default function BooleanLessonPage() {
  const {
    breadcrumbs,
    header,
    primitiveIntro,
    wrapperTrapSection,
    coercionSection,
    falsyCard,
    truthyCard,
    playgroundSection,
    playgroundCode,
    tips,
    navigationFooter,
  } = booleanMock;

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      {/* Breadcrumbs de Navegação */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Cartão de Cabeçalho da Aula */}
      <div className="w-full rounded-2xl border border-border-subtle bg-card p-6 sm:p-8 shadow-sm space-y-4">
        <PageHeader
          badge={header.badge}
          title={header.title}
          description={header.description}
        />
      </div>

      {/* Seção 1: O Tipo Primitivo Booleano */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {primitiveIntro.title}
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed">
            {primitiveIntro.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {primitiveIntro.points.map((point: string, idx: number) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-border-subtle bg-muted/40 flex items-start gap-2.5 text-xs sm:text-sm text-foreground"
            >
              <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                ✓
              </span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 2: A Armadilha do Objeto Wrapper new Boolean() */}
      <section className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
              Atenção • Armadilha Crítica
            </span>
            <span className="text-xs text-text-muted font-mono">
              new Boolean() vs Boolean()
            </span>
          </div>
          <h3 className="text-xl font-bold text-foreground">
            {wrapperTrapSection.title}
          </h3>
          <p className="text-sm font-semibold text-rose-400">
            {wrapperTrapSection.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            {wrapperTrapSection.description}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-card border border-rose-500/20 text-xs sm:text-sm text-foreground leading-relaxed">
          <strong className="text-rose-400">Por que isso acontece? </strong>
          {wrapperTrapSection.dangerExplanation}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wrapperTrapSection.examples.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-card border border-border-subtle space-y-2"
            >
              <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider block">
                {item.caption}
              </span>
              <pre className="font-mono text-xs text-amber-400 overflow-x-auto p-3 rounded-lg bg-muted/60">
                {item.code}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 3: Coerção e Tabela Canônica Truthy vs Falsy */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            Tabela Canônica de Coerção: Falsy vs Truthy
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Em JavaScript, exatamente <strong>6 valores fundamentais</strong> avaliam para{" "}
            <code className="text-rose-400 font-mono font-bold">false</code>. Todos os outros valores da linguagem avaliam para{" "}
            <code className="text-emerald-400 font-mono font-bold">true</code>, incluindo objetos vazios e arrays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CoercionCard
            title={falsyCard.title}
            items={falsyCard.items}
            variant="rose"
          />
          <CoercionCard
            title={truthyCard.title}
            items={truthyCard.items}
            variant="emerald"
          />
        </div>
      </section>

      {/* Seção 4: Formas de Conversão e Métodos */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {coercionSection.title}
          </h2>
          <p className="text-sm text-text-muted">
            {coercionSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {coercionSection.methods.map((method, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border-subtle bg-card p-5 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  {method.badge}
                </span>
                <h4 className="text-sm font-bold text-foreground">
                  {method.name}
                </h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  {method.description}
                </p>
              </div>

              <pre className="font-mono text-[11px] text-foreground bg-muted/50 p-2.5 rounded-lg overflow-x-auto border border-border-subtle">
                {method.example}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 5: Playground Interativo com Colapse no Topo */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {playgroundSection.title}
          </h2>
          <p className="text-xs sm:text-sm text-text-muted">
            {playgroundSection.description}
          </p>
        </div>

        <CodePlayground
          initialCode={playgroundCode}
          language="javascript"
          title={`Playground • ${header.title}`}
          description={header.badge}
          height="420px"
          layout="split"
          collapsible={true}
          defaultOpen={true}
        />
      </section>

      {/* Seção 6: Boas Práticas e Recomendações */}
      <section className="space-y-4 pt-2">
        <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted">
          Boas Práticas de Engenharia
        </h3>
        <FeatureCardsGrid cards={tips as FeatureCardItem[]} columns={3} />
      </section>

      {/* Navegação Sequencial entre Lições */}
      <LessonNavigation
        previous={navigationFooter.previous}
        next={navigationFooter.next}
      />
    </div>
  );
}
