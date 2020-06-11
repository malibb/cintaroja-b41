import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';

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
      <Search/> {/* Self closing tag  etiquetas que se autocierran */}
      </>
  );
}

export default App;
