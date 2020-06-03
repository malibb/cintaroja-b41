const axios = require('axios');

/*
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

 const getPeople = (id) => {
    // traer los datos de la API
    const url = `https://swapi.dev/api/people/${id}/`;
    const onePerson = axios.get(url); // axios devuelve una promesa.

    onePerson.
    then(async (response) =>{
        // const nuevoArreglo = resultados.map(async (elemento)=>{
            const planeta = await getNamePlanet(response.data.homeworld);
            const nuevoElemento = {
                nombrePersonaje: response.data.name,
                genero: response.data.gender,
                nombrePlaneta: planeta//elemento.homeworld,
            }
            console.log(nuevoElemento);
            return nuevoElemento;
        //});
    }) 
    .catch((error)=>{
        console.log(error.response.data);
        console.log(error.response.status);
    });

}

function getNamePlanet(url){
    return new Promise((resolve, reject)=> {
        const promesaPlaneta = axios.get(url);
        promesaPlaneta
        .then((response) => {
            console.log(response.data.name);
            resolve(response.data.name);
        })
        .catch((error)=> {
            console.log(error);
            reject(new Error('Error al hacer la peticion'));
        });
    });
};


getPeople(4);