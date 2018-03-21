

function ComprobarPalindromo(cadena = ``) { 
    let r = 0
  
    if (cadena.toUpperCase() === cadena) {
        //palindromo
        r=1
    } else if ( cadena.toLowerCase() === cadena){
      //no palindromo
        r=2
    }
    return r

}

function MostrarComparacionPalindromo(cadena){
    aMensajes = [
        `si es un palindromo`,
        `no es un palindromo`,
        `no es nada`
    ]
    let sMensaje = 
    `La frase ${cadena}
    ${aMensajes[ComprobarPalindromo(cadena)]}`

    console.log(sMensaje)
}


MostrarComparacionPalindromo(`Alí tomó tila`)
MostrarComparacionPalindromo(`hola pepe`) 
MostrarComparacionPalindromo(`dddddd`)