`user stric`

/*funcion que comprueba si el argumento es par o impar 
 devolviendo 0, 1 o -1 si el argumento no es un numero
//-2 si el argumento no es un numero
//-3 si el argumento contiene decimales */

function calcPar(n) {
    let r = 0
    if (isNaN(n / 2)) {
        r = -2
    } else if (parseInt(n) != parseFloat(n)) {
        r = -3
    } else {
        r = n % 2
    }
    return r
}

/*funcion que comprueba si el argumento es par o impar
devolviendo 0, 1 o -1 si el argumento no es un numero */

function calcParEnteros(n) {
    return isNaN(n / 2) ? -1 : parseInt(n) % 2
}

function test(n) {
    console, log(n)
}



/*test(calcularPart())
test(calcularPart(`pepe`))
test(calcularPart(12))
test(calcularPart(11))
test(calcularPart(1))
test(calcularPart(1))
test(calcularPart(1))
test(calcularPart(1))
test(calcularPart(1)) */







function mostrarEspar(n) {
    const aMENSAJES = [
        `el numero ${n} es par`,
        `el numero ${n} es impar`,
        `el dato ${n} no es un numero`,
        `el numero ${n} es decimal`
    ]
    //r puede valer 0, 1 o -1
    let r = calcPar(n)
    // r = (r === -1) ? 2 : rconsole.log(aMensajes(r))  es lo mismo que las 2 linesa de abajo
    //si r es -2 o -3 lo convierto en 2 o 3
    if (r < 0) { r = -r }
    //muestro la posicion r de array
    console.log(aMENSAJES[r])
}

//test
/*mostrarEspar(`pepe`)
mostrarEspar(12)
mostrarEspar(11)
mostrarEspar(12.5)
mostrarEspar(11.5) */




function mostrarEsParCasos(n) {
    //r puede valer 0, 1 o -2 y -3
    let r = calcPar(n)
    let mensaje
    switch (r) {
        case 0:
            mensaje = `el numero ${n} es par`
            break
        case 1:
            mensaje = `el numero ${n} es impar`
            break
        case -2:
            mensaje = `el dato ${n} no es un numero`
            break
        case -3:
            mensaje = `el numero ${n} es decimal`
            break
    }
    console.log(mensaje)
}


mostrarEsParCasos(`pepe`)
mostrarEsParCasos(12)
mostrarEsParCasos(11)
mostrarEsParCasos(12.5)
mostrarEsParCasos(11.5)