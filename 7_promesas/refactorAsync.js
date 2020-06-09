const axios = require('axios');
// Promesas tienen 3 estados (resolve, reject)

// Promesa => Pendiente
// Promesa => Resuelta
// Promesa => Rechazada

// Métodos que tenemos para manipular una promesa.
// Promesa => Then -> se ejecuta cuando la promesa se resulve
// Promesa => Catch -> cuando el estado es rechazado
// Promesa => Finally -> siempre


function recibirData(error, response, body) {
    console.log(response.statusCode); // 200
    const data = JSON.parse(body);// JSON.parse convierte a mi string en un obj de JS.
    for (let i = 0; i <data.results.length; i++) {
        console.log(data.results[i].name);
    }
    // generar un nuevo arreglo
   const nuevoArreglo = data.results.map((elemento)=>{
        const planeta = getNamePlanet(elemento.homeworld);
        const nuevoElemento = {
            nombrePersonaje: elemento.name,
            genero: elemento.gender,
            nombrePlaneta: planeta,
        };
        return nuevoElemento;
   });
   console.log(nuevoArreglo);
   return nuevoArreglo;
   for (const elemento of data.results) {
       console.log(elemento.name)
   }

};

*/


class Persona {
    constructor(nombre, planeta, genero){
        this.nombre = nombre;
        this.planeta = planeta;
        this.genero = genero;
    }
}

// lo peligroso de usar async await era que todo mi contexto se vuelve asincrono.
// devolver una persona necesitamos agrega un return encargado de mandar este dato.
const getPerson = (id) => {
    // traer los datos de la API
    return new Promise((resolve, reject) => {
        const url = `https://swapi.dev/api/people/${id}/`;
        const onePerson = axios.get(url); // axios devuelve una promesa.

        onePerson
        .then((response) =>{ // response 
            // primer paso, obtener el planeta
            // console.log('estoy en el primer then', response.data);
            return getNamePlanet(response.data.homeworld)
                .then((resultado) => {
                    // console.log('resultado getName', resultado);
                    return { ...response.data, homeworld: resultado};
                });  
        })
        .then((personaje) => {
            //console.log('valorDeRetornoPromesaAnterior',valorDeRetornoPromesaAnterior);
            resolve(new Persona(personaje.name, personaje.homeworld, personaje.gender));
        })
        .catch((error)=>{
            console.log(error.response.data);
            console.log(error.response.status);
            reject(new Error(error.response.status));
        });

        // console.log('promesa', promesa);
        //return promesa;
    });
}

function getNamePlanet(url){
    return new Promise((resolve, reject)=> {
        axios.get(url)
        .then((response) => {
            resolve(response.data.name);
        })
        .catch((error)=> {
            reject(new Error(`Error al hacer la peticion: ${error}`));
        });
    });
};

const personas = [];
getPerson(4)
.then((personaCreada) => {
   personas.push(personaCreada);
   console.log(personas);
})