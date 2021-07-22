import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Home from "./components/Home";
import ContextProvider from "./components/ContextProvider.jsx";
import Products from "./components/Products";

function App() {
  return (
    <>
      <ContextProvider>
        <Router basename="/amazon-clone">
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/cart" component={Cart} />
              <Route path="/login" component={Login} />
              <Route path="/products" component={Products} />
            </Switch>
          </div>
        </Router>
      </ContextProvider>
    </>
  );
}

export default App;
