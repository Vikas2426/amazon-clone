import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact>
            <h1>Amazon Clone</h1>
          </Route>
          <Route path='/checkout' component={Checkout}></Route>
          <Route path='/login' component={Login}></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;