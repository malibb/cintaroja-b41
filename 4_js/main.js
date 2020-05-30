/*


Métodos de entrada o salida.

alert()
console.log()
prompt()

*/

// Función definición de una plantilla de algo que podemos reutilizar en el código.

// saludar


// ECMA 5

/*

definición de una función
 palabra      nombre de   Apertura que puede ir con o sin argumentos
  reservada     la función  ( parametro1, parametro2,  parametro3)
 */
function nombreDeLaFuncion(parametroRecibido) {
    // pedazo de código
    const numero = 3;
    const parametros = parametroRecibido + numero;
    return parametros;
    // sin la palabra return, el valor de función va a ser undefined  
}
  
// ECMA 6
// arrow function o función flecha
  const nombreDeLaFuncionFlecha = () => {
    const numero = 1;
    // pedazo de código
    return numero;
    // Existe una palabra reservada para que ni función devuelva un valor
  };
  
  // Se puede asignar un valor a la función.
  
  // uso de operador ternario
const valorDeLaFuncion =  nombreDeLaFuncion('parámetro') === undefined 
    ? 'La función no contiene un valor de retorno' 
    : 'La función retorna algo';
  
const valorDeLaFuncionFlecha =  nombreDeLaFuncionFlecha();

console.log(valorDeLaFuncion);

let a; // SI solo la defino, "a" va a valer undefined;


//Por buenas prácticas nuetras funciones deben devolver algo.
const calcularPromedio = (calificaciones, nombre) => {
    let suma = 0;
    for (const calificacion of calificaciones) {
      suma += calificacion;  
    }
    return suma/calificaciones.length;
};

const promedio = calcularPromedio([10,5,4]);
console.log(promedio);

// Podemos crear funciones asociadas a un objeto.

// Lo podemos hacer en un objeto literal y en una clase;
// Método

// El método sólo se va a poder usar con su objeto asociado.

// objeto literal
const misifusObjetoLiteral = {
    edad: 13,
    nombre: 'Misifus',
    maullar () {
        return 'Miarramiu';
    },
    getName(){
        return this.nombre;
    }
};

console.log(misifusObjetoLiteral.getName());
// const edadMisifus = misifus.edad;
// console.log(misifus.edad);


// definición de una clase
class Gato {
    constructor(edadDelGato,nombre){ // definir los valores de las variables que tendrán todas las instancias de la clase.
        this.edad = edadDelGato;
        this.nombre = nombre ? nombre : 'gato';
    }
    getName(){
        return this.nombre;
    }
}


// instancia de gato es una copia de una clase con valores independientes;
//              (edadDelGato) es invocar al constructor
const misifusInstanciaDeUnaClase = new Gato(14);
const misifus2 = new Gato(4,'Rayas');
const misifus3 = new Gato(5);
const misifus4 = new Gato(10);
const misifus5 = new Gato(1);

console.log(misifusInstanciaDeUnaClase);
console.log(misifus2);
console.log(misifus3);
console.log(misifus4);
console.log(misifus5);