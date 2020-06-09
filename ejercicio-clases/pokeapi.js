const axios = require('axios');

/*
function nombre () {

}
*/

const getMovesPokemon = (idPokemon) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}/`)
        .then(({ data, status }) => {
            resolve(data.moves.map((elemento) => {
                return elemento.move.url;
            }));
        })
        .catch((error) => {
            console.log(error);
            reject(new Error(error));
          });
    });
};

const getMove = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url)
        .then(({ data, status }) => {
            // const [traduccion] = data.names.filter((elemento) => elemento.language.name === 'es')
            const traduccion = data.names.find((elemento) => elemento.language.name === 'es')
            resolve(traduccion.name);
        })
        .catch((error) => {
            console.log(error);
            reject(new Error(error));
          });
    });
}

getMovesPokemon(1).then((resultado)=>{
    console.log('Terminé de pedir los movimientos');
    // const move = resultado[0];
    const [move] = resultado;
    // console.log(move);
    // Promise.all
    getMove(move).then((move)=>{
        console.log(move);
    })
})