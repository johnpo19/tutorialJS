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



promesa1.then(res => {
    console.log(res.description);
    promesa2.then(res=>{
        console.log(res.description);
        promesa3.then(res=>{
            console.log(res);
            
        }).catch(error => {
            console.warn(error);
            
        })
    }).catch(error=>{
        console.warn(error);
        
    })
}).catch(error => {
    console.warn(error);
    
})
//warn en amarillo y error en rojo