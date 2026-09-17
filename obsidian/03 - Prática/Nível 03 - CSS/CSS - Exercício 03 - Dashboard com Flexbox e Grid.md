---
tipo: exercicio
status: proposto
subnivel: "3.3"
criado: "2026-09-17"
---

# CSS - Exercício 03 - Dashboard com Flexbox e Grid

**Projeto:** Dashboard Administrativo Unindo Flexbox e CSS Grid Moderno
**Nível:** [[Nível 03 - CSS#3.3 — Layout]]
**Pré-requisitos:** [[CSS - Exercício 02 - Laboratório do Box Model]]
**Rota proposta:** `/exercicios/css/03-layout-flex-grid`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Dominar as duas tecnologias fundamentais de diagramação e layout do CSS moderno: **Flexbox** (ideal para componentes unidimensionais, barras de navegação, alinhamentos axiais e empilhamento flexível) e **CSS Grid** (ideal para layouts bidimensionais de página completa, áreas nomeadas e galerias dinâmicas com `auto-fit` e `auto-fill`).

## Enunciado e etapas

### 1. Macroestrutura da página com CSS Grid (Bidimensional)
Estruture a casca do painel administrativo utilizando `display: grid;`:
- Configure a grade com `grid-template-areas`:
  ```css
  "header  header"
  "sidebar main"
  "footer  footer"
  ```
- Defina `grid-template-columns: 260px 1fr;` e `grid-template-rows: auto 1fr auto;`.
- Atribua cada área semântica (`header`, `aside`, `main`, `footer`) para sua respectiva área nomeada usando `grid-area`.
- Use `gap` para criar espaçamento uniforme entre as regiões.

### 2. Microcomponentes e barras de ação com Flexbox (Unidimensional)
Dentro do `header` e dos cartões:
- Crie uma barra superior com `display: flex;`: alinhe o logotipo à esquerda, a barra de pesquisa ao centro e o menu de usuário à direita utilizando `justify-content: space-between;` e `align-items: center;`.
- Use propriedades dos filhos flexíveis: `flex-grow`, `flex-shrink` e `flex-basis` (ou shorthand `flex: 1`) para permitir que a barra de busca se expanda dinamicamente.
- Alinhe ícones e rótulos verticais perfeitamente sem truques de margem negativa ou padding manual.

### 3. Galeria de métricas responsiva com CSS Grid (`auto-fit` vs `auto-fill`)
Na área principal (`main`), construa uma grade de cartões de métricas estatísticas:
- Utilize a técnica moderna responsiva sem media queries:
  `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));`
- Adicione uma segunda galeria demonstrando a diferença prática entre `auto-fit` (os cartões esticam para preencher a linha inteira quando há poucos itens) e `auto-fill` (a grade reserva espaço para colunas vazias sem esticar desproporcionalmente os cartões existentes).

### 4. Alinhamento fino e flex-wrap
- Crie uma lista de tags/chips com `flex-wrap: wrap;` e `gap: 8px;`, garantindo que conforme a tela diminui os chips quebrem suavemente para a próxima linha sem transbordar o contêiner.

## Cobertura e critérios de conclusão

- [ ] **Flexbox completo:** Domínio dos eixos principal (*main axis*) e transversal (*cross axis*), `justify-content`, `align-items`, `flex-direction`, `gap` e `flex-wrap`.
- [ ] **Propriedades dos flex items:** Controle de `flex-grow`, `flex-shrink`, `flex-basis` e `align-self`.
- [ ] **CSS Grid completo:** Definição de colunas, linhas, `grid-template-areas`, `grid-column` e `grid-row`.
- [ ] **Funções Grid modernas:** Uso de `minmax()`, `repeat()` e fração flexível (`fr`).
- [ ] **`auto-fit` e `auto-fill`:** Demonstração visual e explicação da diferença entre as duas palavras-chave.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Redimensionar janela do navegador | Cartões da grade quebram automaticamente de 4 para 3, 2 e 1 coluna sem scroll horizontal | Pendente |
| Grade com apenas 2 itens usando `auto-fit` | Os 2 itens expandem e dividem 50% da largura cada | Pendente |
| Grade com apenas 2 itens usando `auto-fill` | Os 2 itens mantêm a largura mínima definida e o restante fica como coluna vazia | Pendente |
| Reduzir tamanho da tela na barra flex | Elementos com `flex-shrink: 0` mantêm tamanho e os flexíveis encolhem | Pendente |

## Limites do exercício

Não implemente gráficos animados ou chamadas de API reais; o foco absoluto é a arquitetura e solidez do layout visual com CSS puro.

## Minha solução

Aguardando tentativa do usuário. Informe a rota ou arquivos criados.

## Entrega e evidências

- Página em `next-lab/app/exercicios/css/03-layout-flex-grid/page.tsx` com estilo CSS correspondente.
- Tabela de casos preenchida com as observações de redimensionamento.
- Regra de bolso explicada: quando devemos escolher Flexbox e quando devemos escolher CSS Grid em um projeto?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** criar a página do dashboard aplicando as áreas do Grid e os alinhamentos do Flexbox.

## Fontes de estudo

- [CSS Tricks — A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Tricks — A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [MDN Web Docs — Auto-fill vs Auto-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Auto-placement_in_grid#the_difference_between_auto-fill_and_auto-fit)
