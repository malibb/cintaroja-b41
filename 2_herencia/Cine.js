class Cine {
    constructor(nombre, estrellas){
        this.nombre = nombre;
        this.estrellas = estrellas;
    }
    reproducir(largometraje){
        console.log('Bienvenidos a a presentación de ' + largometraje.nombre);
        return 1;
    }
    getNombre(){
        console.log(this.nombre);
    }
}
module.exports = {
    Cine
}