---
tipo: exercicio
status: proposto
subnivel: "4.6"
criado: "2026-09-17"
---

# JavaScript - Exercício 06 - Cliente HTTP com Fetch

**Projeto:** Cliente HTTP Completo com Fetch API, Cancelamento de Requisições e Timeout
**Nível:** [[Nível 04 - JavaScript#4.6 — APIs]]
**Pré-requisitos:** [[JavaScript - Exercício 05 - Agregador de APIs assíncrono]]
**Rota proposta:** `/exercicios/javascript/06-fetch-api`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Implementar um cliente de consumo HTTP profissional utilizando exclusivamente a **Fetch API** nativa, dominando a passagem de cabeçalhos customizados (`Headers`), parsing de JSON com proteção contra falhas, tratamento preciso da armadilha de respostas com status de erro (onde o Fetch NÃO cai no bloco `catch` em status 4xx ou 5xx) e cancelamento sob demanda via **`AbortController`** com proteção contra condições de corrida (*race conditions*).

## Enunciado e etapas

### 1. Consumo básico com GET e parsing seguro de JSON
- Crie uma função `buscarUsuarios()` que consuma `https://jsonplaceholder.typicode.com/users`.
- Faça o parsing da resposta com `await response.json()`.
- Demonstre o tratamento da propriedade `response.ok`: force um erro intencional (ex.: URL `/users/99999`) e mostre como disparar um erro manual quando `response.ok === false`, permitindo que o bloco `catch` trate o status code `404`.

### 2. Envio de dados com POST e cabeçalhos customizados
Implemente uma função `criarPost(novoPost)`:
- Configure as opções do fetch: `method: "POST"`.
- Adicione o cabeçalho obrigatório `headers: { "Content-Type": "application/json" }`.
- Serialização do corpo da mensagem com `body: JSON.stringify(novoPost)`.
- Capture o objeto criado com ID retornado pelo servidor e exiba-o na interface.

### 3. Cancelamento de requisições com `AbortController`
Construa uma caixa de busca dinâmica (*search as you type*):
- Crie uma instância de `AbortController()` antes de disparar a busca.
- Passe o sinal `controller.signal` nas opções do fetch.
- Se o usuário digitar um novo caractere antes da requisição anterior terminar, chame `controller.abort()` na requisição pendente e dispare uma nova.
- No bloco `catch`, diferencie um erro comum de conexão de um cancelamento voluntário checando `error.name === "AbortError"`.

### 4. Implementação de Timeout automático de rede
- Crie uma função utilitária `fetchComTimeout(url, opcoes, timeoutMs = 5000)` que utilize `AbortSignal.timeout(timeoutMs)` (recurso nativo moderno) para abortar requisições que fiquem presas por instabilidade na rede, exibindo aviso de "Tempo limite excedido".

## Cobertura e critérios de conclusão

- [ ] **Fetch API e métodos HTTP:** Execução de requisições GET e POST completas.
- [ ] **Tratamento de status e erros:** Verificação de `response.ok` e `response.status`.
- [ ] **Headers e serialização JSON:** Envio de `Content-Type` e uso correto de `JSON.stringify()` e `.json()`.
- [ ] **AbortController e cancelamento:** Prevenção de respostas atrasadas substituírem resultados atuais (Race Conditions).
- [ ] **Timeout de requisições:** Mecanismo de defesa contra chamadas lentas ou travadas.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Requisitar endpoint inexistente (404) | Código identifica `response.ok === false` e lança erro amigável ao usuário | Pendente |
| Digitar rapidamente 5 letras em campo de busca | As 4 requisições anteriores são canceladas (`AbortError`) e apenas a última é renderizada | Pendente |
| Enviar POST com body JSON | Resposta 201 Created confirmando recebimento do payload | Pendente |
| Simular timeout de 100ms em requisição lenta | O fetch é abortado com erro de Timeout sem congelar a UI | Pendente |

## Limites do exercício

Não instale bibliotecas como Axios ou TanStack Query para este exercício; o objetivo é dominar a Fetch API pura do navegador antes de usar abstrações de alto nível.

## Minha solução

Aguardando tentativa do usuário. Informe a rota criada e as evidências.

## Entrega e evidências

- Página em `next-lab/app/exercicios/javascript/06-fetch-api/page.tsx`.
- Tabela preenchida com a verificação do cancelamento no DevTools Network (coluna Status indicando `(canceled)`).
- Resumo de 1 parágrafo: por que uma resposta HTTP com status `500 Internal Server Error` NÃO é capturada pelo `catch` do Fetch por padrão?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** criar a página do cliente fetch com o campo de busca e AbortController.

## Fontes de estudo

- [MDN Web Docs — Usando a Fetch API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN Web Docs — AbortController](https://developer.mozilla.org/pt-BR/docs/Web/API/AbortController)
