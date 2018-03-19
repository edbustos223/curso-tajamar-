

function calcularCuadrado (a) {
    a*=a
    return a 
}


function calcularCubo (a) {
    a= a*a*a
    return a 
}
function MostrarCalculo(n, f) {
    console.log(`el res`)
}

let n=5

MostrarCalculo(n, calcularCuadrado)

MostrarCalculo(n, calcularCubo)
MostrarCalculo(n, function(){
    return
})


setTimeout(function() {
    console.log(calcularCubo(n))
}, 7000)

for (let i = 0; i < 1000; i++) {
    console.log (i);
    
}