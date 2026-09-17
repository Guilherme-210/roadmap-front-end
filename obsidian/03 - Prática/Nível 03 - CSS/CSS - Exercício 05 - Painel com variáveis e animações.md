---
tipo: exercicio
status: proposto
subnivel: "3.5"
criado: "2026-09-17"
---

# CSS - Exercício 05 - Painel com variáveis e animações

**Projeto:** Vitrine Interativa com CSS Moderno, Variáveis Nativas e Animações Fluidas
**Nível:** [[Nível 03 - CSS#3.5 — CSS moderno]]
**Pré-requisitos:** [[CSS - Exercício 04 - Layout responsivo mobile-first]]
**Rota proposta:** `/exercicios/css/05-css-moderno`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Explorar o ferramental de ponta do CSS nativo moderno, utilizando Variáveis Customizadas (`--custom-property`), funções matemáticas (`calc`, `min`, `max`, `clamp` para tipografia fluida), aninhamento nativo (*CSS Nesting*), propriedades lógicas independentes de direção de escrita (*Logical Properties*), controle de mídia com `aspect-ratio` e `object-fit`, cabeçalhos fixos com `position: sticky`, além de microinterações fluidas com `transition` e `@keyframes`.

## Enunciado e etapas

### 1. Sistema de Variáveis Nativas e Funções Matemáticas
No seletor `:root` ou escopo de componente:
- Defina tokens de cores, raios de borda e sombras: `--primary-color: #3b82f6;`, `--radius-md: 8px;`, etc.
- Demonstre a sobreposição de escopo local (redefinindo `--primary-color` apenas dentro de um cartão específico para mudar sua cor de destaque sem afetar o resto da página).
- Aplique tipografia fluida utilizando a função `clamp`:
  `font-size: clamp(1.5rem, 2vw + 1rem, 3rem);` (título que cresce suavemente entre o mínimo e o máximo sem requerer media query).
- Combine `calc()` com variáveis: `width: calc(100% - var(--sidebar-width));`.

### 2. Propriedades Lógicas e CSS Nesting Nativo
- Substitua propriedades físicas direcionais por propriedades lógicas:
  - `margin-top / margin-bottom` $\rightarrow$ `margin-block`
  - `margin-left / margin-right` $\rightarrow$ `margin-inline`
  - `padding-left / padding-right` $\rightarrow$ `padding-inline`
  - `border-left` $\rightarrow$ `border-inline-start`
- Utilize o **CSS Nesting** nativo do navegador para escrever regras aninhadas e pseudo-classes com o operador `&` de forma concisa e organizada, sem necessidade de pré-processador Sass.

### 3. Aspect Ratio, Object Fit e Elemento Sticky
- Crie um cartão com imagem de capa em proporção perfeita 16:9 utilizando `aspect-ratio: 16 / 9;` e garanta que imagens de diferentes dimensões não fiquem distorcidas aplicando `object-fit: cover;` e `object-position: center;`.
- Adicione uma barra de filtros que acompanhe o usuário na rolagem vertical utilizando `position: sticky; top: 0;` e `z-index: 10;`.

### 4. Transições suaves e Animações com `@keyframes`
- Configure transições de interação para botões e cartões (`transition: transform 0.2s ease, box-shadow 0.2s ease;`).
- Crie uma animação de pulso ou indicador de carregamento (*skeleton loading* / spinner) utilizando a diretiva `@keyframes` com `animation: pulsar 1.5s infinite ease-in-out;`.
- Adicione a media query de acessibilidade `@media (prefers-reduced-motion: reduce)` desabilitando ou amenizando animações para usuários sensíveis a movimento.

## Cobertura e critérios de conclusão

- [ ] **CSS Variables (Custom Properties):** Declaração no `:root`, uso com `var()` e sobrescrita de escopo local.
- [ ] **Funções `calc`, `min`, `max` e `clamp`:** Aplicação prática de tipografia fluida e cálculos dinâmicos.
- [ ] **CSS Nesting:** Escrita de regras aninhadas com o operador `&` funcionando diretamente no navegador.
- [ ] **Logical Properties:** Adoção de `inline` e `block` em substituição a `top`, `bottom`, `left`, `right`.
- [ ] **`aspect-ratio` e `object-fit`:** Enquadramento de imagens sem distorções em proporções fixas.
- [ ] **`position: sticky`:** Elemento aderente durante a rolagem respeitando o contêiner pai.
- [ ] **Transitions e `@keyframes`:** Animações com curva de tempo e respeito a `prefers-reduced-motion`.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Alterar o valor de `--primary-color` via DevTools em tempo real | Todos os componentes que consom a variável atualizam a cor instantaneamente | Pendente |
| Redimensionar janela de 320px a 1440px | O título com `clamp()` varia o tamanho suavemente sem saltos | Pendente |
| Rolar a página para baixo | O cabeçalho/filtro com `sticky` trava no topo da tela ao atingir `top: 0` | Pendente |
| Simular `prefers-reduced-motion: reduce` no DevTools | Animações contínuas e transições são desativadas ou simplificadas | Pendente |

## Limites do exercício

Não utilize JavaScript para manipular estilos diretamente; o foco é esgotar os recursos declarativos modernos oferecidos pelo CSS puro.

## Minha solução

Aguardando tentativa do usuário. Informe a rota criada e os arquivos de código.

## Entrega e evidências

- Página em `next-lab/app/exercicios/css/05-css-moderno/page.tsx` com as folhas de estilo.
- Tabela de casos preenchida com as observações.
- Explicação de 1 parágrafo sobre as vantagens de usar Propriedades Lógicas no desenvolvimento de interfaces internacionais (ex.: idiomas RTL como árabe ou hebraico).

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** criar a página demonstrando variáveis, nesting, clamp e animações.

## Fontes de estudo

- [MDN Web Docs — Usando variáveis CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Using_CSS_custom_properties)
- [MDN Web Docs — CSS Nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting)
- [web.dev — CSS Logical Properties](https://web.dev/learn/css/logical-properties)
