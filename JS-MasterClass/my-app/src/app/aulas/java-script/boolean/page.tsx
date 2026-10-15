export default function BooleanPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center p-8 max-w-4xl mx-auto w-full">
      <div className="w-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-8 shadow-sm">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
          Aula 01 &bull; Tipos Primitivos
        </span>
        <h1 className="text-3xl font-bold mt-2 text-[var(--foreground)]">
          Estudo sobre Booleans &amp; Coerção de Tipos
        </h1>
        <p className="mt-3 text-[var(--text-muted)] leading-relaxed">
          Nesta aula exploramos os conceitos de truthy, falsy, operadores lógicos (&amp;&amp;, ||, ??) e as regras de conversão do motor JavaScript.
        </p>

        <div className="mt-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--muted)]/50 p-4 font-mono text-sm space-y-2">
          <div className="text-[var(--text-muted)]">{"// Exemplos de coerção e valores falsy:"}</div>
          <div className="text-[var(--foreground)]">
            <span className="text-purple-400">Boolean</span>(<span className="text-amber-500">{`""`}</span>) === <span className="text-blue-400">false</span>;
          </div>
          <div className="text-[var(--foreground)]">
            <span className="text-purple-400">Boolean</span>(<span className="text-amber-500">0</span>) === <span className="text-blue-400">false</span>;
          </div>
          <div className="text-[var(--foreground)]">
            <span className="text-purple-400">Boolean</span>(<span className="text-amber-500">{`"0"`}</span>) === <span className="text-blue-400">true</span>;
          </div>
        </div>
      </div>
    </div>
  );
}
