---
tipo: exercicio
status: proposto
subnivel: "3.6"
criado: "2026-09-17"
---

# CSS - Exercício 06 - Sistema de design com tokens

**Projeto:** Mini Design System com Tokens, CSS Modules e Alternância de Tema Escuro
**Nível:** [[Nível 03 - CSS#3.6 — Arquitetura CSS]]
**Pré-requisitos:** [[CSS - Exercício 05 - Painel com variáveis e animações]]
**Rota proposta:** `/exercicios/css/06-arquitetura-tokens`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Compreender e aplicar metodologias de escalabilidade e arquitetura em CSS para projetos de médio e grande porte, estruturando um dicionário de **Design Tokens** (cores semânticas, espaçamentos, tipografia), aplicando escopo local com **CSS Modules** (eliminando colisões de nomes globais), implementando suporte robusto a temas claro e escuro (**Dark Mode**) via atributo `data-theme` e media query `prefers-color-scheme`, e contextualizando abordagens alternativas da indústria (BEM, Tailwind CSS, CSS-in-JS e Sass).

## Enunciado e etapas

### 1. Dicionário de Design Tokens e temas (Claro e Escuro)
Crie um arquivo base de tokens `tokens.css`:
- Defina as cores da marca e os tokens semânticos de superfície e texto para o tema padrão (claro):
  ```css
  :root {
    --color-bg-canvas: #f8fafc;
    --color-bg-surface: #ffffff;
    --color-text-primary: #0f172a;
    --color-text-secondary: #64748b;
    --color-border: #e2e8f0;
    --color-brand: #2563eb;
  }
  ```
- Configure a variação para tema escuro tanto por classe/atributo manual (`[data-theme="dark"]`) quanto automaticamente pela preferência do sistema operacional (`@media (prefers-color-scheme: dark)`).

### 2. Escopo local com CSS Modules
Construa componentes (um botão e um cartão de resumo) utilizando CSS Modules (`Cartao.module.css` e `Botao.module.css`):
- Declare classes simples e legíveis como `.card`, `.header`, `.title`, `.button`, `.primary`.
- Inspecione as classes geradas no HTML renderizado pelo Next.js (ex.: `Cartao_card__xYz12`) e comprove como o mecanismo de hash exclusivo impede colisões acidentais de nomes mesmo se dois componentes usarem `.card`.

### 3. Alternador de tema acessível (Theme Toggle)
- Crie um botão de alternância de tema no componente React.
- Ao clicar, alterne o atributo `data-theme="dark"` no elemento raiz `<html>` ou no contêiner da página.
- Observe a transição suave de cores de fundo e texto através de `transition: background-color 0.3s ease, color 0.3s ease;`.

### 4. Panorama arquitetural: BEM vs Tailwind vs CSS Modules
Elabore um comparativo crítico em documentação:
- **BEM (Block Element Modifier):** convenção textual estrita de nomenclatura (`.bloco__elemento--modificador`) para evitar colisão em CSS global tradicional.
- **CSS Modules:** escopo local automático semântico pelo build tool.
- **Tailwind CSS:** abordagem de utilitários atômicos na marcação, reduzindo o tamanho final do CSS em produção.
- **CSS-in-JS (ex.: Styled Components):** acoplamento de estilo e lógica no JS com overhead de runtime.

## Cobertura e critérios de conclusão

- [ ] **CSS Modules:** Isolamento de escopo sem vazamento de estilos para o documento global.
- [ ] **Design Tokens:** Estruturação semântica e hierárquica de variáveis compartilhadas.
- [ ] **Tema e Dark Mode:** Suporte simultâneo a preferência do sistema e seleção manual pelo usuário.
- [ ] **Visão comparativa de arquiteturas:** Compreensão de prós e contras entre BEM, Sass, Tailwind e CSS-in-JS.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Inspecionar classes geradas pelo CSS Module no DOM | Nomes com sufixo ou hash exclusivo gerado no build | Pendente |
| Clicar no alternador de tema Claro / Escuro | O atributo `data-theme` muda e todas as superfícies invertem paleta sem quebra de contraste | Pendente |
| Alterar preferência de tema no sistema operacional do usuário | A página reage automaticamente se estiver no modo automático | Pendente |
| Usar classe `.title` em dois módulos CSS diferentes | Cada módulo preserva seu estilo isolado sem interferência mútua | Pendente |

## Limites do exercício

Não instale novas bibliotecas complexas de temas; implemente o alternador utilizando unicamente CSS custom properties e manipulação básica de atributo no React.

## Minha solução

Aguardando tentativa do usuário. Informe a rota criada e os arquivos de estilo.

## Entrega e evidências

- Arquivos em `next-lab/app/exercicios/css/06-arquitetura-tokens/` (componentes e seus respectivos `.module.css`).
- Tabela preenchida com a verificação de troca de tema.
- Resumo de 1 parágrafo: por que o Next.js e frameworks modernos adotam CSS Modules ou Tailwind CSS por padrão em vez de arquivos CSS globais únicos?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** criar a página com tokens e alternância de Dark Mode via CSS Modules.

## Fontes de estudo

- [Next.js Docs — CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)
- [web.dev — Building a theme switch component](https://web.dev/articles/building-a-theme-switch-component?hl=pt-br)
