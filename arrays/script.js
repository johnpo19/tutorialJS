let array = new Array (3)
//et array = ['cursohtml', 'curso css', 'curso js']

array[0]= 'curso de html'
array[1]= 'curso de css'
array[2]= 12
//.sort ordenar array numeros y letras en orden alfabetico. ultimo elemtno array -1

console.log(array);

//document.getElementById('seleccionable').innerHTML = array

console.log(array.length);



let array1 = ['john', 'john', 'john', 'john']
let texto = ''
for (let i = 0; i < array1.length; i++) {
    texto += "<li>" + array1[i] +"</li>"
    
}

//document.getElementById('seleccionablee').innerHTML= texto

let array2 = ['html', 'css', 'js']

array2[array2.length]= 'react' //añade elemento al array

console.log(array2);



let array3 = ['manzanas', 'naranja', 'naranka', 'naranja', 'manzanas', 'manzana']
let resultado = array3.filter(x => {
    if(x == 'manzanas')return 'naranja'
})//filtra por valores indicados
console.log(resultado);

let resultado1 = array3.fill('naranja',1)
console.log(resultado1);
//.find busca el elemento que le pasas e imprime el primero
//.findIndexOf busca el indice del elemento que le pasas
//.some devuelve true o false dependiendo si esta o no
//.every devuelve true o false si son todos los elementos como el que le pasas
//.pop devuelve el ultimo item
//.shift devuelve el primer item
//.push agrega al final el elemento que quieras y .unshift al prinicipio
//.splice corta el array dependiendo de los indices que le pases y ademas añade un elemento
//.slice parte al array segun los indicies que le pases

let array4 = ['manzanas', 'naranja', 'naranka', 'naranja', 'manzanas', 'manzana']
document.getElementById('seleccionableee').innerHTML = array4.join(', ')

//.concat concatena los arrays cuando los imprime
//.sort ordena teniendo en cuenta solo el primer caracter 