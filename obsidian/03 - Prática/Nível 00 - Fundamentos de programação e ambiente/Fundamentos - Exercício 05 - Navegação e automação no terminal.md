---
tipo: exercicio
status: proposto
subnivel: "0.5"
criado: "2026-09-17"
---

# Fundamentos - Exercício 05 - Navegação e automação no terminal

**Projeto:** Roteiro Prático de Comandos de Terminal, Variáveis de Ambiente e Scripts
**Nível:** [[Nível 00 - Fundamentos de programação e ambiente#0.5 — Terminal e Linha de Comando]]
**Pré-requisitos:** [[Fundamentos - Exercício 01 - Calculadora de console]]
**Rota proposta:** Exercício prático em terminal (PowerShell, Bash ou Git Bash).

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Dominar o uso prático de linhas de comando modernas (PowerShell no Windows e Bash/Git Bash/WSL), manipulando diretórios e arquivos, configurando e inspecionando variáveis de ambiente e a variável de sistema `$PATH`, e executando scripts de automação diretamente do terminal.

## Enunciado e etapas

### 1. Navegação estrutural e exploração de diretórios
Abra o terminal e execute uma sequência de exploração:
- Descubra o diretório de trabalho atual (`pwd` no Bash / `Get-Location` ou `pwd` no PowerShell).
- Navegue entre pastas absolutas e relativas (`cd ..`, `cd ./caminho`).
- Liste arquivos visíveis e ocultos com detalhes de tamanho e permissão (`ls -la` no Bash / `Get-ChildItem -Force` ou `dir` no PowerShell).

### 2. Operações de arquivos e diretórios via CLI
Sem usar a interface gráfica do sistema operacional:
- Crie uma estrutura aninhada de pastas de teste (ex.: `sandbox/modulo-a/temp`) usando `mkdir -p` (ou `New-Item -ItemType Directory`).
- Crie um arquivo de texto com conteúdo via redirecionamento de saída (`echo "conteúdo" > config.txt`).
- Copie (`cp` / `Copy-Item`), renomeie/mova (`mv` / `Move-Item`) e exclua recursivamente (`rm -rf` / `Remove-Item -Recurse -Force`) a pasta criada, verificando o status antes e depois.

### 3. Variáveis de ambiente e variável PATH
- Inspecione a variável de ambiente `$PATH` (ou `$env:PATH` no PowerShell) e identifique onde os binários do Node.js, Git e npm estão instalados no seu computador.
- Crie uma variável de ambiente temporária para a sessão (ex.: `APP_ENV=development` ou `$env:APP_ENV="development"`) e leia seu valor via terminal e via script Node.js com `process.env.APP_ENV`.

### 4. Criação e execução de um script CLI
Crie um script simples executável (arquivo `.sh` no Bash ou `.ps1` no PowerShell, ou um script npm que execute Node.js) que:
- Crie uma pasta de backup, copie um arquivo para dentro dela adicionando a data atual no nome e printe uma mensagem de sucesso no terminal com código de saída 0 (`exit 0`).

## Cobertura e critérios de conclusão

- [ ] **Navegação entre diretórios (`cd`, `pwd`, `ls`/`dir`):** Domínio de caminhos relativos (`.` e `..`) e absolutos.
- [ ] **Manipulação de arquivos e pastas:** Criação, cópia, movimentação e remoção sem uso de explorador gráfico.
- [ ] **Variáveis de ambiente e `$PATH`:** Compreensão do funcionamento do PATH para resolução de comandos globais.
- [ ] **Execução de programas e scripts:** Execução de binários e automações com passagem de parâmetros e leitura de código de saída.
- [ ] **PowerShell, Bash e ferramentas complementares:** Compreensão das equivalências de comandos entre ambientes Windows e Unix/Linux (WSL / Git Bash).

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Executar comando que exibe o caminho absoluto atual | Retornar o caminho completo do projeto | Pendente |
| Criar pasta aninhada com 3 níveis em um único comando | Pasta criada sem erros intermediários | Pendente |
| Executar script Node lendo variável definida na sessão do terminal | O script exibe o valor da variável injetada | Pendente |
| Tentar executar comando inexistente | Identificar a mensagem do shell e relacionar com a ausência do binário no PATH | Pendente |

## Limites do exercício

Não é necessário configurar ambientes complexos de produção ou servidores remotos SSH. Foque no domínio local das ferramentas de linha de comando no seu ambiente de desenvolvimento.

## Minha solução

Aguardando tentativa do usuário. Informe os comandos executados e as saídas registradas.

## Entrega e evidências

- Registro em texto dos comandos executados na sequência de cada etapa.
- Tabela de verificação preenchida com a saída real do seu terminal.
- Explicação de 1 parágrafo: por que quando instalamos uma ferramenta global (como `node` ou `git`), precisamos reiniciar o terminal ou garantir que ela esteja no `$PATH`?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** abrir o terminal e executar o roteiro de etapas.

## Fontes de estudo

- [Ubuntu — Linux Command Line Basics](https://ubuntu.com/tutorials/command-line-for-beginners)
- [Microsoft Learn — Introdução ao PowerShell](https://learn.microsoft.com/pt-br/powershell/scripting/overview)
