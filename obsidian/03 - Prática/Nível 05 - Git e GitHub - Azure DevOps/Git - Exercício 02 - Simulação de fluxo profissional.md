---
tipo: exercicio
status: proposto
subnivel: "5.2"
criado: "2026-09-17"
---

# Git - Exercício 02 - Simulação de fluxo profissional

**Projeto:** Operações Avançadas de Git: Rebase Interativo, Squash, Cherry-pick e Recuperação com Reflog
**Nível:** [[Nível 05 - Git e GitHub - Azure DevOps#5.2 — Git profissional]]
**Pré-requisitos:** [[Git - Exercício 01 - Repositório do zero]]
**Rota proposta:** Exercício prático em terminal em repositório de teste local ou GitHub.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Capacitar o desenvolvedor para os fluxos profissionais de equipes de alto desempenho, dominando o processo de **Pull Request (PR)** e **Code Review**, comparando as estratégias de integração de branches (**Merge Commit vs Squash and Merge vs Rebase**), aplicando operações cirúrgicas de resgate com **`cherry-pick`**, desfazimento seguro com **`revert`**, desfazimento destrutivo controlado com **`reset`** (`--soft` vs `--hard`), criação de **Tags/Releases** semânticas e recuperação de commits perdidos através do **`git reflog`**.

## Enunciado e etapas

### 1. Rebase Interativo e organização de histórico (Squash)
Em uma branch de feature com múltiplos commits poluídos (ex.: "ajuste", "teste", "wip", "arrumando bug"):
- Execute um rebase interativo: `git rebase -i HEAD~4`.
- Utilize a ação `squash` (ou `fixup`) para condensar os commits desordenados em um único commit atômico e bem documentado.
- Demonstre a reordenação ou edição da mensagem de commit (`reword`).

### 2. Integração: Merge Commit vs Rebase vs Squash
Elabore e teste os três cenários em branches separadas:
- **Merge Commit tradicional:** preserva todos os nós e a história exata de criação da branch, mas gera poluição visual em projetos grandes.
- **Rebase:** reaplica os commits da feature no topo da branch de destino, gerando um histórico estritamente linear sem commit de merge.
- **Squash and Merge:** condensa toda a história da branch de feature em um único nó antes de mesclar na branch principal.

### 3. Cirurgia de código com `cherry-pick` e reversão com `revert` vs `reset`
- **`git cherry-pick <hash>`:** selecione um commit específico isolado de uma branch experimental e traga-o diretamente para a branch `main` sem trazer todo o resto da branch experimental.
- **`git revert <hash>`:** reverta uma alteração indesejada gerando um *novo commit* que anula as alterações anteriores (técnica segura e obrigatória para branches públicas compartilhadas).
- **`git reset --soft` vs `--hard`:** demonstre no repositório local a diferença entre voltar a HEAD preservando as mudanças na Staging Area (`--soft`) versus descartar tudo irreversivelmente do disco (`--hard`).

### 4. A caixa-preta de emergência: `git reflog` e criação de Tags
- Execute intencionalmente um `git reset --hard HEAD~2`, simulando a perda acidental de dois commits importantes.
- Abra o histórico de operações do Git com `git reflog`.
- Localize o hash do commit anterior à perda e resgate seu código com `git checkout <hash>` ou `git reset --hard <hash>`.
- Crie uma tag semântica anotada: `git tag -a v1.0.0 -m "Release v1.0.0 estável"` e inspecione com `git show v1.0.0`.

## Cobertura e critérios de conclusão

- [ ] **Estratégias de integração:** Domínio de Merge Commit, Squash e Rebase.
- [ ] **Rebase interativo (`git rebase -i`):** Limpeza e consolidação de commits antes da submissão para PR.
- [ ] **Cirurgia de commits (`cherry-pick`):** Transporte de commits pontuais entre branches distintas.
- [ ] **Desfazimento (`revert` vs `reset`):** Aplicação de reversão segura vs descarte local.
- [ ] **Resgate com `reflog`:** Capacidade de recuperar commits aparentemente perdidos ou branches deletadas.
- [ ] **Tags e Releases:** Versionamento formal de marcos do projeto com tags anotadas.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Condensar 4 commits em 1 com `git rebase -i` | Histórico da branch passa a conter apenas 1 commit limpo e coerente | Pendente |
| Trazer commit pontual com `cherry-pick` | Apenas o arquivo e linha daquele commit são aplicados na branch atual | Pendente |
| Resgatar commit após `reset --hard` via `reflog` | Os arquivos e commits apagados reaparecem intactos no histórico | Pendente |
| Criar e listar tag anotada `git tag -l` | Exibição da versão semântica associada ao commit específico | Pendente |

## Limites do exercício

Não realize rebases ou resets destrutivos no repositório principal compartilhado do projeto; execute todas as práticas destrutivas em uma pasta ou repositório sandbox dedicado.

## Minha solução

Aguardando tentativa do usuário. Informe o repositório sandbox e os comandos testados.

## Entrega e evidências

- Registro do terminal demonstrando o uso de `git rebase -i`, `cherry-pick` e `reflog`.
- Explicação de 1 parágrafo: por que a "Regra de Ouro do Rebase" diz que nunca devemos fazer rebase de branches públicas/compartilhadas?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** criar o repositório sandbox e testar o rebase interativo e o reflog.

## Fontes de estudo

- [Atlassian Git Tutorial — Git Rebase](https://www.atlassian.com/br/git/tutorials/rewriting-history/git-rebase)
- [Atlassian Git Tutorial — Git Reflog](https://www.atlassian.com/br/git/tutorials/rewriting-history/git-reflog)
- [Git Book — Git Cherry-pick](https://git-scm.com/docs/git-cherry-pick)
