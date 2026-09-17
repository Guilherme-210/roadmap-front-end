---
tipo: exercicio
status: proposto
subnivel: "0.1"
criado: "2026-09-17"
---

# Fundamentos - Exercício 01 - Calculadora de console

**Projeto:** Calculadora e Processador de Tipos no Console
**Nível:** [[Nível 00 - Fundamentos de programação e ambiente#0.1 — Lógica: Variáveis, Tipos e Operadores]]
**Pré-requisitos:** Ambiente Node.js instalado ou terminal interativo para execução de scripts.
**Rota proposta:** Exercício executável em terminal / script (`scripts/fundamentos/01-calculadora.ts` ou `.js`).

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Desenvolver um programa de linha de comando que receba entradas primitivas do usuário, manipule variáveis imutáveis e mutáveis, aplique operadores aritméticos, relacionais e lógicos, e demonstre o comportamento dos tipos primitivos (number, string, boolean, null, undefined) em JavaScript/TypeScript.

## Enunciado e etapas

### 1. Declaração de variáveis e inspeção de tipos primitivos
Crie um script que declare variáveis representando diferentes grandezas com `const` (para valores que não mudam, como taxas e identificadores) e `let` (para acumuladores e resultados). Imprima no console o valor e o tipo (`typeof`) de cada tipo primitivo: `number`, `string`, `boolean`, `null` e `undefined`, explicando a peculiaridade de `typeof null`.

### 2. Operações aritméticas e conversões de tipo
Implemente funções matemáticas puras para: soma, subtração, multiplicação, divisão, módulo (`%`) e exponenciação (`**`). Trate a coerção implícita de tipos (ex.: `"10" + 2` vs `Number("10") + 2`) e garanta conversão explícita segura com validação de `NaN`.

### 3. Avaliação lógica e operadores relacionais
Construa uma rotina de verificação de elegibilidade (ex.: aprovação de orçamento ou faixa etária) que combine operadores de igualdade estrita (`===` e `!==`), operadores relacionais (`>`, `<`, `>=`, `<=`) e operadores lógicos (`&&`, `||`, `!`). Demonstre o comportamento de curto-circuito (*short-circuit evaluation*).

### 4. Interface simples de entrada e saída
Configure uma interface básica de entrada de dados no terminal (utilizando o módulo nativo `readline` do Node.js ou argumentos de linha de comando `process.argv`) para que o usuário informe dois números e uma operação, recebendo o resultado formatado no console com interpolação de strings.

## Cobertura e critérios de conclusão

- [ ] **Algoritmos e raciocínio lógico:** Estrutura sequencial de passos clara, com validação antes de processar cálculos.
- [ ] **Variáveis (`let`, `const`, atribuição):** Uso estrito de `const` por padrão e `let` apenas onde houver reatribuição necessária.
- [ ] **Tipos de dados primitivos:** Manipulação explícita de `number`, `string`, `boolean`, `null` e `undefined` sem coerções indesejadas.
- [ ] **Operadores aritméticos, relacionais e lógicos:** Emprego correto de `===`, `!==`, operadores lógicos com curto-circuito e operadores aritméticos completos.
- [ ] **Entrada e saída de dados:** Leitura de dados do terminal (`process.argv` ou `readline`) e saída legível com template literals.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Informar `15` e `4` na operação de módulo | Exibir resto `3` e tipo `number` | Pendente |
| Informar entrada de texto `"abc"` em cálculo numérico | Detectar `NaN` e alertar erro de tipo sem quebrar o script | Pendente |
| Testar igualdade com `0 == false` vs `0 === false` | Exibir `true` no solto e `false` no estrito, justificando | Pendente |
| Avaliar `null ?? "padrão"` vs `undefined ?? "padrão"` | Retornar `"padrão"` para ambos com operador de coalescência nula | Pendente |

## Limites do exercício

Neste exercício não é necessário criar interface gráfica web, nem utilizar bibliotecas externas de parsing complexas. Foque na lógica fundamental, tipagem primitiva e manipulação via console.

## Minha solução

Aguardando tentativa do usuário. Informe os arquivos criados/modificados e como executou o script.

## Entrega e evidências

- Arquivo de script em `next-lab/scripts/fundamentos/01-calculadora.ts` (ou diretório equivalente).
- Tabela acima preenchida com os resultados realmente observados no terminal.
- Explicação breve com suas palavras sobre as diferenças entre igualdade estrita (`===`) e solta (`==`).

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** executar as etapas, testar no terminal e registrar a tentativa.

## Fontes de estudo

- [MDN Web Docs — Gramática e tipos em JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types)
- [MDN Web Docs — Expressões e operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators)
