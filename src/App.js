import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Checkout from './components/Checkout';
import Home from './components/Home.js';

function App() {


  return (

    <Router>
      <div className="App">
        <Switch>
          <Route path='/amazon-clone' exact component={Home} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </Router>


  );
}

export default App;