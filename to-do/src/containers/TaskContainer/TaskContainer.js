import React from 'react';
import Navbar from './../../components/Navbar/Navbar';
import NewTask from './../../components/NewTask/NewTask';


function TaskContainer() {
  return (<>
      <Navbar/>
      <NewTask/>
    </>
  );
}

export default TaskContainer;