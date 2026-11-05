console.log("Inicio 🚀")

const statement = "Create table author (id number, name string, age number, city string, state string, country string) (id number, name string, age number, city string, state string, country string)"

const regexp = /Create table ([a-z]+)/
const tableName = statement.match(regexp)?.[1]

const groups = [...statement.matchAll(/\(([^()]*)\)/g)]

const result = groups.map((group) => {
    const columns = group[1].split(", ")

    return columns.reduce((acc, column) => {
        const [name, type] = column.split(" ")

        acc[name] = type

        return acc
    }, {})
})

console.log({Autor: tableName, tabelas: result})

// console.log("test.js rodando")

// let tabela = []

// const regex = /(autor: Guilherme (id: 65749324, name: Guilherme Luiz, age: 26, email: guilherme.example.com, city: Rio de Janeiro, state: Rio de Janeiro, country: Brazil)), (autor: Guilherme (id: 65749324, name: Douglas Falcão, age: 26, email: douglas@example.com, city: Rio de Janeiro, state: Rio de Janeiro, country: Brazil)), (autor: Guilherme (id: 65749324, name: Adrielli Nunes, age: 26, email: adrielli@example.com, city: Rio de Janeiro, state: Rio de Janeiro, country: Brazil))/

// function criatedTable(regex) {
//     let regexLines = regex.source.match(/\(autor: (.+?)\)/g)
    
//     if (!regexLines) return [];
    
//     for (let i = 0; i < regexLines.length; i++) {
//         const regexGlobal = /^(\w+)@(\w+(\.\w{2,3})+)$/;
//         const newRegex = regexLines[i]
        
//         // if (i === 0) {
//         //     console.log(typeof(regex))
//         //     console.log(regex)
//         //     console.log(typeof(regexLines))
//         //     console.log(regexLines)
//         //     console.log(typeof(newRegex))
//         //     console.log(newRegex)
//         // }

//         const author = newRegex.match(/\(autor: (.+?) \(/)[1]
//         const id = newRegex.match(/id: (.+?),/)[1]
//         const name = newRegex.match(/name: (.+?),/)[1]
//         const age = newRegex.match(/age: (.+?),/)[1]
//         let email = newRegex.match(/email: (.+?),/)[1]
//         const city = newRegex.match(/city: (.+?),/)[1]
//         const state = newRegex.match(/state: (.+?),/)[1]
//         const country = newRegex.match(/country: (.+?)\)/)[1]

//         const result = regexGlobal.exec(email)

//         if (result === null) {
//             email = "email anexado e invalido"
//         }
        
//         // console.log(result)
//         // console.log(author)
//         // console.log(id)
//         // console.log(name)
//         // console.log(age)
//         // console.log(email)
//         // console.log(city)
//         // console.log(state)
//         // console.log(country)

        
//         const lines = {
//             id,
//             name,
//             age: Number(age),
//             email,
//             city,
//             state,
//             country
//         };

//         const line = {
//             author,
//             details: lines
//         };
        
//         tabela.push(line)
//     }

//     console.log(tabela)
// }

// criatedTable(regex)

// // (i; i === regexLines.length; i++) {
// //     author = line.match(/autor: (.+?) \(/)[1]
// //     id = line.match(/id: (.+?),/)[1]
// //     name = line.match(/name: (.+?),/)[1]
// //     age = line.match(/age: (.+?),/)[1]
// //     email = line.match(/email: (.+?),/)[1]
// //     city = line.match(/city: (.+?),/)[1]
// //     state = line.match(/state: (.+?),/)[1]
// //     country = line.match(/country: (.+?)\)/)[1]


    
// //     lines.id = id
// //     lines.name = name
// //     lines.age = age
// //     lines.email = email
// //     lines.city = city
// //     lines.state = state
// //     lines.country = country
    
// //     line.author = author
// //     line.details = lines
    
// //     tabela.push(line)
// // }
