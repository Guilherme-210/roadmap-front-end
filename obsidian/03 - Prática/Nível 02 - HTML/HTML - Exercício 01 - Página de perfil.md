---
tipo: exercicio
status: proposto
subnivel: "2.1"
criado: "2026-09-17"
---

# HTML - Exercício 01 - Página de perfil

**Projeto:** Página de Perfil Profissional Completa em HTML Puro
**Nível:** [[Nível 02 - HTML#2.1 — HTML básico]]
**Pré-requisitos:** [[Web - Exercício 01 - Mapa da arquitetura web]]
**Rota proposta:** `/exercicios/html/01-perfil`, no next-lab (ou arquivo `index.html` estático).

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Construir uma página web completa e estruturada utilizando exclusivamente HTML fundamental, dominando a árvore de elementos, hierarquia de títulos (`h1` a `h6`), parágrafos, âncoras/links relativos e absolutos, inserção correta de imagens, listas ordenadas e não ordenadas, tabelas tabulares e controles essenciais de formulário.

## Enunciado e etapas

### 1. Estrutura fundamental do documento e metadados
Crie o esqueleto básico do documento HTML5:
- Declaração do `<!DOCTYPE html>`.
- Tag `<html>` com atributo de idioma `lang="pt-BR"`.
- Tag `<head>` configurada com `<meta charset="UTF-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1.0">` e `<title>`.
- Tag `<body>` dividindo a página em seções lógicas.

### 2. Hierarquia tipográfica, parágrafos e hiperlinks
- Defina um único `<h1>` como título principal da página.
- Utilize subtítulos lógicos `<h2>` e `<h3>` para estruturar seções como "Sobre mim", "Habilidades", "Experiência" e "Contato".
- Escreva parágrafos explicativos (`<p>`), aplique ênfase semântica com `<strong>` e `<em>`.
- Crie links internos com navegação por âncoras (`href="#contato"`) e links externos com `target="_blank"` acompanhado de `rel="noopener noreferrer"`.

### 3. Mídia, listas e tabelas de dados
- Insira uma imagem de perfil (`<img>`) com dimensões explícitas (`width` e `height`) e texto alternativo descritivo obrigatório (`alt`).
- Crie uma lista não ordenada (`<ul>` e `<li>`) para competências técnicas e uma lista ordenada (`<ol>` e `<li>`) para histórico de passos de carreira ou formação.
- Monte uma tabela (`<table>`) para detalhar projetos anteriores, utilizando corretamente `<caption>`, `<thead>`, `<tbody>`, `<tr>`, `<th>` (com atributo `scope="col"`) e `<td>`.

### 4. Coleta básica de dados com controles de formulário
Ao final da página, insira uma área de contato simples contendo:
- Campo de texto (`<input type="text">`) associado a uma `<label>` via atributo `for` e `id`.
- Campo de e-mail (`<input type="email">`).
- Seleção de assunto com `<select>` e múltiplos `<option>`.
- Área de mensagem com `<textarea>`.
- Botão de submissão (`<button type="submit">`).

## Cobertura e critérios de conclusão

- [ ] **Estrutura HTML:** Documento válido com `<!DOCTYPE>`, `lang`, `meta viewport` e tags base.
- [ ] **Elementos e atributos:** Uso correto de atributos globais (`id`, `class`, `title`) e específicos.
- [ ] **Headings, parágrafos e links:** Hierarquia contínua sem pular níveis de títulos (h1 $\rightarrow$ h2 $\rightarrow$ h3) e links com segurança.
- [ ] **Imagens, listas e tabelas:** Imagem com alt descritivo, listas aninhadas e tabela semântica com cabeçalho.
- [ ] **Controles básicos de formulário:** Associação estrita de `<label>` e `<input>`, além de buttons, selects e textarea.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Clicar no link âncora interno `#contato` | A página rola suavemente até o bloco de contato | Pendente |
| Clicar sobre o texto de uma `<label>` | O cursor de foco é transferido imediatamente para o input correspondente | Pendente |
| Testar documento no Validador W3C | Sem erros estruturais ou tags não fechadas | Pendente |
| Imagem com link quebrado | O texto do atributo `alt` é renderizado no lugar da imagem | Pendente |

## Limites do exercício

Não estilize com CSS complexo nem adicione interatividade com JavaScript nesta etapa. O objetivo é avaliar a qualidade e solidez da marcação puramente estrutural em HTML.

## Minha solução

Aguardando tentativa do usuário. Informe a rota criada no next-lab ou arquivo HTML.

## Entrega e evidências

- Arquivo em `next-lab/app/exercicios/html/01-perfil/page.tsx` (ou arquivo `index.html`).
- Tabela preenchida com os resultados observados nos testes manuais.
- Validação do código no validador oficial do W3C.

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** criar a marcação HTML da página de perfil com todos os elementos exigidos.

## Fontes de estudo

- [MDN Web Docs — Noções básicas de HTML](https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [W3C Markup Validation Service](https://validator.w3.org/)
