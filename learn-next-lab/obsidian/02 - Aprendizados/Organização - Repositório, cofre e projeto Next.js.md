---
tipo: aprendizado
criado: "2026-09-15"
---

# Organização - Repositório, cofre e projeto Next.js

[[Aprendizados]] · [[Prática]] · [[Nível 05 - Git e GitHub - Azure DevOps]] · [[Nível 28 - Arquitetura de projetos]]

## Perguntas discutidas

1. Vale renomear a raiz de Roadmap Front-end para roadmap-front-end?
2. Vale separar o cofre em obsidian e o aplicativo em next, dentro da mesma raiz?

## Recomendação apresentada

Usar roadmap-front-end como pasta principal e separar obsidian e next. Atualização: o usuário solicitou a mudança do cofre para obsidian, e ela foi executada. A renomeação da raiz e a criação do aplicativo em next continuam pendentes. A instalação anterior permanece cancelada.

```text
roadmap-front-end/
├── .git/
├── .gitignore
├── AGENTS.md
├── README.md
├── obsidian/
│   ├── .obsidian/
│   ├── Bem-vindo.md
│   ├── Roadmap completo.md
│   └── pastas de estudo...
└── next/
    ├── package.json
    ├── package-lock.json
    ├── src/
    └── public/
```

A árvore mostra a organização proposta. A pasta obsidian já contém o cofre; AGENTS.md permanece na raiz. A raiz ainda se chama Roadmap Front-end. O aplicativo Next.js e o repositório Git ainda não foram criados nesta sequência de trabalho.

## Nome da pasta

Minúsculas e hífens simplificam caminhos em comandos e scripts. O nome atual, com espaço e maiúsculas, não impede o uso do Git. Nome da pasta local, nome do repositório remoto e campo name do package.json são coisas diferentes e podem ter valores diferentes. O nome do pacote npm tem suas próprias restrições, incluindo ausência de maiúsculas e espaços; a convenção de pasta ajuda a evitar confusão com ferramentas que sugerem o nome do pacote a partir dela.

## Três raízes diferentes

- **Raiz do repositório:** engloba código e notas, com um único histórico Git.
- **Raiz do cofre:** a pasta que o Obsidian abre; na proposta, obsidian, contendo as notas e .obsidian.
- **Raiz do aplicativo:** contém package.json e a configuração do Next.js; na proposta, next.

Um commit pode incluir arquivos de ambas as subpastas. Estar dentro do repositório não coloca um arquivo automaticamente no commit: entram as mudanças preparadas para ele. O .gitignore orienta quais arquivos não rastreados ignorar; não remove do histórico arquivos já rastreados.

## Por que separar neste caso

- O cofre fica dedicado às notas e configurações do Obsidian.
- Código, dependências e arquivos gerados ficam concentrados no aplicativo.
- Fica mais fácil identificar onde estudar e onde executar o aplicativo.
- Todos os exercícios continuam no mesmo aplicativo Next.js e no mesmo repositório das notas.

**Custo:** comandos do aplicativo devem ser executados em next, e referências das notas ao código precisam considerar essa separação. Arquivos fora do cofre não se tornam notas acessíveis por wikilinks comuns; caminhos de código podem ser registrados como referência e abertos no editor.

## Como pensar nos commits

Exemplo de mudança coerente: solução do exercício de JSX em next e anotação da aprendizagem em obsidian, no mesmo commit.

**Versionar:** notas, código-fonte, configurações úteis, package.json e package-lock.json.

**Ignorar:** node_modules, .next, arquivos locais com segredos e estado temporário de interface. Avaliar configurações de Obsidian individualmente: modelos e aparência podem ser úteis no repositório, enquanto o estado das janelas costuma gerar alterações desnecessárias.

## Migração do cofre realizada

Notas, modelos, arquivo original e .obsidian foram movidos juntos para obsidian. Os 69 arquivos foram conferidos por hash antes dos ajustes de documentação. A pasta de modelos continua relativa ao cofre, sem mudança na configuração. Os links para os acordos agora apontam para [[Como estudamos]], pois AGENTS.md permanece na raiz do projeto, fora do cofre.

Abra obsidian como cofre no Obsidian e mantenha a pasta principal como projeto de trabalho no editor. A criação do aplicativo e a renomeação da raiz continuam pendentes.

## Fixação opcional

Sem executar nada, indique em qual pasta ficariam: uma nota de closures, um componente React, package.json e as configurações do Obsidian. Depois explique se a nota e o componente podem entrar no mesmo commit e quais mudanças precisam estar preparadas para isso.

**Estado:** conteúdo apresentado; compreensão e prática ainda não validadas. Nenhuma marcação do roadmap alterada.

## Fontes

- [Git — commit](https://git-scm.com/docs/git-commit)
- [Git — gitignore](https://git-scm.com/docs/gitignore)
- [npm — package.json](https://docs.npmjs.com/cli/v11/configuring-npm/package-json/)
- [Obsidian — gerenciamento de cofres](https://obsidian.md/help/manage-vaults)



## Atualização — estrutura implementada

O usuário renomeou a raiz para roadmap-front-end e autorizou a criação do aplicativo em next. O aplicativo foi instalado nesta nova sessão. Consulte [[Ambiente de prática - Next.js e dependências]] para o estado atual, comandos e dependências. Os trechos anteriores registram as etapas de decisão.
