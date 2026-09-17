---
tipo: exercicio
status: proposto
subnivel: "7.4"
criado: "2026-09-17"
---
# React - Exercício 04 - Effects e sincronização

**Projeto:** Sala de estudo com conexão e busca
**Nível:** [[Nível 07 - React#7.4 — Effects]]
**Pré-requisito:** [[React - Exercício 03 - Organização do estado]]. Retome lacunas antes de avançar.
**Rota proposta:** /exercicios/react/04-effects, no next-lab. A rota ainda não foi criada.

Um exercício integrado para todo o subnível, dividido em etapas. Reutilize os cartões como domínio, mantendo a atividade anterior acessível para comparação. Não é necessário realizar todas as etapas em uma sessão.

## Objetivo

Sincronizar uma tela com recursos externos e demonstrar ciclo de vida de Effects, dependências, limpeza e prevenção de valores antigos capturados por funções.

## Enunciado e etapas

1. Crie uma sala selecionável e um painel que pode ser montado e desmontado. Use um serviço local simulado de conexão com operações conectar, assinar eventos e desconectar; não precisa de serviço externo ou credenciais.
2. Sincronize a conexão com o id da sala por useEffect. Registre criação e limpeza com o id, para observar montagem, mudança de dependência e desmontagem.
3. Adicione um intervalo que conta tempo na sala e um listener do navegador. Cada recurso deve ter cleanup correspondente. Com Strict Mode ativo, explique o ciclo extra de setup/cleanup no desenvolvimento.
4. Acrescente uma busca assíncrona simulada em que a busca A demora mais que a B. Troque rapidamente de A para B e impeça que a resposta antiga substitua a nova. Cancele a operação quando possível ou ignore resultados obsoletos; registre a estratégia.
5. Em uma etapa de diagnóstico, preserve uma versão que captura um valor antigo em intervalo ou callback. Reproduza o erro de stale closure e corrija-o com uma abordagem que mantenha a semântica desejada e dependências honestas.
6. Exiba contagem de cartões filtrados calculada durante renderização. Faça o botão “Registrar sessão” executar uma ação no evento de clique. Compare os dois casos com a conexão, explicando por que só a sincronização exige Effect.

## Cobertura e critérios de conclusão

- [ ] Ciclo de vida: demonstrar setup, ressincronização e cleanup; distinguir vida do Effect e do componente.
- [ ] Dependências: todos os valores reativos utilizados estão representados ou a lógica foi reorganizada corretamente.
- [ ] Cleanup: nenhuma conexão, inscrição, intervalo ou listener permanece após desmontagem.
- [ ] Stale closures: cenário defeituoso reproduzido, causa explicada e correção demonstrada.
- [ ] Quando usar useEffect: conexão e recurso externo sincronizados com o estado atual.
- [ ] Quando não usar useEffect: dados derivados no render e ação do usuário no evento.
- [ ] Corrida de respostas: resultado de A nunca substitui B após selecionar B.
- [ ] Strict Mode: ciclos extras não duplicam recursos ativos.
- [ ] Lint de dependências respeitado, sem desativar regras para esconder o problema.

## Casos obrigatórios de verificação

Entrar em A, trocar para B, ocultar o painel, reabri-lo e repetir a sequência. Após desmontar, recursos ativos devem ser zero; montado, apenas a quantidade prevista. Busca A lenta/B rápida termina mostrando B. Compare valor exibido e valor registrado pelo callback no caso de stale closure.

**Limite pedagógico:** não iniciar efeitos colaterais durante renderização e não usar Effect para “observar tudo”. Preserve o exemplo defeituoso apenas como material identificado, sem deixá-lo ativo na versão final.

## Fontes

[Sincronizar com Effects](https://react.dev/learn/synchronizing-with-effects) · [Ciclo de vida dos Effects](https://react.dev/learn/lifecycle-of-reactive-effects) · [Quando não usar Effect](https://react.dev/learn/you-might-not-need-an-effect)


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

