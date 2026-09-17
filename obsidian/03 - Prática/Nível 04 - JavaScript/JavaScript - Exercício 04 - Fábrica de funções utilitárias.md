---
tipo: exercicio
status: proposto
subnivel: "4.4"
criado: "2026-09-17"
---

# JavaScript - Exercício 04 - Fábrica de funções utilitárias

**Projeto:** Toolkit Funcional com Funções de Alta Ordem, Closures e Currying
**Nível:** [[Nível 04 - JavaScript#4.4 — Funções]]
**Pré-requisitos:** [[JavaScript - Exercício 03 - Construtor de perfil com objetos]]
**Rota proposta:** `/exercicios/javascript/04-funcoes`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Compreender profundamente o modelo de funções como cidadãos de primeira classe (*First-Class Citizens*) no JavaScript, dominando **Callbacks**, **Higher-Order Functions** (funções que recebem ou retornam outras funções), encapsulamento de estado léxico através de **Closures**, garantia de previsibilidade com **Funções Puras** (*Pure Functions*) e especialização gradual de argumentos com a técnica de **Currying**.

## Enunciado e etapas

### 1. Parâmetros avançados, retorno e callbacks
- Escreva uma função orquestradora `executarComLog(operacao, ...argumentos)` que receba uma função de cálculo qualquer como callback, registre no console o tempo de execução e retorne o resultado sem interferir na lógica da operação.
- Implemente suporte a parâmetros default inteligentes e retorno de funções a partir de funções.

### 2. Encapsulamento de estado com Closures
Crie duas fábricas utilizando closures para proteger variáveis do escopo global:
- **`criarContador(valorInicial = 0)`:** retorna um objeto com métodos `{ incrementar(), decrementar(), obterValor() }`, onde a variável do contador não pode ser alterada diretamente de fora.
- **`criarLimitadorDeTaxa(fn, limiteMs)`:** uma closure de *Throttle* ou *Debounce* simples que armazena a referência do timer internamente e impede que a função `fn` seja executada mais de uma vez dentro do intervalo de milissegundos especificado.

### 3. Funções Puras e efeitos colaterais
- Demonstre a refatoração de uma função impura (que mutava um array externo ou dependia do horário do sistema) para uma **Função Pura**:
  - Determinística: dadas as mesmas entradas, sempre produz a mesma saída.
  - Livre de efeitos colaterais (*side-effects*): não altera estados externos, não muta parâmetros e não emite I/O oculto.

### 4. Currying e Composição Funcional
- Implemente uma função curried para formatação de moeda ou tributação:
  ```js
  const aplicarTaxa = (taxa) => (valor) => valor + (valor * taxa);
  const aplicarIva = aplicarTaxa(0.20); // Função especializada
  console.log(aplicarIva(100)); // 120
  ```
- Crie uma função utilitária `compose(f, g)` ou `pipe(fn1, fn2, fn3)` que encadeie a execução de funções puras, onde a saída de uma alimenta a entrada da seguinte.

## Cobertura e critérios de conclusão

- [ ] **Callbacks e Higher-Order Functions:** Capacidade de passar e retornar funções dinamicamente.
- [ ] **Escopo léxico e Closures:** Retenção de variáveis de escopos superiores após o encerramento da função externa.
- [ ] **Pure Functions:** Construção de lógicas livres de mutação e independentes de estado global.
- [ ] **Currying:** Transformação de função de múltiplos argumentos em sequência de funções unárias.
- [ ] **Composição de funções:** Junção de utilitários simples para formar fluxos complexos.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Chamar `incrementar()` 3 vezes na instância de `criarContador` | O valor retornado é estritamente `3` e a variável interna permanece inacessível via inspeção direta | Pendente |
| Disparar múltiplos cliques rápidos na função protegida por debounce/throttle | Apenas uma execução é disparada dentro da janela de tempo | Pendente |
| Executar função pura 10 vezes com os mesmos argumentos | Retornar exatamente a mesma resposta em todas as 10 chamadas sem alterar nenhuma variável externa | Pendente |
| Encadeamento via `pipe(somar10, dobrar)` com entrada `5` | Execução: `(5 + 10) * 2 = 30` | Pendente |

## Limites do exercício

Não utilize bibliotecas como Lodash ou Ramda; o código das funções de alta ordem, currying e closures deve ser implementado de forma artesanal em JavaScript nativo.

## Minha solução

Aguardando tentativa do usuário. Informe a rota ou arquivos de código.

## Entrega e evidências

- Página interativa em `next-lab/app/exercicios/javascript/04-funcoes/page.tsx`.
- Tabela preenchida com as validações de closure e currying.
- Explicação de 1 parágrafo: por que os Hooks do React (como `useState` e `useEffect`) dependem intrinsecamente do conceito de Closures do JavaScript para funcionar?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** criar a página do toolkit funcional e implementar os métodos de closures e currying.

## Fontes de estudo

- [MDN Web Docs — Closures](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures)
- [javascript.info — Currying](https://javascript.info/currying-partials)
