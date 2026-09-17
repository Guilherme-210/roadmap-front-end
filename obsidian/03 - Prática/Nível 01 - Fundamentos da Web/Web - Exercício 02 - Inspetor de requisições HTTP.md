---
tipo: exercicio
status: proposto
subnivel: "1.2"
criado: "2026-09-17"
---

# Web - Exercício 02 - Inspetor de requisições HTTP

**Projeto:** Desconstrução e Análise Manual de Mensagens HTTP
**Nível:** [[Nível 01 - Fundamentos da Web#1.2 — Protocolo HTTP e Mensagens]]
**Pré-requisitos:** [[Web - Exercício 01 - Mapa da arquitetura web]]
**Rota proposta:** Exercício prático em terminal (via `curl`) e no DevTools do navegador.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Compreender a fundo a estrutura do protocolo HTTP/HTTPS, dissecando mensagens textuais de Request e Response (linha de início, headers e body), analisando a composição de URLs e query strings, a negociação de conteúdo via `Content-Type` e a importância do handshake TLS/SSL para a segurança dos dados em trânsito.

## Enunciado e etapas

### 1. Dissecando a anatomia de uma URL
Decomponha e explique cada segmento da URL abaixo:
`https://api.loja.com:8443/v1/produtos/busca?categoria=livros&ordem=menor_preco#pagina-2`
- Esquema/Protocolo (`https://`)
- Subdomínio e Domínio (`api.loja.com`)
- Porta (`:8443`)
- Caminho (*Path*: `/v1/produtos/busca`)
- Query Parameters (`?categoria=livros&ordem=menor_preco`)
- Fragmento/Hash (`#pagina-2`)

### 2. Inspeção de requisição em texto bruto via curl
Abra o terminal e execute uma requisição verbal com o comando `curl -v` para uma API pública (ex.: `https://jsonplaceholder.typicode.com/posts/1`):
- Analise o processo de handshake TLS/SSL (versão do protocolo, certificado digital e criptografia).
- Extraia a **Linha de Requisição** (Método, Caminho, Versão HTTP).
- Extraia os **Request Headers** enviados (`Host`, `User-Agent`, `Accept`).
- Extraia a **Linha de Status** da resposta (`HTTP/2 200` ou `HTTP/1.1 200 OK`).
- Extraia os **Response Headers** (`Content-Type`, `Content-Length`, `Date`).
- Extraia o **Body** retornado em formato JSON.

### 3. Envio de payload no Body com cabeçalho Content-Type
Execute uma requisição POST utilizando `curl` enviando dados no corpo:
- Defina o cabeçalho explícito `-H "Content-Type: application/json"`.
- Envie um payload JSON (`-d '{"title": "Novo Post", "userId": 1}'`).
- Observe a resposta do servidor confirmando a criação e o cabeçalho `Content-Type` de retorno.
- Experimente enviar o mesmo corpo sem o header de `Content-Type` ou com formato incorreto para notar como o servidor lida com a ausência de especificação do formato.

## Cobertura e critérios de conclusão

- [ ] **Protocolo HTTP e versão segura HTTPS:** Compreensão de portas padrão (80 para HTTP, 443 para HTTPS) e criptografia ponta a ponta.
- [ ] **Criptografia com TLS/SSL:** Identificação do certificado e proteção contra interceptação (*Man-in-the-Middle*).
- [ ] **Estrutura de Request e Response:** Separação visual de linha de início, cabeçalhos e corpo da mensagem.
- [ ] **Estrutura de URL e Query parameters:** Extração e manipulação de parâmetros de busca.
- [ ] **Headers HTTP e cabeçalho Content-Type:** Papel do header na serialização e deserialização dos dados.
- [ ] **Body da mensagem e formato JSON:** Envio e recepção de dados estruturados.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Executar `curl -v https://jsonplaceholder.typicode.com/posts/1` | Exibir linhas `>` (request), `<` (response) e handshake TLS | Pendente |
| Enviar POST com body JSON e `Content-Type: application/json` | Servidor processa o JSON e retorna status `201` com o item criado | Pendente |
| URL com query params contendo espaços ou acentos | Observar a codificação percentual (*URL encoding* / percent-encoding) | Pendente |

## Limites do exercício

Não é necessário criar um servidor backend do zero. Usaremos serviços mock públicos conceituados como JSONPlaceholder ou HTTPBin.

## Minha solução

Aguardando tentativa do usuário. Informe os comandos e respostas registradas.

## Entrega e evidências

- Registro dos logs do `curl -v` identificando as 3 partes da request e da response.
- Explicação do porquê uma requisição HTTPS não pode ser lida em texto claro por sniffers na rede local (Wi-Fi público).

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** executar os comandos de curl e documentar as mensagens HTTP.

## Fontes de estudo

- [MDN Web Docs — Uma visão geral do HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview)
- [MDN Web Docs — Mensagens HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Messages)
