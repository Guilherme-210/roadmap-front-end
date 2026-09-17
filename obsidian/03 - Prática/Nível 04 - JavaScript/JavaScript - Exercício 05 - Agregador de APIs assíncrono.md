---
tipo: exercicio
status: proposto
subnivel: "4.5"
criado: "2026-09-17"
---

# JavaScript - Exercício 05 - Agregador de APIs assíncrono

**Projeto:** Orquestrador Assíncrono com Promises, Concorrência e Laboratório do Event Loop
**Nível:** [[Nível 04 - JavaScript#4.5 — JavaScript assíncrono]]
**Pré-requisitos:** [[JavaScript - Exercício 04 - Fábrica de funções utilitárias]]
**Rota proposta:** `/exercicios/javascript/05-assincrono`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Compreender com clareza cristalina a natureza assíncrona e não-bloqueante (*single-threaded non-blocking*) do JavaScript, dominando o ciclo de vida de **Promises**, a sintaxe limpa de **async/await** com tratamento via **try/catch**, os padrões de concorrência com **`Promise.all`** e **`Promise.allSettled`**, e o mecanismo interno do **Event Loop** (Call Stack, Web APIs, Microtask Queue e Macrotask Queue).

## Enunciado e etapas

### 1. Criação manual de Promises e simulação de latência
- Implemente uma função `esperar(ms)` que retorne uma Promise resolvida após um tempo determinado com `setTimeout`.
- Crie uma função `buscarCotacao(moeda)` que simule a busca de câmbio:
  - 80% das vezes resolve com sucesso após delay randômico (300ms a 1500ms).
  - 20% das vezes rejeita a Promise intencionalmente (`reject(new Error("Falha na conexão com a bolsa"))`).

### 2. Consumo com Async/Await e fluxo defensivo
- Crie a rotina consumidora utilizando exclusivamente `async/await`.
- Encapsule a chamada em um bloco `try/catch/finally`:
  - `try`: exibe indicador de carregamento (*loading*) e processa o retorno.
  - `catch`: intercepta a rejeição e define mensagem de erro tratada.
  - `finally`: desativa o indicador de carregamento independentemente de sucesso ou falha.

### 3. Padrões de concorrência: `Promise.all` vs `Promise.allSettled`
Implemente um painel de monitoramento que precise buscar cotações de 4 moedas simultaneamente (USD, EUR, GBP, BTC):
- **Cenário A — `Promise.all` (Tudo ou Nada):** dispara as 4 requisições em paralelo. Se uma falhar, toda a operação é interrompida no `catch`. Meça o tempo total e comprove que ele equivale ao tempo da requisição mais lenta, e não à soma de todas.
- **Cenário B — `Promise.allSettled` (Resiliente):** dispara as 4 requisições em paralelo e aguarda a finalização de todas, iterando sobre os resultados e exibindo na tela quais tiveram sucesso (`status: "fulfilled"`) e quais falharam (`status: "rejected"`), sem derrubar o painel inteiro.

### 4. Laboratório Prático do Event Loop: Microtasks vs Macrotasks
Crie um botão de teste de ordem de execução e preveja a sequência exata de saída do seguinte trecho:
```js
console.log("1: Síncrono inicial");
setTimeout(() => console.log("2: Macrotask (setTimeout)"), 0);
Promise.resolve().then(() => console.log("3: Microtask (Promise)"));
queueMicrotask(() => console.log("4: Microtask nativa"));
console.log("5: Síncrono final");
```
- Execute no console e explique por que a ordem final observada é `1 -> 5 -> 3 -> 4 -> 2`.

## Cobertura e critérios de conclusão

- [ ] **Síncrono vs Assíncrono:** Entendimento de operações bloqueantes vs delegadas para o runtime.
- [ ] **Promises e async/await:** Manipulação fluida de estados (pending, fulfilled, rejected).
- [ ] **Tratamento com try/catch/finally:** Gestão segura de fluxos assíncronos.
- [ ] **`Promise.all`:** Execução paralela rápida com comportamento fail-fast.
- [ ] **`Promise.allSettled`:** Agregação resiliente tolerante a falhas parciais.
- [ ] **Event Loop (Microtasks vs Macrotasks):** Compreensão da prioridade da fila de Promises sobre timers.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Executar `Promise.all` com uma requisição que falha | A promessa mãe é imediatamente rejeitada com o erro da que falhou | Pendente |
| Executar `Promise.allSettled` com 3 sucessos e 1 falha | Retornar array de 4 itens, renderizando 3 cotações e 1 alerta de erro individual | Pendente |
| Testar ordem do Event Loop | Saída no console rigorosamente `1 -> 5 -> 3 -> 4 -> 2` | Pendente |
| Tempo total de 3 promises paralelas de 1s | Tempo total próximo a 1s (em paralelo) e não 3s (sequencial) | Pendente |

## Limites do exercício

Não utilize bibliotecas como RxJS ou gerenciadores de fila de mensagens externos; utilize unicamente as APIs assíncronas padrão da especificação ECMAScript.

## Minha solução

Aguardando tentativa do usuário. Informe a rota criada e as evidências.

## Entrega e evidências

- Página em `next-lab/app/exercicios/javascript/05-assincrono/page.tsx`.
- Tabela preenchida com as medições de tempo e verificações de concorrência.
- Diagrama ou resumo em texto explicando a diferença de prioridade entre a Fila de Microtasks e a Fila de Macrotasks no Event Loop.

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** programar os cenários de Promises, allSettled e o teste de Event Loop.

## Fontes de estudo

- [MDN Web Docs — JavaScript assíncrono](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous)
- [javascript.info — Event loop: microtasks and macrotasks](https://javascript.info/event-loop)
- [MDN Web Docs — Promise.allSettled()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)
