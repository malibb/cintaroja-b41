import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/* la etiqueta App está en JSX */
ReactDOM.render(
  <React.StrictMode>
    <App name="Mi aplicación" color="is-react"/>
    <App name="Sección 1" color="is-green"/>
    <App name="Sección 2" color="is-yellow"/>
    <App name="Sección 3" color="is-red"/>
    <App name="Final" color="is-react"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
