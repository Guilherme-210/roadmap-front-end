import type { Metadata } from "next";
import { CodePlayground } from "@/components/playground";
import {
  Breadcrumbs,
  PageHeader,
  FeatureCardsGrid,
  LessonNavigation,
  type FeatureCardItem,
} from "@/components/ui";
import { getExampleById } from "@/data/examples";
import javascriptMock from "./mock.json";

export const metadata: Metadata = javascriptMock.metadata;

export default function JavaScriptDocumentationPage() {
  const example = getExampleById("javascript-array-map");

  if (!example) {
    return (
      <div className="p-8 text-center text-rose-500">
        Exemplo não encontrado no catálogo de dados.
      </div>
    );
  }

  const { conceptSection } = javascriptMock;

  return (
    <article className="flex-1 w-full max-w-5xl mx-auto px-4 py-10 sm:px-6 lg:px-8 space-y-10">
      {/* Breadcrumbs de Navegação Componentizados */}
      <Breadcrumbs items={javascriptMock.breadcrumbs} />

      {/* Cabeçalho da Documentação Componentizado */}
      <PageHeader
        badge={javascriptMock.header.badge}
        title={javascriptMock.header.title}
        description={javascriptMock.header.description}
        className="border-b border-[var(--border-subtle)] pb-8"
      />

      {/* Seção 1: Conceito e Assinatura */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--foreground)]">
          {conceptSection.title}
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          {conceptSection.description}
        </p>

        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-5 space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-500">
            {conceptSection.signature.heading}
          </h3>
          <div className="font-mono text-xs sm:text-sm bg-[var(--muted)]/60 p-3.5 rounded-lg overflow-x-auto text-[var(--foreground)]">
            {conceptSection.signature.code}
          </div>
          <ul className="text-xs sm:text-sm text-[var(--text-muted)] space-y-1.5 list-disc list-inside">
            {conceptSection.signature.parameters.map((param) => (
              <li key={param.name}>
                <strong className="text-[var(--foreground)]">{param.name}</strong>
                {param.optional && " (opcional)"}: {param.description}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Seção 2: Playground Interativo com Colapse no Topo */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            {javascriptMock.playgroundSection.title}
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            {javascriptMock.playgroundSection.description}
          </p>
        </div>

        {/* Instância do CodePlayground no modo Colapsável */}
        <CodePlayground
          initialCode={example.initialCode}
          language={example.language}
          title={example.title}
          description={example.description}
          height="400px"
          layout="split"
          collapsible={true}
          defaultOpen={true}
        />
      </section>

      {/* Seção 3: Boas Práticas e Armadilhas Comuns Componentizadas */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-bold text-[var(--foreground)]">
          Boas Práticas &amp; Armadilhas Frequentes
        </h2>

        <FeatureCardsGrid
          cards={javascriptMock.bestPractices as FeatureCardItem[]}
          columns={2}
        />
      </section>

      {/* Rodapé da aula / Próximos Passos Componentizado */}
      <LessonNavigation
        previous={javascriptMock.navigationFooter.previous}
        next={javascriptMock.navigationFooter.next}
      />
    </article>
  );
}
