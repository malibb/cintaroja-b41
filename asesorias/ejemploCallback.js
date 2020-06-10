/* 

Callback

Acción que se llama

*/
let numero = 1;

function funcionCualquieraSinParametros() {
    console.log('dentro función cualquiera');
}

function funcionCualquiera2(unNumero) {
    return unNumero;
}

function decirMiau() {
    console.log('miau')
}
// numero // 1

// funcionCualquiera2(1) // 1

funcionCualquieraSinParametros// funcionCualquiera2 // 

function decirAlgo(otraFuncion) { // otraFuncion va a ser un callback;
    // console.log('dentro de decirAlgo  ', otraFuncion);
    otraFuncion();
    otraFuncion();
    otraFuncion();
}

// Ejecutando función
decirAlgo(funcionCualquieraSinParametros);
decirAlgo(decirMiau);