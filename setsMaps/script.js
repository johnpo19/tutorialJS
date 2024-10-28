//set conjunto unico de elementos
let conjunto = new Set(['pedro', 'ricardo', 'maria', 'pedro'])
//solo aunque hayan elementos repetidos solo los imprime una vez
console.log(conjunto);

conjunto.add('luciana')//añadir
conjunto.delete('pedro')//borra
//.has comprueba si esta
//.size muestra tamaño

console.log(conjunto);


//map conjunto de pares claves valor

let mapa = new Map([
    ['computadoras', 10],
    ['tablets', 5],
    ['celulares', 15]
])

mapa.set('teclados', 20)

//.size tamaño
//.delete borra
//.has está?

console.log( mapa);
