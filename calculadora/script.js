//agrega a la pantalla el valor del boton de la calculadora que toquemos
function agregar(valor) {
    document.getElementById('pantalla').value += valor
}

//vacia la pantalla


function borrar() {
    document.getElementById('pantalla').value = ''
}

//ejecuta los calculos
function calcular() {
    let valorPantalla = document.getElementById('pantalla').value
    let resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}