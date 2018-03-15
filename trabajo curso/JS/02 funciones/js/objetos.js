import { isArray } from "util";



//objeto literal
const user = {
    nombre : "pepe" ,
    apellido: "perez",
    direccion : {
        calle:``,
        ciudad: ``,
        c_postal:``
    },
    edad: 23,
    aficiones:[`deporte`, `papirofexia`],
    isCasado: "false"
}
console.log(typeof user)
user.cargo = "CEO"
console.log(user)

//otros tipos de objetos
//array- arreglos

let aDatos = [12, 23, 45, 46, 87]
let aDatoschungo = [12, `pepe`, true, null, undefined]
console.log(aDatos)
console.log(aDatos[1])
aDatos[15] = 30
console.log(aDatos)

aUsuarios = [
    {nombre : "pepe" ,
    apellido: "perez",
    direccion : {},
        calle:``,
        ciudad: ``,
        c_postal:``,

    },{
        edad: 23,
        isCasado: "false"
         } 
]
console.log(typeof aUsuario)
console.log(Array.isArray (aUsuarios)) 



//string
//number
//boolean

//fuction, method, constructor
let fecha = new Date()
let exp = new RegExp()
let console = new Error()


Math.coseno(90) //es uncontendedor
JSON.parse()


