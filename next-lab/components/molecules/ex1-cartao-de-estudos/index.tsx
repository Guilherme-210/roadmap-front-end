"use client";

interface IProps {
  id: number;
  tema: string;
  descricao: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  children?: React.ReactNode;
  atualizado: boolean;
  onDelete: () => void;
  onUpdate: () => void;
}

export default function Ex1CartaoEstudo({
  id,
  tema,
  descricao,
  tags,
  createdAt,
  updatedAt,
  children,
  atualizado,
  onDelete,
  onUpdate,
}: IProps) {
  return (
    <article
      id={`card-${id}`}
      className="flex w-full max-w-md flex-col items-start justify-start gap-2 rounded-md border-2 border-dashed border-zinc-200 p-4"
    >
      <h2 className="text-lg font-bold">
        Cartão de estudo {atualizado ? " - Atualizado" : " - Não atualizado"}
      </h2>
      <h3 className="text-md font-medium">Tema: {tema || ""}</h3>
      <p className="text-sm text-zinc-600">Descrição: {descricao || ""}</p>
      <p className="text-sm text-zinc-600">
        Tags: {tags.length > 0 ? tags.join(", ") : "Nenhuma tag adicionada"}
      </p>
      {createdAt && (
        <p className="text-sm text-zinc-600">Data de criação: {createdAt}</p>
      )}
      {updatedAt && (
        <p className="text-sm text-zinc-600">Última atualização: {updatedAt}</p>
      )}
      {children}
      <div className="flex w-full flex-row items-center justify-between gap-2">
        <button
          type="button"
          onClick={onDelete}
          className="w-full rounded-md bg-red-500 px-4 py-2 font-bold text-white"
        >
          Excluir
        </button>
        <button
          type="button"
          onClick={onUpdate}
          className="w-full rounded-md bg-blue-500 px-4 py-2 font-bold text-white"
        >
          Atualizar
        </button>
      </div>
    </article>
  );
}
