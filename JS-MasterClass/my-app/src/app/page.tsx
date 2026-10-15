import { HeroPresentation, HeroPreviewCard } from "@/components/home";
import homeMock from "./mock.json";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Lado Esquerdo: Apresentação Principal Componentizada */}
        <div className="lg:col-span-7">
          <HeroPresentation
            badgeText={homeMock.badgeText}
            title={homeMock.title}
            description={homeMock.description}
            highlights={homeMock.highlights}
            actions={homeMock.actions}
          />
        </div>

        {/* Lado Direito: Card Ilustrativo Componentizado */}
        <div className="lg:col-span-5 flex justify-center">
          <HeroPreviewCard
            title={homeMock.previewCard.title}
            subtitle={homeMock.previewCard.subtitle}
            status={homeMock.previewCard.status}
            codeComment={homeMock.previewCard.codeComment}
            codeSnippet={homeMock.previewCard.codeSnippet}
            codeExplanation={homeMock.previewCard.codeExplanation}
            stats={homeMock.previewCard.stats}
          />
        </div>
      </div>
    </div>
  );
}
