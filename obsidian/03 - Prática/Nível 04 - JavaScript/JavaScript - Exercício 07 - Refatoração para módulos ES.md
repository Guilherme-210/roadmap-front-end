---
tipo: exercicio
status: proposto
subnivel: "4.7"
criado: "2026-09-17"
---

# JavaScript - Exercício 07 - Refatoração para módulos ES

**Projeto:** Biblioteca Modularizada com ES Modules e Carregamento Sob Demanda (*Dynamic Import*)
**Nível:** [[Nível 04 - JavaScript#4.7 — Módulos]]
**Pré-requisitos:** [[JavaScript - Exercício 06 - Cliente HTTP com Fetch]]
**Rota proposta:** `/exercicios/javascript/07-modulos`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Organizar e estruturar uma base de código profissional utilizando **ES Modules (ESM)** nativos, dominando exportações nomeadas (*named exports*), exportação padrão (*default export*), renomeação na importação (`as`), agregação e re-exportação através de arquivos barril (*barrel files* / `index.ts`), além de otimização de performance com divisão de código (*code splitting*) através de **Dynamic Imports** (`import()`).

## Enunciado e etapas

### 1. Separação de responsabilidades e exportações nomeadas
Crie uma pasta de utilitários `lib/calculos/` contendo arquivos modulares especializados:
- `matematica.ts`: com exportações nomeadas de funções puras (`export const somar = ...`, `export const subtrair = ...`).
- `formatadores.ts`: com exportações nomeadas de tratamento de moeda e data (`export const formatarMoeda = ...`).
- Importe apenas as funções necessárias utilizando a sintaxe de desestruturação: `import { somar, formatarMoeda as formatarBRL } from "./lib/calculos"`.

### 2. Default Export e convenções de arquitetura
- Crie um serviço principal `servicoAnalitico.ts` com uma classe ou função agregadora exportada como default (`export default class AnaliticaService`).
- Demonstre a diferença fundamental de sintaxe na importação de um default versus named export.
- Debata a recomendação moderna da comunidade de priorizar *named exports* para melhorar o suporte a refatoração automática e *tree shaking*.

### 3. Padrão Barrel File (index.ts agregador)
- Crie um arquivo `lib/calculos/index.ts` que agregue e re-exporte todos os módulos da pasta:
  ```ts
  export * from "./matematica";
  export * from "./formatadores";
  export { default as AnaliticaService } from "./servicoAnalitico";
  ```
- Importe tudo o que a aplicação precisa diretamente do ponto único de entrada `@/lib/calculos`.

### 4. Otimização com Dynamic Import (`import()`) sob demanda
Implemente uma funcionalidade pesada na página (ex.: um módulo de exportação para PDF ou um visualizador complexo de gráficos):
- Não importe o módulo no topo do arquivo (evitando aumentar o bundle inicial da página).
- Carregue o módulo de forma dinâmica e assíncrona somente quando o usuário clicar no botão "Gerar Relatório":
  ```js
  const handleClick = async () => {
    const { gerarRelatorioPDF } = await import("./moduloPesado");
    gerarRelatorioPDF();
  };
  ```
- Inspecione a aba Network do DevTools e comprove que o arquivo JS do módulo pesado só é baixado pelo navegador no momento do clique (Code Splitting).

## Cobertura e critérios de conclusão

- [ ] **Import e Export:** Sintaxe precisa de importação e exportação em ES Modules.
- [ ] **Named vs Default Export:** Aplicação consciente de cada tipo de exportação.
- [ ] **Barrel Files:** Re-exportação limpa centralizada através de arquivos de índice.
- [ ] **Dynamic Import (`import()`):** Carregamento assíncrono condicional para performance de inicialização de página.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Importar função renomeada com `as` | A função funciona normalmente sob o novo alias | Pendente |
| Carregar a página inicialmente | O bundle do módulo pesado NÃO aparece nas requisições da aba Network | Pendente |
| Clicar no botão que dispara o `import()` dinâmico | Um novo chunk `.js` é requisitado e baixado na aba Network imediatamente após o clique | Pendente |
| Tree shaking na compilação | Funções não importadas não devem ser incluídas no artefato final | Pendente |

## Limites do exercício

Não é necessário configurar empacotadores manuais como Webpack puro do zero; aproveite o bundler nativo do Next.js (Turbopack) no `next-lab`.

## Minha solução

Aguardando tentativa do usuário. Informe a rota criada e os arquivos dos módulos.

## Entrega e evidências

- Módulos em `next-lab/lib/calculos/` e página de teste em `next-lab/app/exercicios/javascript/07-modulos/page.tsx`.
- Screenshot ou registro da aba Network comprovando o carregamento tardio (*lazy load*) do chunk no clique.
- Resumo de 1 parágrafo: o que é *Tree Shaking* e como os ES Modules estáticos viabilizam essa eliminação de código morto (*dead code elimination*)?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** criar os módulos de cálculo, o barrel file e o botão com import dinâmico.

## Fontes de estudo

- [MDN Web Docs — Módulos JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules)
- [MDN Web Docs — dynamic import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)
