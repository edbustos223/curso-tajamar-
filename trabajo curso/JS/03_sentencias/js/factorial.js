//hacer una algoritmo que calcule el numero factorial 

function calcularFactorial (n) {
    let r =1
    for (let i = n ; i >=1 ; i++) { 
        r= r*=n;//r*=i
        
    }
    return r
}






//test
console.log(calcularFactorial(1))
console.log(calcularFactorial(2))
console.log(calcularFactorial(3))
console.log(calcularFactorial(4))
console.log(calcularFactorial(5))


function mostrarFactorial (n){
    let mensaje = `El factorial de ${n}`
    mensaje += calcularFactorial(n)
    console.log(mensaje)
}

