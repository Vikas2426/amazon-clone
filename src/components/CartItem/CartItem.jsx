import React, { useContext } from "react";
import { cartContext } from "../ContextProvider";
import AddToCart from "../AddToCart";

function CartItem({ item }) {
  const { removeItem } = useContext(cartContext);

  return (
    <>
      <img src={item.imgUrl} alt="item" className="cart-item-img" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p className="cart-item-price">${item.price}</p>
        <AddToCart item={item} />
        <button className="remove-item-btn" onClick={() => removeItem(item)}>
          Remove
        </button>
      </div>
    </>
  );
}

export default CartItem;
