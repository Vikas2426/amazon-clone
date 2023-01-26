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
    <span className="add-remove-item-btn">
      <button className="add-remove-btn" onClick={removeItem}>
        <span className="material-symbols-outlined">remove</span>
      </button>
      <h2>{item.quantity}</h2>
      <button className="add-remove-btn" onClick={addItem}>
        <span className="material-symbols-outlined">add</span>
      </button>
    </span>
  ) : (
    <button className="add-to-Cart-btn" onClick={addItem}>
      <i className="fas fa-cart-plus"></i>
    </button>
  );
}

export default AddToCart;
