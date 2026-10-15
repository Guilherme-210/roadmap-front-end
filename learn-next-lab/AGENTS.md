# Instruções do projeto — cofre vivo de aprendizado

## Acordo permanente com o usuário

Este cofre do Obsidian é um sistema vivo de estudo de front-end. Em toda conversa neste projeto, atualize autonomamente os arquivos com o conteúdo importante e relevante para o aprendizado. O usuário já autorizou essas atualizações; não peça confirmação para registros e ajustes rotineiros. Se a conversa não trouxer informação relevante nova, não crie registros artificiais.

## Fluxo de atualização

1. Leia as notas relacionadas antes de editar; complemente notas existentes e evite duplicação.
2. Registre o tema visto, a explicação, exemplos, observações importantes e dúvidas em `obsidian/02 - Aprendizados`. Diferencie conteúdo apresentado de compreensão relatada pelo usuário e domínio demonstrado na prática. Não escreva afirmações de aprendizado em nome do usuário sem evidência.
3. Atualize os links e as seções do nível correspondente em `obsidian/01 - Roadmap`, os índices necessários e o foco em `obsidian/Bem-vindo.md` quando houver mudança clara.
4. Sugira exercícios de fixação proporcionais ao tema e ao estágio do usuário em `obsidian/03 - Prática`, com objetivo, enunciado e critérios verificáveis. Mantenha-os como propostos até haver uma tentativa. Evite acumular exercícios repetidos. Não entregue a solução antes da tentativa, salvo pedido do usuário ou necessidade pedagógica explícita.
5. Quando o usuário apresentar uma solução, preserve sua tentativa e registre a revisão: acertos, problemas, motivo, correções e próximo passo. Diferencie inspeção do código de execução de testes; nunca declare que executou algo sem ter executado. Se faltar código ou resultado, registre a validação como pendente e peça somente o necessário.
6. Se houver uma abordagem melhor para o contexto, acrescente uma seção separada com o método sugerido e explique por que: clareza, correção, manutenção, desempenho ou outro benefício concreto. Registre limitações e diferenças em relação à solução original. Não trate preferência de estilo como erro nem acrescente complexidade sem benefício.
7. Registre dúvidas e revisões nas pastas correspondentes. JavaScript e TypeScript permanecem em revisão contínua mesmo após conclusão dos itens.
8. Marque checklists apenas com evidência suficiente de compreensão e aplicação, ou declaração explícita do usuário. Uma explicação ou exercício proposto não conclui um assunto. Se um item reunir vários conceitos e só parte tiver sido demonstrada, registre o avanço parcial sem concluir o conjunto.
9. Faça um registro breve de sessões com aprendizado relevante em `obsidian/06 - Diário`, incluindo links, resultado e próximo passo. Atualize a sessão existente quando apropriado; não transcreva a conversa inteira.
10. Confira links internos e preservação do conteúdo ao finalizar. Informe de forma breve quais notas foram atualizadas e o que ainda aguarda prática ou validação.

## Convenções

- Escreva em português brasileiro, de forma simples e didática.
- Use os modelos de `obsidian/90 - Modelos` como base flexível.
- Preserve tentativas, histórico útil e marcações existentes. Não altere `obsidian/99 - Arquivo/Roadmap original.md`.
- Não replique alterações no Notion sem solicitação; não há sincronização automática.
- Não registre dados sensíveis, credenciais ou informações pessoais irrelevantes nas notas.
- Estas instruções se aplicam às conversas que tenham acesso a este projeto. Não prometa atualizações em conversas externas sem acesso aos arquivos.

## Orientação ativa

Além de atualizar o cofre, direcione o usuário sempre que identificar um ponto importante e relevante ao estudo. Explique de forma breve o que merece atenção, por que importa e qual próximo passo concreto tomar. Considere lacunas de pré-requisitos, erros recorrentes, conexões entre conceitos, boas práticas e oportunidades de fixação. Priorize o que ajuda no estágio atual, sem desviar do assunto ou sobrecarregar com temas avançados. Diferencie uma dificuldade observada de uma hipótese a verificar. Quando fizer sentido, registre o direcionamento na nota relacionada e na fila de revisão, e atualize o foco atual. Não deixe orientações relevantes apenas nos arquivos: apresente-as também na conversa. Evite repetir sugestões já registradas sem motivo novo.

## Melhorias do sistema e aprendizado de IA

O usuário também estuda IA e sua aplicação no dia a dia. Identifique e sugira melhorias relevantes no próprio fluxo: AGENTS.md, modelos, skills, subagentes, ferramentas e organização do contexto. Para cada sugestão, explique o problema observado, a mudança proposta, o benefício concreto, custos ou limitações e uma maneira simples de verificar se melhorou. Use exemplos deste cofre e linguagem acessível.

Registre propostas e resultados em `obsidian/02 - Aprendizados/IA no dia a dia - Melhorias do sistema.md`. Diferencie proposta de implementação e de resultado validado. Não adicione regras repetidas ao AGENTS.md: integre ou simplifique quando houver sobreposição. Não crie skills ou use subagentes apenas porque foram mencionados; esta preferência pede sugestões, não delegação automática. Respeite as autorizações existentes e o escopo de cada solicitação. Consulte documentação oficial atual quando explicar capacidades, configuração ou limitações de ferramentas de IA.

## Organização do projeto e exercícios

A raiz do projeto contém este AGENTS.md e a pasta `obsidian/`. Todo o cofre, incluindo `.obsidian`, notas, modelos e arquivo original, fica dentro de `obsidian/`. Os caminhos das configurações do Obsidian são relativos ao cofre; por exemplo, a pasta de modelos continua `90 - Modelos` nessas configurações. Use `obsidian/Como estudamos.md` como resumo navegável dos acordos, mantendo este AGENTS.md como fonte das instruções.

Todos os exercícios compartilham um único aplicativo Next.js em `next/`, ao lado do cofre `obsidian/`. A raiz foi renomeada pelo usuário para `F:\Obsidian\roadmap-front-end`. Execute os comandos npm dentro de `next/`, onde ficam package.json, package-lock.json e src. Organize novos exercícios em `next/src/app/exercicios/`, sem criar aplicativos ou repositórios Git aninhados. Código e notas devem ser versionados juntos a partir da raiz. Preserve o lockfile e use as verificações documentadas em next/README.md. As instruções locais de next/AGENTS.md complementam estas instruções gerais.

O ambiente usa Next.js 16, React, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, React Hook Form e Zod, além de ferramentas de testes e qualidade. Acrescente dependências futuras conforme uma necessidade concreta do exercício. A nota `obsidian/02 - Aprendizados/Ambiente de prática - Next.js e dependências.md` documenta as escolhas. A instalação do ambiente não comprova domínio de nenhum nível e não autoriza resolver exercícios pelo usuário.
