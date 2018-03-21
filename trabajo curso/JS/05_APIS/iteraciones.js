


/*let oDatos = {
    alto: 2,
    ancho:5,
    largo:7,
    peso:4,
    color: 9
}*/

/*console.log(`Array`)
for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i];
    console.log(item)
    
}
console.log(`Objeto for in`)
for (const key in oDatos) {
    const item = oDatos[key];
    console.log(item)
    
}

console.log(`Array con for in`)
for (const i in oDatos) {
    const item = oDatos[i];
    console.log(item)
}


//ES6
console.log(`Objeto for of`)
for (const item of aDatos) {
    console.log(item)
}*/

let aDatos = [2,5,7,4,9]
aDatos.forEach (item => console.log(item))


//map crea una proyeccion
let aCuadrados = aDatos.map(item => item*item)
console.log(aCuadrados)

let aPares = aDatos.filter(item => item%2 === 0 )
console.log(aPares)

let aImparesCuadrados = aDatos
.filter(item => item%2 !== 0)
.map(item => item*item )
console.log(aImparesCuadrados)

let total = aDatos.reduce((prev, item) => prev += item)
console.log(total)
//aDatos.reduceRight()