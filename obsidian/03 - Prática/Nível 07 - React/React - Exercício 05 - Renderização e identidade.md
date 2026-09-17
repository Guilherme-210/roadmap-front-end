---
tipo: exercicio
status: proposto
subnivel: "7.5"
criado: "2026-09-17"
---
# React - Exercício 05 - Renderização e identidade

**Projeto:** Laboratório de renderização dos cartões
**Nível:** [[Nível 07 - React#7.5 — Renderização]]
**Pré-requisito:** [[React - Exercício 04 - Effects e sincronização]]. Retome lacunas antes de avançar.
**Rota proposta:** /exercicios/react/05-renderizacao, no next-lab. A rota ainda não foi criada.

Um exercício integrado para todo o subnível, dividido em etapas. Reutilize os cartões como domínio, mantendo a atividade anterior acessível para comparação. Não é necessário realizar todas as etapas em uma sessão.

## Objetivo

Observar como React calcula e aplica a interface, identificar quando preserva estado e distinguir render, commit, batching e hydration.

## Enunciado e etapas

1. Monte uma página com painel pai, contador, lista reordenável e editor de título com rascunho local. Desenhe a árvore de componentes em uma lista hierárquica e indique os proprietários de estado.
2. Registre renders e commits com instrumentação de desenvolvimento ou Profiler. Altere estado no pai e em um filho; explique o alcance observado. Não escreva state durante renderização só para contar renders.
3. Mude um valor sem alterar parte do texto final. Compare execução de componentes com alterações efetivas no DOM. Explique por que re-render não implica reconstruir toda a página.
4. Reordene cartões com ids estáveis enquanto um rascunho está aberto. Compare, em uma variante de diagnóstico, com keys por índice. Depois restaure as chaves corretas.
5. Compare três casos do editor: mesmo componente na mesma posição; troca do tipo de componente; alteração intencional da key. Observe quando o rascunho persiste e quando reinicia.
6. Crie um botão com três atualizações do mesmo contador no mesmo evento. Compare atualizações baseadas no valor capturado com atualizações funcionais. Preveja o resultado antes de clicar e explique batching e o snapshot do estado.
7. Use uma rota do Next.js com HTML inicial gerado no servidor e um componente interativo. Inspecione a resposta HTML, depois habilite a interação no navegador. Em uma variante local temporária, produza uma divergência determinística entre servidor e primeiro render do cliente; observe o aviso e corrija a causa.

## Cobertura e critérios de conclusão

- [ ] Render: identificar o cálculo da interface antes da aplicação no DOM.
- [ ] Re-render: demonstrar atualizações do pai e do filho sem supor que todas são mudanças no DOM.
- [ ] Reconciliação: explicar o papel de tipo, posição e key na identidade.
- [ ] Component tree: entregar árvore com relações e estado de cada componente.
- [ ] State preservation: rascunho acompanha o id ao reordenar e reinicia na troca intencional de identidade.
- [ ] Batching: prever e verificar os dois resultados do contador; explicar por que atualizações funcionais se acumulam.
- [ ] Hydration: demonstrar HTML inicial, conexão da interatividade e correspondência inicial servidor/cliente.
- [ ] Divergência de hydration removida da versão final, sem apenas silenciar o aviso.
- [ ] Evidências distinguem render, commit, DOM e duplicações de diagnóstico em Strict Mode.

## Casos obrigatórios de verificação

Reordenar A/B com texto não salvo; trocar key do editor; atualizar só um filho; executar o contador nas duas variantes; recarregar a rota diretamente; verificar HTML antes da interação e ausência do aviso após a correção.

**Limites:** o Next.js gerencia a hydration; não chamar hydrateRoot manualmente dentro da aplicação. Um Client Component pode participar do HTML inicial. Não tratar contagens absolutas de render em desenvolvimento como contrato estável. Consultar a documentação local da versão do Next antes de configurar a demonstração.

## Fontes

[Preservar e reiniciar estado](https://react.dev/learn/preserving-and-resetting-state) · [Render e commit](https://react.dev/learn/render-and-commit) · [Atualizações em fila](https://react.dev/learn/queueing-a-series-of-state-updates) · [Hydration](https://react.dev/reference/react-dom/client/hydrateRoot)


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

