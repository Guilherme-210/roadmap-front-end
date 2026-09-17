---
tipo: exercicio
status: proposto
subnivel: "6.7"
criado: "2026-09-17"
---

# TypeScript - Exercício 07 - Configuração profissional do tsconfig

**Projeto:** Auditoria, Configuração e Otimização do Compilador TypeScript (`tsconfig.json`)
**Nível:** [[Nível 06 - TypeScript#6.7 — Configuração]]
**Pré-requisitos:** [[TypeScript - Exercício 06 - Utilitários de tipo aplicados]]
**Rota proposta:** Inspeção e configuração do arquivo `tsconfig.json` do `next-lab` ou sandbox.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Compreender profundamente a anatomia e o impacto arquitetural do arquivo de configuração do compilador (**`tsconfig.json`**), dominando as opções fundamentais do modo estrito (`strict`), o mapeamento limpo de importações através de apelidos de caminho (**Path Aliases**), a estratégia de resolução de módulos moderna (**`moduleResolution: "bundler"`**), alvos de compilação (**`target`**), bibliotecas globais de runtime (**`lib`**) e emissão de arquivos de declaração de tipos (**`declaration: true`**).

## Enunciado e etapas

### 1. A família de opções do modo estrito (`"strict": true`)
- Inspecione a flag mestra `"strict": true` e documente as regras individuais que ela ativa por baixo dos panos:
  - `noImplicitAny`: impede variáveis sem tipagem e sem inferência de virarem `any` silenciosamente.
  - `strictNullChecks`: impede atribuição acidental de `null` ou `undefined` a tipos concretos.
  - `strictFunctionTypes`: validação contravariante estrita de parâmetros em callbacks.
  - `noImplicitThis`: impede uso do `this` quando seu tipo for incerto.
  - `alwaysStrict`: emite `"use strict"` em todos os arquivos gerados.
- Teste desabilitar temporariamente `strictNullChecks` para observar como bugs perigosos passam despercebidos pelo compilador.

### 2. Resolução de módulos e Target moderno para Next.js
Analise e configure os parâmetros de compilação:
- `"target": "ES2022"` (ou superior): define a versão da sintaxe JavaScript de saída (classes com campos privados nativos, métodos modernos de array, etc.).
- `"moduleResolution": "bundler"`: a recomendação oficial moderna para Next.js, Vite e empacotadores contemporâneos, permitindo carregar pacotes que utilizam a chave `exports` no `package.json`.
- `"lib": ["dom", "dom.iterable", "esnext"]`: especifica as tipagens globais disponíveis no ambiente (APIs do navegador como `document`, `fetch`, `localStorage` e recursos ECMAScript mais recentes).

### 3. Path Aliases e Mapeamento de Importações
Configure caminhos limpos no `tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@lib/*": ["./src/lib/*"]
    }
  }
}
```
- Demonstre a substituição de importações relativas frágeis e poluídas (ex.: `import { Button } from "../../../components/ui/button"`) por importações absolutas limpas (`import { Button } from "@/components/ui/button"`).

### 4. Emissão de arquivos de tipo e empacotamento (`declaration`)
- Entenda as opções de geração de tipos para distribuição de bibliotecas:
  - `"declaration": true`: gera arquivos `.d.ts` correspondentes.
  - `"declarationMap": true`: gera mapas de origem para navegação direta ao código TypeScript original (*Go to Definition* no VS Code).
  - `"noEmit": true`: configuração comum em projetos Next.js onde o TypeScript atua unicamente como linter de tipos, deixando a transpilação do código a cargo do Turbopack ou SWC.

## Cobertura e critérios de conclusão

- [ ] **`tsconfig.json` e `strict`:** Compreensão do papel de cada flag de segurança do modo estrito.
- [ ] **Paths e Aliases (`paths`):** Eliminação completa de caminhos relativos frágeis com múltiplos `../`.
- [ ] **`moduleResolution` e `target`:** Configuração alinhada aos padrões modernos da web.
- [ ] **`lib` e declarações de ambiente:** Inclusão correta de tipagens de DOM e ESNext.
- [ ] **Modo `noEmit` vs geração de `.d.ts`:** Entendimento de quando o TypeScript compila e quando atua apenas como validador de tipos.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Executar `pnpm type-check` com import via `@/...` | Resolução do módulo com sucesso sem erros de caminho | Pendente |
| Declarar variável com `let x;` sem tipo em arquivo com `noImplicitAny: true` | Erro: `Variable 'x' implicitly has an 'any' type` | Pendente |
| Usar API de DOM (como `document.querySelector`) com `"lib": ["esnext"]` sem `"dom"` | Erro acusando que `document` não existe no escopo global | Pendente |
| Executar `tsc --noEmit` no terminal | Saída com código de retorno 0 indicando tipagem 100% íntegra | Pendente |

## Limites do exercício

Não desconfigure o `tsconfig.json` raiz do ambiente `next-lab/` de forma a quebrar o funcionamento do servidor Next.js; todas as experimentações devem manter a compatibilidade com o projeto.

## Minha solução

Aguardando tentativa do usuário. Informe os arquivos inspecionados ou o projeto sandbox configurado.

## Entrega e evidências

- Arquivo `tsconfig.json` comentado com as justificativas de cada bloco de configuração.
- Tabela preenchida com as validações de `type-check`.
- Resumo de 1 parágrafo: por que o Next.js 14/15/16 recomenda manter `"noEmit": true` no `tsconfig.json` e usar compiladores como Rust/SWC/Turbopack para gerar o JavaScript final?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** inspecionar o tsconfig.json do projeto e testar as opções do modo strict e path aliases.

## Fontes de estudo

- [TypeScript TSConfig Reference — Documentação Completa](https://www.typescriptlang.org/tsconfig)
- [Total TypeScript — The Ideal tsconfig.json Guide](https://www.totaltypescript.com/tsconfig-cheat-sheet)
