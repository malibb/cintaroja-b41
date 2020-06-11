import React, { useState } from 'react';
import './Card.css';

// estado: valor que puede cambiar a través del tiempo 
function Card(props) {
    const [propiedad, setPropiedad] = useState('Me están viendo OnO');
    const [color, setColor] = useState('is-orange');


    function devuelveBoton() {
        if ( propiedad === 'Me están viendo OnO') {
           return(<button onClick={() => {
               setPropiedad('¿Me estás mirando >.<?')
            }}>Sorpresa!</button>);
         }
        return(<button onClick={() => {
            setPropiedad('Me están viendo OnO')
        }}>Regresa al anterior texto</button>); 
    }

    const cambiarColor = () => {
        if(color === 'is-green') {
            setColor('is-yellow')
        } else {
            setColor('is-green')
        }
    }
     
    return(
        <div className={`contenedor ${color}`}>
            <h2>{props.titulo}</h2>
            <img src={props.img} width="90%"/>
            <div className="cuerpoContenedor">
                {props.texto}
            </div>
            <h4>{propiedad}</h4>
                {
                propiedad === 'Me están viendo OnO'
                ? <button onClick={() => {
                    setPropiedad('¿Me estás mirando >.<?')
                }}>Sorpresa!</button> 
                : <button onClick={() => {
                    setPropiedad('Me están viendo OnO')
                }}>Regresa al anterior texto</button>
                }
            <button onClick={cambiarColor}>cambiar color</button>
        </div>
    );
}

export default Card;
