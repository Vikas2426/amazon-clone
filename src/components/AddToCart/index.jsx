import React, { useContext, useState } from "react";
import "./AddToCart.css";
import { cartContext, setItemsContext } from "../ContextProvider";
import AddRemoveBtns from "../AddRemoveBtns";

function AddToCart({ item }) {
  const { addItems, reduceQuantity } = useContext(cartContext);
  const [clicked, setClicked] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const addItem = () => {
    const currentQuantity = addItems(item);
    if (!clicked) {
      setClicked(true);
    }
    setQuantity(currentQuantity);
  };

  const removeItem = () => {
    const currentQuantity = reduceQuantity(item);
    setQuantity(currentQuantity);
  };

  return quantity ? (
    <AddRemoveBtns
      quantity={quantity}
      addItem={addItem}
      removeItem={removeItem}
    />
  ) : (
    <button className="add-to-Cart-btn" onClick={addItem}>
      <i class="fas fa-cart-plus"></i>
    </button>
  );
}

export default AddToCart;
