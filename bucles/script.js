let tecnologia = ['html', 'css', 'js', 'react', 'angular']
let seleccionable = document.getElementById('seleccionable')
let texto=''

let alumno={
    nombre :'john',
    edad: 25,
    tecnologias: ['html', 'css']

}


for (let i = 0; i < tecnologia.length; i++) {
    texto+= tecnologia[i]
    if (i < tecnologia.length -1) {
        texto+= ', '
    }
    seleccionable.textContent=texto
    //immprime los elementos del array uno por uno
}
//mas resumido que el for clasico
for(tecno of tecnologia){
    console.log(tecno);
    
}
//for para objetos
for (const key in alumno) {
    console.log(alumno[key]);
    
}

tecnologia.forEach(tecnologia => {
    console.log(tecnologia);
    
});


/////////////////////////////////

let edad = 0


while (edad < 30) {
    console.log(`tienes ${edad} años y aun eres un niño`);
    edad++;
    if (edad===25) break; {
        
    }
}

console.log(`saliste del bucle pq tenes ${edad} años`);

// do {
//     console.log(`tienes ${edad} años y aun eres un niño`);
//     edad++;
// } while (edad<18);
