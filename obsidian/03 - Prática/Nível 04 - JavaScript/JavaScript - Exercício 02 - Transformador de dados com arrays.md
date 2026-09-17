---
tipo: exercicio
status: proposto
subnivel: "4.2"
criado: "2026-09-17"
---

# JavaScript - Exercício 02 - Transformador de dados com arrays

**Projeto:** Motor de Filtragem, Agrupamento e Estatística com Métodos Funcionais de Array
**Nível:** [[Nível 04 - JavaScript#4.2 — Arrays]]
**Pré-requisitos:** [[JavaScript - Exercício 01 - Conversor de unidades]]
**Rota proposta:** `/exercicios/javascript/02-arrays`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Dominar a manipulação funcional e imutável de coleções em JavaScript moderno, aplicando com maestria a suíte completa de métodos de alta ordem de Array (`map`, `filter`, `find`, `findIndex`, `some`, `every`, `reduce`, `forEach`, `sort`, `includes`), entendendo quais métodos transformam, quais realizam buscas booleanas e como encadear operações com pureza funcional.

## Enunciado e etapas

### 1. Base de dados de produtos para processamento
Crie uma coleção de 10 objetos representando produtos de um e-commerce contendo: `id`, `nome`, `preco`, `categoria`, `emEstoque` (boolean), `avaliacoes` (array de números) e `tags` (array de strings).

### 2. Transformação e filtragem imutável (`map`, `filter`, `includes`)
- **`filter`:** filtre apenas os produtos que estejam com `emEstoque: true` e que pertençam a uma determinada categoria.
- **`map`:** transforme a lista aplicando um cupom de desconto de 15% em cada produto, retornando novos objetos formatados sem mutar o array original.
- **`includes`:** filtre produtos que contenham a tag `"destaque"` dentro do array de tags.

### 3. Localização e validações lógicas (`find`, `findIndex`, `some`, `every`)
- **`find`:** localize o primeiro produto com preço superior a R$ 1.000,00.
- **`findIndex`:** encontre a posição no índice do produto de ID específico (ex.: ID 5) para simular remoção ou substituição.
- **`some`:** verifique se existe *ao menos um* produto com avaliação inferior a 3 estrelas.
- **`every`:** verifique se *todos* os produtos possuem preço estritamente positivo ($> 0$).

### 4. Agregações complexas com `reduce` e ordenação com `sort`
- **`reduce` para somatório:** calcule o valor total de inventário da loja (soma dos preços dos produtos em estoque).
- **`reduce` para agrupamento por chave:** agrupe os produtos por categoria em um objeto do tipo `{ informatica: [...], livros: [...] }`.
- **`sort`:** ordene os produtos por preço em ordem decrescente. **Atenção pedagógica:** demonstre o perigo do `sort()` mutar o array original e como criar uma cópia prévia usando `toSorted()` (ES2023) ou `[...produtos].sort((a, b) => b.preco - a.preco)`.

## Cobertura e critérios de conclusão

- [ ] **`map` e `filter`:** Transformação e filtragem imutável com preservação dos dados de origem.
- [ ] **`find` e `findIndex`:** Busca precisa por predicado retornando elemento ou índice (-1 se inexistente).
- [ ] **`some` e `every`:** Validações lógicas existenciais e universais retornando booleanos.
- [ ] **`reduce`:** Acumulador numérico e estruturação de objetos agrupados por propriedade.
- [ ] **`sort` e `includes`:** Ordenação numérica segura com função de comparação e checagem de pertinência em coleções.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Executar `filter` + `map` encadeados | Novo array resultante com desconto aplicado sem alterar o array base | Pendente |
| Buscar produto com `find` quando critério não existe | Retornar exatamente `undefined` | Pendente |
| Executar `produtos.every(p => p.preco > 0)` | Retornar `true` se todos forem positivos | Pendente |
| Agrupar produtos com `reduce` | Objeto final com as chaves correspondentes a cada categoria | Pendente |

## Limites do exercício

Não utilize loops tradicionais (`for`, `while`) para as transformações de coleções; o objetivo do exercício é exercitar exclusivamente os métodos declarativos e funcionais de Array.

## Minha solução

Aguardando tentativa do usuário. Informe a rota criada e os testes no console.

## Entrega e evidências

- Página em `next-lab/app/exercicios/javascript/02-arrays/page.tsx` renderizando a tabela de produtos filtrados e os totais agregados.
- Tabela preenchida com as validações realizadas.
- Resumo de 1 parágrafo: por que `[10, 5, 100, 2].sort()` resulta em `[10, 100, 2, 5]` se não passarmos uma função de comparação `(a, b) => a - b`?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** criar a coleção de produtos e implementar o pipeline funcional de arrays.

## Fontes de estudo

- [MDN Web Docs — Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN Web Docs — Array.prototype.reduce()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
