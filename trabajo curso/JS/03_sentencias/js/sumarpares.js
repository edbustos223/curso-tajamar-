let aDatos = [ 23, 54, 65, 34, 78, 67, 57 , 89]



for(let i = 0; i < 6; i++){
    console.log("hola a todos, esta es la vuelta" , i+1)
}

for(let i = 6; i > 0; i--){
    console.log("hola al reves, esta es la vuelta" ,i-1)
}

let total = 0
for (let i = 0; i < aDatos.length; i++) {
   total += aDatos[i];
   console.log(`parcial es ${total}`)
    
}
console.log(`El total es ${total}`)


total = 0
for(let i = aDatos.length-1; i >= 0; i--) {
    total = aDatos[i];
}
console.log(`El total al reves ${total}`)


//--
function calcParEnteros(aDatos) {
    return isNaN(n / 2) ? -1 : parseInt(n) % 2
    
}
console.log(`la suma de los numeros pares es ${aDatos}`)

