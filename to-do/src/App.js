import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import MainContainer from './containers/MainContainer/MainContainer';
import TaskContainer from './containers/TaskContainer/TaskContainer';
import Container404 from './containers/Container404/Container404';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <MainContainer/>
          </Route>
          <Route path="/create">
            <TaskContainer/>
          </Route>
          <Route path="*">
            <Container404 />
          </Route>
      </Switch>
  </Router>
  );
}

export default App;
