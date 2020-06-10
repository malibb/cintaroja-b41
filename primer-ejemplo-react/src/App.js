import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Card from './Components/Card/Card';

/* Toda componente recibe props que son las propiedades
props = { 
  prop1: valor2,
  prop2: valor1,
}
definidas en el elemento JSX <App prop1="valor1" prop2="valor2"> */

function App(props) {
  return (
    <>
      <Navbar/>
      <div class="contenedorCards">
        <Card titulo="Card1" img="https://media.giphy.com/media/uYh2E1meNXAFa/200_d.gif" texto="Valor dentro de la card"/>
        <Card titulo="Card2" img="https://media.giphy.com/media/LvGx6SWHXHTQk/giphy.gif" texto="Valor dentro de la card"/>
        <Card titulo="Card3" img="https://www.trecebits.com/wp-content/uploads/2015/08/slide_303383_2577028_free.gif" texto="Valor dentro de la card"/>
        <Card titulo="Card4" img="https://media.giphy.com/media/LvGx6SWHXHTQk/giphy.gif" texto="Valor dentro de la card"/>
      </div>
      </>
  );
}

export default App;
