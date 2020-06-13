import React from 'react';
import { Link } from 'react-router-dom';

const Container404 = () => {
    return(
        <div class="d-flex flex-column align-items-center">
            <img src="https://http.cat/404" alt="404"></img>
            <h1>404</h1>
            <h2>Esa ruta no existe.</h2>
            <Link to="/">Regresar al inicio</Link>
        </div>
    )
}

export default Container404;