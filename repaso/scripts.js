// ECMA 5
var persona = 'Mali';

// ECMA 6 int 
let personaLet = ['',2]; //
const personaConst = 'Mali';//
personaLet = 'Pablo';

// condición 
const obj = {};
const arry = [];

arry.push('Mali');

/* Tipos de datos para varibles 

String  '' ""  ``
Number 1234567689
Boolean true/false
 ! + = -
 ! - = +
*/

let isFun = true;

let isRain = true;

/*
if (isRain) {
    alert('Lleva sombrilla!');
} else {
    alert('Disfruta tu caminata');
}
*/
function nombreFuncion(parametro) {

}

function nombreFuncion(parametro) {
    return 'Algo';
}

let perro = {
    nombre: 'Ayudante de Santa',
    color: 'café',
    noPatas: 4,
    tieneDueño: true,
    ladrar(aQuien, estaDormido) {
        if(estaDormido) {
            return false; // si esta domrmido acá termina el codigo
        } 
        if(aQuien) {  
            return true;
        }
        // console.log('guao, guao! quien eres?');
        return false;
    },
};

console.log(perro.noPatas);
console.log(perro.ladrar());

if (perro.ladrar('gato')) {
    alert('Ya no ladres!') // pedazo de codigo que haga algo si el perro ladra
} else {
    console.log('Y el perro?');
}