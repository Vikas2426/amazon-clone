import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Cart from './components/Cart.jsx';
import Home from './components/Home.jsx';
import Orders from './components/Orders.jsx';
import ContextProvider from './components/ContextProvider.jsx';


function App() {


  return (
    <>
      <ContextProvider>

        <Router basename='/amazon-clone'>
          <div className="App">
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/cart' component={Cart} />
              <Route path='/login' component={Login} />
              <Route path='/orders' component={Orders} />

            </Switch>
          </div>
        </Router>
      </ContextProvider>
    </>

  );
}

export default App;