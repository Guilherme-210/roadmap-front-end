import type { Metadata } from "next";
import { CodePlayground } from "@/components/playground";
import { PageHeader, FeatureCardsGrid } from "@/components/ui";
import { getDefaultPlaygroundExample } from "@/data/examples";
import playgroundMock from "./mock.json";

export const metadata: Metadata = playgroundMock.metadata;

export default function PlaygroundPage() {
  const example = getDefaultPlaygroundExample();

  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 space-y-6">
      {/* Cabeçalho da Página Componentizado */}
      <PageHeader
        badge={playgroundMock.header.badge}
        title={playgroundMock.header.title}
        description={playgroundMock.header.description}
        tags={playgroundMock.header.tags}
      />

      {/* Componente Playground Principal (Na sua página própria, sem collapse - conforme requisito) */}
      <div className="pt-2">
        <CodePlayground
          initialCode={example.initialCode}
          language={example.language}
          title={example.title}
          description={example.description}
          height="420px"
          layout="split"
        />
      </div>

      {/* Dicas e Informações Técnicas Componentizadas */}
      <div className="pt-4">
        <FeatureCardsGrid cards={playgroundMock.featureCards} columns={3} />
      </div>
    </div>
  );
}
