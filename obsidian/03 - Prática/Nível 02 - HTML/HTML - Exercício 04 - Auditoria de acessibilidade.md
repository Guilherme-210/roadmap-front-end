---
tipo: exercicio
status: proposto
subnivel: "2.4"
criado: "2026-09-17"
---

# HTML - Exercício 04 - Auditoria de acessibilidade

**Projeto:** Auditoria, Correção e Enriquecimento A11y com HTML Semântico e ARIA
**Nível:** [[Nível 02 - HTML#2.4 — Acessibilidade HTML]]
**Pré-requisitos:** [[HTML - Exercício 03 - Formulário de cadastro validado]]
**Rota proposta:** `/exercicios/html/04-acessibilidade`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Compreender e aplicar os princípios fundamentais de Acessibilidade na Web (a11y / WCAG), garantindo que a interface seja totalmente operável via teclado, perceptível por leitores de tela e robusta contra ambiguidades visuais, aplicando a Primeira Regra da ARIA ("não use ARIA se existir uma tag HTML semântica nativa equivalente"), além de utilizar atributos `aria-*` onde a semântica nativa não for suficiente.

## Enunciado e etapas

### 1. Navegação exclusivamente por teclado e ordem de foco
Construa uma interface de diálogo/cartão interativo:
- Teste a navegação usando apenas a tecla `Tab` e `Shift + Tab`.
- Certifique-se de que todos os elementos interativos (`<a>`, `<button>`, `<input>`) recebem foco na ordem lógica de leitura.
- Garanta que o indicador visual de foco (`:focus-visible`) nunca seja removido com `outline: none` sem um substituto visível de alto contraste.
- Evite o uso de `tabindex` positivo (`tabindex="1"`), utilizando apenas `tabindex="0"` (para incluir elemento não nativo na ordem natural) ou `tabindex="-1"` (para foco programático).

### 2. Associação estrita de labels, imagens e landmarks
- Corrija formulários onde existam inputs sem `<label>` associado ou botões que contenham apenas ícones sem texto visual, adicionando `aria-label="Nome da ação"` ou um `<span>` visualmente oculto (`sr-only`).
- Configure atributos `alt` em imagens com precisão: descreva o conteúdo informativo de imagens relevantes e utilize `alt=""` explícito para imagens puramente decorativas (evitando que o leitor soletre o nome do arquivo).
- Valide que o documento possui uma árvore de *Landmarks* semânticos e uma hierarquia rigorosa de títulos sem saltos (`h1` $\rightarrow$ `h2` $\rightarrow$ `h3`).

### 3. Aplicação consciente de atributos ARIA
Implemente um componente de sanfona (*accordion*) ou abas (*tabs*):
- Utilize `role="region"` ou `role="tablist"` / `role="tab"`.
- Aplique `aria-expanded="true|false"` para comunicar o estado de abertura aos leitores de tela.
- Use `aria-controls="id-do-painel"` para vincular o botão ao conteúdo controlado.
- Use `aria-hidden="true"` para ocultar ícones decorativos SVG que gerariam ruído em leitores de tela.
- Use `aria-live="polite"` para uma área de status onde mensagens dinâmicas devem ser anunciadas sem interromper o leitor.

### 4. Auditoria automatizada com Lighthouse / axe DevTools
Execute a ferramenta Lighthouse (ou a extensão axe DevTools) do navegador sobre a página:
- Identifique possíveis apontamentos de contraste de cor, ausência de labels ou elementos interativos sem nome acessível (*accessible name*).
- Ajuste a marcação até atingir a nota 100 em Acessibilidade no Lighthouse.

## Cobertura e critérios de conclusão

- [ ] **Semântica e Landmarks:** Mapeamento claro da estrutura da página para tecnologias assistivas.
- [ ] **Teclado e foco:** Navegação fluida sem armadilhas de teclado (*keyboard trap*) e indicador de foco visível.
- [ ] **Labels e textos alternativos:** Todos os campos de formulário e botões com nome acessível identificável.
- [ ] **Hierarquia de títulos:** Estrutura de conteúdo lógica sem descontinuidades nos níveis de heading.
- [ ] **ARIA e atributos `aria-*`:** Aplicação correta de `aria-label`, `aria-expanded`, `aria-controls`, `aria-hidden` e `aria-live`.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Navegar pela página inteira usando apenas a tecla `Tab` | O anel de foco visível percorre todos os elementos interativos sem sumir | Pendente |
| Botão contendo apenas ícone SVG | Leitor de tela (ou árvore a11y) identifica o nome acessível via `aria-label` | Pendente |
| Alterar estado do accordion de fechado para aberto | `aria-expanded` alterna dinamicamente entre `"false"` e `"true"` | Pendente |
| Auditoria do Lighthouse na categoria Acessibilidade | Pontuação atingida de 100/100 | Pendente |

## Limites do exercício

Não é obrigatório cobrir suporte a leitores de tela legados específicos; concentre-se na conformidade com os padrões WCAG 2.1 nível AA e nos relatórios modernos do DevTools.

## Minha solução

Aguardando tentativa do usuário. Informe a rota criada e os relatórios obtidos.

## Entrega e evidências

- Código do componente acessível em `next-lab/app/exercicios/html/04-acessibilidade/page.tsx`.
- Captura de tela ou transcrição do relatório do Lighthouse com nota 100 em Acessibilidade.
- Breve explicação: qual é a "Primeira Regra da ARIA" e por que um `<button>` nativo é preferível a uma `<div onClick={...}>`?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** criar a página acessível e rodar o teste de navegação por teclado e Lighthouse.

## Fontes de estudo

- [W3C WAI — Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/)
- [MDN Web Docs — Guia de acessibilidade ARIA](https://developer.mozilla.org/pt-BR/docs/Web/Accessibility/ARIA)
- [W3C — ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/)
