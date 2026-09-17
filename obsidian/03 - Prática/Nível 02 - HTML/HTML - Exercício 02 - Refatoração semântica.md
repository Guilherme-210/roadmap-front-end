---
tipo: exercicio
status: proposto
subnivel: "2.2"
criado: "2026-09-17"
---

# HTML - Exercício 02 - Refatoração semântica

**Projeto:** Reestruturação de Portal de Notícias / Artigo de Blog com Tags Semânticas
**Nível:** [[Nível 02 - HTML#2.2 — HTML semântico]]
**Pré-requisitos:** [[HTML - Exercício 01 - Página de perfil]]
**Rota proposta:** `/exercicios/html/02-semantica`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Eliminar o vício de desenvolvimento conhecido como *"div soup"* (uso indiscriminado de `<div>` para tudo), refatorando uma estrutura genérica de portal de notícias/blog para a arquitetura semântica oficial do HTML5, aplicando as tags estruturais corretas: `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<aside>` e `<footer>`.

## Enunciado e etapas

### 1. Diagnóstico e identificação do "Div Soup"
Analise mentalmente uma página comum que utiliza apenas `<div class="cabecalho">`, `<div class="menu">`, `<div class="conteudo">`, `<div class="post">`, `<div class="barra-lateral">` e `<div class="rodape">`. Identifique as perdas em acessibilidade (leitores de tela não encontram *landmarks*) e indexação de mecanismos de busca (SEO).

### 2. Implementação do Header, Nav e Main
- Crie o topo do portal com `<header>`, contendo o logotipo institucional e a barra de navegação global estruturada com `<nav>` e lista não ordenada de links.
- Defina a área de conteúdo primário e exclusivo da página utilizando a tag `<main>` (garantindo que exista apenas uma tag `<main>` visível por documento).

### 3. Modelagem de Article e Section
Dentro do `<main>`:
- Encapsule o artigo de notícia principal dentro da tag `<article>`, representando um conteúdo independente que faça sentido por si só mesmo se compartilhado fora do portal.
- Divida o artigo em seções temáticas utilizando `<section>`, cada uma com seu próprio título correspondente (`<h2>` / `<h3>`).
- Adicione uma `<section>` de comentários de usuários ao final do artigo, onde cada comentário individual é também um `<article>` secundário aninhado.

### 4. Conteúdo complementar com Aside e encerramento com Footer
- Implemente uma barra lateral de conteúdo relacionado com `<aside>`, contendo links de artigos recomendados, biografia do autor ou tópicos populares do portal.
- Conclua o documento com a tag `<footer>`, contendo direitos autorais, links de políticas de privacidade e termos de uso.

## Cobertura e critérios de conclusão

- [ ] **`<header>`:** Cabeçalho introdutório semântico para a página e/ou seções.
- [ ] **`<main>`:** Identificação semântica do núcleo de conteúdo principal do documento.
- [ ] **`<nav>`:** Agrupamento exclusivo para conjuntos substanciais de links de navegação.
- [ ] **`<section>`:** Agrupamento temático de conteúdo que possui cabeçalho próprio.
- [ ] **`<article>`:** Conteúdo independente e reutilizável (post, notícia, comentário).
- [ ] **`<aside>`:** Conteúdo tangencial ou complementar ao redor do assunto principal.
- [ ] **`<footer>>`:** Rodapé estrutural com informações de encerramento e metadados.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Inspecionar a árvore de acessibilidade no DevTools | Landmarks semânticos (`banner`, `main`, `navigation`, `complementary`, `contentinfo`) mapeados automaticamente | Pendente |
| Uso de `<section>` sem heading interno | Evitar; toda `<section>` deve possuir um título identificador | Pendente |
| Garantir que `<article>` seja independente | Se extraído sozinho, o bloco `<article>` faz sentido completo para leitura | Pendente |

## Limites do exercício

Não inclua scripts de interatividade ou frameworks pesados de CSS; o foco estrito é a escolha arquitetural correta de cada elemento HTML semântico.

## Minha solução

Aguardando tentativa do usuário. Informe a rota ou arquivos de código.

## Entrega e evidências

- Código da página em `next-lab/app/exercicios/html/02-semantica/page.tsx`.
- Tabela preenchida com as verificações da árvore de acessibilidade.
- Breve explicação: qual a diferença prática entre utilizar uma `<section>` e um `<article>`?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** estruturar o código do portal com a hierarquia semântica completa.

## Fontes de estudo

- [MDN Web Docs — Elementos semânticos do HTML](https://developer.mozilla.org/pt-BR/docs/Glossary/Semantics#elementos_sem%C3%A2nticos)
- [W3C HTML5 — Sections and Articles](https://www.w3.org/WAI/tutorials/page-structure/regions/)
