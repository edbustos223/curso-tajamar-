//aDatos es una INSANCIA de array
let aDatos = [1, 12, 67]

let aDatos2 = new Array(5)
console.log (aDatos2.length)
console.log (aDatos2)

let aDatos3 = new Array(5,23,21,5)
console.log(aDatos3)


//new object
let oDatos = {}

let dni
let code =  dni%23
let aLetras = [ `z`,`b`,`c`,`d`,`e`,`f`,`h`,`k`,`g`,`l`,`h`,`m`,`i`,`s`,`j`,]; aLetras[code]

console.log(aLetras.length)
console.log(`reverse`,aLetras)

//metodos de Arrays
//inmutables
//mutables

/*console.log(aLetras.join (` `))
console.log(aLetras)
console.log(aLetras.sort())
console.log(aLetras) */
/*aLetrasOriginal= aLetras.slice(0, aLetras.length)
aLetras.sort()
console.log(aLetrasOriginal) */


//MUTABLE
let aNuevo = aLetras.splice(0, 9, `x`,`z`)
console.log(aNuevo)
console.log(aLetras)

//Mutables
aLetras.push

