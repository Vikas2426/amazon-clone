import React, { useContext } from "react";
import "./AddToCart.css";
import { cartContext } from "../ContextProvider";

function AddToCart({ item }) {
  const { addQuantity, reduceQuantity } = useContext(cartContext);

  const addItem = () => {
    addQuantity(item);
  };

  const removeItem = () => {
    reduceQuantity(item);
  };

  return item.quantity ? (
    <div className="add-remove-item-btn">
      <button className="add-remove-btn" onClick={removeItem}>
        <span className="material-symbols-outlined">remove</span>
      </button>
      <h3>{item.quantity}</h3>
      <button className="add-remove-btn" onClick={addItem}>
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
  ) : (
    <button className="add-to-Cart-btn" onClick={addItem}>
      <i className="fas fa-cart-plus"></i>
    </button>
  );
}

export default AddToCart;
