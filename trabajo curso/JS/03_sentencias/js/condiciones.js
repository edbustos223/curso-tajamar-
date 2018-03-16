const userpepe = {
    nombre: "pepe",
    apellido: "perez",
    edad: 17,
    aficiones: [`deporte`, `papiroflexia`],
    isCasado: false,
    genero: `M`
}



const usermaria = {
    nombre: "maria",
    apellido: "lopez",
    edad: 53,
    aficiones: [`papiroflexia`, `lectura`],
    isCasado: true,
    genero: `F`
}

const MAYORIAEDAD = 18


function crearsaludo(user) {
    let mensaje = `hola`

    if (user.edad >= MAYORIAEDAD && user.genero == `M`) {
        mensaje += `D.`
    } else if (user.edad >= MAYORIAEDAD && user.genero == `f`) {
        mensaje += `Dña`
    }

    mensaje + user.nombre
    if (user.isCasado) {
        if (user.genero == `M`) {
            mensaje += `. saludos a tu mujer`
        } else {
            mensaje += `. saludos a tu marido`
        }
    }
    return mensaje
}

function saludar(usuario) {
    console.log(crearsaludo(usuario))
}


//PILAS este silo quitas es para revisarlo en el navegador
function saludarHtml(user) {                  
    document.write(crearsaludo(user) + `<br>`)


}

saludar(usermaria)
saludar(userpepe)
saludarHtml(usermaria)
saludarHtml(userpepe)


if (1){}
else {}

if(1){}
else if (2) {}
else if (3) {}
else {}



