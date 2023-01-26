import React, { useContext } from "react";
import { cartContext } from "../ContextProvider";
import AddToCart from "../AddToCart";

function CartItem({ item }) {
  const { removeItem } = useContext(cartContext);
  const { title, description, price, quantity, image } = item;
  return (
    <>
      <img src={image} alt="item" className="cart-item-img" />
      <div className="cart-item-details">
        <strong>{title}</strong>
        <div className="item-description">{description}</div>
        <p className="cart-item-price">
          {`$${price} x ${quantity} = $${price * quantity}`}
        </p>
        <AddToCart item={item} />
        <button className="remove-item-btn" onClick={() => removeItem(item)}>
          Remove
        </button>
      </div>
    </>
  );
}

export default CartItem;
