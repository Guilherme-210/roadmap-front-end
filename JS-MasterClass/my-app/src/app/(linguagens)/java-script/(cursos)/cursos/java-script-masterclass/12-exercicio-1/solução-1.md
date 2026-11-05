# JavaScript Masterclass - Exercício 1

## Exercício 1

### Objetivo

Extraia partes do comando como o nome da tabela e as colunas, armazenando-as em 
variáveis.

### Instruções

Dado o comando:

```javascript
create table author (id number, name string, age number, city string, state string, country string)
```

1. Extraia o nome da tabela e armazene em uma variável chamada "tableName".
2. Extraia as colunas da tabela e armazene em uma variável chamada "columns".
3. Manipule a variável "columns", separando cada coluna com seu respectivo tipo, em uma string separada.

### Resultado

tableName = "author"
columns = [ 'id number',' name string',' age number',' city string',' state string',' country string']

### Dicas

Explore ao máximo as operações disponíveis na String API como: String.prototype.match, String.prototype.replace e String.prototype.split, juntamente com expressões regulares. A operação String.prototype.split retorna uma array, então não é necessário se preocupar em criar ou adicionar as colunas no array.

### Conteúdo abordado neste exercício

- String
- String.prototype.match
- String.prototype.split
- String.prototype.trim
- RegExp
- RegExp - Groups
- RegExp - Capture Groups
- RegExp - Quantifiers
- RegExp - Metacharacters
- RegExp - Escape

## Solução para o Exercício 1

### Solução Final

essa é a solução final para o exercício 1 passada pelo instrutor.

```javascript
console.log("Inicio 🚀")

const statement =  "Create table author (id number, name string, age number, city string, state string, country string)"
const regexp = /Create table ([a-z]+) \((.+)\)/

const parseStatement = statement.match(regexp)

console.log(parseStatement)

console.log("======================")

const tableName = parseStatement[1]
let columns = parseStatement[2]

console.log(tableName)
console.log(columns)

console.log("======================")

columns = columns.split(", ")

console.log(columns)
```

### Solução Teste 1

Solução 1

```javascript
console.log("test.js rodando")

let tabela = []
let lines = {}
let line = {}

const regex = /autor: Guilherme (id: 65749324, name: Guilherme Luiz, age: 26, email: guilherme@example.com, city: Rio de Janeiro, state: Rio de Janeiro, country: Brazil)/

let author = regex.source.match(/autor: (.+?) \(/)[1]
let id = regex.source.match(/id: (.+?),/)[1]
let name = regex.source.match(/name: (.+?),/)[1]
let age = regex.source.match(/age: (.+?),/)[1]
let email = regex.source.match(/email: (.+?),/)[1]
let city = regex.source.match(/city: (.+?),/)[1]
let state = regex.source.match(/state: (.+?),/)[1]
let country = regex.source.match(/country: (.+?)\)/)[1]

lines.id = id
lines.name = name
lines.age = age
lines.email = email
lines.city = city
lines.state = state
lines.country = country

line.author = author
line.details = lines

tabela.push(line)

console.log(tabela)
```

### Solução Teste 2

```javascript
console.log("test.js rodando")

let tabela = []

const regex = /(autor: Guilherme (id: 65749324, name: Guilherme Luiz, age: 26, email: guilherme.example.com, city: Rio de Janeiro, state: Rio de Janeiro, country: Brazil)), (autor: Guilherme (id: 65749324, name: Douglas Falcão, age: 26, email: douglas@example.com, city: Rio de Janeiro, state: Rio de Janeiro, country: Brazil)), (autor: Guilherme (id: 65749324, name: Adrielli Nunes, age: 26, email: adrielli@example.com, city: Rio de Janeiro, state: Rio de Janeiro, country: Brazil))/

function criatedTable(regex) {
    let regexLines = regex.source.match(/\(autor: (.+?)\)/g)
    
    if (!regexLines) return [];
    
    for (let i = 0; i < regexLines.length; i++) {
        const regexGlobal = /^(\w+)@(\w+(\.\w{2,3})+)$/;
        const newRegex = regexLines[i]

        const author = newRegex.match(/\(autor: (.+?) \(/)[1]
        const id = newRegex.match(/id: (.+?),/)[1]
        const name = newRegex.match(/name: (.+?),/)[1]
        const age = newRegex.match(/age: (.+?),/)[1]
        let email = newRegex.match(/email: (.+?),/)[1]
        const city = newRegex.match(/city: (.+?),/)[1]
        const state = newRegex.match(/state: (.+?),/)[1]
        const country = newRegex.match(/country: (.+?)\)/)[1]

        const result = regexGlobal.exec(email)

        if (result === null) {
            email = "email anexado e invalido"
        }
        
        const lines = {
            id,
            name,
            age: Number(age),
            email,
            city,
            state,
            country
        };

        const line = {
            author,
            details: lines
        };
        
        tabela.push(line)
    }

    console.log(tabela)
}

criatedTable(regex)
```
