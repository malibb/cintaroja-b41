// funcional

// let, const

const arreglo = [1,2,3,4,5];

/* const resultadoFinal = arreglo
    .filter((elemento) => elemento % 2 !== 0)
    .map((elemento, indice) => `Soy el elemento ${elemento} con indice ${indice}`); */

const resultadoFinal = arreglo.filter((elemento) => elemento % 2 !== 0);
const nuevoREsultadoFinal = resultadoFinal.map((elemento, indice) => `Soy el elemento ${elemento} con indice ${indice}`);

arreglo
    .filter((elemento) => elemento % 2 !== 0)
    .map((elemento, indice) => `Soy el elemento ${elemento} con indice ${indice}`);

// Object

const persona = {
    nombre: 'mali',
    edad: 21
};
// console.log(persona['edad'])
  
console.log(Object.keys(persona)
    .map((elemento, indice) => `Mi ${elemento} es ${persona[elemento]}`));

// Soy el elemento nombre con indice 0
// Soy el elemento edad con indice 1
