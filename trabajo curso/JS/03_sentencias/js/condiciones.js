const user = {
    nombre : "pepe" ,
    apellido: "perez",
    edad : 17,
        aficiones:[`deporte`, `papiroflexia`],
        isCasado: false,
        genero: `M`
 }



 const user = {
    nombre : "maria" ,
    apellido: "lopez",
    edad : 53,
        aficiones:[`papiroflexia`, `lectura`],
        isCasado: true,
        genero: `F`
 }

const MAYORIAEDAD = 18
 

function crearsaludo(user){
    let mensaje  =`hola`

    if(user.edad>= MAYORIAEDAD && user.genero == `M`){
mensaje += `D.`
    } else if(user.edad>= MAYORIAEDAD && user.genero == `f`){
        mensaje += `Dña`
    

    }

   mensaje + user.nombre
if (user.isCasado) {
    if(user.genero == `M`){
   mensaje += `. saludos a tu mujer`
} else{
    mensaje +=`. saludos a tu marido`
    } 
}
return mensje
}

function saludar(usermaria){
    console.log(crearsaludo (usuario))
}


saludar (usermaria)
saludar (userpepe)




