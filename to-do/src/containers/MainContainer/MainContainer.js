import React from 'react';
import Navbar from './../../components/Navbar/Navbar';
import TaskManager from './../../components/TaskManager/TaskManager';


function MainContainer() {
  return (<>
      <Navbar/>
      <TaskManager/>
    </>
  );
}

export default MainContainer;