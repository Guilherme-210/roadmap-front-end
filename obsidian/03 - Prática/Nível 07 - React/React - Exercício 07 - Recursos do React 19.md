---
tipo: exercicio
status: proposto
subnivel: "7.7"
criado: "2026-09-17"
---
# React - Exercício 07 - Recursos do React 19

**Projeto:** Central de estudos com operações assíncronas
**Nível:** [[Nível 07 - React#7.7 — React 19]]
**Pré-requisito:** [[React - Exercício 06 - Composição e carregamento]]. Retome lacunas antes de avançar.
**Rota proposta:** /exercicios/react/07-react19, no next-lab. A rota ainda não foi criada.

Um exercício integrado para todo o subnível, dividido em etapas. Reutilize os cartões como domínio, mantendo a atividade anterior acessível para comparação. Não é necessário realizar todas as etapas em uma sessão.

## Objetivo

Integrar todos os recursos da 7.7 em uma central com leitura no servidor, formulário assíncrono, feedback otimista, busca responsiva, preservação de painéis e transições visuais.

## Etapa 0 — Compatibilidade obrigatória

Na preparação deste enunciado, o pacote React efetivamente carregado em next-lab reportou 19.2.8: Activity está disponível e ViewTransition não é exportado. Portanto, não assumir que “React 19” inclui todas as APIs da documentação mais recente.

Antes da implementação, registre as versões resolvidas de React, React DOM e Next.js, as APIs disponíveis, o suporte do navegador e a configuração do Compiler. Consulte os guias oficiais e os guias locais do Next.

Planeje um ambiente separado e compatível para ViewTransition e eventuais mudanças de dependências, preservando a prática anterior. Não substituir a tarefa por uma animação CSS comum. Se a API ainda não estiver disponível no ambiente escolhido, mantenha essa etapa pendente: o exercício só cobre integralmente a 7.7 após demonstrá-la. Esta preparação de tarefas não instala nem atualiza dependências.

## Enunciado e etapas

1. Crie um Server Component que leia um catálogo local de estudos. Separe dele o editor interativo cliente. Demonstre qual código e dado ficam no servidor e o que atravessa a fronteira; não coloque use client em toda a página por conveniência.
2. Passe uma Promise estável produzida no servidor a um componente cliente e leia-a com use, dentro de Suspense. Demonstre carregamento e rejeição com Error Boundary. Não crie uma Promise nova a cada render do cliente.
3. Implemente uma Server Function para cadastrar um item usando use server. Valide os dados no servidor e retorne sucesso ou erro esperado. Use armazenamento local de laboratório com limite de persistência explícito; um serviço de produção e banco externo não são requisitos.
4. Conecte o formulário a uma Action com useActionState. Exiba estado pendente, erros por campo e confirmação; permita corrigir a entrada e reenviar. Explique que Action descreve uma operação assíncrona integrada ao React e não é sinônimo obrigatório de Server Function.
5. Use useOptimistic para mostrar o item provisório antes da confirmação. Simule sucesso e falha de maneira controlada; confirme sem duplicação e remova ou reverta o provisório na falha, mantendo uma mensagem compreensível.
6. Use useTransition para uma mudança de painel ou atualização custosa que possa ter menor prioridade. Exiba isPending e mantenha uma entrada controlada responsiva.
7. Use useDeferredValue para a consulta de uma lista local volumosa. Diferencie o texto atual do resultado ainda desatualizado e compare sob limitação de CPU. Explique por que não é debounce nem impede requisições por si só.
8. Use Activity para alternar visibilidade de um painel com rascunho e Effect de assinatura ou intervalo. Verifique preservação do estado e limpeza/reativação do Effect ao ocultar e mostrar.
9. No ambiente compatível, use ViewTransition para a troca entre lista e detalhes. Demonstre um gatilho compatível e identidade visual sem nomes conflitantes; respeite a preferência de movimento reduzido. Diferencie o componente React da API nativa do navegador.
10. Configure React Compiler conforme a versão do ambiente e confirme que compilou um componente do exercício. Compare uma interação com e sem Compiler sob condições equivalentes; registre evidência e resultado mesmo se não houver ganho. Não usar só “o build passou” como prova de otimização, nem presumir que toda memoização manual ficou desnecessária.

## Cobertura e critérios de conclusão

- [ ] use: Promise estável consumida, carregamento e rejeição demonstrados.
- [ ] Actions: envio assíncrono integrado, com ciclo pendente/sucesso/erro.
- [ ] useActionState: retorno da ação e erros refletidos no formulário.
- [ ] useOptimistic: provisório imediato, confirmação sem duplicação e reversão de falha.
- [ ] useTransition: atualização de menor prioridade, isPending e entrada responsiva.
- [ ] useDeferredValue: resultado adiado observado e diferença para debounce explicada.
- [ ] Server Components: leitura no servidor e fronteira cliente identificadas.
- [ ] Server Functions: função executada no servidor, entrada validada e resultado retornado.
- [ ] Activity: rascunho preservado e ciclo dos Effects observado ao ocultar e mostrar.
- [ ] View Transitions: demonstração executada em ambiente compatível e movimento reduzido tratado.
- [ ] React Compiler: configuração, evidência de compilação e comparação documentadas.
- [ ] Matriz de compatibilidade preenchida com versões reais e limitações.
- [ ] Todos os resultados apresentados sem marcar API indisponível como concluída.

## Casos obrigatórios de verificação

Primeira carga lenta; leitura rejeitada; envio inválido; envio lento bem-sucedido; falha na gravação; confirmação do provisório sem duplicar; digitação rápida com lista pesada; mudança de painel enquanto há trabalho pendente; rascunho preservado após Activity; ausência de assinaturas duplicadas; transição lista/detalhes com movimento reduzido; comparação do Compiler.

**Limites:** estados pendentes podem ser rápidos; use atraso controlado de laboratório para observá-los. Caso a transição contenha await, consulte as regras da versão sobre atualizações após esse ponto. Server Functions são chamadas remotas: validação deve ocorrer no servidor; dados fictícios bastam. Não afirmar persistência durável se o armazenamento for apenas em memória.

## Fontes

[Referência React](https://react.dev/reference/react) · [use](https://react.dev/reference/react/use) · [useActionState](https://react.dev/reference/react/useActionState) · [useOptimistic](https://react.dev/reference/react/useOptimistic) · [useTransition](https://react.dev/reference/react/useTransition) · [useDeferredValue](https://react.dev/reference/react/useDeferredValue) · [Server Components](https://react.dev/reference/rsc/server-components) · [Server Functions](https://react.dev/reference/rsc/server-functions) · [Activity](https://react.dev/reference/react/Activity) · [ViewTransition](https://react.dev/reference/react/ViewTransition) · [React Compiler](https://react.dev/learn/react-compiler)


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

