---
tipo: exercicio
status: proposto
subnivel: "7.3"
criado: "2026-09-17"
---
# React - Exercício 03 - Organização do estado

**Projeto:** Quadro de estudos com edição e resumo
**Nível:** [[Nível 07 - React#7.3 — Estado]]
**Pré-requisito:** [[React - Exercício 02 - Hooks fundamentais]]. Retome lacunas antes de avançar.
**Rota proposta:** /exercicios/react/03-estado, no next-lab. A rota ainda não foi criada.

Um exercício integrado para todo o subnível, dividido em etapas. Reutilize os cartões como domínio, mantendo a atividade anterior acessível para comparação. Não é necessário realizar todas as etapas em uma sessão.

## Objetivo

Organizar o estado de um quadro de cartões, escolhendo onde cada informação deve viver e evitando dados duplicados entre formulário, lista e resumo.

## Enunciado e etapas

1. Crie um quadro com criação, edição, conclusão, exclusão e seleção de cartões. Cada cartão tem id, título, categoria e concluido.
2. Na primeira etapa, deixe lista e resumo como componentes irmãos. Eleve os cartões ao ancestral comum para que ambos reflitam a mesma mudança. Preserve um pequeno registro da estrutura antes e depois.
3. Mantenha estados exclusivos de interface perto de quem os usa: abrir detalhes de um cartão e o rascunho de edição não devem virar estado global sem necessidade. Justifique quem precisa acessar cada valor.
4. Calcule total, concluídos, percentual e lista filtrada a partir do estado existente. Guarde o id selecionado em vez de duplicar o objeto selecionado; trate exclusão do selecionado.
5. Construa um filtro controlado por value e callback: alterar o estado no pai deve alterar o campo. Em um formulário separado, use uma entrada não controlada com defaultValue e leia seu valor no envio com FormData ou ref. Não alterne um mesmo campo entre os dois modos.
6. Refatore as operações dos cartões para um reducer puro. Forneça estado e dispatch por Context para a lista, o resumo e um controle distante. Deixe os rascunhos locais fora desse Context.
7. Apresente uma tabela com cada estado, seu proprietário, consumidores e motivo da escolha. Compare props com Context e explique quando o compartilhamento se torna necessário.

## Cobertura e critérios de conclusão

- [ ] Estado local: rascunho e detalhes pertencem ao componente que os utiliza.
- [ ] Lifting state up: lista e resumo irmãos compartilham uma única fonte de verdade.
- [ ] Derived state: totais, progresso, filtro e cartão selecionado são calculados sem Effects de sincronização.
- [ ] State colocation: cada estado fica próximo de seus consumidores; decisões justificadas.
- [ ] Controlled components: campo responde ao valor e às alterações do pai.
- [ ] Uncontrolled components: valor obtido no envio; diferença de defaultValue explicada.
- [ ] Context API: consumidores distantes acessam o mesmo estado sem cópias concorrentes.
- [ ] Reducers: criar, editar, concluir e excluir funcionam com atualizações imutáveis.
- [ ] Cancelar edição não modifica o cartão; salvar modifica apenas o item escolhido.
- [ ] Mapa de propriedade do estado entregue e explicado.

## Casos obrigatórios de verificação

Editar e cancelar; editar e salvar; excluir o selecionado; concluir um cartão com filtro ativo; excluir todos; mudar a seleção; redefinir o formulário. Conferir lista e resumo após cada operação. Testar o reducer com estado anterior congelado.

**Limite pedagógico:** Context distribui dados; ele não substitui a necessidade de definir o proprietário do estado. Não adicionar biblioteca de estado para cumprir esta atividade.

## Fontes

[Gerenciamento de estado](https://react.dev/learn/managing-state) · [Compartilhar estado](https://react.dev/learn/sharing-state-between-components) · [Reducers e Context](https://react.dev/learn/scaling-up-with-reducer-and-context)


## Entrega e evidências

- Informe a rota e os arquivos da implementação no next-lab.
- Preserve a tentativa e registre as correções posteriores separadamente.
- Entregue uma tabela: cenário, resultado esperado, resultado observado e método de verificação.
- Execute TypeScript e lint apropriados à versão do projeto; registre comandos e resultados.
- Demonstre os fluxos no navegador. Testes automatizados podem complementar, mas não substituem a explicação dos conceitos.
- Explique as escolhas com suas palavras e identifique trechos produzidos com assistência.

## Minha solução

Aguardando tentativa. Esta nota contém um enunciado, não uma solução.

## Validação da tentativa

**Situação:** proposto, sem implementação ou teste executado para este exercício.
**Compreensão relatada:** ainda não avaliada.
**Prática demonstrada:** nenhuma registrada nesta tarefa.
**Revisão e correções:** preencher após a tentativa.
**Critério de encerramento:** cumprir todos os itens de cobertura, apresentar as evidências e explicar os conceitos. Etapas não executadas permanecem pendentes.

