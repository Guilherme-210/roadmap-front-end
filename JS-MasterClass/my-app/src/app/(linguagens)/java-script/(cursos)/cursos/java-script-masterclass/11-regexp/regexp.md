# Expressões Regulares em JavaScript

As expressões regulares são estruturas formadas por uma **sequência de caracteres que especificam um padrão formal** que servem para validar, extrair ou mesmo substituir caracteres de dentro de uma string.

## Criação de Expressões Regulares

Existem duas formas principais de criar expressões regulares em JavaScript:

1. Usando a sintaxe literal: `/padrão/`
2. Usando o construtor `RegExp`: `new RegExp("padrão")`

````javascript
// Exemplo de criação de uma expressão regular
const regex = /john@gmail.com/;
const email = new RegExp("john@gmail.com");

// Verificando o tipo das expressões regulares
typeof regex; // "object"
typeof email; // "object"

// Testando a expressão regular
console.log(regex.test("john@gmail.com")); // true
console.log(email.test("john@gmail.com")); // true
````

## Métodos Comuns

Alguns métodos comuns para trabalhar com expressões regulares em JavaScript incluem:

- `test()`: Verifica se a string corresponde ao padrão da expressão regular. Retorna `true` ou `false`.
- `exec()`: Executa a busca na string e retorna um array com os resultados ou `null` se não houver correspondência.
- `match()`: Método da string que retorna um array com os resultados da correspondência ou `null`.
- `replace()`: Substitui partes da string que correspondem ao padrão da expressão regular.
- `search()`: Retorna o índice da primeira correspondência ou `-1` se não houver correspondência.
- `split()`: Divide a string em um array usando a expressão regular como delimitador.

````javascript
// Exemplo de uso de flags
let result;
let regexGlobal = /john@gmail.com/;

// Testando novamente para verificar comportamento global
result = regexGlobal.test("john@gmail.com");
console.log(result); // true

// Executando a expressão regular para obter o resultado completo
result = regexGlobal.exec("john@gmail.com");
console.log(result); // ["john@gmail.com", index: 0, input: "john@gmail.com", groups: undefined]
// Testando a expressão regular com um email diferente
result = regexGlobal.exec("johndoe@gmail.com");
console.log(result); // null

// Testando o método match com o email certo
match = "john@gmail.com".match(regexGlobal);
console.log(match); // ["john@gmail.com", index: 0, input: "john@gmail.com", groups: undefined]

// Testando o método replace com o email certo
let replaced = "john@gmail.com".replace(regexGlobal, "jane@gmail.com");
console.log(replaced); // "jane@gmail.com"

// Testando o método search
let searchResult = "john@gmail.com".search(regexGlobal);
console.log(searchResult); // 0

// Testando o método split
let splitResult = "john@gmail.com".split(regexGlobal);
console.log(splitResult); // ["", ""]

````

## Metacaracteres - parte 1

Metacaracteres são caracteres especiais que são esses grupos que representam um contunto de caracteres ou padrões específicos dentro de uma expressão regular. Eles permitem criar padrões mais complexos e flexíveis para corresponder a diferentes tipos de texto.

- `.`: Corresponde a qualquer caractere, exceto nova linha.
- `^`: Corresponde ao início da string.
- `$`: Corresponde ao fim da string.

```javascript
let result;

let regexGlobal = /john@gmail\.com/;
result = regexGlobal.exec("e-mail: john@gmail.com ...");
console.log(result); // ["john@gmail.com", index: 8, input: "e-mail: john@gmail.com ...", groups: undefined]

let regexGlobal = /^john@gmail\.com/;
result = regexGlobal.exec("e-mail: john@gmail.com ...");
console.log(result); // null
result = regexGlobal.exec("john@gmail.com ...");
console.log(result); // ["john@gmail.com", index: 0, input: "john@gmail.com ...", groups: undefined]


let regexGlobal = /john@gmail\.com$/;
result = regexGlobal.exec("e-mail: john@gmail.com ...");
console.log(result); // null
result = regexGlobal.exec("e-mail: john@gmail.com");
console.log(result); // ["john@gmail.com", index: 8, input: "e-mail: john@gmail.com", groups: undefined]
```

## Grupos de caracteres

Os gurpos de caracteres são definidos entre colchetes `[]` e permitem corresponder a qualquer caractere dentro do conjunto. Por exemplo:

- `[abc]`: Corresponde a qualquer caractere `a`, `b` ou `c`.
- `[012]`: Corresponde a qualquer caractere `0`, `1` ou `2`.

### Exemplos de conjuntos de caracteres

#### Range || Faixa de caracteres

nesse caso, estamos definindo um intervalo de caracteres que podem ser correspondidos dentro do conjunto. Por exemplo:

- `[0-9]`: Corresponde a qualquer dígito de `0` a `9`.
- `[a-z]`: Corresponde a qualquer letra minúscula de `a` a `z`.
- `[A-Z]`: Corresponde a qualquer letra maiúscula de `A` a `Z`.

#### Negação de conjuntos de caracteres

Negação de conjuntos de caracteres permite corresponder a qualquer caractere que não esteja presente no conjunto definido. Por exemplo:

- `[^abc]`: Corresponde a qualquer caractere que não seja `a`, `b` ou `c`.
- `[^0-9]`: Corresponde a qualquer caractere que não seja um dígito de `0` a `9`.

#### Combinação de conjuntos de caracteres

Podemos combinar diferentes conjuntos de caracteres para criar padrões mais complexos. Por exemplo:

- `[a-zA-Z]`: Corresponde a qualquer letra, maiúscula ou minúscula.
- `[a-zA-Z0-9]`: Corresponde a qualquer caractere alfanumérico.
- `[0-9a-fA-F]`: Corresponde a qualquer dígito hexadecimal.
- `[a-zA-Z0-9_]`: Corresponde a qualquer caractere alfanumérico ou underscore.

----

### Exemplos de uso de conjuntos de caracteres

```javascript
let result;
let regexGlobal = /[a-z][a-z][a-z][a-z]@gmail\.com/;

result = regexGlobal.exec("john@gmail.com");
console.log(result); // ["john@gmail.com", index: 0, input: "john@gmail.com", groups: undefined]

result = regexGlobal.exec("jane@gmail.com");
console.log(result); // ["jane@gmail.com", index: 0, input: "jane@gmail.com", groups: undefined]

result = regexGlobal.exec("joe@gmail.com");
console.log(result); // null
```

## Quantificadores

Quantificadores permitem especificar o número de ocorrências de um padrão que devem ser correspondidas, elas podem ser aplicadas caracteres, grupos, ou conjuntos ou metacaracteres.

### Alguns quantificadores comuns incluem

#### Quantificadores por quantidade explícita

esses quantificadores permitem controlar a quantidade de ocorrências do padrão anterior.

- `{n}`: Corresponde exatamente a `n` ocorrências do padrão anterior.
- `{n,}`: Corresponde a `n` ou mais ocorrências do padrão anterior.
- `{n,m}`: Corresponde a pelo menos `n` e no máximo `m` ocorrências do padrão anterior.

#### Quantificadores por ocorrência

esses quantificadores permitem controlar a ocorrência do padrão anterior, podendo ser zero, uma ou mais vezes.

- `?`: Corresponde a zero ou uma ocorrência do padrão anterior.
- `*`: Corresponde a zero ou mais ocorrências do padrão anterior.
- `+`: Corresponde a uma ou mais ocorrências do padrão anterior.

----

### Exemplos de uso de quantificadores

```javascript
let result;

let regexGlobal = /[a-z]+@gmail\.com/;
result = regexGlobal.exec("john@gmail.com"); // ["john@gmail.com", index: 0, input: "john@gmail.com", groups: undefined]
result = regexGlobal.exec("jane@gmail.com"); // ["jane@gmail.com", index: 0, input: "jane@gmail.com", groups: undefined]
result = regexGlobal.exec("joe@gmail.com"); // ["joe@gmail.com", index: 0, input: "joe@gmail.com", groups: undefined]

let regexGlobal = /[a-z]{4,8}@gmail\.com/;
result = regexGlobal.exec("john@gmail.com"); // ["john@gmail.com", index: 0, input: "john@gmail.com", groups: undefined]
result = regexGlobal.exec("joe@gmail.com"); // null
result = regexGlobal.exec("guilhermecabral@gmail.com"); // ["mecabral@gmail.com", index: 0, input: "guilhermecabral@gmail.com", groups: undefined]
```

## Metacaracteres

Metacaracteres são caracteres especiais que têm um significado específico em expressões regulares. Eles permitem criar padrões mais complexos e flexíveis.

### Alguns metacaracteres comuns incluem

- `\w`: Corresponde a qualquer *caractere alfanumérico* (equivalente a `[A-Za-z0-9_]`).
- `\W`: Corresponde a qualquer caractere *que não seja alfanumérico*.
- `\d`: Corresponde a qualquer *dígito* (equivalente a `[0-9]`).
- `\D`: Corresponde a qualquer caractere *que não seja dígito*.
- `\s`: Corresponde a qualquer *caractere de espaço em branco*.
- `\S`: Corresponde a qualquer caractere *que não seja espaço em branco*.
- `\n`: Corresponde a uma *quebra de linha* (newline).
- `\t`: Corresponde a um *caractere de tabulação* (tab).

```javascript
let result;

// Testando com emails do Gmail
let regexGlobal = /^\w+@gmail\.com$/;
result = regexGlobal.exec("john@gmail.com"); // ["john@gmail.com", index: 0, input: "john@gmail.com", groups: undefined]

// Testando com qualquer domínio de nível superior
let regexGlobal = /^\w+@\w+\.com$/;
result = regexGlobal.exec("john@gmail.com"); // ["john@gmail.com", index: 0, input: "john@gmail.com", groups: undefined]

// Testando com domínios de nível superior com 2 a 3 caracteres
let regexGlobal = /^\w+@\w+\.\w{2,3}$/;
result = regexGlobal.exec("john@gmail.com"); // ["john@gmail.com", index: 0, input: "john@gmail.com", groups: undefined]
result = regexGlobal.exec("john@gmail.io"); // ["john@gmail.io", index: 0, input: "john@gmail.io", groups: undefined]

// Testando com múltiplos domínios de nível superior com 2 a 3 caracteres cada
let regexGlobal = /^\w+@\w+\.(\w{2,3})+$/;
result = regexGlobal.exec("john@gmail.com.br"); // null
let regexGlobal = /^\w+@\w+(\.\w{2,3})+$/;
result = regexGlobal.exec("john@gmail.com.br"); // ["john@gmail.com.br", index: 0, input: "john@gmail.com.br", groups: undefined]
```

## Grupos de Captura

Grupos de captura permitem capturar partes específicas de uma correspondência em expressões regulares. Eles são definidos usando parênteses `()`.

```javascript
let result;

// Capturando o nome de usuário e o domínio de um email
let regexGlobal = /^(\w+)@(\w+(\.\w{2,3})+)$/;
result = regexGlobal.exec("john@gmail.com"); // ["john@gmail.com", "john", "gmail.com", index: 0, input: "john@gmail.com", groups: undefined]
result = regexGlobal.exec("john@gmail.com.br"); // ["john@gmail.com.br", "john", "gmail.com.br", ".br", index: 0, input: "john@gmail.com.br", groups: undefined]

console.log(result[0]); // "john@gmail.com.br"
console.log(result[1]); // "john"
console.log(result[2]); // "gmail.com.br"
console.log(result[3]); // ".br"
```
