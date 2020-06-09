
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


// definir un arreglo de datos

const a =  {
    prop1: 1,
    prop2: 2,
};

const b = {
    ...a,
    propb1: 10,
};

//a.nombre = 'Mali';
//a[nombre] = 'Mali';

const getDatos = (callback, datos_enviado) => {
    // const nombre = callback('nombre');  {}, {nombre: 0},{}          ['nombre', 'apellido', 'edad']
    const final = datos_enviado.reduce((valorPrevio, valorActual, indice) => {
        return {
            ...valorPrevio,
            [valorActual] :  callback(valorActual),
        }
    }, {});
    return final;
}

const getDato = (parametro) => {
    return prompt(`Dame tu ${parametro}`);
}


const datos1 = ['nombre', 'apellido', 'edad'];

const datos2 = ['nombreMascota', 'apellido', 'edad','tipo'];

// const { nombre } = getDatos(getNombre);
const datosRecibidos1 = getDatos(getDato,datos1);
const datosRecibidos2 = getDatos(getDato,datos2);

console.log(datosRecibidos1)
console.log(datosRecibidos2);
