import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../../pages/login/index.jsx';
import Menu from '../../pages/Menu/index.jsx'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/Menu"><Menu/></Route>
      </Switch>
    </Router>
  )
};

export default App;