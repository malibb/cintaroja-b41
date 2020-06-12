import React, { useState, useEffect }from 'react';
import Task from './../Task/Task';
import axios from 'axios';

const TaskManager = () => {
    // Estado
    const [ tasks, setTasks ] = useState({});
    // Iterar objeto, usabamos Object.keys(tasks) que me devolvia un arreglo.
    
    const getTasks = () => {
        axios.get('https://cintaroja-ff8f6.firebaseio.com/task.json')
        .then(({data})=>{
            setTasks(data);
        })
    };
    
    // montar, renderizar, morir
    useEffect(() => {
       getTasks();
    }, []);

    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Mis tareas</h5>
                <h6 class="card-subtitle mb-2 text-muted">Por hacer</h6>
                {
                    Object.keys(tasks)
                    .map((id) => <Task title={tasks[id].title} priority={tasks[id].prioridad}/>)
                }
            </div>
        </div>
    );
};

export default TaskManager;
