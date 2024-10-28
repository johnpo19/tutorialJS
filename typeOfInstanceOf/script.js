//devuleve el tipo de dato que es, cuando es NaN tmb devuelve que es un numero
//cuando se usa ocn un array devuelve u objeto pq array es un objeto de JS
//todas las que tengan new devolverá tipo de dato objeto

//mostrara udefined cuando no encuentre lo que le pasas al typeOf o haya algun error 

let string = typeof 'john'

console.log(string);


let g= typeof new Date()
let j = typeof null


let e = [1,2,3,4,5]

console.log(e instanceof Array); //comprueba si es una instancia de un array o de lo que le pases, es una manera de verificar, devuelve true or false
//con el null no se puede hacer pq no es nada, no es una instancia esta vacío

