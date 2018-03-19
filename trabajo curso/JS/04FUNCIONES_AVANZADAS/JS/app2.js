function calcularCuadrado (a) {
    a*=a
    return a 
}


//los parametros ELEMENTALES pasan por valor
let a =5
console.log(calcularCuadrado(a))
console.log(a)

function calcularCubo(params) {

  params.valor = params.valor * params.valor * params.valor 
  return params.valor
}

params= {valor : 5}
 
console.log(calcularCubo(Object.assign ({},params)))
console.log(params)