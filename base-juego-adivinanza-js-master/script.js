
let numero = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')

let mensaje = document.getElementById('mensaje')














function chequearResultado() {
    let numeroIngrasado = parseInt(numeroEntrada.value)
    if (numeroIngrasado < 1 || numeroIngrasado > 100 || isNaN(numeroIngrasado)) {
        mensaje.textContent = 'ingrese un numero valido'
        return
    }

    if (numeroIngrasado === numero) {
        mensaje.textContent = 'acertaste'
        mensaje.style.color = 'green'
        numeroEntrada.disabled = true;
        
    }else if(numeroIngrasado < numero){
        mensaje.textContent = 'mas alto'
        mensaje.style.color = 'red'
    }else{
        mensaje.textContent = 'menos'
        mensaje.style.color = 'red'
    }
}