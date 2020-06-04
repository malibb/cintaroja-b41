const axios = require('axios');

class Author {
    constructor(id,name,last_name,nacionalidad,biography,gender,age,is_alive){
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.nacionalidad = nacionalidad;
        this.biography = biography;
        this.gender = gender;
        this.age = age;
        this.is_alive = is_alive;
    }
}

function crearAuthor(nombre, apellido ,nacionalidad, biografia, genero, edad) {
    return new Promise((resolve, reject)=>{
        // peticion API : axios, request: -> url, metodo
        axios.post('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/', {
            "name": nombre,
            "last_name": apellido,
            "nacionalidad": nacionalidad,
            "biography": biografia,
            "gender": genero,
            "age": edad
        })
          .then((response) => {
            if(response.status === 201) {
                const {id,name,last_name,nacionalidad,biography,gender,age,is_alive} = response.data;
                const author = new Author(id,name,last_name,nacionalidad,biography,gender,age,is_alive);
                resolve(author);
            } else  {
                resolver(null);
            }
        
          })
          .catch((error) => {
            console.log(error);
            reject(new Error(error));
          });
    });
}