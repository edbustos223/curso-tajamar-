app ={
    cadena: ``,
    isPalindromo: true,
    aRespuestas: [
        ` es un palindromo`,
        `no es palindromo`
    ],
}

app.probarPalindromo = function (){
    let cadena = this.cadena
    
cadena = cadena.tolowerCase().split(` `).join(` `);  




 if (cadena != cadena.split(``).reverse().join(``)){
     this.isPalindromo = false;
 } else {
     this.isPalindromo = true
 }
} //fin de probar palindromo


app.respuesta = function(){
    let sFrase = `La cadena "${this.cadena}"
    ${this.aRespuestas}`

}
