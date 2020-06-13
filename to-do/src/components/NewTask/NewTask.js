import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const NewTask = () => {
    const [title, setTitle] = useState('');
    const [isDone] = useState(false);
    const [time, setTime] = useState(null);
    const [prioridad, setPrioridad] = useState(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const history = useHistory();

    const createTask = () => {
        if( prioridad > 0 
            && prioridad < 6
            && time > 0
            && time < 21
            && title.length > 0) {
            const body = {
                title,
                isDone,
                time,
                prioridad,
            }
            
            axios.post('https://cintaroja-ff8f6.firebaseio.com/task.json', body)
            .then(({ data }) => {
                alert('Tarea Creada');
                history.push("/");
            })
            .catch(()=> {
                setLoading(false);
                setError('Error')
            });
        } else {
            setLoading(false);
                setError('Error')
        }
    }

    const handleTitle = (event) => {
        setTitle(event.target.value);
    };
    const handlePrioridad = (event) => {
        setPrioridad(event.target.value);
    };
    const handleTime = (event) => {
        setTime(event.target.value);
    };
    
    return(
    <div className="card">
        <h4>Crea una nueva tarea</h4>
        <div class="form-group">
            <label htmlFor="title">Titulo de la tarea:</label>
            <input type="text" value={title} class="form-control" onChange={handleTitle} id="title"/>
           </div>
        <div class="form-group">
            <label for="prioridad">Prioridad:</label>
            <input type="number" value={prioridad} class="form-control"
            max="5" min="1" 
            onChange={handlePrioridad} id="prioridad"/>
        </div>
        <div class="form-group">
            <label for="tiempo">Tiempo de realización:</label>
            <input type="number" value={time} class="form-control" 
            max="20" min="1" 
            onChange={handleTime} id="tiempo"/>
        </div>
        <button type="button" onClick={()=>{createTask()}} class="btn btn-primary">Crear</button>
        <button type="button" onClick={()=>{history.push("/")}} class="btn btn-secondary">Regresar</button>

    { error ? <h1 class="text-danger">{error}</h1>: ''}
    </div>)
};

export default NewTask;