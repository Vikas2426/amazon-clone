import React, { useContext, useState } from "react";
import "./AddToCart.css";
import { setItemsContext } from "../ContextProvider";

function AddToCart({ item }) {
  const addItems = useContext(setItemsContext);
  const [clicked, setClicked] = useState(false);

  const addToCart = () => {
    addItems(item);
    if (!clicked) {
      setClicked(true);
    }
  };
  return (
    <button
      className="add-to-Cart-btn"
      onClick={addToCart}
      style={{ backgroundColor: clicked ? "rgb(173,223,173)" : "#ffd21d" }}
    >
      <i class="fas fa-cart-plus"></i>
    </button>
  );
}

export default AddToCart;
