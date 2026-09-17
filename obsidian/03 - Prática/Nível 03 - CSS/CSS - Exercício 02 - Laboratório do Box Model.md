---
tipo: exercicio
status: proposto
subnivel: "3.2"
criado: "2026-09-17"
---

# CSS - Exercício 02 - Laboratório do Box Model

**Projeto:** Painel Comparativo e Simulador Interativo do CSS Box Model
**Nível:** [[Nível 03 - CSS#3.2 — Box Model]]
**Pré-requisitos:** [[CSS - Exercício 01 - Estilização de cartão de perfil]]
**Rota proposta:** `/exercicios/css/02-box-model`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Compreender com precisão cirúrgica a anatomia do Modelo de Caixas (*Box Model*) no CSS — dimensões de conteúdo (`content-box`), preenchimento interno (`padding`), bordas (`border`) e espaçamento externo (`margin`) —, demonstrando na prática o impacto de `box-sizing: border-box` vs `content-box`, o comportamento de colapso de margens (*margin collapsing*) e margens automáticas para centralização.

## Enunciado e etapas

### 1. Laboratório de comparação: `content-box` vs `border-box`
Construa duas caixas lado a lado com as seguintes propriedades declaradas:
- `width: 300px;`
- `padding: 20px;`
- `border: 5px solid black;`
- Na Caixa 1: defina `box-sizing: content-box;` (padrão antigo do CSS).
- Na Caixa 2: defina `box-sizing: border-box;` (padrão moderno da indústria).
- Inspecione as duas no DevTools e demonstre matematicamente por que a Caixa 1 ocupa `350px` de largura total em tela, enquanto a Caixa 2 mantém rigorosamente os `300px`.

### 2. O fenômeno do Colapso de Margens Verticais (Margin Collapsing)
- Crie dois blocos empilhados verticalmente: o Bloco Superior com `margin-bottom: 30px;` e o Bloco Inferior com `margin-top: 20px;`.
- Meça e demonstre por que a distância real entre os blocos é de apenas `30px` (a maior margem prevalece) em vez de somar `50px`.
- Adicione um elemento com `display: flow-root;` ou uma borda transparente para demonstrar como quebrar o colapso de margens quando necessário.

### 3. Centralização com margens automáticas e preenchimentos proporcionais
- Centralize horizontalmente uma caixa de largura definida (`max-width: 600px;`) em um contêiner utilizando a técnica clássica `margin-left: auto; margin-right: auto;` (ou `margin-inline: auto;`).
- Use preenchimentos assimétricos (shorthand de 1, 2, 3 e 4 valores) para demonstrar a ordem horária: `topo`, `direita`, `fundo`, `esquerda` (*TRBL - Trouble*).

### 4. Reset universal do Box Model
- Adicione a regra canônica de reset moderno no topo do seu CSS:
  ```css
  *, *::before, *::after {
    box-sizing: border-box;
  }
  ```
- Justifique em 2 frases por que essa única linha é considerada a regra fundamental de qualquer projeto web moderno.

## Cobertura e critérios de conclusão

- [ ] **Width e Height:** Compreensão de dimensões de conteúdo versus dimensões renderizadas totais.
- [ ] **Margin:** Espaçamento externo, margens negativas e colapso de margens verticais.
- [ ] **Padding:** Espaçamento interno e área de clique de botões e links.
- [ ] **Border:** Estilos, largura e impacto na métrica do elemento.
- [ ] **Box-sizing:** Diferenciação prática e conceitual entre `border-box` e `content-box`.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Medir largura da Caixa com `content-box` (300px + 20px padding + 5px border) | DevTools indica largura computada de `350px` | Pendente |
| Medir largura da Caixa com `border-box` (300px + 20px padding + 5px border) | DevTools indica largura computada exatamente de `300px` | Pendente |
| Verificar distância entre dois blocos com margens verticais concorrentes | Espaço resultante é exatamente o valor da maior margem individual (colapso) | Pendente |
| Reset global com seletor universal `*` | Todos os elementos da página passam a calcular tamanho previsivelmente | Pendente |

## Limites do exercício

Não introduza layouts complexos de Grid ou Flexbox nesta tela; os comportamentos devem ser observados no fluxo normal de blocos (`display: block`).

## Minha solução

Aguardando tentativa do usuário. Informe a rota ou arquivos criados.

## Entrega e evidências

- Página em `next-lab/app/exercicios/css/02-box-model/page.tsx`.
- Diagrama ou screenshot do painel "Computed / Calculado" do DevTools mostrando as duas caixas.
- Explicação do porquê o colapso de margens ocorre apenas na vertical e nunca na horizontal.

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** implementar a página de teste e medir os blocos no DevTools.

## Fontes de estudo

- [MDN Web Docs — O modelo de caixa básico do CSS](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/Building_blocks/The_box_model)
- [web.dev — Box Model](https://web.dev/learn/css/box-model)
