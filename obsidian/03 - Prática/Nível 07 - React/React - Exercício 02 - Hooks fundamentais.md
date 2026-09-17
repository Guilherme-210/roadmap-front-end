---
tipo: exercicio
status: proposto
subnivel: "7.2"
criado: "2026-09-17"
---
# React - Exercício 02 - Hooks fundamentais

**Projeto:** Central de sessões de estudo
**Nível:** [[Nível 07 - React#7.2 — Hooks fundamentais]]
**Pré-requisito:** [[React - Exercício 01 - Cartão de estudo]]. Retome lacunas antes de avançar.
**Rota proposta:** /exercicios/react/02-hooks, no next-lab. A rota ainda não foi criada.

Um exercício integrado para todo o subnível, dividido em etapas. Reutilize os cartões como domínio, mantendo a atividade anterior acessível para comparação. Não é necessário realizar todas as etapas em uma sessão.

## Objetivo

Construir uma central com cartões, busca, preferências e um temporizador de estudo, aplicando todos os hooks da 7.2 e justificando a responsabilidade de cada um.

## Enunciado e etapas

1. Exiba cartões com id estável. Permita criar, concluir e excluir cartões. Mantenha o texto de busca e a duração desejada em useState.
2. Controle as transições da sessão (iniciar, pausar, retomar e encerrar) com useReducer. Defina ações e estados válidos; iniciar duas vezes não pode duplicar a sessão.
3. Use useEffect para sincronizar um intervalo enquanto a sessão estiver ativa e limpar esse recurso quando pausar ou desmontar. Não utilize Effects para calcular totais ou filtrar cartões.
4. Disponibilize uma preferência de exibição por Context e leia-a com useContext em dois componentes distantes. Use o Provider da própria atividade, sem depender de um componente pronto da biblioteca.
5. Use useRef para focar o campo de título após cadastrar um cartão e guardar uma informação que não deve provocar renderização. Explique a diferença entre ref e state.
6. Monte um conjunto de dados local maior para comparar a filtragem ou estatística com e sem useMemo. Registre a medição e as dependências; o app deve continuar correto sem a memoização.
7. Passe um callback a um filho memoizado e compare uma interação não relacionada com e sem useCallback. Registre se houve redução de renders ou não. Não espalhe memoização sem motivo.
8. Extraia a lógica do temporizador para um Custom Hook com nome iniciado por use. Use-o em dois temporizadores e demonstre que compartilhar lógica não compartilha automaticamente o estado.

## Cobertura e critérios de conclusão

- [ ] useState: entradas controladas atualizam a tela e preservam dados não relacionados.
- [ ] useEffect: intervalo é criado e limpo corretamente; pausar e remontar não acelera o relógio.
- [ ] useContext: dois consumidores respondem ao mesmo Provider.
- [ ] useRef: foco funciona; explique por que alterar current não atualiza a tela.
- [ ] useReducer: ações válidas produzem os estados esperados, sem mutação.
- [ ] useMemo: cálculo medido, dependências corretas e resultado igual sem o cache.
- [ ] useCallback: comparação com filho memoizado e explicação da identidade da função.
- [ ] Custom Hooks: lógica reutilizada em duas instâncias independentes.
- [ ] Hooks chamados no topo de componentes/hooks, sem chamadas condicionais.
- [ ] Explicar por que cada informação ficou em state, ref, reducer ou valor calculado.

## Casos obrigatórios de verificação

Cadastrar título vazio e válido; buscar sem resultados; iniciar, pausar e retomar; desmontar durante contagem; alternar preferência; usar dois temporizadores; alterar estado não relacionado durante a medição. Registrar os resultados observados, incluindo a configuração de desenvolvimento e Strict Mode.

**Limite pedagógico:** memoização é um experimento com evidência, não requisito de velocidade nem garantia de correção. Se não houver ganho, registre isso. A 7.5 aprofundará o processo de renderização.

## Fontes

[Hooks oficiais](https://react.dev/reference/react/hooks) · [Reutilização com Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)


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

