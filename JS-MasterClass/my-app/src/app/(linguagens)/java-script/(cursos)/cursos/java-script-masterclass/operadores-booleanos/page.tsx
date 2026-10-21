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
import mockData from "./mock.json";

export const metadata: Metadata = mockData.metadata;

export default function OperadoresBooleanosLessonPage() {
  const {
    breadcrumbs,
    header,
    equalitySection,
    relationalSection,
    logicalOperatorsSection,
    caseStudy,
    ternarySection,
    playgroundSection,
    playgroundCode,
    keyTakeaways,
    navigationFooter,
  } = mockData;

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

      {/* Seção 1: Operadores de Comparação: Igualdade Ampla vs Estrita */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
              Comparações &amp; Tipagem
            </span>
            <span className="text-xs text-text-muted font-mono">
              == vs ===
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {equalitySection.title}
          </h2>
          <p className="text-sm font-semibold text-rose-400">
            {equalitySection.subtitle}
          </p>
          <p className="text-sm text-text-muted leading-relaxed">
            {equalitySection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CoercionCard
            title={equalitySection.looseCard.title}
            items={equalitySection.looseCard.items}
            variant="rose"
          />
          <CoercionCard
            title={equalitySection.strictCard.title}
            items={equalitySection.strictCard.items}
            variant="emerald"
          />
        </div>

        {/* Desigualdade != vs !== */}
        <div className="pt-2">
          <CoercionCard
            title={equalitySection.inequalityCard.title}
            items={equalitySection.inequalityCard.items}
            variant="rose"
          />
        </div>
      </section>

      {/* Seção 2: Operadores Relacionais */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {relationalSection.title}
          </h2>
          <p className="text-sm text-text-muted">
            {relationalSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {relationalSection.items.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-border-subtle bg-card space-y-1.5"
            >
              <div className="font-mono text-sm text-purple-400 font-semibold">
                {item.expression} === <span className="text-emerald-400">{item.result}</span>
              </div>
              <p className="text-[11px] text-text-muted leading-normal">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 3: Operadores Lógicos & Curto-Circuito */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {logicalOperatorsSection.title}
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            {logicalOperatorsSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {logicalOperatorsSection.operators.map((op, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border-subtle bg-card p-5 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-foreground">
                    {op.name}
                  </h4>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 font-bold">
                    {op.symbol}
                  </span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  {op.rule}
                </p>
              </div>

              <pre className="font-mono text-[11px] text-foreground bg-muted/50 p-2.5 rounded-lg overflow-x-auto border border-border-subtle">
                {op.examples}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 4: Estudo de Caso da Aula: A Função generateSerial */}
      <section className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-[var(--card-bg)] to-transparent p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
              Estudo de Caso Prático
            </span>
            <span className="text-xs text-text-muted font-mono">
              generateSerial(max)
            </span>
          </div>
          <h3 className="text-xl font-bold text-foreground">
            {caseStudy.title}
          </h3>
          <p className="text-sm font-semibold text-amber-400">
            {caseStudy.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            {caseStudy.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {caseStudy.steps.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-card border border-border-subtle space-y-2.5 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold text-foreground block">
                  {item.step}
                </span>
                <pre className="font-mono text-xs text-amber-400 overflow-x-auto p-3 rounded-lg bg-muted/60">
                  {item.code}
                </pre>
              </div>
              <p className="text-[11px] text-text-muted italic leading-normal border-t border-border-subtle pt-2">
                💡 {item.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 5: Operador Condicional Ternário */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {ternarySection.title}
          </h2>
          <p className="text-sm text-text-muted">
            {ternarySection.description}
          </p>
          <div className="p-3 rounded-lg bg-muted/50 font-mono text-xs text-amber-400 inline-block border border-border-subtle">
            {ternarySection.syntax}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ternarySection.examples.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-border-subtle bg-card space-y-2"
            >
              <div className="font-mono text-xs text-foreground font-semibold">
                {item.code}
              </div>
              <div className="text-xs font-mono text-emerald-400">
                ➔ {item.result}
              </div>
              <p className="text-[11px] text-text-muted leading-normal">
                {item.explanation}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 6: Playground Interativo com Colapse no Topo */}
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

      {/* Seção 7: Conceitos Essenciais / Boas Práticas */}
      <section className="space-y-4 pt-2">
        <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted">
          Conceitos Essenciais &amp; Boas Práticas
        </h3>
        <FeatureCardsGrid
          cards={keyTakeaways as FeatureCardItem[]}
          columns={3}
        />
      </section>

      {/* Navegação Sequencial entre Lições */}
      <LessonNavigation
        previous={navigationFooter.previous}
        next={navigationFooter.next}
      />
    </div>
  );
}
