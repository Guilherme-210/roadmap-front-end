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
