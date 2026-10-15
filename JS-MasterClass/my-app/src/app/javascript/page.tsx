import type { Metadata } from "next";
import Link from "next/link";
import { CodePlayground } from "@/components/playground";
import { getExampleById } from "@/data/examples";

export const metadata: Metadata = {
  title: "Documentação: Array.prototype.map()",
  description:
    "Guia prático e interativo sobre Array.prototype.map() em JavaScript, com exemplos executáveis no navegador.",
};

export default function JavaScriptDocumentationPage() {
  const example = getExampleById("javascript-array-map");

  if (!example) {
    return (
      <div className="p-8 text-center text-rose-500">
        Exemplo não encontrado no catálogo de dados.
      </div>
    );
  }

  return (
    <article className="flex-1 w-full max-w-5xl mx-auto px-4 py-10 sm:px-6 lg:px-8 space-y-10">
      {/* Breadcrumbs de Navegação */}
      <nav aria-label="Navegação estrutural" className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
        <Link href="/" className="hover:text-[var(--foreground)] transition-colors">
          Início
        </Link>
        <span>/</span>
        <span className="text-[var(--text-muted)]">Documentação</span>
        <span>/</span>
        <span className="text-amber-500 font-medium">Array.prototype.map()</span>
      </nav>

      {/* Cabeçalho da Documentação */}
      <header className="space-y-4 border-b border-[var(--border-subtle)] pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-500">
          <span>JavaScript Core &bull; Métodos Funcionais</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
          Array.prototype.map()
        </h1>

        <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-3xl">
          O método <code className="text-amber-500 font-mono font-semibold">map()</code> é um dos pilares da programação funcional em JavaScript moderno. Ele permite transformar os elementos de uma coleção de forma declarativa, previsível e imutável.
        </p>
      </header>

      {/* Seção 1: Conceito e Assinatura */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-[var(--foreground)]">
          Como o método funciona?
        </h2>
        <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
          Diferente de métodos iterativos imperativos como <code className="font-mono text-xs bg-[var(--muted)] px-1.5 py-0.5 rounded text-[var(--foreground)]">for</code> ou <code className="font-mono text-xs bg-[var(--muted)] px-1.5 py-0.5 rounded text-[var(--foreground)]">forEach</code>, o <code className="font-mono text-xs bg-[var(--muted)] px-1.5 py-0.5 rounded text-[var(--foreground)]">map()</code> sempre constrói e retorna um <strong>novo array</strong> com o mesmo número de posições do array de origem, sem alterar os dados originais.
        </p>

        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-5 space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-500">
            Assinatura do Método
          </h3>
          <div className="font-mono text-xs sm:text-sm bg-[var(--muted)]/60 p-3.5 rounded-lg overflow-x-auto text-[var(--foreground)]">
            array.map(function(elementoAtual, indice, arrayOriginal) &#123; <span className="text-[var(--text-muted)]">{"/* retorna o novo valor */"}</span> &#125;)
          </div>
          <ul className="text-xs sm:text-sm text-[var(--text-muted)] space-y-1.5 list-disc list-inside">
            <li><strong className="text-[var(--foreground)]">elementoAtual</strong>: O item que está sendo processado na iteração atual.</li>
            <li><strong className="text-[var(--foreground)]">indice</strong> (opcional): A posição indexada do elemento atual no array.</li>
            <li><strong className="text-[var(--foreground)]">arrayOriginal</strong> (opcional): A referência ao array que invocou a operação.</li>
          </ul>
        </div>
      </section>

      {/* Seção 2: Playground Interativo Reutilizável */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              Laboratório Interativo
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              Você pode editar os dados, alterar a função de transformação e clicar em <strong>Executar</strong> para ver a saída imediata no console.
            </p>
          </div>
        </div>

        {/* Instância do componente reutilizável CodePlayground */}
        <CodePlayground
          initialCode={example.initialCode}
          language={example.language}
          title={example.title}
          description={example.description}
          height="400px"
          layout="split"
        />
      </section>

      {/* Seção 3: Boas Práticas e Armadilhas Comuns */}
      <section className="space-y-4 pt-4">
        <h2 className="text-2xl font-bold text-[var(--foreground)]">
          Boas Práticas &amp; Armadilhas Frequentes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-5 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>Não use map() sem retornar valor</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Se você precisa apenas iterar para gerar efeitos colaterais (como salvar no banco ou emitir alertas) sem coletar um novo array, prefira <code className="font-mono text-amber-500">forEach()</code> ou um loop <code className="font-mono text-amber-500">for...of</code>. O uso indevido de <code className="font-mono text-amber-500">map()</code> criará um array desnecessário de valores <code className="font-mono text-amber-500">undefined</code> na memória.
            </p>
          </div>

          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>Preserve a Imutabilidade dos Itens</span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Ao mapear arrays contendo objetos, retorne uma cópia superficial com spread (<code className="font-mono text-amber-500">&#123; ...item, novaPropriedade &#125;</code>) em vez de fazer mutações diretas em <code className="font-mono text-amber-500">item.propriedade = valor</code>, garantindo que o array original permaneça inalterado.
            </p>
          </div>
        </div>
      </section>

      {/* Rodapé da aula / Próximos Passos */}
      <footer className="pt-8 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/playground"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Abrir Playground Livre</span>
        </Link>

        <Link
          href="/aulas/java-script/boolean"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--card-bg)] border border-[var(--border-subtle)] text-xs sm:text-sm font-semibold text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
        >
          <span>Próxima Aula: Booleans &amp; Coerção</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </footer>
    </article>
  );
}
