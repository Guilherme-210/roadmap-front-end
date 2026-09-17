---
tipo: exercicio
status: proposto
subnivel: "6.6"
criado: "2026-09-17"
---

# TypeScript - Exercício 06 - Utilitários de tipo aplicados

**Projeto:** Toolkit de Modelagem de DTOs e APIs com Utility Types Nativos
**Nível:** [[Nível 06 - TypeScript#6.6 — Utility Types]]
**Pré-requisitos:** [[TypeScript - Exercício 05 - Tipos derivados e mapeados]]
**Rota proposta:** `/exercicios/typescript/06-utility-types`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Dominar a suíte padrão de **Utility Types** embutida nativamente no compilador do TypeScript, aprendendo a transformar e modelar tipos de transporte de dados (DTOs), formulários parciais e retornos de funções sem duplicar código, aplicando com maestria: **`Partial`**, **`Required`**, **`Pick`**, **`Omit`**, **`Record`**, **`Exclude`**, **`Extract`**, **`ReturnType`**, **`Parameters`** e **`Awaited`**.

## Enunciado e etapas

### 1. Modelagem de formulários e DTOs com `Pick`, `Omit`, `Partial` e `Required`
Dada a entidade completa de banco de dados:
```ts
interface Artigo {
  id: string;
  titulo: string;
  slug: string;
  conteudo: string;
  autorId: string;
  publicado: boolean;
  rascunho?: boolean;
  visualizacoes: number;
  criadoEm: Date;
  atualizadoEm: Date;
}
```
- **`Omit`:** crie o tipo `CriarArtigoDTO` omitindo `id`, `visualizacoes`, `criadoEm` e `atualizadoEm` (gerados automaticamente pelo servidor).
- **`Pick`:** crie o tipo `ResumoArtigoCard` selecionando unicamente `id`, `titulo`, `slug` e `criadoEm`.
- **`Partial`:** crie o tipo `AtualizarArtigoDTO` onde todos os campos de criação tornam-se opcionais para operações de `PATCH`.
- **`Required`:** demonstre a remoção de todas as marcas de interrogação opcionais de um tipo.

### 2. Dicionários fortemente tipados com `Record`
- Utilize o utilitário `Record<K, T>` para criar dicionários onde as chaves pertencem a um conjunto restrito de literais:
  ```ts
  type NivelAcesso = "admin" | "editor" | "leitor";
  type PermissoesSistema = Record<NivelAcesso, { podeCriar: boolean; podeExcluir: boolean }>;
  ```
- Mostre que o TypeScript exige obrigatoriamente a definição de todas as três chaves, prevenindo omissões acidentais na tabela de permissões.

### 3. Filtragem de Uniões com `Exclude` e `Extract`
Dada uma união de eventos do sistema:
```ts
type Evento = "click" | "hover" | "scroll" | "keydown" | "keyup";
```
- **`Exclude`:** crie `EventosMouse` excluindo os eventos de teclado (`Exclude<Evento, "keydown" | "keyup">`).
- **`Extract`:** crie `EventosTeclado` extraindo especificamente os eventos pertinentes (`Extract<Evento, "keydown" | "keyup" | "submit">`).

### 4. Extração de metadados de funções e Promises com `ReturnType`, `Parameters` e `Awaited`
- Dada uma função de serviço assíncrona complexa `async function buscarPerfilCompleto(id: string, detalhado: boolean) { ... }`:
  - Extraia a tupla de argumentos esperados com `type ArgumentosBusca = Parameters<typeof buscarPerfilCompleto>;`.
  - Extraia o tipo de retorno encapsulado na Promise com `type RetornoPromessa = ReturnType<typeof buscarPerfilCompleto>;`.
  - Desempacote o tipo final resolvido de dentro da Promise utilizando o utilitário moderno **`Awaited`**:
    `type PerfilResolvido = Awaited<ReturnType<typeof buscarPerfilCompleto>>;`.

## Cobertura e critérios de conclusão

- [ ] **`Partial` e `Required`:** Flexibilização ou obrigatoriedade universal de propriedades.
- [ ] **`Pick` e `Omit`:** Extração cirúrgica de subconjuntos de campos para contratos de APIs.
- [ ] **`Record`:** Mapeamento seguro de pares chave-valor com chaves literais.
- [ ] **`Exclude` e `Extract`:** Operações de conjunto sobre Uniões de tipos.
- [ ] **`ReturnType` e `Parameters`:** Engenharia reversa e reflexão estática sobre assinaturas de funções existentes.
- [ ] **`Awaited`:** Resolução recursiva do payload transportado por Promises assíncronas.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Criar objeto do tipo `Omit<Artigo, "id">` com o campo `id` presente | Erro do compilador apontando que `id` não deve existir no tipo | Pendente |
| Objeto `Record<NivelAcesso, ...>` faltando uma das chaves da união | Erro imediato do compilador apontando propriedade obrigatória ausente | Pendente |
| Usar `Exclude<"a" \| "b" \| "c", "c">` | União resultante contém estritamente `"a" \| "b"` | Pendente |
| Aplicar `Awaited<Promise<Promise<number>>>` | Desempacota as Promises aninhadas e resolve para o tipo primitivo `number` | Pendente |

## Limites do exercício

Não crie implementações manuais dos utilitários já fornecidos pela biblioteca padrão do TypeScript; o foco é saber quando e como aplicar os Utility Types oficiais no dia a dia de projetos.

## Minha solução

Aguardando tentativa do usuário. Informe a rota criada e os testes de tipo realizados.

## Entrega e evidências

- Página em `next-lab/app/exercicios/typescript/06-utility-types/page.tsx` com as transformações de DTOs e funções.
- Checagem estática limpa via `pnpm type-check`.
- Resumo de 1 parágrafo: por que utilizar `Omit` ou `Pick` em DTOs é muito mais sustentável para a manutenção do código do que reescrever interfaces separadas para cada formulário?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** criar a modelagem dos DTOs e as extrações com ReturnType e Awaited.

## Fontes de estudo

- [TypeScript Handbook — Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [Total TypeScript — Advanced TypeScript Patterns](https://www.totaltypescript.com/tutorials)
