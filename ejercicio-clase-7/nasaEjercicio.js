const axios = require('axios');

const URL_NASA = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2019-12-31&end_date=2020-01-01&api_key=';
const API_KEY = 'XgHdKCUxaAfOiMvJfKzsHsJKLtOWWvkTlV7yB8FN';
const url_completa = URL_NASA + API_KEY;

function obtenerAsteroidesPeligrosos() {
    return new Promise((resolve, reject)=>{
        // peticion API : axios, request: -> url, metodo
        let asteroidesPeligrosos = 0;
        let numeroDeAsteriodesActuales = 0;
        axios.get(url_completa)
            // { data, status } = response
          .then(({ data, status }) => {
              const asteroides = data.near_earth_objects;
              if(status === 200) {
                numeroDeAsteriodesActuales = data.element_count;
                Object.keys(asteroides).map((fecha)=>{
                    asteroides[fecha].map((asteroide)=> {
                        if (asteroide.is_potentially_hazardous_asteroid){
                            console.log('OH NO!')
                            asteroidesPeligrosos++;
                        }
                    });
                })
                resolve({ asteroidesPeligrosos, numeroDeAsteriodesActuales });
              } else {
                  reject(new Error('Algo falló'));
              }
        
          })
          .catch((error) => {
            console.log(error);
            reject(new Error(error));
          });
    });
}

obtenerAsteroidesPeligrosos()
.then((o)=>{
    console.log(`De ${o.numeroDeAsteriodesActuales} asterioides tenemos ${o.asteroidesPeligrosos} asteriodes peligrosos en la última semana.`);
});