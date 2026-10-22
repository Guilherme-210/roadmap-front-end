# Boolean

O tipo de dado booleano e um tipo primitivo e imutavel, representando apenas dois valores possiveis: `true` (verdadeiro) e `false` (falso). Ele e frequentemente usado em estruturas de controle de fluxo, como condicionais (`if`, `else`) e loops (`while`, `for`).

## Usos do Boolean

### Exemplos de uso da função construtora Boolean

A função construtora `Boolean` pode ser usada para criar objetos Boolean a partir de valores primitivos. Por exemplo:

```javascript
new Boolean(true); // cria um objeto Boolean com valor true
new Boolean(false); // cria um objeto Boolean com valor false
```

```shell
new Boolean(true) // cria um objeto Boolean com valor true
> [Boolean: true ]

new Boolean(false) // cria um objeto Boolean com valor false
> [Boolean: false ]

typeof new Boolean(true) // retorna "object"
> "object"

```

### Função Boolean com operadores condicionais

O operador condicional `if` avalia uma expressão booleana e executa um bloco de código se a expressão for verdadeira, e outro bloco se a expressão for falsa. Por exemplo:

```javascript
let condition = true;
if (condition) {
  console.log("A condição é verdadeira");
} else {
  console.log("A condição é falsa");
}
```

#### Observação

Quando usamos `new Boolean(true)`, mesmo que o valor seja `true`, o objeto Boolean é considerado verdadeiro em um contexto condicional. Portanto, o bloco `if` será executado.

```javascript
let condition = new Boolean(true);
if (condition) {
    console.log("A condição é verdadeira");
} else {
    console.log("A condição é falsa");
}
```

Quando usamos `new Boolean(false)`, o objeto Boolean ainda é considerado verdadeiro em um contexto condicional, porque objetos em JavaScript são sempre verdadeiros, independentemente do valor que eles contêm. Portanto, o bloco `if` será executado mesmo que o valor interno seja `false`.

```javascript
let condition = new Boolean(false);
if (condition) {
    console.log("A condição é verdadeira");
} else {
    console.log("A condição é falsa");
}
```

Isso acontece por conta da coerção de tipos em JavaScript, que acontece quando um tipo de dado é utilizado em um contexto onde ele é *convertido implicitamente para um valor booleano*.
No nosso exemplo, mesmo que o valor interno do objeto Boolean seja `false`, ele ainda é considerado verdadeiro em um contexto condicional devido à coerção de tipos, que converte o objeto em um valor booleano verdadeiro sem levar em conta o seu valor interno.

### Função Boolean com operadores ternários

```javascript
const valor = 1;
const resultado = Boolean(valor) ? "Verdadeiro" : "Falso";
console.log(resultado); // "Verdadeiro"
```

### Função Boolean

a função `Boolean` pode ser usada para converter valores de outros tipos em valores booleanos. Por exemplo:

```javascript
Boolean(0); // false
Boolean(1); // true
Boolean(""); // false
Boolean("texto"); // true
```

#### Valores que são convertidos para `false`

Os seguintes valores são considerados *falsy* em JavaScript, ou seja, quando convertidos para booleanos usando a função `Boolean`, eles sempre irão resultar em `false`:

```javascript
!!0; // false
!!-0; // false
!!null; // false
!!undefined; // false
!!NaN; // false
!!""; // false
!!false; // false

Boolean(0); // false
Boolean(-0); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false
Boolean(""); // false
Boolean(false); // false
```

Fora esses 6 valores (*0, null, undefined, NaN, "" e false*), todos os outros valores em JavaScript são considerados como *true*.

#### Valores que são convertidos para `true`

Todos os outros valores são considerados *truthy*, ou seja, quando convertidos para booleanos usando a função `Boolean`, eles resultam em `true`:

```javascript
Boolean(1); // true
Boolean(-1); // true
Boolean("texto"); // true
Boolean([]); // true
Boolean({}); // true
Boolean(true); // true
Boolean(/JavaScript/); // true
Boolean(new Date()); // true
Boolean(new Boolean(false)); // true
Boolean(function(){}); // true
Boolean(Symbol()); // true
```
