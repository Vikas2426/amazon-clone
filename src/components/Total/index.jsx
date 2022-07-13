import React, { useContext } from "react";
import { cartContext } from "../ContextProvider";
import "./Total.css";
function Total() {
  const { items } = useContext(cartContext);
  const getTotal = () => {
    let total = 0;
    for (const item of items) {
      let subTotal = item.quantity * item.price;
      total += subTotal;
    }
    return total;
  };

  return (
    <div className="total">
      <p> Total: ${getTotal()}</p>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
}

export default Total;
