---
tipo: exercicio
status: proposto
subnivel: "5.1"
criado: "2026-09-17"
---

# Git - Exercício 01 - Repositório do zero

**Projeto:** Inicialização, Ramificação e Resolução Prática de Conflitos com Git
**Nível:** [[Nível 05 - Git e GitHub - Azure DevOps#5.1 — Git]]
**Pré-requisitos:** [[Nível 00 - Fundamentos de programação e ambiente#0.5 — Terminal e Linha de Comando]]
**Rota proposta:** Exercício prático em terminal em repositório de teste local (`sandbox-git/`).

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Dominar o fluxo de trabalho cotidiano e fundamental do controle de versão com **Git**, compreendendo os três estados de um arquivo (Working Directory, Staging Area e Git Repository), criando branches para desenvolvimento isolado com `switch`/`checkout`, configurando regras de exclusão seguras no `.gitignore`, sincronizando com repositórios remotos (`fetch`, `pull`, `push`) e provocando e solucionando manualmente um **conflito de merge** real.

## Enunciado e etapas

### 1. Inicialização, área de preparação e commits atômicos
Em uma pasta temporária vazia no seu computador:
- Inicialize um repositório com `git init -b main`.
- Crie um arquivo `.gitignore` ignorando `node_modules/`, arquivos `.env*` e pastas de build (`dist/`, `.next/`).
- Verifique o status com `git status`.
- Adicione arquivos à área de preparação (*staging*) com `git add .` (ou granular com `git add <arquivo>`).
- Crie um commit com mensagem clara: `git commit -m "chore: initial project setup"`.

### 2. Criação de branches e alternância segura
- Crie e mude para uma nova branch de funcionalidade utilizando o comando moderno `git switch -c feature/calculadora` (ou `git checkout -b`).
- Faça alterações em um arquivo `calculadora.js` e efetue um novo commit na branch.
- Retorne à branch principal com `git switch main` e verifique que o arquivo criado na branch de funcionalidade não aparece no diretório de trabalho da `main`.

### 3. Simulação intencional e resolução de conflito de Merge
- Na branch `main`, edite a linha 5 de um arquivo `README.md` escrevendo "Versão mantida pela equipe principal" e comite.
- Mude para uma branch paralela `feature/documentacao`, edite a mesmíssima linha 5 do `README.md` escrevendo "Versão elaborada pelos redatores" e comite.
- Volte para a `main` e execute `git merge feature/documentacao`.
- Observe o Git interromper a operação avisando: `CONFLICT (content): Merge conflict in README.md`.
- Abra o arquivo, analise os marcadores de conflito (`<<<<<<< HEAD`, `=======`, `>>>>>>>`), resolva manualmente mantendo o melhor texto, remova os marcadores, execute `git add README.md` e conclua o commit de merge (`git commit`).

### 4. Operações com repositório remoto: Fetch vs Pull vs Push
- Adicione um repositório remoto (pode ser um repositório privado no seu GitHub): `git remote add origin <url>`.
- Envie a branch principal: `git push -u origin main`.
- Explique a diferença crucial entre:
  - `git fetch`: baixa os metadados e branches do remoto sem alterar seus arquivos locais.
  - `git pull`: executa um `fetch` seguido imediatamente de um `merge` (ou rebase) na branch atual.

## Cobertura e critérios de conclusão

- [ ] **Ciclo de vida do arquivo:** Domínio de Untracked $\rightarrow$ Staged $\rightarrow$ Committed $\rightarrow$ Modified.
- [ ] **Configuração do `.gitignore`:** Prevenção contra versionamento de credenciais e dependências.
- [ ] **Criação e navegação de branches:** Uso fluente de `git switch` e `git branch`.
- [ ] **Resolução de conflitos:** Identificação e solução limpa de divergências de código.
- [ ] **Sincronização remota:** Compreensão e execução de `fetch`, `pull` e `push`.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Criar arquivo `.env` com segredos tendo `.gitignore` configurado | `git status` não lista o `.env` como arquivo a ser rastreado | Pendente |
| Provocar merge de linhas divergentes | Git acusa conflito e bloqueia o commit até resolução humana | Pendente |
| Executar `git log --graph --oneline` após merge | Gráfico exibe a ramificação e o nó de união do merge | Pendente |
| Executar `git fetch` vs `git pull` | `fetch` atualiza apenas referências remotas sem alterar o diretório de trabalho | Pendente |

## Limites do exercício

Não utilize clientes com interface gráfica pesada (como GitKraken ou SourceTree) nesta etapa; execute todos os comandos exclusivamente via terminal de comando para consolidar os fundamentos da ferramenta.

## Minha solução

Aguardando tentativa do usuário. Informe os comandos e o log da resolução do conflito.

## Entrega e evidências

- Histórico de comandos executados no terminal.
- Captura ou transcrição da saída de `git log --graph --oneline -n 10` mostrando a criação de branches e a união do merge de conflito resolvido.
- Resumo de 1 parágrafo: o que acontece se você der `git push -f` (force push) em uma branch compartilhada como a `main` e por que isso é expressamente proibido na maioria das empresas?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** criar a pasta de testes e simular o fluxo com o conflito de merge.

## Fontes de estudo

- [Git Book — Documentação Oficial do Pro Git (em Português)](https://git-scm.com/book/pt-br/v2)
- [Oh Shit, Git!?! — Dicas para quando as coisas dão errado no Git](https://ohshitgit.com/pt_BR)
