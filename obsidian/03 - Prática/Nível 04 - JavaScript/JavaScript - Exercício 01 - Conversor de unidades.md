---
tipo: exercicio
status: proposto
subnivel: "4.1"
criado: "2026-09-17"
---

# JavaScript - Exercício 01 - Conversor de unidades

**Projeto:** Calculadora e Conversor Multidimensional em JavaScript Moderno
**Nível:** [[Nível 04 - JavaScript#4.1 — JavaScript básico]]
**Pré-requisitos:** [[Nível 00 - Fundamentos de programação e ambiente#0.1 — Lógica: Variáveis, Tipos e Operadores]]
**Rota proposta:** `/exercicios/javascript/01-fundamentos`, no next-lab.

Um exercício integrado para todo o subnível, dividido em etapas. Não é necessário realizar todas as etapas em uma única sessão.

## Objetivo

Consolidar a sintaxe e as construções essenciais do JavaScript moderno (ES6+), dominando a declaração de variáveis imutáveis e mutáveis (`const` e `let`), tipos primitivos e estruturas de referência, escrita concisa de funções com Arrow Functions, operadores ternários e lógicos, interpolação fluida com Template Strings e iterações seguras.

## Enunciado e etapas

### 1. Declaração imutável e tipos primitivos vs referência
Crie um módulo conversor de unidades (temperatura: Celsius, Fahrenheit e Kelvin; medidas: metros, pés, polegadas):
- Declare constantes de conversão com `const` (ex.: fator multiplicador, ponto de congelamento da água).
- Utilize tipos primitivos (`string`, `number`, `boolean`) e demonstre a diferença ao copiar um valor primitivo por valor versus copiar um objeto de configuração por referência.

### 2. Arrow Functions e operadores modernos
- Converta todas as funções de cálculo para **Arrow Functions** com retorno implícito quando for em linha única:
  ```js
  const celsiusParaFahrenheit = (c) => (c * 9) / 5 + 32;
  ```
- Utilize o operador ternário para formatar a indicação de estado térmico (`temperatura > 30 ? "Quente" : "Agradável"`).
- Aplique Template Strings (delimitadas por crase ``` ` ```) com interpolação de expressões `${...}` e formatação numérica com `toFixed(2)`.

### 3. Iteração e processamento com loops modernos
Receba uma lista de temperaturas registradas ao longo do dia em formato de array simples:
- Itere sobre os registros utilizando o loop moderno `for...of`.
- Crie um resumo estatístico (temperatura máxima, mínima e média) acumulando os valores em uma variável mutável com `let`.

### 4. Interface visual e interatividade
Na página do next-lab:
- Monte um painel interativo onde o usuário digita o valor, escolhe a unidade de origem e a unidade de destino via seleção, e visualiza o resultado em tempo real formatado com Template Strings.

## Cobertura e critérios de conclusão

- [ ] **`let` e `const`:** Aplicação correta de imutabilidade de referência com `const` e reatribuição com `let`.
- [ ] **Tipos de dados:** Manipulação de primitivos, arrays e objetos.
- [ ] **Arrow Functions:** Escrita limpa de funções com sintaxe reduzida e retorno explícito/implícito.
- [ ] **Template Strings:** Interpolação de valores complexos sem concatenação arcaica (`+`).
- [ ] **Condicionais e Loops:** Avaliação lógica com ternário e repetição com `for...of`.

## Casos obrigatórios de verificação

| Cenário | Resultado esperado | Resultado observado |
| --- | --- | --- |
| Converter `0°C` para Fahrenheit | Retornar `32.00°F` formatado | Pendente |
| Converter `100°C` para Kelvin | Retornar `373.15 K` formatado | Pendente |
| Informar entrada vazia ou não numérica | Exibir mensagem amigável via Template String sem quebrar o cálculo | Pendente |
| Modificar propriedade de objeto copiado por referência | Evidenciar a mutação mútua no console para fixar o conceito de referência | Pendente |

## Limites do exercício

Não utilize métodos avançados de array (`reduce`, `map`) nesta etapa; o foco é esgotar a sintaxe fundamental do ES6+, loops e arrow functions.

## Minha solução

Aguardando tentativa do usuário. Informe a rota ou arquivos de código criados.

## Entrega e evidências

- Página em `next-lab/app/exercicios/javascript/01-fundamentos/page.tsx`.
- Tabela de casos preenchida com as saídas obtidas.
- Resumo de 1 parágrafo: por que a comunidade JavaScript abandonou o uso de `var` em favor de `const` e `let`?

## Validação da minha tentativa

- **Situação:** proposto; aguardando solução.
- **Método desta revisão:** pendente.
- **Resultados de implementação:** nenhuma entrega submetida até o momento.
- **Próximo passo:** criar a página do conversor de unidades com arrow functions e template strings.

## Fontes de estudo

- [MDN Web Docs — Arrow function expressions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN Web Docs — Template literals (Template strings)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals)
