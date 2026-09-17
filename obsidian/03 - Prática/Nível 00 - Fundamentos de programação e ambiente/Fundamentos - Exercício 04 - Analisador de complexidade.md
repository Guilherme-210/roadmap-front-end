---
tipo: exercicio
status: proposto
subnivel: "0.4"
criado: "2026-09-17"
---

# Fundamentos - Exercício 04 - Analisador de complexidade

**Projeto:** Laboratório Prático de Recursão e Análise de Complexidade Big O
**Nível:** [[Nível 00 - Fundamentos de programação e ambiente#0.4 — Lógica: Algoritmos e Complexidade]]
**Pré-requisitos:** [[Fundamentos - Exercício 03 - Gerenciador de tarefas CLI]]
**Rota proposta:** Exercício executável em script/terminal (`scripts/fundamentos/04-complexidade-big-o.ts`).

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Compreender o impacto prático da complexidade de tempo e espaço na execução de algoritmos, implementando funções recursivas com caso base seguro e comparando implementações empíricas com complexidades assintóticas distintas: $O(1)$, $O(\log n)$, $O(n)$ e $O(n^2)$.

## Enunciado e etapas

### 1. Recursividade e Caso Base
Implemente dois algoritmos recursivos clássicos:
- **Cálculo de Fatorial:** função que calcula $n!$ recursivamente, definindo explicitamente o caso base ($n \le 1$) e validando entradas negativas.
- **Busca Recursiva em Árvore/Estrutura Aninhada:** percorrer uma estrutura hierárquica de menus/pastas em formato de árvore de objetos até encontrar um item por ID, retornando o caminho percorrido.

### 2. Implementação de Algoritmos com Diferentes Ordens de Grandeza (Big O)
Construa quatro rotinas com ordens de complexidade distintas sobre arrays numéricos:
- **$O(1)$ — Constante:** acesso direto a um índice ou leitura de tamanho de array.
- **$O(\log n)$ — Logarítmica:** busca binária (*binary search*) em array previamente ordenado.
- **$O(n)$ — Linear:** busca linear simples (*linear search*) ou cálculo de soma de elementos.
- **$O(n^2)$ — Quadrática:** algoritmo de ordenação ingênuo (*Bubble Sort*) ou comparação de pares duplicados por loops aninhados.

### 3. Comparativo de Desempenho e Medição Empírica
Crie uma função utilitária de benchmark utilizando `console.time()` / `console.timeEnd()` (ou `performance.now()`). Execute a busca linear ($O(n)$) e a busca binária ($O(\log n)$) sobre coleções de tamanhos crescentes ($n = 1.000$, $n = 50.000$, $n = 200.000$ elementos) e registre os tempos observados.

## Cobertura e critérios de conclusão

- [ ] **Recursividade e caso base:** Implementação correta sem estouro de pilha (*stack overflow*) para valores válidos.
- [ ] **Complexidade básica de algoritmos:** Identificação clara de consumo de tempo e memória de cada algoritmo.
- [ ] **Big O — noções básicas e análise assintótica:** Explicação das classes $O(1)$, $O(\log n)$, $O(n)$ e $O(n^2)$ com dados empíricos comparados.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Fatorial de `5` | `120` calculado por recursão | Pendente |
| Fatorial com entrada `-3` | Lançar erro de validação sem entrar em loop infinito | Pendente |
| Busca binária em array ordenado de 100.000 itens | Encontrar o item em no máximo 17 iterações | Pendente |
| Busca linear vs binária em 100.000 itens | Busca binária significativamente mais rápida com medição em milissegundos | Pendente |

## Limites do exercício

Não é necessário implementar algoritmos avançados de grafos ou estruturas complexas como árvores rubro-negras. O foco é a fixação da intuição matemática e prática de Big O e recursão.

## Minha solução

Aguardando tentativa do usuário. Informe o arquivo de código e o relatório comparativo.

## Entrega e evidências

- Arquivo `next-lab/scripts/fundamentos/04-complexidade-big-o.ts`.
- Tabela preenchida com as medições de tempo reais obtidas no seu computador.
- Análise de 1 parágrafo explicando por que operações $O(n^2)$ em renderização front-end (como loops aninhados em listas de componentes React) causam travamentos na UI.

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** programar a recursão e o comparador de busca binária vs linear.

## Fontes de estudo

- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)
- [MDN Web Docs — Recursão](https://developer.mozilla.org/pt-BR/docs/Glossary/Recursion)
