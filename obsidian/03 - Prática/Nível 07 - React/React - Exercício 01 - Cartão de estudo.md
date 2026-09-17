---
tipo: exercicio
status: proposto
subnivel: "7.1"
criado: "2026-09-15"
---
# React - Exercício 01 - Cartão de estudo

**Projeto:** quadro interativo de cartões de estudo.
**Nível:** [[Nível 07 - React#7.1 — Fundamentos do React]]
**Conceitos relacionados:** [[React - Fundamentos - Componentes e JSX]]
**Pré-requisitos:** funções, objetos, arrays, expressões, módulos JavaScript e tipos básicos de TypeScript.

## Objetivo

Construir um quadro de cartões que cubra todos os fundamentos da 7.1: JSX, componentes, props, children, composição, eventos, renderização condicional, listas, key, estado e imutabilidade.

É um exercício integrado dividido em etapas. A etapa inicial mantém a proposta do cartão simples; as seguintes completam o subnível. Não é necessário fazer tudo em uma sessão.

## Ambiente e entrega

O aplicativo está em `next-lab`, na raiz do repositório (`roadmap-front-end`). A rota proposta para esta prática é `/exercicios/react/01-cartao-estudo`, com a página em `next-lab/app/exercicios/react/01-cartao-estudo/page.tsx` (ou na rota raiz `/` se optar por ela). Informe a rota utilizada ao submeter.

O nome da página pode ser `Home` ou `App` e o componente do cartão `CartaoEstudo` ou `Ex1CartaoEstudo`. O que importa é sua responsabilidade e a inicial maiúscula.

## Enunciado e etapas

### 1. JSX e componente inicial

Crie um componente de cartão que declare uma constante tema e exiba seu valor em um título. Retorne um article com título e descrição em p. Use tags fechadas, className e expressões entre chaves. Mostre duas ocorrências do componente dentro de main.

Explique a diferença entre o corpo da função, os parênteses do return e as chaves usadas dentro do JSX, além do motivo da inicial maiúscula.

### 2. Props, children e composição

Evolua o cartão para receber tema e descrição por props, substituindo a constante interna da etapa inicial. Inclua tags e a situação do cartão. Defina os tipos das props.

A página deve exibir cartões com conteúdos diferentes usando o mesmo componente. Acrescente children opcional e use esse espaço para conteúdo fornecido pela página, como uma observação ou uma pequena lista. Demonstre também um cartão sem children.

Organize a página compondo o cartão e seu conteúdo. Não duplique a implementação do cartão para cada assunto.

### 3. Dados, listas e identidade

Organize pelo menos três cartões em um array. Cada item deve ter id único e estável, tema, descrição, tags e uma situação booleana, como concluido ou atualizado.

Gere a lista com map. A key deve usar o identificador do cartão no componente retornado diretamente pelo map; não o índice, um valor aleatório a cada render ou apenas uma key no article interno.

Se renderizar uma lista adicional, explique como escolheu suas chaves. Prepare dados que permitam conferir um cartão com tags e outro com tags vazias.

### 4. Eventos e estado

Mantenha os dados dos cartões em estado com uso básico de useState. O aprofundamento dos hooks fica na 7.2.

Adicione dois botões por cartão: um para alternar sua situação e outro para excluir. A página administra as mudanças, e o cartão recebe as funções por props. O clique deve atingir o cartão identificado, independentemente da posição na lista.

Passe funções aos eventos; elas não devem ser executadas ao renderizar a página. A mudança da situação precisa ser visível no texto ou na apresentação do cartão.

### 5. Renderização condicional e casos vazios

Mostre uma indicação diferente para cada situação do cartão. Quando não houver cartões visíveis, mostre uma mensagem em vez de uma área vazia.

Quando tags for um array vazio, mostre uma mensagem apropriada. Para conteúdo adicional opcional, trate sua ausência e, se ele vier de um array, o caso de array vazio.

Pode excluir efetivamente o cartão ou marcá-lo como excluído. Se mantiver o objeto no estado, a mensagem de lista vazia deve considerar os cartões visíveis, não o tamanho bruto do array.

### 6. Imutabilidade e verificação

As atualizações não podem modificar o array anterior nem seus objetos. Ao alterar um cartão, produza os novos valores necessários e preserve os itens não alterados.

Quando a mudança depender do estado anterior, use a forma funcional da atualização e explique o papel do argumento recebido. Não altere props diretamente.

Verifique que atualizar ou excluir um cartão não muda os dados dos demais. Explique por que copiar apenas o array não basta quando você modifica um objeto dentro dele.

## Cobertura e critérios de conclusão

- [ ] **JSX:** estrutura válida, className e expressões para mostrar dados.
- [ ] **Componentes:** cartão separado, com inicial maiúscula, reutilizado pela página.
- [ ] **Props:** dados e funções recebidos por props tipadas; cartões com conteúdos diferentes.
- [ ] **children:** conteúdo fornecido entre as tags aparece no cartão; ausência tratada.
- [ ] **Composição:** página reúne componentes e conteúdo sem duplicar a estrutura do cartão.
- [ ] **Eventos:** cliques alternam a situação e excluem o cartão correto; sem execução durante render.
- [ ] **Renderização condicional:** situação, lista vazia e dados opcionais possuem resultados definidos.
- [ ] **Listas:** pelo menos três objetos são transformados em cartões com map.
- [ ] **key:** id único e estável no componente da lista; diferença entre key e atributo HTML id explicada.
- [ ] **Estado:** useState mantém os dados e as interações atualizam a interface.
- [ ] **Imutabilidade:** novos valores para dados alterados; estado anterior e itens não alterados preservados.
- [ ] **Explicação:** distinguir chaves, parênteses, props, estado e cópia do array versus cópia do objeto.
- [ ] **Validação:** cenários abaixo executados e resultados observados registrados.

Marcar a versão final não exige manter o tema como constante interna: a etapa de props substitui essa versão inicial. O objetivo é demonstrar a evolução.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Abrir a página | Pelo menos três cartões com ids e conteúdos diferentes | Pendente |
| Alternar a situação duas vezes | O cartão retorna à situação inicial; os demais não mudam | Pendente |
| Excluir o primeiro e alterar um dos restantes | O id correto é atualizado, sem confusão de posição | Pendente |
| Excluir todos | Mensagem de lista vazia aparece | Pendente |
| Renderizar tags vazias | Mensagem correspondente aparece | Pendente |
| Renderizar cartão com e sem children | Conteúdo extra aparece somente quando fornecido | Pendente |
| Conteúdo adicional em array vazio, se esse formato for usado | Fallback ou ausência intencional conforme definido, sem tratamento enganoso | Pendente |
| Inspecionar o estado anterior após uma atualização | Valores anteriores não foram modificados | Pendente |

Para verificar imutabilidade, use uma comparação das referências e dos valores antes/depois ou um teste com dados anteriores congelados. Mostre o resultado; não basta afirmar que usou spread.

## Limites do exercício

Não exige API, banco de dados, persistência após recarregar, useEffect, reducers, Context, otimização de desempenho ou configuração de recursos avançados. O estado básico com useState pertence a esta prática; os demais hooks serão trabalhados na 7.2.

O enunciado contém requisitos, não a implementação. Consulte as fontes para estudar e identifique trechos feitos com assistência ao entregar.

## Minha solução

Aguardando tentativa do usuário. Informe os arquivos criados/modificados e a rota executada.

## Entrega e evidências

- Código da página e dos componentes em `next-lab/app/exercicios/`.
- Tabela de casos de verificação preenchida com resultados observados.
- Verificação de TypeScript e lint (`pnpm build` ou `pnpm lint`).
- Explicação breve com suas palavras dos conceitos aplicados.

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** executar as etapas, testar no navegador e enviar a tentativa.

## Fontes de estudo

[Introdução oficial](https://react.dev/learn) · [Props e children](https://react.dev/learn/passing-props-to-a-component) · [Listas e key](https://react.dev/learn/rendering-lists) · [Eventos e estado](https://react.dev/learn/adding-interactivity) · [Atualização de arrays no estado](https://react.dev/learn/updating-arrays-in-state)
