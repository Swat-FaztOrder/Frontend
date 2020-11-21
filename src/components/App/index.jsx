import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from '../../pages/Menu/index.jsx'

const App = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/Menu">
          <Menu/>
        </Route>
      </Switch>
    </Router>
  )
};

export default App;
