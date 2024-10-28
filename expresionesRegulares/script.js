let texto = 'este curso es de js y es de sergi'

let busqueda = texto.search(/sergi/)

console.log(busqueda);

//modificadores--> i: ignorar mayusculas, g: buscar en todo el texto indicado, m: busqueda multiline

let pattern = /sergi/i
let resultado = pattern.test(texto) //comprueba si esta o no y devulve true o false, para ser entre numeros tiene que ser en corchetes []

console.log(resultado);
