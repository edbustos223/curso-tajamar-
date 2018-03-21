
let ayer = new Date( 2018,2,20) 
console.log(ayer)


let hoy = new Date()
console.log(hoy.getDay())
console.log(hoy.getMonth())
console.log(hoy.getFullYear())

let undia = new Date(2132246546546554)
console.log(undia)

console.log(hoy.getTime())


console.log(parseInt((hoy - ayer)/(1000*60*60)))


console.log(hoy + ayer)