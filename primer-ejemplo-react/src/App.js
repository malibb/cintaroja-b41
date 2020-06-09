import React from 'react';
import logo from './logo.svg';
import './App.css';

// Toda componente recibe props
function App(props) {
  return (
    <div className="App" >
      <header className={`App-header ${props.color}`}>
        {props.name}
      </header>
    </div>
  );
}

export default App;
