---
tipo: exercicio
status: proposto
subnivel: "1.4"
criado: "2026-09-17"
---

# Web - Exercício 04 - Explorador de cookies e CORS

**Projeto:** Laboratório de Segurança Web, Armazenamento e Performance de Rede
**Nível:** [[Nível 01 - Fundamentos da Web#1.4 — Mecanismos Web, Segurança e Performance]]
**Pré-requisitos:** [[Web - Exercício 03 - Laboratório de métodos e status]]
**Rota proposta:** Exercício prático de análise no DevTools do navegador e simulação de scripts.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Compreender os mecanismos de persistência de sessão e identidade no navegador (Cookies e Authorization Header), dominar as regras de segurança da Política de Mesma Origem (*Same-Origin Policy*) e CORS (*Cross-Origin Resource Sharing*), analisar o ciclo de vida do cache HTTP (`Cache-Control`, `ETag`) e entender a evolução das versões do protocolo (HTTP/1.1 vs HTTP/2 vs HTTP/3).

## Enunciado e etapas

### 1. Cookies, atributos de segurança e cabeçalho Authorization
- Inspecione a aba **Application / Aplicativo $\rightarrow$ Cookies** do DevTools em um site que utilize autenticação (como GitHub ou Google).
- Analise os atributos essenciais de segurança de um cookie: `HttpOnly` (impede acesso via JavaScript contra ataques XSS), `Secure` (trafega exclusivamente sob HTTPS) e `SameSite` (`Strict`, `Lax` ou `None` para prevenção contra CSRF).
- Compare a autenticação baseada em Cookies de sessão com a autenticação baseada em tokens via cabeçalho `Authorization: Bearer <token>`, identificando prós e contras de cada modelo no front-end.

### 2. A Política de Mesma Origem (SOP) e o mecanismo CORS
- Entenda o conceito estrito de **Origem** (combinação de protocolo + domínio + porta).
- Simule mentalmente ou em código uma requisição de `http://localhost:3000` para uma API em `https://api.empresa.com`.
- Descreva o que é a requisição de pré-vôo (**Preflight Request** com método `OPTIONS`) e os cabeçalhos de resposta emitidos pelo servidor:
  - `Access-Control-Allow-Origin`
  - `Access-Control-Allow-Methods`
  - `Access-Control-Allow-Headers`
- Explique claramente: quem bloqueia a requisição CORS — o servidor ou o navegador do usuário?

### 3. Cache HTTP e revalidação condicional
Abra o DevTools na aba Network e recarregue uma página com o cache desabilitado e depois com o cache habilitado:
- Identifique os cabeçalhos de controle de cache: `Cache-Control: max-age=..., public, must-revalidate` ou `no-cache` / `no-store`.
- Observe o funcionamento de revalidação com o cabeçalho `ETag` (hash do recurso): quando o navegador envia `If-None-Match: "<hash>"` e o servidor responde `304 Not Modified` sem reenviar o payload, economizando banda.

### 4. Evolução do HTTP: multiplexação e QUIC
Elabore um resumo comparativo:
- **HTTP/1.1:** Head-of-Line Blocking na camada de aplicação, necessidade de múltiplas conexões TCP paralelas.
- **HTTP/2:** Conexão TCP única, multiplexação de streams, compressão de headers (HPACK) e server push.
- **HTTP/3:** Uso de protocolo UDP com **QUIC**, eliminando o Head-of-Line Blocking no nível de transporte TCP e acelerando a inicialização da conexão segura.

## Cobertura e critérios de conclusão

- [ ] **Cookies e sessões no navegador:** Domínio dos atributos `HttpOnly`, `Secure`, `SameSite` e domínio/path.
- [ ] **Cabeçalho de autorização (Authorization Header):** Estrutura e uso de Bearer Tokens em requisições de API.
- [ ] **Políticas de mesma origem e CORS:** Explicação detalhada do fluxo Preflight (`OPTIONS`) e solução de erros clássicos de CORS no front-end.
- [ ] **Cache HTTP básico:** Interpretação de `Cache-Control`, `max-age`, `ETag` e respostas `304 Not Modified`.
- [ ] **Evolução do protocolo (HTTP/2 e HTTP/3):** Compreensão do ganho de velocidade através de multiplexação e QUIC.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Leitura de cookie com flag `HttpOnly` via `document.cookie` no console | O cookie não aparece na string retornada (protegido contra XSS) | Pendente |
| Requisição fetch com header customizado para outro domínio sem headers CORS | Erro de CORS no console emitido pelo navegador | Pendente |
| Recarregar página estática com asset já em cache | Asset servido com status `304 Not Modified` ou `(disk cache)` com tempo $< 5ms$ | Pendente |
| Identificar versão do protocolo HTTP na aba Network | Coluna "Protocol" indicando `h2`, `h3` ou `http/1.1` | Pendente |

## Limites do exercício

Não é exigido configurar servidores de proxy reverso Nginx ou balanceadores em nuvem. As verificações utilizam o navegador e APIs públicas.

## Minha solução

Aguardando tentativa do usuário. Informe as evidências e anotações obtidas no DevTools.

## Entrega e evidências

- Transcrição dos cabeçalhos de um cookie seguro e de um asset com cache `ETag`.
- Explicação passo a passo: como resolver um erro de CORS quando o backend está sob controle da sua equipe versus quando você consome uma API de terceiros que não envia `Access-Control-Allow-Origin`.

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** abrir o DevTools e realizar as inspeções de cookies, CORS e cache.

## Fontes de estudo

- [MDN Web Docs — Controle de Acesso HTTP (CORS)](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
- [MDN Web Docs — Usando cookies HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Cookies)
- [MDN Web Docs — Cache HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Caching)
