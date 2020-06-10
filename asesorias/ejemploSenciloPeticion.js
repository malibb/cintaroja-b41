const axios = require('axios');
/*
Métodos.

devuelven promesas 

axios.get()
axios.post()

then
catch
*/

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
// .then(({ data, status}) => {
.then((respuesta) => {
    //console.log(respuesta.data.abilities);
    const habilidades = respuesta.data.abilities;
    const nuevoArregloHabilidades = habilidades.map((elemento, indice, arregloCompleto) => {
        return elemento.ability.name;
    });
    console.log(nuevoArregloHabilidades);
});

/*
axios.delete('endpointalmetododelete')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

axios.post('endpointalmetodopost', { propiedad1 : "valor"})
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});

const objPatch = { 
    propiedad1 : "valor"
};

axios.patch('endpointalmetodopost', objPatch)
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});
*/