---
tipo: exercicio
status: proposto
subnivel: "0.3"
criado: "2026-09-17"
---

# Fundamentos - Exercício 03 - Gerenciador de tarefas CLI

**Projeto:** Gerenciador de Tarefas e Estruturas de Dados em Memória
**Nível:** [[Nível 00 - Fundamentos de programação e ambiente#0.3 — Lógica: Funções e Coleções]]
**Pré-requisitos:** [[Fundamentos - Exercício 02 - Validador de dados]]
**Rota proposta:** Exercício executável em terminal / script (`scripts/fundamentos/03-tarefas-colecoes.ts` ou `.js`).

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Criar uma biblioteca de gerenciamento de tarefas em memória que explore funções puras, controle estrito de escopo (global, bloco e função), modelagem de dados com objetos e arrays, e a implementação manual de estruturas de dados fundamentais: pilha (LIFO), fila (FIFO) e lista encadeada simples.

## Enunciado e etapas

### 1. Funções, parâmetros e escopo
Construa funções para gerenciar tarefas:
- Funções declaradas (`function`) e funções anônimas/arrow functions.
- Parâmetros com valores padrão, parâmetros posicionais e retorno explícito de objetos de status (`{ sucesso: boolean, dado?: any, mensagem: string }`).
- Demonstre em código o isolamento de escopo de bloco (`let`/`const`) versus escopo de função, evidenciando como variáveis internas não vazam para o escopo externo.

### 2. Manipulação de Arrays e Objetos
Modele as tarefas com objetos contendo: `id`, `titulo`, `prioridade` (`"baixa"` | `"media"` | `"alta"`), `concluida` (boolean) e `criadaEm` (timestamp).
- Implemente operações elementares em arrays: adicionar (`push`/`unshift`), remover por índice (`splice`/`pop`), busca de elemento e atualização sem mutação acidental.
- Demonstre a leitura e alteração de propriedades do objeto por notação de ponto e colchetes.

### 3. Implementação de Pilha (Stack - LIFO)
Crie uma classe ou fábrica de funções que implemente uma **Pilha** para histórico de ações do usuário (para funcionalidade de "Desfazer" / *Undo*), com os métodos `push(item)`, `pop()`, `peek()` e `isEmpty()`.

### 4. Implementação de Fila (Queue - FIFO)
Implemente uma **Fila** para processamento de tarefas em ordem de chegada, com os métodos `enqueue(item)`, `dequeue()`, `front()` e `size()`.

## Cobertura e critérios de conclusão

- [ ] **Funções, parâmetros, argumentos e retorno:** Assinaturas de função claras, valores default e retorno padronizado.
- [ ] **Escopo de variáveis:** Diferenciação prática entre escopo global, escopo de bloco e escopo léxico/função.
- [ ] **Arrays e métodos elementares:** Adição, remoção, iteração e manipulação por índice.
- [ ] **Objetos (chaves, valores, propriedades):** Estrutura de dados representativa com tipos variados e acesso dinâmico por chave.
- [ ] **Estruturas de dados básicas (pilha e fila):** Implementação manual correta dos comportamentos LIFO e FIFO.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Inserir ações `A`, `B` e `C` na pilha e chamar `pop()` | Retornar `C` primeiro (comportamento LIFO) | Pendente |
| Inserir tarefas `1`, `2` e `3` na fila e chamar `dequeue()` | Retornar `1` primeiro (comportamento FIFO) | Pendente |
| Chamar `pop()` ou `dequeue()` em estrutura vazia | Retornar `null` ou lançar erro controlado sem crash | Pendente |
| Tentar acessar variável declarada dentro de um bloco de função | Erro de referência em tempo de compilação/execução comprovando isolamento de escopo | Pendente |

## Limites do exercício

Não utilize estruturas pré-prontas de bibliotecas de terceiros para a pilha e fila; o objetivo pedagógico é a implementação algorítmica manual com arrays ou nós.

## Minha solução

Aguardando tentativa do usuário. Informe os arquivos criados/modificados.

## Entrega e evidências

- Arquivo de script em `next-lab/scripts/fundamentos/03-tarefas-colecoes.ts`.
- Tabela de verificação preenchida com as saídas reais.
- Explicação de 1 parágrafo contrastando o caso de uso real de uma Pilha versus uma Fila no desenvolvimento front-end (ex.: histórico de navegação vs fila de notificações).

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** implementar as funções e as classes/fábricas de Pilha e Fila.

## Fontes de estudo

- [MDN Web Docs — Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)
- [MDN Web Docs — Trabalhando com objetos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects)
