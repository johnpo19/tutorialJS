let auto ={
    marca: "fiat",
    modelo: "uno",
    peso: 550,
    color: "rojo"
}

let auto1 ={
    marca: "renault",
    modelo: "12",
    peso: 1100,
    color: "marron"
}

console.log("auto: ",auto);
console.log("auto1: ",auto1);

console.log("el color del auto es: ", auto.color);

auto.marca = "bmw"
auto.modelo= "X5"
console.log(auto["marca"]);


const vendedor = {
    nombre: 'pedro',
    apellido: "gonzalez", 
    empresa: 'Auto S.A',
    habilidadesBlandas: ['carisma', 'puntualidad'],
    vender: function () {
        return "pedro ha vendido un auto"        
    },
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido
    }
}

console.log(vendedor.vender());
console.log(vendedor.nombreCompleto());
console.log(vendedor.habilidadesBlandas);

