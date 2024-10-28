
let string = 'let\'s do it'
let string1 = 'el simbolo con el que se escapa es \ pruebalo'
let String2 = 'esto esta arriba \n esto esta abajo'
let String3 = 'esto esta arriba \b       esto esta abajo'
let String4 = 'esto esta arriba \t esto esta abajo'

let texto = 'la educacion es muy importante en argentina'
let texto2 = " y españa"
console.log(texto.length);

let resultado = texto.replace("argentina","el mundo")
let resultado1 = texto.toUpperCase()
console.log(resultado1);
let resultado2 = texto.concat(texto2)
console.log(resultado2);


let texto3 = "                qewqweqweqwe        "

let resultado3 = texto3.trim().concat(texto2)
console.log(resultado3);

let texto4 = "este. este. este. este. este"

let resultado4 = texto4.split(". ")
console.log(resultado4);
