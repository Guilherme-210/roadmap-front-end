---
tipo: exercicio
status: proposto
subnivel: "6.3"
criado: "2026-09-17"
---

# TypeScript - Exercício 03 - Guardas de tipo e narrowing

**Projeto:** Motor de Roteamento de Eventos com Discriminated Unions e Type Guards Customizados
**Nível:** [[Nível 06 - TypeScript#6.3 — Narrowing]]
**Pré-requisitos:** [[TypeScript - Exercício 02 - Modelagem com tipos compostos]]
**Rota proposta:** `/exercicios/typescript/03-narrowing`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Dominar o mecanismo de **afunilamento de tipos (*Type Narrowing*)** do TypeScript, capacitando o compilador a deduzir tipos específicos a partir de uniões amplas através de guardas nativas (`typeof`, `instanceof`, operador `in`), modelando fluxos de estado elegantes com **Uniões Discriminadas (*Discriminated Unions*)** acompanhadas de checagem exaustiva com `never`, além de construir **Predicados de Tipo Customizados (`is`)** e **Funções de Asserção (`asserts`)**.

## Enunciado e etapas

### 1. Guardas nativas do JavaScript reconhecidas pelo TypeScript
Implemente uma função `formatarEntrada(dado: string | number | Date | Error)`:
- Utilize `typeof dado === "string"` para aplicar `.trim()`.
- Utilize `typeof dado === "number"` para aplicar `.toFixed(2)`.
- Utilize `dado instanceof Date` para formatar com `Intl.DateTimeFormat`.
- Utilize `dado instanceof Error` para acessar `dado.message`.
- Observe como o TypeScript afunila o tipo automaticamente dentro de cada ramo condicional.

### 2. O operador `in` para checagem de propriedades
Dadas duas interfaces sem herança:
```ts
interface Administrador { id: string; permissoes: string[]; }
interface Cliente { id: string; historicoCompras: string[]; }
```
- Crie uma função que receba `usuario: Administrador | Cliente`.
- Utilize a checagem `"permissoes" in usuario` para afunilar com segurança o objeto para `Administrador`, sem risco de exceções em tempo de execução.

### 3. Modelagem de Estado com Discriminated Unions e Checagem Exaustiva
Modele as respostas de uma requisição de dados utilizando o padrão de uniões discriminadas (uma propriedade literal comum que serve de discriminador, ex.: `status` ou `tipo`):
```ts
type EstadoRequisicao =
  | { status: "idle" }
  | { status: "carregando" }
  | { status: "sucesso"; dados: { id: number; nome: string } }
  | { status: "erro"; erro: string };
```
- Construa uma função com `switch (estado.status)`:
  - No case `"sucesso"`, comprove que `estado.dados` está acessível e tipado.
  - No case `default`, implemente a técnica de **Checagem Exaustiva** atribuindo o estado a uma variável do tipo `never`:
    ```ts
    const _chequeExaustivo: never = estado;
    ```
  - Se você adicionar um novo status no futuro (ex.: `"pausado"`) sem tratá-lo no switch, o compilador apontará erro imediato no `default`.

### 4. Predicados de Tipo Customizados (`value is Type`) e Assertion Functions
- Crie um Type Predicate para validar se um objeto desconhecido é um produto válido:
  ```ts
  function isProduto(objeto: unknown): objeto is Produto {
    return typeof objeto === "object" && objeto !== null && "preco" in objeto;
  }
  ```
- Crie uma Assertion Function para validação de sessão:
  ```ts
  function assertAutenticado(usuario: Usuario | null): asserts usuario is Usuario {
    if (!usuario) throw new Error("Usuário não autenticado!");
  }
  ```
  Demonstre que após invocar `assertAutenticado(usuario)`, o TypeScript passa a enxergar `usuario` como não-nulo nas linhas subsequentes.

## Cobertura e critérios de conclusão

- [ ] **Guardas nativas (`typeof`, `instanceof`, `in`):** Afunilamento natural de tipos primitivos e instâncias de classes.
- [ ] **Discriminated Unions (Uniões Taggeadas):** Modelagem de máquinas de estado finitas à prova de inconsistências.
- [ ] **Exhaustiveness Checking (`never`):** Garantia de que todos os ramos possíveis foram cobertos em switches/condicionais.
- [ ] **Type Predicates (`param is Type`):** Funções utilitárias customizadas que ensinam o compilador a reconhecer tipos.
- [ ] **Assertion Functions (`asserts param is Type`):** Lançamento de erros em caso de falha com afunilamento automático.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Adicionar novo caso à discriminated union sem tratar no switch | O compilador dispara erro de compilação no bloco default com `never` | Pendente |
| Acessar `estado.dados` no case `"carregando"` | O TypeScript impede o acesso pois a propriedade só existe no case `"sucesso"` | Pendente |
| Usar `isProduto` em array com `filter` | O array resultante é inferido como `Produto[]` e não como `unknown[]` | Pendente |
| Invocar `assertAutenticado` com `null` | Lança exceção de execução; com usuário válido, afunila sem erro | Pendente |

## Limites do exercício

Não use asserção de tipo forçada com `as` (*type casting*) para contornar o afunilamento; o compilador deve ser guiado unicamente pelas guardas lógicas.

## Minha solução

Aguardando tentativa do usuário. Informe os arquivos criados e a rota do next-lab.

## Entrega e evidências

- Página em `next-lab/app/exercicios/typescript/03-narrowing/page.tsx`.
- Verificação de tipos no terminal (`tsc --noEmit`).
- Resumo de 1 parágrafo: por que modelar estados de formulário ou requisição com Discriminated Unions (`{ status: "carregando" } | { status: "erro", erro: string }`) é superior a modelar com múltiplos booleanos soltos (`{ estaCarregando: boolean, temErro: boolean, dados?: any }`)?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** implementar os guardas de tipo e a máquina de estados com discriminated unions.

## Fontes de estudo

- [TypeScript Handbook — Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [TypeScript Handbook — Discriminated Unions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions)
