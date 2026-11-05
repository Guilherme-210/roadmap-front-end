import type { Metadata } from "next";
import {
  Breadcrumbs,
  PageHeader,
  FeatureCardsGrid,
  LessonNavigation,
  type FeatureCardItem,
} from "@/components/ui";
import { CodePlayground } from "@/components/playground";
import mockData from "./mock.json";

export const metadata: Metadata = mockData.metadata;

export default function Exercicio1Page() {
  const {
    breadcrumbs,
    header,
    objective,
    inputCommand,
    instructions,
    expectedResult,
    tips,
    coveredTopics,
    solutions,
    playgroundInitialCode,
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
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border-subtle text-xs text-text-muted">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-500 font-medium border border-amber-500/20">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Material Original: 12-exercicio1.pdf • solução-1.md • resolução.js
          </span>
          <span>• Desafio prático integrador de String API e Expressões Regulares (RegExp)</span>
        </div>
      </div>

      {/* Seção 1: Objetivo Principal */}
      <section className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-card to-card p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-500 border border-amber-500/30">
            Objetivo
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-foreground">
            {objective.title}
          </h2>
        </div>
        <p className="text-base sm:text-lg font-medium text-foreground leading-relaxed">
          &ldquo;{objective.statement}&rdquo;
        </p>
        <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
          {objective.context}
        </p>
      </section>

      {/* Seção 2: Comando de Entrada (Input SQL/DDL) */}
      <section className="space-y-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-muted text-text-muted border border-border-subtle">
              Instruções
            </span>
            <span className="text-xs text-text-muted font-mono">Entrada de Dados</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            Dado o comando:
          </h2>
          <p className="text-xs sm:text-sm text-text-muted">
            Este comando de criação de tabela (DDL) é a string bruta que servirá de entrada para o seu algoritmo:
          </p>
        </div>

        <div className="relative group rounded-xl border border-border-subtle bg-card p-4 sm:p-5 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-border-subtle text-xs text-text-muted">
            <span className="font-mono text-amber-500 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              SQL Statement (String)
            </span>
            <span className="text-[11px] font-mono">create table</span>
          </div>
          <pre className="font-mono text-xs sm:text-sm text-amber-400 bg-muted/60 p-4 rounded-lg overflow-x-auto border border-border-subtle whitespace-pre-wrap leading-relaxed">
            <code>{inputCommand}</code>
          </pre>
        </div>
      </section>

      {/* Seção 3: Requisitos Passo a Passo */}
      <section className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            Etapas do Algoritmo
          </h2>
          <p className="text-xs sm:text-sm text-text-muted">
            Siga os três passos especificados no enunciado para processar o comando:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {instructions.map((inst) => (
            <div
              key={inst.step}
              className="rounded-xl border border-border-subtle bg-card p-5 space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 text-xs font-bold flex items-center justify-center">
                    {inst.step}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-muted text-text-muted">
                    {inst.variable}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-foreground">
                  {inst.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {inst.description}
                </p>
              </div>

              <div className="pt-2 border-t border-border-subtle">
                <span className="text-[10px] uppercase font-semibold text-text-muted tracking-wider block mb-1">
                  Saída esperada:
                </span>
                <code className="text-[11px] font-mono text-amber-400 bg-muted/50 px-2 py-1 rounded block overflow-x-auto border border-border-subtle/50">
                  {inst.targetOutput}
                </code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 4: Resultado Esperado */}
      <section className="rounded-2xl border border-border-subtle bg-card p-6 sm:p-8 space-y-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              Resultado Esperado
            </span>
            <span className="text-xs text-text-muted font-mono">Saída das Variáveis</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            Variáveis Finais
          </h2>
          <p className="text-xs sm:text-sm text-text-muted">
            Ao final da execução do seu algoritmo, as seguintes variáveis devem estar disponíveis com seus respectivos valores:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* tableName */}
          <div className="p-4 rounded-xl bg-muted/40 border border-border-subtle space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono font-semibold text-foreground">
                tableName
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-muted text-text-muted font-mono">
                String
              </span>
            </div>
            <pre className="font-mono text-xs text-amber-400 bg-card p-3 rounded-lg border border-border-subtle">
              tableName = &quot;{expectedResult.tableName}&quot;
            </pre>
          </div>

          {/* columns */}
          <div className="p-4 rounded-xl bg-muted/40 border border-border-subtle space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono font-semibold text-foreground">
                columns
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-muted text-text-muted font-mono">
                Array (6 itens)
              </span>
            </div>
            <pre className="font-mono text-xs text-amber-400 bg-card p-3 rounded-lg border border-border-subtle overflow-x-auto">
              columns = {JSON.stringify(expectedResult.columnsRaw, null, 1)}
            </pre>
          </div>
        </div>

        {/* Nota sobre split e trim */}
        <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-text-muted space-y-2">
          <div className="flex items-center gap-1.5 font-semibold text-amber-500">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Observação sobre a formatação de &apos;columns&apos;:</span>
          </div>
          <p className="leading-relaxed">
            O resultado oficial do PDF mostra elementos com espaço inicial a partir do segundo item (ex: <code className="text-amber-400">&apos; name string&apos;</code>), pois foi gerado por uma divisão com <code className="text-amber-400">split(&quot;,&quot;)</code>. Na resolução do instrutor, utilizou-se <code className="text-amber-400">split(&quot;, &quot;)</code> com vírgula e espaço, gerando strings devidamente normalizadas sem espaços extras.
          </p>
        </div>
      </section>

      {/* Seção 5: Dicas do PDF */}
      <section className="space-y-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
              Dicas de Implementação
            </span>
            <span className="text-xs text-text-muted font-mono">Boas Práticas</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            Dicas &amp; Orientações Técnicas
          </h2>
          <p className="text-xs sm:text-sm text-text-muted">
            Recomendações fundamentais retiradas diretamente do material da aula:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-border-subtle bg-card space-y-2.5"
            >
              <div className="flex items-center gap-2 font-bold text-sm text-amber-500">
                <span className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center text-xs">
                  💡
                </span>
                <span>{tip.title}</span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 6: Conteúdo Abordado neste Exercício */}
      <section className="space-y-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-muted text-text-muted border border-border-subtle">
              Ementa do Desafio
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            Conteúdo Abordado Neste Exercício
          </h2>
          <p className="text-xs sm:text-sm text-text-muted">
            Recapitulação dos conceitos teóricos e práticos explorados nas aulas anteriores:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coveredTopics.map((category, catIdx) => (
            <div
              key={catIdx}
              className="rounded-xl border border-border-subtle bg-card p-5 space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
                <h3 className="text-sm font-bold text-foreground">
                  {category.category}
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-muted text-text-muted">
                  {category.items.length} tópicos
                </span>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <code className="text-xs font-bold font-mono text-amber-400">
                        {item.name}
                      </code>
                    </div>
                    <p className="text-[11px] text-text-muted pl-3.5 leading-relaxed">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 7: Solução Oficial do Instrutor (Rodrigo Branas) */}
      <section className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-card to-card p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
              {solutions.official.badge}
            </span>
            <span className="text-xs font-mono text-text-muted">
              resolução.js
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {solutions.official.title}
          </h2>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            {solutions.official.description}
          </p>
        </div>

        {/* Código da Resolução Oficial */}
        <div className="rounded-xl border border-border-subtle bg-muted/60 p-4 overflow-hidden space-y-2">
          <div className="flex items-center justify-between text-xs text-text-muted pb-2 border-b border-border-subtle font-mono">
            <span>JavaScript • Resolução</span>
            <span className="text-amber-500 font-bold">Código Oficial</span>
          </div>
          <pre className="font-mono text-xs sm:text-sm text-amber-400 overflow-x-auto p-2 leading-relaxed">
            <code>{solutions.official.code}</code>
          </pre>
        </div>

        {/* Análise Passo a Passo da Solução */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
            Análise Linha a Linha da Resolução
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {solutions.official.steps.map((st, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-border-subtle bg-card space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h4 className="text-xs font-bold text-foreground">
                      {st.label}
                    </h4>
                  </div>
                  <pre className="font-mono text-[11px] text-amber-400 bg-muted/60 p-2 rounded border border-border-subtle overflow-x-auto">
                    {st.code}
                  </pre>
                </div>
                <p className="text-xs text-text-muted leading-relaxed pt-2 border-t border-border-subtle">
                  {st.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 8: Soluções Práticas Complementares (solução-1.md) */}
      <section className="space-y-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-muted text-text-muted border border-border-subtle">
              Estudo de Caso &amp; Expansão
            </span>
            <span className="text-xs text-text-muted font-mono">solução-1.md</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            Soluções &amp; Testes Complementares
          </h2>
          <p className="text-xs sm:text-sm text-text-muted">
            Experimentos desenvolvidos no caderno de notas do exercício, explorando parsing detalhado de registros e validações adicionais:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Solução Teste 1 */}
          <div className="rounded-xl border border-border-subtle bg-card p-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-muted text-text-muted border border-border-subtle inline-block">
                {solutions.test1.badge}
              </span>
              <h3 className="text-base font-bold text-foreground">
                {solutions.test1.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {solutions.test1.description}
              </p>
            </div>
            <pre className="font-mono text-[11px] text-foreground bg-muted/60 p-3.5 rounded-lg overflow-x-auto border border-border-subtle max-h-72 overflow-y-auto">
              <code>{solutions.test1.code}</code>
            </pre>
          </div>

          {/* Solução Teste 2 */}
          <div className="rounded-xl border border-border-subtle bg-card p-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-muted text-text-muted border border-border-subtle inline-block">
                {solutions.test2.badge}
              </span>
              <h3 className="text-base font-bold text-foreground">
                {solutions.test2.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {solutions.test2.description}
              </p>
            </div>
            <pre className="font-mono text-[11px] text-foreground bg-muted/60 p-3.5 rounded-lg overflow-x-auto border border-border-subtle max-h-72 overflow-y-auto">
              <code>{solutions.test2.code}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Seção 9: Laboratório Prático (CodePlayground) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                Playground Interativo
              </span>
              <span className="text-xs text-text-muted font-mono">Editor &amp; Console</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-1">
              Laboratório Prático do Exercício
            </h2>
            <p className="text-xs sm:text-sm text-text-muted">
              Execute o código abaixo para testar a resolução oficial e verificar a saída no console:
            </p>
          </div>
        </div>

        <CodePlayground
          initialCode={playgroundInitialCode}
          language="javascript"
          title="Playground • Resolução do Exercício 1"
          description="JavaScript MasterClass • Rodrigo Branas"
          height="430px"
          layout="split"
          collapsible={true}
          defaultOpen={true}
        />
      </section>

      {/* Seção 10: Pontos Chave & Dicas Finais */}
      {keyTakeaways && keyTakeaways.length > 0 && (
        <section className="space-y-3 pt-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted">
            Conceitos Essenciais
          </h3>
          <FeatureCardsGrid
            cards={keyTakeaways as FeatureCardItem[]}
            columns={3}
          />
        </section>
      )}

      {/* Navegação Sequencial entre Lições */}
      <LessonNavigation
        previous={navigationFooter.previous}
        next={navigationFooter.next}
      />
    </div>
  );
}
