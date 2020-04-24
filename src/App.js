import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import BuildPizza from './components/BuildPizza';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/pizza'>
            <BuildPizza />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
