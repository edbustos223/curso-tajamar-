

let libro1 = {
    autor: 'J. R. R. Tolkien',
    titulo: 'El Señor de los Anillos',
    editorial: 'Minotauro',
    fecha: 1954,
    generos: ['Fantasia'],

    mostrarReferencia: function () {
        let ref = this.autor + `. `
        ref += `"` + this.titulo + `"` + `. `
        ref += this.editorial + `. ` + this.fecha + `. `

        console.log(ref)

    }

}

libro1.mostrarReferencia()

let x = `pepe`
console.log(isNaN(x))


//wrapper objects
console.log(x.length)
console.log(x.toUpperCase())
let sFrase = `un anillo para controlarlos A TODOS`
aDatos = sFrase.split(` `)
console.log(aDatos)
let nuevaFrase = aDatos.join(` `)
console.log(nuevaFrase)

