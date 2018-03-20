(function () {

appMayusculas = {
    cadena: ``,
    aMensajes : [
        `SE MEZCLAN  Mayúsculas y minúsculas`,
        `Todas las Letras son Mayúsculas`,
        `Todas las Letras son minúsculas`],

    ComprobarMayusculas: function () { 
        let r = 0
      
        if (this.toUpperCase() === this) {
            //todo en mayusculas
            r=1
        } else if ( this.toLowerCase() === this){
            //todo en minusculas
            r=2
        }
        return r
    
    }, 
    mostrar: function(){
        let sMensaje = 
        `En la frase ${this.cadena}
        ${this.aMensajes[this.ComprobarMayusculas(cadena)]}`
    
        console.log(sMensaje)
    }
    
}






/*console.log(ComprobarMayusculas(`HOLA PEPE`)) //1
console.log(ComprobarMayusculas(`hola pepe`)) //2
console.log(ComprobarMayusculas(`Hola Pepe`))//0  */

appMayusculas.cadena = `HOLA PEPE`
appMayusculas.mostrar()

appMayusculas.cadena = `hola pepe`
appMayusculas.mostrar()

appMayusculas.cadena = `Hola Pepe`
appMayusculas.mostrar()

}
)

/* function MostrarComparacionMayusculas(cadena){
    
    let sMensaje = 
    `En la frase ${cadena}
    ${aMensajes[ComprobarMayusculas(cadena)]}`

    console.log(sMensaje)
}
 /*

/* MostrarComparacionMayusculas(`HOLA PEPE`)//1
MostrarComparacionMayusculas(`hola pepe`) //2
MostrarComparacionMayusculas(`Hola Pepe`)//0 */

