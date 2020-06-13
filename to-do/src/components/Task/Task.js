import React, { useState } from 'react';
import axios from 'axios';

const Task = ({ id, title, priority, done, time, gT }) => {
  const [ check, setCheck ] = useState(done);
  const url = `https://cintaroja-ff8f6.firebaseio.com/task/${id}.json`;

  // definición, aquí no se ejecuta.
  const handleChange = () => {
    const body = {
      "isDone": !check
    }
    axios.patch(url, body)
    .then(({ data }) => {
      setCheck(data.isDone)
    })
  }
  // definición, acá no se ejecuta.
  const eliminar = () => {
    axios.delete(url)
    .then(()=>{
      gT();
    })
  };

  return (
    <div className="card">
        <h4><span className="badge badge-primary">{priority}</span> {title}.</h4>
        <div className="form-check">
          <input
          className="form-check-input" 
          type="checkbox" 
          value=""
          checked={check}
          onChange={handleChange}
          id={id}/>
          <label className="form-check-label" htmlFor={id}>
            Realizado es {time} horas.
          </label>
          <button type="button" onClick={() => {
            alert('Se eliminó la tarea', id);
            eliminar();
          }} className="btn btn-danger">Eliminar</button>
        </div>
    </div>
  );
};

export default Task;