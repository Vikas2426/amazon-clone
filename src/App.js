import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login.js';
import Checkout from './components/Checkout.js';
import Home from './components/Home.js';
import Orders from './components/Orders.js';


function App() {
  const year = new Date().getFullYear();


  return (
    <>
      <Router basename='/amazon-clone'>
        <div className="App">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/login' component={Login} />
            <Route path='/orders' component={Orders} />

          </Switch>
        </div>
      </Router>
    </>

  );
}

export default App;