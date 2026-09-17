---
tipo: exercicio
status: proposto
subnivel: "1.3"
criado: "2026-09-17"
---

# Web - Exercício 03 - Laboratório de métodos e status

**Projeto:** Matriz de Verificação Semântica de Verbos e Códigos de Status HTTP
**Nível:** [[Nível 01 - Fundamentos da Web#1.3 — Métodos e Status Codes HTTP]]
**Pré-requisitos:** [[Web - Exercício 02 - Inspetor de requisições HTTP]]
**Rota proposta:** Exercício prático em script Node/Fetch ou requisições via terminal / DevTools.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Consolidar a semântica de comunicação HTTP RESTful, dominando a escolha adequada dos verbos HTTP (GET, POST, PUT, PATCH, DELETE), as noções essenciais de **segurança** (método que não altera o estado no servidor) e **idempotência** (múltiplas chamadas idênticas produzem o mesmo efeito colateral), além de reconhecer e tratar os principais códigos de status das famílias 2xx, 3xx, 4xx e 5xx.

## Enunciado e etapas

### 1. Prática e comparação dos métodos HTTP (CRUD)
Utilizando o serviço `https://jsonplaceholder.typicode.com` ou `https://httpbin.org`:
- Execute uma requisição `GET` para leitura de dados (seguro e idempotente).
- Execute uma requisição `POST` para criação de novo recurso (não seguro e não idempotente).
- Execute uma requisição `PUT` para substituição completa de um recurso existente (idempotente).
- Execute uma requisição `PATCH` para atualização parcial de apenas um campo do recurso (nem sempre idempotente).
- Execute uma requisição `DELETE` para remoção do recurso (idempotente).

### 2. Matriz de Idempotência e Segurança
Preencha a matriz teórica e prática justificando:
- Por que chamar 10 vezes consecutivas `PUT /users/1 {"nome": "Guilherme"}` deixa o servidor no mesmo estado final, enquanto 10 vezes `POST /users {"nome": "Guilherme"}` geraria 10 usuários duplicados caso não haja chave de idempotência.

### 3. Simulador de códigos de status com HTTPBin
Faça chamadas diretas para o endpoint `https://httpbin.org/status/:code` disparando intencionalmente e registrando o comportamento nos seguintes códigos de status:
- **2xx (Sucesso):** `200 OK`, `201 Created` (após criação), `204 No Content` (após deleção).
- **3xx (Redirecionamento):** `301 Moved Permanently`, `302 Found`, `304 Not Modified` (uso de cache).
- **4xx (Erros do cliente):** `400 Bad Request`, `401 Unauthorized` (falta de autenticação), `403 Forbidden` (sem permissão de acesso), `404 Not Found`.
- **5xx (Erros do servidor):** `500 Internal Server Error`, `502 Bad Gateway`, `503 Service Unavailable`.

### 4. Tratamento no código front-end
Escreva uma função em JavaScript/TypeScript utilizando `fetch` que avalie `response.ok` (que cobre o intervalo 200–299) e faça o tratamento diferencial de acordo com a faixa de status recebida, exibindo mensagens claras ao usuário final.

## Cobertura e critérios de conclusão

- [ ] **Métodos HTTP principais:** Demonstração prática do uso correto de GET, POST, PUT, PATCH e DELETE.
- [ ] **Semântica dos métodos (idempotência e segurança):** Explicação clara do impacto colateral de cada verbo.
- [ ] **Categorias de Status Codes HTTP:**
  - [ ] 2xx (Sucesso: 200, 201, 204)
  - [ ] 3xx (Redirecionamento: 301, 302, 304)
  - [ ] 4xx (Erro do cliente: 400, 401, 403, 404)
  - [ ] 5xx (Erro do servidor: 500, 502, 503)

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Chamada para `https://httpbin.org/status/201` | Status `201 Created` com `response.ok === true` | Pendente |
| Chamada para `https://httpbin.org/status/404` | Status `404 Not Found` com `response.ok === false` | Pendente |
| Chamada para `https://httpbin.org/status/500` | Status `500 Internal Server Error` capturado no fluxo de erro | Pendente |
| Diferença entre PUT e PATCH | PUT substitui todo o payload; PATCH atualiza somente campos fornecidos | Pendente |

## Limites do exercício

Não é necessário configurar rotas no Next.js para este exercício; a execução pode ser feita via script Node/TypeScript ou console do navegador.

## Minha solução

Aguardando tentativa do usuário. Informe a implementação da função de fetch e as evidências.

## Entrega e evidências

- Script ou código demonstrando o uso de cada verbo HTTP.
- Tabela de casos obrigatórios preenchida.
- Resumo de 1 parágrafo: qual é a diferença essencial entre um erro `401 Unauthorized` e um erro `403 Forbidden` no desenvolvimento front-end?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** implementar o script com as chamadas de teste e tratamento de status.

## Fontes de estudo

- [MDN Web Docs — Métodos de requisição HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods)
- [MDN Web Docs — Códigos de status de respostas HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)
