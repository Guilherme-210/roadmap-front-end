---
tipo: exercicio
status: proposto
subnivel: "7.6"
criado: "2026-09-17"
---
# React - Exercício 06 - Composição e carregamento

**Projeto:** Painel de detalhes extensível
**Nível:** [[Nível 07 - React#7.6 — React intermediário]]
**Pré-requisito:** [[React - Exercício 05 - Renderização e identidade]]. Retome lacunas antes de avançar.
**Rota proposta:** /exercicios/react/06-composicao, no next-lab. A rota ainda não foi criada.

Um exercício integrado para todo o subnível, dividido em etapas. Reutilize os cartões como domínio, mantendo a atividade anterior acessível para comparação. Não é necessário realizar todas as etapas em uma sessão.

## Objetivo

Criar um painel reutilizável que combine composição, Compound Components, Render Props, Portals, recuperação de erros e carregamento sob demanda.

## Enunciado e etapas

1. Construa um painel de estudo com áreas de cabeçalho, conteúdo e ações fornecidas pelo consumidor. Use composição para variar o conteúdo sem multiplicar flags específicas.
2. Crie uma API de Compound Components, por exemplo Painel.Root, Painel.Trigger, Painel.Content e Painel.Close. Eles devem coordenar abertura e fechamento por estado compartilhado do Root. Use duas instâncias para demonstrar isolamento.
3. Inclua um componente com Render Props para fornecer dados calculados (por exemplo progresso) a duas apresentações diferentes. A função recebida decide o JSX; explique a diferença para children estático.
4. Renderize a camada de detalhes por createPortal fora do contêiner visual que tem overflow. Mantenha o vínculo lógico com a árvore React. Implemente fechamento por Escape, foco inicial e retorno do foco; impedir que o foco escape enquanto o modal estiver aberto.
5. Carregue um relatório com lazy e import dinâmico somente quando solicitado. Coloque uma fronteira Suspense que mostre um fallback durante o carregamento; demonstre o atraso com rede limitada e cache desabilitado.
6. Adicione uma Error Boundary em torno do relatório. Provoque um erro de renderização controlado em um descendente e ofereça recuperação que também remova a causa do erro. A página principal deve continuar utilizável.
7. Compare erro de renderização capturado pela boundary com erro de evento tratado no próprio evento. Não atribua à Error Boundary cobertura automática de qualquer erro assíncrono.

## Cobertura e critérios de conclusão

- [ ] Composição: ao menos duas variações do painel reutilizam a estrutura.
- [ ] Compound Components: partes compartilham o Root correto e duas instâncias são independentes.
- [ ] Render Props: a mesma informação alimenta duas apresentações por função.
- [ ] Portals: detalhes escapam do recorte visual, mantendo contexto e comportamento de eventos explicados.
- [ ] Error Boundaries: erro intencional mostra fallback e recuperação funciona sem derrubar a página.
- [ ] Lazy Loading: relatório possui import dinâmico e evidência de carregamento sob demanda.
- [ ] Suspense: fallback visível com carregamento lento e substituído pelo relatório.
- [ ] Navegação por teclado do modal, Escape e retorno de foco verificados.
- [ ] Explicar por que um fetch comum dentro de useEffect não ativa esse Suspense automaticamente.

## Casos obrigatórios de verificação

Abrir cada painel; alterar um sem afetar o outro; navegar só por teclado; abrir dentro de contêiner recortado; carregar relatório em rede lenta; provocar erro de render; recuperar; provocar erro de evento e mostrar tratamento local.

**Limite pedagógico:** implemente os padrões que está estudando. Usar apenas Dialog, Tabs ou Boundary prontos não demonstra suas responsabilidades internas. Uma Error Boundary em classe ou uma biblioteca específica é possível, desde que o mecanismo e a fronteira sejam explicados; não precisa converter os demais componentes para classes.

## Fontes

[Suspense](https://react.dev/reference/react/Suspense) · [lazy](https://react.dev/reference/react/lazy) · [createPortal](https://react.dev/reference/react-dom/createPortal) · [Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)


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

