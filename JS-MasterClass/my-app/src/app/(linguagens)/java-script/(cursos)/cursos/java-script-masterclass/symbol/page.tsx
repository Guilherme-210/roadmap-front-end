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

export default function SymbolLessonPage() {
  const {
    breadcrumbs,
    header,
    conceptSection,
    objectKeysSection,
    wellKnownSymbolsSection,
    caseStudySection,
    globalRegistrySection,
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

      {/* Seção 1: O Tipo Primitivo Symbol */}
      <section className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
              ECMAScript 2015 (ES6)
            </span>
            <span className="text-xs text-text-muted font-mono">
              typeof Symbol() === &apos;symbol&apos;
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {conceptSection.title}
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed">
            {conceptSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          {conceptSection.points.map((pt, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-border-subtle bg-card space-y-2"
            >
              <h3 className="text-sm font-bold text-amber-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                {pt.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {pt.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 2: Symbols como Chaves de Propriedades */}
      <section className="rounded-2xl border border-border-subtle bg-card p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-foreground">
            {objectKeysSection.title}
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            {objectKeysSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Tabela de Comportamento na Inspeção */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-text-muted block">
              Comportamento nas APIs de Objeto:
            </span>
            <div className="rounded-xl border border-border-subtle overflow-hidden divide-y divide-[var(--border-subtle)] text-xs">
              {objectKeysSection.behaviorPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-muted/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                >
                  <code className="font-mono text-amber-400 font-semibold">
                    {item.label}
                  </code>
                  <span className="text-text-muted sm:text-right">
                    {item.result}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Exemplo de Código */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-text-muted block">
              Exemplo Prático:
            </span>
            <pre className="font-mono text-xs text-foreground bg-muted/60 p-4 rounded-xl overflow-x-auto border border-border-subtle leading-relaxed">
              {objectKeysSection.exampleCode}
            </pre>
          </div>
        </div>
      </section>

      {/* Seção 3: Well-Known Symbols */}
      <section className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
              Metaprogramação Nativa
            </span>
            <span className="text-xs text-text-muted font-mono">
              Symbol.*
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {wellKnownSymbolsSection.title}
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            {wellKnownSymbolsSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wellKnownSymbolsSection.symbols.map((sym, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-border-subtle bg-card space-y-2.5 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <code className="font-mono text-xs font-bold text-amber-400">
                    {sym.name}
                  </code>
                </div>
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-muted text-text-muted">
                  {sym.purpose}
                </span>
                <p className="text-xs text-text-muted leading-relaxed pt-1">
                  {sym.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 4: Estudo de Caso da Aula: Manipulando Symbol.match */}
      <section className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-[var(--card-bg)] to-transparent p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
              Estudo de Caso Prático
            </span>
            <span className="text-xs text-text-muted font-mono">
              startsWith(/regex/) &amp; Symbol.match
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudySection.steps.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-card border border-border-subtle space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-foreground">
                  {item.step}
                </h4>
                <pre className="font-mono text-xs text-amber-400 overflow-x-auto p-3.5 rounded-lg bg-muted/60">
                  {item.code}
                </pre>
              </div>
              <p className="text-[11px] text-text-muted italic leading-normal border-t border-border-subtle pt-2.5">
                💡 {item.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 5: Registro Global de Símbolos */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {globalRegistrySection.title}
          </h2>
          <p className="text-sm text-text-muted">
            {globalRegistrySection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {globalRegistrySection.items.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-border-subtle bg-card space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <code className="font-mono text-sm font-bold text-amber-400 block">
                  {item.method}
                </code>
                <p className="text-xs text-text-muted leading-relaxed">
                  {item.explanation}
                </p>
              </div>

              <pre className="font-mono text-[11px] text-foreground bg-muted/50 p-3 rounded-lg overflow-x-auto border border-border-subtle">
                {item.example}
              </pre>
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
