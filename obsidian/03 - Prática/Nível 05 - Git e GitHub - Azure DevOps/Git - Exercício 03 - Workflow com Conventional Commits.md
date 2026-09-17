---
tipo: exercicio
status: proposto
subnivel: "5.3"
criado: "2026-09-17"
---

# Git - Exercício 03 - Workflow com Conventional Commits

**Projeto:** Padronização de Commits, Estratégias de Branching e Integração Contínua (CI/CD)
**Nível:** [[Nível 05 - Git e GitHub - Azure DevOps#5.3 — Workflow]]
**Pré-requisitos:** [[Git - Exercício 02 - Simulação de fluxo profissional]]
**Rota proposta:** Repositório no GitHub / Azure DevOps com configuração de automação e linters.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Implementar a governança e padronização profissional do fluxo de trabalho da equipe de desenvolvimento, adotando a especificação **Conventional Commits** (para geração automatizada de changelogs e versionamento semântico), comparando os modelos de ramificação **Git Flow** versus **Trunk-Based Development**, e simulando a integração com pipelines de **CI/CD** associadas a Pull Requests (com bloqueios de merge em caso de falha de testes ou lint).

## Enunciado e etapas

### 1. Especificação e padronização com Conventional Commits
- Estude os prefixos canônicos da especificação:
  - `feat:` nova funcionalidade para o usuário.
  - `fix:` correção de bug.
  - `docs:` alterações apenas em documentação.
  - `style:` formatação de código (espaçamento, ponto e vírgula) sem impacto na lógica.
  - `refactor:` alteração de código que nem corrige bug nem adiciona funcionalidade.
  - `test:` adição ou correção de testes automatizados.
  - `chore:` tarefas de manutenção de build, dependências ou ferramentas.
- Aplique o formato padrão: `<tipo>(<escopo opcional>): <descrição curta>` e use o rodapé para referenciar tarefas (ex.: `Closes #42`).
- Sinalize alterações que quebram compatibilidade (*Breaking Changes*) adicionando uma exclamação (`feat!: alteração na API pública`) ou o rodapé `BREAKING CHANGE: ...`.

### 2. Comparativo de Estratégias de Ramificação (Branching Strategies)
Elabore uma matriz comparativa detalhando:
- **Git Flow:** modelo tradicional com branches de longa duração (`main`, `develop`), branches de suporte (`feature/*`, `release/*`, `hotfix/*`). Ideal para softwares empacotados com ciclos de entrega mais lentos.
- **Trunk-Based Development:** modelo ágil moderno onde desenvolvedores integram branches de vida muito curta (menos de 1 dia) diretamente no tronco principal (`main`), utilizando *Feature Flags* para ocultar funcionalidades incompletas em produção. Ideal para equipes de entrega contínua (*Continuous Delivery*).

### 3. Automação de validação local com Git Hooks (Husky / Commitlint)
Em um projeto Node.js/Next.js:
- Entenda a função dos hooks nativos do Git na pasta `.git/hooks/` (`pre-commit`, `commit-msg`).
- Simule mentalmente ou configure o `commitlint` para rejeitar commits que não sigam o padrão Conventional Commits (ex.: bloquear commits com mensagem genérica como `"arrumado"`).

### 4. Integração Contínua (CI) vinculada a Pull Requests
- Desenhe o fluxo de um pipeline moderno no GitHub Actions ou Azure Pipelines:
  - Disparador: abertura ou atualização de Pull Request apontando para a `main`.
  - Etapa 1: instalação de dependências (`pnpm install --frozen-lockfile`).
  - Etapa 2: checagem de tipos estáticos (`pnpm type-check` ou `tsc --noEmit`).
  - Etapa 3: verificação de linter e formatação (`pnpm lint`).
  - Etapa 4: execução de testes unitários (`pnpm test`).
  - Regra de proteção: a branch `main` só permite merge se todos os 4 checks da CI passarem com sucesso (Branch Protection Rules).

## Cobertura e critérios de conclusão

- [ ] **Conventional Commits:** Domínio de tipos (`feat`, `fix`, `chore`, etc.), escopo e sintaxe de Breaking Change.
- [ ] **Git Flow vs Trunk-Based:** Compreensão de quando adotar cada modelo e o impacto na agilidade da equipe.
- [ ] **Feature Flags:** Noção básica de como liberar código em produção sem expor funcionalidade inacabada.
- [ ] **CI/CD associado a PRs:** Arquitetura de esteira de validação automática pré-merge.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Criar commit `feat(auth): add login with google` | Sintaxe válida aprovada pelo padrão Conventional Commits | Pendente |
| Criar commit `fix: resolve crash on checkout` | Classificado adequadamente como correção de bug sem breaking change | Pendente |
| Commit com `feat!: drop support for legacy node 14` | Interpretado pelo versionamento semântico como incremento de versão MAJOR | Pendente |
| Submissão de PR com falha de lint na esteira de CI | O botão de merge fica desabilitado pela regra de proteção de branch | Pendente |

## Limites do exercício

Não é necessário contratar plano pago de CI/CD em nuvem; utilize os minutos gratuitos do GitHub Actions ou simule o script de validação de pipeline localmente com `npm run lint && npm run test`.

## Minha solução

Aguardando tentativa do usuário. Informe as definições de workflow e commits criados.

## Entrega e evidências

- Sequência de 5 commits no histórico do Git seguindo estritamente os padrões de Conventional Commits.
- Documento ou diagrama comparando o fluxo de trabalho Git Flow versus Trunk-Based Development.
- Resumo de 1 parágrafo: como os Conventional Commits permitem que ferramentas como o *Semantic Release* calculem automaticamente se a próxima versão do pacote será `1.0.1`, `1.1.0` ou `2.0.0`?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** exercitar o padrão Conventional Commits e analisar as regras de CI/CD.

## Fontes de estudo

- [Conventional Commits — Especificação Oficial](https://www.conventionalcommits.org/pt-br/v1.0.0/)
- [Trunk Based Development — Official Guide](https://trunkbaseddevelopment.com/)
- [GitHub Docs — About protected branches](https://docs.github.com/pt/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)
