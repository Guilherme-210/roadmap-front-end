---
tipo: exercicio
status: proposto
subnivel: "0.6"
criado: "2026-09-17"
---

# Fundamentos - Exercício 06 - Anatomia de um projeto Node.js

**Projeto:** Inicialização e Configuração Profissional de Projeto Node.js
**Nível:** [[Nível 00 - Fundamentos de programação e ambiente#0.6 — Node.js e Gerenciamento de Pacotes]]
**Pré-requisitos:** [[Fundamentos - Exercício 05 - Navegação e automação no terminal]]
**Rota proposta:** Projeto/sandbox em pasta local ou inspeção do próprio ambiente `next-lab/`.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Compreender profundamente o ecossistema do Node.js, as diferenças de runtime em relação ao navegador (DOM vs APIs de sistema como `fs`), a anatomia de um arquivo `package.json`, o papel do lockfile na reprodutibilidade do projeto, o versionamento semântico (SemVer) e as diferenças arquiteturais entre CommonJS (`require`) e ES Modules (`import/export`).

## Enunciado e etapas

### 1. Inicialização de projeto e anatomia do package.json
Em um diretório de testes (`sandbox-node/`):
- Inicialize um projeto com `npm init -y` (ou `pnpm init`).
- Configure os campos essenciais: `name`, `version`, `description`, `main`, `scripts`, `license` e adicione `"type": "module"` para habilitar ES Modules nativos.
- Adicione uma dependência de produção (ex.: `date-fns` ou `chalk`) e uma dependência de desenvolvimento (ex.: `typescript` ou `tsx` com `--save-dev`).

### 2. Comparativo de runtime: Node.js vs Navegador
Crie dois scripts de demonstração:
- Script A: tenta acessar `window` e `document` no Node.js e captura o `ReferenceError`.
- Script B: utiliza APIs nativas exclusivas do Node.js (`process.platform`, `process.version`, `process.memoryUsage()` e o módulo `node:path` ou `node:fs`).

### 3. Módulos: CommonJS vs ES Modules
Construa dois pares de arquivos demonstrando os dois sistemas de módulos:
- Par 1 (CJS): exportação com `module.exports` e importação com `require()`.
- Par 2 (ESM): exportação nomeada e default com `export const / export default` e importação com `import ... from '...'`.
- Explique o comportamento de resolução e carregamento assíncrono do ESM versus o síncrono do CJS.

### 4. Gestão de dependências, SemVer e Lockfiles
- Analise a notação de SemVer no `package.json`: entenda a diferença entre versão exata (`1.2.3`), til (`~1.2.3` - patches permitidos) e circunflexo (`^1.2.3` - minors permitidos).
- Inspecione o `package-lock.json` (ou `pnpm-lock.yaml`) para entender como hashes de integridade e árvores de dependências transitivas garantem que todos os membros da equipe instalem exatamente as mesmas versões.
- Teste a execução de um utilitário temporário sem instalação global através do `npx` (ex.: `npx cowsay "Node.js na veia"` ou gerador similar).

## Cobertura e critérios de conclusão

- [ ] **O que é Node.js e seu Runtime (V8):** Explicação da execução de JavaScript fora do navegador sobre o motor V8 da Google.
- [ ] **Diferenças entre Node.js e Navegador:** Compreensão das APIs disponíveis em cada ambiente (DOM/BOM no navegador vs `fs`/`process`/`crypto` no Node).
- [ ] **Gerenciador npm e estrutura do `package.json`:** Criação e parametrização correta de manifestos de projeto.
- [ ] **`package-lock.json` e integridade das dependências:** Verificação prática do bloqueio de versões exatas.
- [ ] **Scripts npm (`dev`, `build`, etc.):** Criação de atalhos funcionais para tarefas repetitivas.
- [ ] **Dependências de produção vs desenvolvimento:** Justificativa da separação entre `dependencies` e `devDependencies`.
- [ ] **Semantic Versioning (SemVer):** Leitura e interpretação precisa das regras de Major.Minor.Patch.
- [ ] **Módulos: CommonJS (`require`) vs ES Modules (`import/export`):** Implementação e teste dos dois padrões.
- [ ] **Execução com `npx`:** Demonstração do uso de binários sob demanda.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Executar código com `window` no Node.js | Disparar `ReferenceError: window is not defined` | Pendente |
| Importar módulo com `import` sem `"type": "module"` configurado | Disparar erro de sintaxe do Node indicando necessidade de flag ou configuração | Pendente |
| Executar script customizado com `npm run meu-script` | Rodar o comando encapsulado com sucesso | Pendente |
| Executar binário com `npx` sem tê-lo instalado em `package.json` | Baixar em cache temporário, executar e finalizar | Pendente |

## Limites do exercício

Não é necessário configurar publicação de pacotes públicos no registro do npm nem arquiteturas complexas de microfrontends. O objetivo é dominar a base de um projeto Node.js moderno.

## Minha solução

Aguardando tentativa do usuário. Informe o repositório/pasta criada e os testes executados.

## Entrega e evidências

- Arquivo `package.json` configurado na pasta de teste.
- Scripts demonstrando Node vs Browser e CJS vs ESM.
- Resumo de 1 parágrafo explicando por que em projetos Next.js nós nunca devemos commitar a pasta `node_modules`, mas sempre devemos commitar o `package-lock.json` (ou `pnpm-lock.yaml`).

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** criar o diretório de teste e inicializar o projeto Node.js.

## Fontes de estudo

- [Node.js — Documentação oficial](https://nodejs.org/en/docs/)
- [SemVer — Especificação do Versionamento Semântico](https://semver.org/lang/pt-BR/)
