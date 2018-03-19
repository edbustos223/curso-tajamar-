//hacer una algoritmo que calcule el numero factorial 

function calcularFactorial (n) {
    let r =1
    for (let i = n ; i >=1 ; i--) { 
        r= r*=n;//r*=i
        
    }
    return r
}

function calcularFactorial (n) {
     if (typeof n === `undefined`) {throw 0}
     else if (isNaN(n/2))







//test
console.log(calcularFactorial(1))
console.log(calcularFactorial(2))
console.log(calcularFactorial(3))
console.log(calcularFactorial(4))
console.log(calcularFactorial(5))



}