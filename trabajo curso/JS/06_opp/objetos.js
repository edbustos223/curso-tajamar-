 //let oDatos = new Object = {}

    let libro1 = {
        autor: 'J. R. R. Tolkien',
        titulo: 'El Señor de los Anillos',
        editorial: 'Minotauro',
        fecha: new Date(1954),
        generos: ['Fantasia'],
        mostrarReferencia: function () {
            let ref = this.autor + `. `
            ref += `"` + this.titulo + `"` + `. `
            ref += this.editorial + `. ` + this.fecha + `. `
    
          onsole.log(ref)
    
        }
    }
    
    //libro1.mostrarReferencia()
    
    let miFunction = function(){
        console.log(`soy una funcion`)
        console.log(this)
    }
    //miFunction()

    let o = {head: `soy un objeto`,
            metodo:miFunction        
}
//o.metodo()

let oNuevoObjeto = new miFunction()
                                    

let obj = {head: `soy un objeto`}   
miFunction.call(obj) 
    