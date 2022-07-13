import React, { useContext } from "react";
import AddRemoveBtns from "../AddRemoveBtns";
import { cartContext } from "../ContextProvider";

function CartItem({ item }) {
  const { removeItem, reduceQuantity, addQuantity } = useContext(cartContext);
  const increaseQuantity = () => {
    addQuantity(item);
  };

  const decreaseQuantity = () => {
    reduceQuantity(item);
  };
  return (
    <>
      <img src={item.imgUrl} alt="item" className="cart-item-img" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p className="cart-item-price">${item.price}</p>
        <AddRemoveBtns
          quantity={item.quantity}
          addItem={increaseQuantity}
          removeItem={decreaseQuantity}
        />
        <button className="remove-item-btn" onClick={() => removeItem(item)}>
          Remove
        </button>
      </div>
    </>
  );
}

export default CartItem;
