---
tipo: exercicio
status: proposto
subnivel: "6.4"
criado: "2026-09-17"
---

# TypeScript - Exercício 04 - Funções e interfaces genéricas

**Projeto:** Biblioteca de Utilitários e Coleções Reutilizáveis com Generics
**Nível:** [[Nível 06 - TypeScript#6.4 — Generics]]
**Pré-requisitos:** [[TypeScript - Exercício 03 - Guardas de tipo e narrowing]]
**Rota proposta:** `/exercicios/typescript/04-generics`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Dominar o poder dos **Generics** no TypeScript, criando funções, interfaces e classes altamente reutilizáveis e com segurança de tipos completa, compreendendo como os parâmetros de tipo (`<T>`) preservam a identidade dos tipos passados, aplicando **Restrições Genéricas (*Generic Constraints* com `extends`)**, definindo tipos padrão (*Generic Defaults*) e confiando na inferência automática nos pontos de chamada.

## Enunciado e etapas

### 1. Funções genéricas e preservação de tipo
- Crie uma função de encapsulamento `primeiroElemento<T>(lista: T[]): T | undefined`.
- Demonstre que, ao passar um array de números, o tipo de retorno é automaticamente inferido como `number | undefined`, e com array de strings é inferido como `string | undefined`, sem perder a informação de tipo específica (o que aconteceria se usássemos `any`).
- Crie uma função genérica de troca de tupla: `inverterPares<A, B>(par: [A, B]): [B, A]`.

### 2. Interfaces e Types Genéricos para APIs
Defina um envelope de resposta padronizado para requisições de backend:
```ts
interface RespostaPaginada<TDados> {
  sucesso: boolean;
  pagina: number;
  totalPaginas: number;
  itens: TDados[];
  metadados?: Record<string, unknown>;
}
```
- Instancie envelopes para diferentes domínios: `RespostaPaginada<Usuario>` e `RespostaPaginada<Produto>`, comprovando o autocompletion estrito das propriedades dos itens.

### 3. Restrições Genéricas com `extends` (Generic Constraints)
Construa uma função de ordenação ou busca que dependa de uma propriedade específica nos objetos:
```ts
function extrairIdentificadores<T extends { id: string | number }>(itens: T[]): (string | number)[] {
  return itens.map(item => item.id);
}
```
- Demonstre que passar um objeto que possui `id` é aceito perfeitamente pelo compilador, enquanto passar um objeto que não contém a chave `id` é imediatamente bloqueado.

### 4. Valores padrão em tipos genéricos (Generic Defaults)
Crie uma interface de configuração de armazenamento em cache:
```ts
interface CacheItem<TValor = string, TChave = string> {
  chave: TChave;
  valor: TValor;
  expiraEm: number;
}
```
- Mostre que é possível usar `CacheItem` sem especificar argumentos de tipo (assumindo os defaults `string`), ou customizar quando necessário (`CacheItem<number, number>`).

## Cobertura e critérios de conclusão

- [ ] **Funções genéricas:** Criação de funções puras que preservam o tipo de entrada na saída.
- [ ] **Interfaces e Types genéricos:** Envelopes flexíveis para APIs, tabelas e listas paginadas.
- [ ] **Restrições genéricas (`extends`):** Limitação de parâmetros genéricos para que possuam determinadas propriedades ou métodos.
- [ ] **Tipos genéricos padrão (`= TipoPadrao`):** Simplificação de consumo com fallbacks sensatos.
- [ ] **Inferência genérica:** Consumo natural das funções genéricas sem necessidade de declarar explicitamente `<Tipo>` na chamada.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Chamar `primeiroElemento([1, 2, 3])` | Tipo inferido automaticamente como `number \| undefined` | Pendente |
| Passar objeto sem `id` para `extrairIdentificadores` | Erro do TypeScript indicando falta da propriedade exigida pela restrição `extends` | Pendente |
| Usar `RespostaPaginada<Usuario>` | O array `.itens` disponibiliza todas as propriedades de `Usuario` no autocompletion | Pendente |
| Usar `CacheItem` sem parâmetros de tipo | Assume o tipo default `string` para chave e valor | Pendente |

## Limites do exercício

Não implemente metaprogramação de tipos recursivos excessivamente complexos; o foco pedagógico é o domínio sólido de generics cotidianos em aplicações reais.

## Minha solução

Aguardando tentativa do usuário. Informe a rota criada e os utilitários genéricos implementados.

## Entrega e evidências

- Arquivos em `next-lab/app/exercicios/typescript/04-generics/page.tsx`.
- Checagem estática limpa via `pnpm type-check`.
- Explicação de 1 parágrafo: como os Generics do TypeScript são semelhantes aos parâmetros de uma função comum, substituindo valores por tipos?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** criar as funções e interfaces genéricas com restrições e defaults.

## Fontes de estudo

- [TypeScript Handbook — Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [TypeScript Handbook — Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)
