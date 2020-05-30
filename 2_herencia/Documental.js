const {Largometraje} = require('./Largometraje');

class Documental extends Largometraje{
    constructor(duracion, link, nombre, festivales) {
        super(duracion, link, nombre);
        this.festivales = festivales;
    }
    getFestivales() {
        return this.festivales;
    }
}

module.exports = {
    Documental
}
