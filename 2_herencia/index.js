const {Cine} = require('./Cine');
const {Pelicula} = require('./Pelicula');
const {Documental} = require('./Documental');


// Crear la película
// Crear el documental
const pelicula = new Pelicula(2, 'http://pelicula', 'Moana', 3);
const documental = new Documental(3, 'http://documental', 'La vida salvaje', 5);

const cine1 = new Cine('Las americas', 4);
 cine1.getNombre();
 cine1.reproducir(pelicula);

 const cine2 = new Cine('Los mojados', 4);
 cine2.getNombre();
 cine2.reproducir(documental);
