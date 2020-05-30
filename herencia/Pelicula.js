
const {Largometraje} = require('./Largometraje');

class Pelicula extends Largometraje {
    constructor(duracion, link, nombre, oscares) {
        super(duracion, link, nombre);
        this.oscares = oscares;
    }
    getName() {
        return this.pelicula;
    }
}

module.exports = {
    Pelicula
}