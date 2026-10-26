import type { Metadata } from "next";
import { CodePlayground } from "@/components/playground";
import {
  Breadcrumbs,
  PageHeader,
  FeatureCardsGrid,
  LessonNavigation,
  type FeatureCardItem,
} from "@/components/ui";
import mockData from "./mock.json";

export const metadata: Metadata = mockData.metadata;

export default function RegExpLessonPage() {
  const {
    breadcrumbs,
    header,
    creationSection,
    methodsSection,
    metacharsSection,
    characterClassesSection,
    quantifiersSection,
    caseStudySection,
    playgroundSection,
    playgroundCode,
    keyTakeaways,
    navigationFooter,
  } = mockData;

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-10">
      {/* Breadcrumbs de Navegação Estrutural */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Cartão de Cabeçalho da Aula */}
      <div className="w-full rounded-2xl border border-border-subtle bg-card p-6 sm:p-8 shadow-sm space-y-4">
        <PageHeader
          badge={header.badge}
          title={header.title}
          description={header.description}
        />
      </div>

      {/* Seção 1: Criação de Expressões Regulares & Tipagem */}
      <section className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
              Sintaxe &amp; Instanciação
            </span>
            <span className="text-xs text-text-muted font-mono">
              typeof /padrao/ === &apos;object&apos;
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {creationSection.title}
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed">
            {creationSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {creationSection.types.map((type, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border-subtle bg-card p-5 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  {type.badge}
                </span>
                <h3 className="text-sm font-bold text-foreground font-mono">
                  {type.name}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {type.description}
                </p>
              </div>

              <pre className="font-mono text-xs text-amber-400 bg-muted/60 p-3 rounded-lg overflow-x-auto border border-border-subtle">
                {type.example}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 2: Métodos da RegExp API & String API */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {methodsSection.title}
          </h2>
          <p className="text-sm text-text-muted">
            {methodsSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {methodsSection.items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border-subtle bg-card p-4 space-y-2.5 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <code className="font-mono text-xs font-bold text-amber-400">
                    {item.method}
                  </code>
                </div>
                <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-muted text-text-muted">
                  retorno: {item.returnType}
                </span>
                <p className="text-xs text-text-muted leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              <pre className="font-mono text-[11px] text-foreground bg-muted/50 p-2.5 rounded-lg overflow-x-auto border border-border-subtle">
                {item.code}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 3: Metacaracteres de Posição & Escapes */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {metacharsSection.title}
          </h2>
          <p className="text-sm text-text-muted">
            {metacharsSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {metacharsSection.items.map((meta, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-border-subtle bg-card space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-500 font-mono font-bold text-sm flex items-center justify-center">
                    {meta.symbol}
                  </span>
                  <span className="text-[11px] font-semibold text-text-muted">
                    {meta.name}
                  </span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed pt-1">
                  {meta.rule}
                </p>
              </div>

              <pre className="font-mono text-[11px] text-foreground bg-muted/50 p-2 rounded-lg overflow-x-auto border border-border-subtle">
                {meta.example}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 4: Conjuntos, Intervalos e Classes Pré-definidas */}
      <section className="rounded-2xl border border-border-subtle bg-card p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-foreground">
            {characterClassesSection.title}
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            {characterClassesSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Intervalos e Negação em Colchetes */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-text-muted block">
              Intervalos &amp; Negações com Colchetes:
            </span>
            <div className="rounded-xl border border-border-subtle overflow-hidden divide-y divide-border-subtle text-xs">
              {characterClassesSection.ranges.map((r, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-muted/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                >
                  <code className="font-mono text-amber-400 font-bold">
                    {r.syntax}
                  </code>
                  <span className="text-text-muted sm:text-right">
                    {r.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Atalhos de Classes Pré-definidas */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-text-muted block">
              Atalhos Pré-definidos:
            </span>
            <div className="rounded-xl border border-border-subtle overflow-hidden divide-y divide-border-subtle text-xs">
              {characterClassesSection.shortcuts.map((sc, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-muted/20 flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2">
                    <code className="font-mono text-amber-400 font-bold px-1.5 py-0.5 rounded bg-muted">
                      {sc.symbol}
                    </code>
                    <span className="text-foreground font-medium">
                      {sc.name}
                    </span>
                  </div>
                  <code className="font-mono text-[11px] text-text-muted">
                    {sc.equivalent}
                  </code>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5: Quantificadores */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {quantifiersSection.title}
          </h2>
          <p className="text-sm text-text-muted">
            {quantifiersSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quantifiersSection.items.map((q, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-border-subtle bg-card space-y-2.5 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <code className="font-mono text-sm font-bold text-amber-400">
                    {q.quantifier}
                  </code>
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-muted text-text-muted">
                    {q.type}
                  </span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  {q.rule}
                </p>
              </div>

              <pre className="font-mono text-[11px] text-foreground bg-muted/50 p-2.5 rounded-lg overflow-x-auto border border-border-subtle">
                {q.example}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 6: Estudo de Caso da Aula: Validação e Captura de E-mails */}
      <section className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-card to-transparent p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
              Estudo de Caso Prático
            </span>
            <span className="text-xs text-text-muted font-mono">
              Validação &amp; Grupos de Captura
            </span>
          </div>
          <h3 className="text-xl font-bold text-foreground">
            {caseStudySection.title}
          </h3>
          <p className="text-sm font-semibold text-amber-400">
            {caseStudySection.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            {caseStudySection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudySection.steps.map((st, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-card border border-border-subtle space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-foreground">
                  {st.step}
                </h4>
                <pre className="font-mono text-xs text-amber-400 overflow-x-auto p-3.5 rounded-lg bg-muted/60">
                  {st.code}
                </pre>
              </div>
              <p className="text-[11px] text-text-muted italic leading-normal border-t border-border-subtle pt-2.5">
                💡 {st.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 7: Playground Interativo com Colapse no Topo */}
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

      {/* Seção 8: Conceitos Essenciais / Boas Práticas */}
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
