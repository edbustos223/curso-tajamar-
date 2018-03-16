//expresion de asignacion
let x = 25

//instruccion que indica que tiene un side efect o efecto secundario -->side efect
console.log(x)

//manera acortada de decir que(x = x + 1) y es igual a ++x
x++
console.log(x)

//manera acortada de decir que(x = x - 1) 
x--
console.log(x)

//pero aqui si que importa si el ++ esta antes o despues de x
let z = ++x
console.log(z)

//esta operacion solo sacara numeros enteros Operadores aritmeticos
x = 27
y = x / 5 //5.4
console.log(y)

let r = x % 5 //2
console.log(r)

//operadores de asignacion aritmetica
x = 12
x += 4 // x = x + 4 =16
console.log(x)


//operadores relacionales //preg profe
x = 12
y = `12`
console.log(x == y)
console.log(x != y)
console.log(x === y)
console.log(x != y)

//ERRORRRRRRRRRR
if(x = 22){
    console.log(`Estoy dentro de if`)
}

console.log(!!x)

x = `abc`
y = `def`
console.log(x.length === y.length)

//operador ternario - expresion ? true : false
let edad = 32
console.log(edad > 30 ? `buenos dias` : `hola chaval`)


let a = 12
let b = 2
let c = 4
if(a < b && a < z) {
  console.log(`comprobado`)  
}

/* let a = 12
let b = 2
let c = 4
if(a > b && a < z) {
  console.log(`comprobado`)  
} --------revisar */


/* {
let a ={valor : 5}

if(a.valor === 5){
  console.log(`comprobado el 5`)  
}

} */


console.log(2 * 4 + 5)










