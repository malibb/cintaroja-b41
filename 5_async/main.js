function getUsuarios(callback){
    const datos = [
        {nombre: 'Mali', edad:'21'},
        {nombre: 'Raul', edad:'25'},
        {nombre: 'Edwin', edad:'27'},
    ];
    setTimeout(function(){
        // funcionFlecha(datos, 'Todo furula.');
        callback(datos, 'Todo furula.');
        console.log('Esto es después del callback');
    },4000);
}

const funcionFlecha = (data, texto) => { // my callback es mi función anónima
    console.log('Dentro del callback');
    console.log(data);
    console.log(texto);
}

console.log('Inicio del programa! Hola a todos!');
// funcionFlecha(data, texto);

getUsuarios(funcionFlecha);