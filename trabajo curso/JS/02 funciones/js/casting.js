function main(){
    
   let num1 = 23
let num2 = `20`

let r  = num1 - num2

console.log(r)
console.log(typeof r)
console.log(typeof num2)




let x = `hola`
let y = `Pepe`
console.log(x + y)


 r  = num1 +  num2 //43 el 2do mas no suma es el q indica q el numero es positivo y deda de ser string y suma; no vale para otras operaciones
 r = r - 1 //42
console.log(r)
console.log(typeof r) 

r = 0 / 0
console.log(r)
console.log(typeof r)
if(isNaN(r)){  
     console.log(`Ole, has conseguido un NaN`)
}




}


main()