import React, { useState, useEffect } from 'react';
import Card from './../Card/Card';
import './Search.css'
import axios from 'axios';

function Search(props) {
    /* fragmento JSX <></> */
    // estado
    const [texto, setTexto] = useState('');
    const [gifts, setGifts] = useState([]);


    const API_KEY = 'q97vCS1VN98OqonNcEonEOnf4D7El3ul';

    const obtenerGifs = () => {
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${texto}&api_key=${API_KEY}&limit=15`)
        .then(({ data })=>{
            setGifts(data.data);
            // data.data es un arreglo de objetos
            //console.log(data.data);
           /* const data1 = [];
            if(data.data && data.data.length >0 ){
                for (let i = 0; i< 7; i++) {
                    data1.push(data.data[i])
                }
                setGifts(data1);
            }*/
        })
        .catch((err)=> console.log(err));
    };
    // manejar eventos 
    
    const handleChange = (event) => {
        // console.log('Esta cambiando el input', event.target.value)
        // guardamos en el estado texto el valor del input que viene en 'event.target.value'
        // g ga gat gato
        setTexto(event.target.value);
    };
    /* primera vez (montar en el DOM)y cada vez que se actualize
     El useEffect es un hook, que se va a ejecutar cada que el estado que viene en el arreglo, cambie.
    
    Si está definido vacio [], sólo se ejecuta cuando se monta el componente

    Si tiene una propiedad, se ejecuta el callback cuando la propiedad cambia

    para este caso, cuando texto cambia, se ejecuta

    () => {
        obtenerGifs();
        console.log('hubo un cambio en texto')
    }

    */
    useEffect(() => {
        obtenerGifs();
        console.log('hubo un cambio en texto')
    },[texto]);

    return(<>
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}> 
        <label> Buscador</label>
        <input type="text" placeholder="Escribe tu búsqueda" onChange={handleChange}/>
    </div>
    <div className="contenedorCards">
        {
         gifts.length > 0 
         ? 
         gifts.map((elemento)=>{
            const gift = {
                id: elemento.id,
                origin: elemento.source_post_url,
                titulo: elemento.title,
                img: elemento.images.downsized_large.url
            }
            return <Card key={gift.id} titulo={gift.titulo} img={gift.img} texto={gift.origin}/>;
        })
        : <h1>No hay data.</h1>

        }
        {/* <Card titulo="Card1" img="" texto="Valor dentro de la card"/> */}
      </div>
    </>
    );
}

export default Search;