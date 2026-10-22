# Symbol

O `Symbol` é um tipo de dado primitivo, único e imutável em JavaScript, ele atua como uma *chave unica* em um objeto.
Alem disso, é utilizado em operações realizadas pelo interpretador, como no comando `for/of` ou em operações da String API como *match*, *replace*, *search* e *split*.

## Criando um Symbol

```javascript
const meuSymbol = Symbol('descricao');

console.log(meuSymbol); // Symbol(descricao)
```

## Operações que por padrão o interpretador ja reconhece

O interpretador do JavaScript reconhece automaticamente certos símbolos, como `Symbol.iterator` usado em loops `for/of` e métodos da String API como *match*, *replace*, *search* e *split*. Isso permite que objetos e strings se comportem de maneira personalizada em operações padrão.

```javascript
Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.iterator
Symbol.match
Symbol.matchAll
Symbol.replace
Symbol.search
Symbol.species
Symbol.split
Symbol.toPrimitive
Symbol.toStringTag
Symbol.unscopables
```

## Exemplos de uso

```javascript
let regexp = /JavaScript/

console.log("=================")
console.log("/JavaScript/".startsWith(regexp)) // TypeError: First argument to String.prototype.startsWith must not be a regular expression

regexp[Symbol.match] = false

console.log("/JavaScript/".startsWith(regexp)) // true

```