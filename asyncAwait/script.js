let promesa = new Promise((response) => {
    

    setTimeout(() => {
        let resp = {
            response: 200, //200 ok 400 algo hay mal 500 fallan las cosas
            description: 'esta info es imporatante'
        }
       response(resp)
        reject('fallo')
    }, 3000);
})
let promesa2 = new Promise((response) => {
    

    setTimeout(() => {
        let resp = {
            response: 200, //200 ok 400 algo hay mal 500 fallan las cosas
            description: 'esta info es imporatante pero suele demorar mucho'
        }
       response(resp)
        reject('fallo')
    }, 5000);
})

let promesa3 = new Promise((response) => {
    

    setTimeout(() => {
        let resp = {
            response: 200, //200 ok 400 algo hay mal 500 fallan las cosas
            description: 'info rapida'
        }
       response(resp)
        reject('fallo')
    }, 2500);
})
//mantener secuencialidad


async function ejecutarPromesas() {
    let respuestaProm = await promesa
    console.log(respuestaProm);

    let respuestaProm2 = await promesa2
    console.log(respuestaProm2);

    let respuestaProm3 = await promesa3
    console.log(respuestaProm3);
    
}

ejecutarPromesas()
    