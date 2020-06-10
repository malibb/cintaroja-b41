import React, { useState } from 'react';
import './Presentacion.css'
function Presentacion(props) {
    const [propiedad, setPropiedad] = useState('este es tu Nombre y Apellido');
    function devuelveBoton() {
        if ( propiedad === 'este es tu Nombre y Apellido') {
           return(<button onClick={() => {
               setPropiedad('ok')
            }}>ok!</button>);
         } else if ( propiedad === 'si es erroneo...tu'){
            return(<button onClick={() => {
                setPropiedad('si es erroneo...tu')
            }}>deberias volver a llenar el formulario!</button>); 
         } 
        return(<button onClick={() => {
            setPropiedad('si es erroneo...tu')
        }}>deberias volver a llenar el formulario!</button>); 
    }
    return(
        <div className="contenedor is-orange">
            
            <h2>{props.titulo}</h2>
            <div className="cuerpoContenedor">
                {props.texto}
            </div>
            <h4>{propiedad}</h4>
                {
                 devuelveBoton()
                }
        </div>
    );
}
export default Presentacion;


/*
return(
    <div className="contenedor is-orange">
        
        <h2>{props.titulo}</h2>
        <div className="cuerpoContenedor">
            {props.texto}
        </div>
        <h4>{propiedad}</h4>
            { 
             esCorrecto === true 
            ? <button className="red" onClick={() => {
                setPropiedad('si es erroneo...tu')
                setEsCorrecto(false);
            }}>ok!</button> 
            : <button className="pink" onClick={() => {
                setPropiedad('hazlo');
                setEsCorrecto(true);
            }}>deberias volver a llenar el formulario!</button> 
            }
    </div>
);
*/