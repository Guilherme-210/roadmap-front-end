"use client";

import { useState } from "react";

import Ex1CartaoEstudo from "../components/molecules/ex1-cartao-de-estudos";

const dataEx1CartaoEstudo = [
  {
    id: 1,
    tema: "Estrutura de pastas",
    descricao: "Organização de pastas e arquivos",
    tags: ["React", "Next.js", "TypeScript"],
    createdAt: "2026-09-17",
    updatedAt: "2026-09-17",
    adicionais: "Informações adicionais",
    deletado: false,
    atualizado: false,
  },
  {
    id: 2,
    tema: "Funcionalidades de interface",
    descricao: "Criação de interfaces com React",
    tags: ["React", "Next.js", "TypeScript"],
    createdAt: "2026-09-17",
    updatedAt: "2026-09-17",
    adicionais: ["Informações adicionais", "Mais informações"],
    deletado: false,
    atualizado: false,
  },
];

export default function Home() {
  const [data, setData] = useState(dataEx1CartaoEstudo);

  function onUpdate(id: number) {
    setData((anterior) =>
      anterior.map((card) =>
        card.id === id ? { ...card, atualizado: !card.atualizado } : card
      )
    );
  }

  function onDelete(id: number) {
    setData((anterior) =>
      anterior.map((card) =>
        card.id === id ? { ...card, deletado: true } : card
      )
    );
  }

  const cartoesVisiveis = data.filter((card) => !card.deletado);

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <h1>React - Nivel 07 - Fundamentos do React</h1>

        <section className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-lg font-bold">Exercício 01 - Cartão de estudo</h2>

          <section className="flex flex-row items-center justify-center gap-4">
            {cartoesVisiveis.length > 0 ? (
              cartoesVisiveis.map((card) => {
                return (
                  <Ex1CartaoEstudo
                    {...card}
                    key={card.id}
                    onDelete={() => onDelete(card.id)}
                    onUpdate={() => onUpdate(card.id)}
                  >
                    {card.adicionais && typeof card.adicionais === "string" ? (
                      <p className="text-sm text-zinc-600">{card.adicionais}</p>
                    ) : Array.isArray(card.adicionais) &&
                      card.adicionais.length > 0 ? (
                      card.adicionais.map((item, index) => (
                        <p className="text-sm text-zinc-600" key={index}>
                          {item}
                        </p>
                      ))
                    ) : (
                      <p className="text-sm text-zinc-600">
                        Nenhuma informação adicional
                      </p>
                    )}
                  </Ex1CartaoEstudo>
                );
              })
            ) : (
              <p>Nenhum cartão de estudo encontrado</p>
            )}
          </section>
        </section>
      </main>
    </div>
  );
}
