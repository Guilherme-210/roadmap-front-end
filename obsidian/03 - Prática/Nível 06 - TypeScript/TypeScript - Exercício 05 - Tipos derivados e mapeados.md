---
tipo: exercicio
status: proposto
subnivel: "6.5"
criado: "2026-09-17"
---

# TypeScript - Exercício 05 - Tipos derivados e mapeados

**Projeto:** Sistema Avançado de Tipos Derivados, Operadores Chave e Tipagem Dinâmica
**Nível:** [[Nível 06 - TypeScript#6.5 — Manipulação de tipos]]
**Pré-requisitos:** [[TypeScript - Exercício 04 - Funções e interfaces genéricas]]
**Rota proposta:** `/exercicios/typescript/05-manipulacao-tipos`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Aprofundar nas capacidades de metaprogramação de tipos do TypeScript, manipulando e derivando novos tipos a partir de valores e estruturas existentes com os operadores **`keyof`**, **`typeof`**, **Acesso Indexado (*Indexed Access Types*)**, asserção de imutabilidade profunda com **`as const`**, validação de conformidade preservando inferência com **`satisfies`**, além de explorar **Tipos Condicionais (*Conditional Types*)**, **Tipos Mapeados (*Mapped Types*)**, **Template Literal Types** e inferência de tipos em condicionais com **`infer`**.

## Enunciado e etapas

### 1. Operadores `keyof`, `typeof` e Acesso Indexado
- Crie um objeto de configuração complexo em tempo de execução:
  ```ts
  const CONFIGURACOES_APP = {
    tema: "escuro",
    porta: 3000,
    modoDepuracao: true,
    rotas: { api: "/v1", auth: "/auth" }
  } as const;
  ```
- Derive o tipo estático diretamente do valor em tempo de execução com `typeof CONFIGURACOES_APP`.
- Extraia a união de todas as chaves existentes utilizando `type ChavesConfig = keyof typeof CONFIGURACOES_APP;`.
- Extraia o tipo de uma propriedade aninhada via acesso indexado: `type TipoRotas = typeof CONFIGURACOES_APP["rotas"];`.
- Crie uma função segura de obtenção de propriedade: `function getPropriedade<T, K extends keyof T>(objeto: T, chave: K): T[K]`.

### 2. O operador `as const` versus o operador `satisfies` (TS 4.9+)
- Demonstre a diferença de comportamento entre as duas abordagens:
  - Com `as const`: todas as propriedades tornam-se `readonly` e os tipos primitivos são reduzidos a literais exatos.
  - Com `satisfies`: validamos que um objeto atende a uma interface ou tipo amplo (ex.: `Record<string, string | number>`) SEM perder o tipo exato inferido de cada chave (permitindo, por exemplo, chamar métodos de string em uma propriedade sem precisar de coerção).

### 3. Tipos Mapeados (Mapped Types) e Template Literal Types
- Implemente um Mapped Type manual que transforme todas as propriedades de um tipo em somente leitura ou opcionais:
  ```ts
  type MeuReadonly<T> = {
    readonly [K in keyof T]: T[K];
  };
  ```
- Crie tipos literais baseados em templates de string para eventos ou rotas de API:
  ```ts
  type Entidade = "usuario" | "pedido" | "produto";
  type Acao = "criar" | "atualizar" | "deletar";
  type NomeEvento = `on_${Entidade}_${Acao}`; // Gera união com 9 eventos possíveis!
  ```

### 4. Tipos Condicionais e a palavra-chave `infer`
- Crie um tipo condicional que desempacote o tipo interno de uma Promise ou Array:
  ```ts
  type Desempacotar<T> = T extends Array<infer U> ? U : T extends Promise<infer U> ? U : T;
  ```
- Teste passando `Desempacotar<string[]>` (retorna `string`), `Desempacotar<Promise<number>>` (retorna `number`) e `Desempacotar<boolean>` (retorna `boolean`).

## Cobertura e critérios de conclusão

- [ ] **`keyof` e `typeof`:** Extração e reflexão estática de tipos a partir de objetos reais.
- [ ] **Indexed Access Types (`T[K]`):** Navegação e extração de tipos de propriedades profundas.
- [ ] **`as const` e `satisfies`:** Compreensão da retenção de literais e verificação estrita de conformidade.
- [ ] **Mapped Types:** Transformação programática de estruturas de propriedades.
- [ ] **Template Literal Types:** Composição dinâmica de strings literais fortemente tipadas.
- [ ] **Conditional Types e `infer`:** Lógica de ramificação condicional no sistema de tipos com extração de parâmetros genéricos.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Passar chave inexistente para `getPropriedade(config, "invalida")` | Erro do TypeScript acusando que `"invalida"` não é atribuível a `keyof T` | Pendente |
| Objeto validado com `satisfies Record<string, string>` | Autocompletion preserva os métodos literais de cada chave específica | Pendente |
| Avaliar `NomeEvento` | União contendo todos os 9 formatos gerados (`"on_usuario_criar"`, etc.) | Pendente |
| Aplicar `Desempacotar<Promise<string>>` | Retorna exatamente o tipo primitivo `string` extraído via `infer` | Pendente |

## Limites do exercício

Mantenha as definições focadas em utilitários de arquitetura front-end claros e legíveis, evitando quebra-cabeças esotéricos sem utilidade prática em projetos reais.

## Minha solução

Aguardando tentativa do usuário. Informe a rota criada e os tipos derivados implementados.

## Entrega e evidências

- Código em `next-lab/app/exercicios/typescript/05-manipulacao-tipos/page.tsx` (ou arquivo de tipos).
- Validação estática sem erros (`pnpm type-check`).
- Resumo de 1 parágrafo: em qual situação prática o operador `satisfies` deve ser escolhido no lugar de uma anotação tradicional de tipo `const obj: Tipo = ...`?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** implementar os tipos derivados com keyof, typeof, as const, satisfies e infer.

## Fontes de estudo

- [TypeScript Handbook — Creating Types from Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
- [TypeScript 4.9 Announcement — The satisfies Operator](https://devblogs.microsoft.com/typescript/announcing-typescript-4-9/#the-satisfies-operator)
- [TypeScript Handbook — Conditional Types](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html)
