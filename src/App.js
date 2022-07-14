import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </div>
        </Router>
      </ContextProvider>
    </>
  );
}

export default App;
