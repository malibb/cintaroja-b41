import React, { useState, useEffect }from 'react';
import Task from './../Task/Task';
import { Link } from "react-router-dom";
import axios from 'axios';

const TaskManager = () => {
    // Estado
    const [ tasks, setTasks ] = useState({});
    // Iterar objeto, usabamos Object.keys(tasks) que me devolvia un arreglo.
    
    const getTasks = () => {
        axios.get('https://cintaroja-ff8f6.firebaseio.com/task.json')
        .then(({data})=>{
            debugger;
            setTasks(data);
        })
    };
    
    // montar, renderizar, morir
    useEffect(() => {
       getTasks();
    }, []);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Mis tareas</h5>
                <h6 className="card-subtitle mb-2 text-muted">Por hacer</h6>
                {
                    Object.keys(tasks)
                    .map((id) => <Task
                    gT={getTasks}
                    key={id}
                    title={tasks[id].title} 
                    priority={tasks[id].prioridad}
                    done={tasks[id].isDone}
                    time={tasks[id].time}
                    id={id}
                    />)
                }
            </div>
            {/*<a href></a> */}
            <Link to="/create">Crear tarea.</Link>
        </div>
    );
};

export default TaskManager;
