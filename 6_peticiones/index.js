const request = require('request'); // referirse a una libreria que está en nuestro package.json

function recibirData(error, response, body) {
    console.log(response.statusCode); // 200
    const data = JSON.parse(body);// JSON.parse convierte a mi string en un obj de JS.
    /*
    for (let i = 0; i <data.results.length; i++) {
        console.log(data.results[i].name);
    }
    */
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
   /*
   for (const elemento of data.results) {
       console.log(elemento.name)
   }
   */
};

function getNamePlanet(url){
    request.get(url,(error,response,body) => {
        console.log(`Status code ----> ${response.statusCode}`);
        const respuestaBody = JSON.parse(body) // tranforma en obj js 
        if(response.statusCode === 200){
            console.log('Petición Correcta');
            console.log(respuestaBody.name);
            return respuestaBody.name;
        }else{
            console.log('Peticion incorrecta');
            console.log(error);
            return null;
        }    
    });
      
}

request('https://swapi.dev/api/people/', recibirData);


// node index.js