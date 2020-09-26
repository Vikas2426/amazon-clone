import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Checkout from './components/Checkout';
import Home from './components/Home.js';

function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;