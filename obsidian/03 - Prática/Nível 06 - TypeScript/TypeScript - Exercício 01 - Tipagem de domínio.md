---
tipo: exercicio
status: proposto
subnivel: "6.1"
criado: "2026-09-17"
---

# TypeScript - Exercício 01 - Tipagem de domínio

**Projeto:** Modelagem Estática de Entidades e Inferência de Tipos
**Nível:** [[Nível 06 - TypeScript#6.1 — Fundamentos]]
**Pré-requisitos:** [[Nível 04 - JavaScript#4.1 — JavaScript básico]]
**Rota proposta:** `/exercicios/typescript/01-fundamentos`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Compreender a camada de análise estática do **TypeScript**, aprendendo a confiar no motor de **inferência de tipos** para evitar tipagens redundantes desnecessárias, tipando explicitamente parâmetros e retornos de funções, modelando entidades com objetos e propriedades opcionais (`?`), e trabalhando com arrays homogêneos e tuplas de tamanho fixo.

## Enunciado e etapas

### 1. Inferência de Tipos vs Tipagem Explícita
- Crie um arquivo onde variáveis primitivas recebem valores literais: demonstre que declarar `let contador: number = 0;` é uma redundância desnecessária diante da inferência natural do TypeScript (`let contador = 0;`).
- Demonstre casos em que a tipagem explícita é mandatória: variáveis inicializadas sem valor imediato ou retornos de funções públicas complexas para garantir contrato estável.

### 2. Tipagem de Objetos e Propriedades Opcionais
Modele uma entidade de domínio `Usuario`:
- Propriedades obrigatórias: `id: string;`, `nome: string;`, `email: string;`, `criadoEm: Date;`.
- Propriedades opcionais com `?`: `telefone?: string;`, `bio?: string;`.
- Propriedades somente leitura com o modificador `readonly`: `readonly id: string;`.
- Tente reatribuir o valor de uma propriedade `readonly` e observe o erro emitido pelo compilador do TypeScript antes mesmo da execução.

### 3. Arrays, Matrizes e Tuplas
- Crie coleções tipadas: array de números (`number[]` ou `Array<number>`) e array de objetos de usuário (`Usuario[]`).
- Crie uma **Tupla** para representar uma coordenada geográfica de tamanho e tipos fixos: `type Coordenada = [latitude: number, longitude: number];`.
- Adicione uma tupla com elemento opcional: `type RespostaOperacao = [sucesso: boolean, mensagem?: string];`.

### 4. Assinaturas de Funções e Contratos de Retorno
- Implemente funções utilitárias de negócios:
  - Função com parâmetros tipados e retorno explícito tipado:
    `function calcularImposto(valor: number, taxa: number): number`.
  - Função com parâmetro opcional ou com valor default:
    `function formatarLog(mensagem: string, nivel: string = "info"): void`.
  - Função com rest parameters tipados:
    `function somarPontos(...pontos: number[]): number`.

## Cobertura e critérios de conclusão

- [ ] **Inferência de tipos:** Saber quando omitir anotações redundantes e confiar no compilador.
- [ ] **Tipagem explícita de primitivos:** numbers, strings, booleans, dates.
- [ ] **Objetos e propriedades opcionais:** Uso correto do marcador `?` e modificador `readonly`.
- [ ] **Arrays e Tuplas:** Diferença estrutural entre lista dinâmica (`T[]`) e tupla com posições semânticas (`[A, B]`).
- [ ] **Funções:** Tipagem completa de parâmetros, retornos e assinaturas de callbacks.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Tentar reatribuir propriedade `readonly` em um objeto | Erro do TypeScript: `Cannot assign to 'id' because it is a read-only property` | Pendente |
| Passar número no lugar de string em parâmetro tipado | Erro de tipagem imediato sublinhado em vermelho no editor | Pendente |
| Acessar índice fora dos limites de uma tupla `[number, number]` | Erro do TypeScript acusando que o índice não existe na tupla | Pendente |
| Compilar o projeto com `tsc --noEmit` | Validação sem nenhum erro de tipo | Pendente |

## Limites do exercício

Não utilize generics ou tipos avançados mapeados nesta etapa introdutória; concentre-se nas anotações fundamentais de domínio e inferência.

## Minha solução

Aguardando tentativa do usuário. Informe os arquivos criados ou rota do next-lab.

## Entrega e evidências

- Página/componente em `next-lab/app/exercicios/typescript/01-fundamentos/page.tsx`.
- Sucesso na verificação estática do projeto via terminal (`pnpm type-check` ou `npx tsc --noEmit`).
- Resumo de 1 parágrafo: o que acontece com os tipos do TypeScript após o código ser compilado para JavaScript (conceito de apagamento de tipos / *type erasure*)?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** criar o arquivo de modelagem e implementar as entidades com inferência e tipagem explícita.

## Fontes de estudo

- [TypeScript Handbook — The Basics](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
- [TypeScript Handbook — Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
