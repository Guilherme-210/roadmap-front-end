---
tipo: exercicio
status: proposto
subnivel: "6.2"
criado: "2026-09-17"
---

# TypeScript - Exercício 02 - Modelagem com tipos compostos

**Projeto:** Sistema de Tipos Seguros com Uniões, Interseções e Eliminação do `any`
**Nível:** [[Nível 06 - TypeScript#6.2 — Tipos importantes]]
**Pré-requisitos:** [[TypeScript - Exercício 01 - Tipagem de domínio]]
**Rota proposta:** `/exercicios/typescript/02-tipos-compostos`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Dominar as estruturas fundamentais de composição de tipos no TypeScript: **Union Types** (`|`), **Intersection Types** (`&`), **Literal Types**, a escolha criteriosa entre **Type Aliases** e **Interfaces** (extensibilidade vs união), o uso disciplinado dos tipos primitivos especiais (`null`, `undefined`, `void`, `never` e `unknown`) e compreender tecnicamente por que o tipo `any` destrói a segurança do ecossistema e como substituí-lo por `unknown`.

## Enunciado e etapas

### 1. Tipos Literais e Union Types
- Crie tipos literais restritos para regras de estado e temas:
  ```ts
  type StatusPedido = "pendente" | "processando" | "enviado" | "entregue" | "cancelado";
  type MetodoPagamento = "pix" | "cartao_credito" | "boleto";
  ```
- Crie uma função que receba `StatusPedido` e garanta que passar uma string genérica como `"aguardando"` resulte em erro de compilação imediato.

### 2. Interfaces vs Type Aliases e Intersecções (`&`)
- Defina uma entidade base com `interface EntidadeBase { id: string; criadoEm: Date; }`.
- Crie uma `interface Produto extends EntidadeBase` demonstrando herança clássica com `extends`.
- Crie o mesmo modelo utilizando `type` e o operador de interseção (`&`):
  `type ProdutoComAudit = Produto & { atualizadoPor: string; versao: number };`.
- Discuta e registre quando preferir `interface` (para POO, componentes React e extensibilidade pública) e quando preferir `type` (para uniões, tuplas e tipos primitivos combinados).

### 3. Anatomia dos tipos especiais: `void`, `never`, `unknown` vs `any`
Crie exemplos conceituais de cada tipo:
- **`void`:** retorno de funções que executam ações secundárias sem produzir valor útil.
- **`never`:** retorno de funções que lançam exceções garantidas (`throw new Error(...)`) ou loops infinitos, e tipo residual de checagem exaustiva.
- **`unknown`:** o contraponto seguro ao `any`. Receba um dado de origem incerta (ex.: payload bruto vindo do `JSON.parse` ou de uma API externa):
  - Tente acessar `dado.propriedade` diretamente com `unknown` e comprove que o TypeScript proíbe o acesso até que seja feita uma validação de tipo.
  - Demonstre por que o `any` desativa completamente o verificador de tipos (*type-checker*), transformando o TypeScript em JavaScript comum vulnerável a crashes em produção.

### 4. Resolução segura de Null e Undefined com modo Strict
- No modo estrito (`strictNullChecks: true`), demonstre uma função de busca que possa retornar um elemento ou `null`:
  `function buscarPorId(id: string): Usuario | null`.
- Mostre como o compilador força o desenvolvedor a verificar se o retorno não é nulo antes de acessar seus métodos.

## Cobertura e critérios de conclusão

- [ ] **Union Types (`|`) e Literal Types:** Restrição semântica de valores permitidos.
- [ ] **Intersection Types (`&`):** Combinação de múltiplas estruturas em um único tipo agregado.
- [ ] **Interfaces vs Type Aliases:** Domínio das semelhanças e critérios de escolha.
- [ ] **Tipos primitivos especiais:** Compreensão prática de `null`, `undefined`, `void`, `never` e `unknown`.
- [ ] **Eliminação consciente do `any`:** Substituição por `unknown` acompanhado de validação estática.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Passar string `"invalido"` para parâmetro `StatusPedido` | Erro do compilador apontando que o valor não é atribuível ao tipo | Pendente |
| Acessar propriedade direta de variável do tipo `unknown` | Erro: `Object is of type 'unknown'` até que seja feito type-check | Pendente |
| Função com retorno `never` que atinge o final sem lançar erro | Compilador aponta que a função não encerra conforme o contrato `never` | Pendente |
| Combinar tipos com interseção `&` | Objeto resultante deve obrigatoriamente possuir todas as propriedades de ambos os tipos | Pendente |

## Limites do exercício

Não implemente asserções inseguras com `as any` ou `@ts-ignore` para silenciar o compilador; o objetivo é resolver todos os desafios estritamente dentro da segurança de tipos.

## Minha solução

Aguardando tentativa do usuário. Informe os tipos criados e a rota do next-lab.

## Entrega e evidências

- Arquivos em `next-lab/app/exercicios/typescript/02-tipos-compostos/page.tsx` (ou arquivo de tipos).
- Verificação de tipos sem erros no terminal (`pnpm type-check`).
- Resumo de 1 parágrafo: qual é a diferença fundamental de segurança entre tipar um parâmetro de entrada como `any` versus tipar como `unknown`?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** implementar os modelos de union, interfaces, intersection e cenários de unknown.

## Fontes de estudo

- [TypeScript Handbook — Unions and Intersection Types](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types)
- [TypeScript Handbook — Narrowing with unknown](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
