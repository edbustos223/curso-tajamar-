//function ``clasica asignada a variable

function calcularCubo (a) {
    a= a*a*a
    return a }
    

//en e6 function `arrow`(lambdas) asignada a variable 
// => 
//formato extenso
let calcularCuboES6Ext = (a) => { return a *a *a }
//abreviado en parte
let calcularCuboSemi = a => {
    a = a*a*a
    return a
}
//abreviado
let calcularCuboES6Cor = a =>  a *a *a 

let a = 12
setTimeout (function () {
    
    console.log(a *a*a)
},2000)


setTimeout(() =>{
    a =12
console.log (a*a*a) },3000)

//bien hecho