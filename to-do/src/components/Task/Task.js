import React from 'react';
// Dumb compoent
const Task = ({ title, priority }) => {
  return (
    <div class="card">
        <h4><span class="badge badge-primary">{priority}</span>  {title}.</h4>
    </div>
  );
};

export default Task;