//'use strict'

//Es6 existen let y const con ambito¨{}

function mostrar() {
const x = 2
  
    {
         const x = 23
        
        }
       

    
console.log(x)
}

function calcularcircunferencia(radio){
    return 2 * Math.PI * radio 
}

function mostrarcircunferencia(radio) {
    let cir = calcularcircunferencia(radio)
    onsole.log( `
    La circunferencia de radio $(radio)
        tiene de longitud ${cir}`)
        
       
}




 const x = 5
mostrar()

mostrarcircunferencia(5)



