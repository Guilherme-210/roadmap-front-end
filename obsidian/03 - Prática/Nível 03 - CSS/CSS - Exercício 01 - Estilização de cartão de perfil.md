---
tipo: exercicio
status: proposto
subnivel: "3.1"
criado: "2026-09-17"
---

# CSS - Exercício 01 - Estilização de cartão de perfil

**Projeto:** Estilização Avançada com Seletores, Especificidade e Pseudo-elementos
**Nível:** [[Nível 03 - CSS#3.1 — CSS básico]]
**Pré-requisitos:** [[HTML - Exercício 01 - Página de perfil]]
**Rota proposta:** `/exercicios/css/01-seletores-cascata`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Dominar o funcionamento fundamental do mecanismo do CSS: como os seletores encontram os nós da árvore DOM, o algoritmo de resolução de conflitos da **Cascata** (*Cascade*), o cálculo exato da **Especificidade** (*Specificity: IDs, Classes/Atributos/Pseudo-classes, Elementos/Pseudo-elementos*) e os princípios de **Herança** (*Inheritance*), além do uso criativo de pseudo-classes e pseudo-elementos (`::before`, `::after`).

## Enunciado e etapas

### 1. Aplicação de seletores combinados e pseudo-classes
Crie a estilização de um cartão de usuário com lista de conquistas:
- Utilize seletores combinadores: descendente (`.card p`), filho direto (`.card > .badge`), irmão adjacente (`h2 + p`) e irmão geral (`h2 ~ p`).
- Aplique pseudo-classes de interação e estado: `:hover`, `:active`, `:focus-visible` e `:disabled`.
- Aplique pseudo-classes estruturais na lista de conquistas: `:first-child`, `:last-child`, `:nth-child(even)` e `:nth-child(3n + 1)`.

### 2. Pseudo-elementos decorativos (`::before` e `::after`)
- Crie um indicador de status "Online" em formato de bolinha verde flutuante sobre o avatar do perfil utilizando unicamente `::after` com `content: ""` e posicionamento absoluto.
- Adicione aspas tipográficas estilizadas em um bloco de citação do perfil utilizando `::before` e `::after`.
- Experimente o pseudo-elemento `::selection` para estilizar a cor de fundo e texto quando o usuário seleciona um trecho com o mouse.

### 3. O algoritmo da Cascata e a pontuação de Especificidade
- Crie propositalmente três regras concorrentes que disputam a estilização da cor de um botão no cartão:
  - Regra A: `button` (Especificidade: `0, 0, 1`)
  - Regra B: `.btn-primary` (Especificidade: `0, 1, 0`)
  - Regra C: `.card-container button.btn-primary` (Especificidade: `0, 2, 1`)
- Explique no código por que a Regra C vence sem a necessidade de recorrer à má prática de `!important`.
- Demonstre a importância da ordem de declaração no arquivo CSS quando duas regras possuem exatamente a mesma pontuação de especificidade.

### 4. Herança de propriedades
- Demonstre quais propriedades herdadas fluem do elemento pai para os filhos (ex.: `color`, `font-family`, `line-height`).
- Demonstre quais propriedades NÃO são herdadas por padrão (ex.: `border`, `margin`, `padding`, `background-color`).
- Utilize as palavras-chave globais `inherit`, `initial` e `unset` para controlar explicitamente o comportamento de herança de um botão.

## Cobertura e critérios de conclusão

- [ ] **Seletores, propriedades e classes:** Utilização variada de seletores compostos e combinadores.
- [ ] **Pseudo-classes:** Interações táteis (`:hover`, `:active`, `:focus-visible`) e estruturais (`:nth-child`).
- [ ] **Pseudo-elements (`::before`, `::after`):** Criação de elementos visuais sem poluir o HTML.
- [ ] **Cascade (Cascata) e Specificity (Especificidade):** Cálculo e explicação de conflitos de regras sem uso de `!important`.
- [ ] **Inheritance (Herança):** Aplicação e controle com `inherit`, `initial` e `unset`.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Passar o mouse sobre o cartão | Transição suave de sombra e cor via pseudo-classe `:hover` | Pendente |
| Alternar foco via teclado com `Tab` | Anel de foco aparece apenas via `:focus-visible` sem disparar no clique do mouse | Pendente |
| Exibir indicador de status no avatar | Bolinha verde renderizada perfeitamente via `::after` sem elemento extra no DOM | Pendente |
| Desafio de especificidade | A cor aplicada ao botão corresponde rigorosamente à regra de maior pontuação | Pendente |

## Limites do exercício

Não utilize frameworks utilitários (Tailwind) neste momento; escreva CSS puro (Vanilla CSS ou CSS Modules) para observar o funcionamento cru do motor de estilos do navegador.

## Minha solução

Aguardando tentativa do usuário. Informe a rota criada e os arquivos de estilo.

## Entrega e evidências

- Página em `next-lab/app/exercicios/css/01-seletores-cascata/page.tsx` com arquivo CSS associado.
- Tabela de casos preenchida com os resultados observados.
- Tabela com 3 seletores do seu código e a pontuação calculada de cada um no formato `(ID, Classe, Elemento)`.

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** criar a página e o arquivo CSS com as regras de especificidade e pseudo-elementos.

## Fontes de estudo

- [MDN Web Docs — Especificidade do CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Specificity)
- [MDN Web Docs — Cascata e Herança](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [CSS Specificity Calculator](https://specificity.keegan.st/)
