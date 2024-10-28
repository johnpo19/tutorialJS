try {
    //llamado al backend (api)
    console.log('llamando al back end');
    // throw('este cliente no esta apto para la compra')
    // console.log('salio todo con exito');
    setTimeout(() => {
        console.log('el backend nos respode');
        // console.log('cliente apto para la compra');
        throw('el cliente no esta apto para la commpra')
               
    }, 1000);
} catch (error) {
    //tomamos el error y hacemos lo que queramos
    console.log('algo fallo');
    console.log('algo fallo', error);
    
}finally{
 //se ejecuta siempre
    console.log('se ejecuta siempre');
    

}