(function () {

appMayusculas = {
    cadena: ``,
    codigo: 0,
    aMensajes : [
        `SE MEZCLAN  Mayúsculas y minúsculas`,
        `Todas las Letras son Mayúsculas`,
        `Todas las Letras son minúsculas`],
    aCadenas = [
            `HOLA PEPE`
            `hola pepe`
            `Hola Pepe`
        ],
    Comprobar: function () { 
        let r = 0
      
        if (this.toUpperCase() === this) {
            //todo en mayusculas
            this.codigo=1
        } else if ( this.toLowerCase() === this){
            //todo en minusculas
            this.codigo=2
        }
      
    
    }, 
    mostrar: function(){
        this.comprobar()
        let sMensaje = 
        `En la frase ${this.cadena}
        ${this.aMensajes[this.codigo]}`
    
        console.log(sMensaje)
    },
    probar: function(){
        for (let i = 0; i < this.aCadenas.length; i++) {
            this.cadena = this.aCadenas[i];
            this.mostrar()
            
        }
    }
}

appMayusculas.probar()




/*console.log(ComprobarMayusculas(`HOLA PEPE`)) //1
console.log(ComprobarMayusculas(`hola pepe`)) //2
console.log(ComprobarMayusculas(`Hola Pepe`))//0  */




appMayusculas.cadena = 
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

