import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { itemsContext } from "../ContextProvider";
import Header from "../Header";
import Total from "../Total";
import "./Cart.css";
import { useTransition, animated } from "react-spring";

const Cart = () => {
  const items = useContext(itemsContext);

  const slideRight = useTransition(items, {
    enter: { x: "0%", postiion: "relative" },
    leave: { x: "100vw", position: "relative" },
    config: { duration: 400 },
  });

  return (
    <div className="Cart">
      <Header />
      {items.length ? (
        <h2 className="cart-heading">
          Your Cart: <Total />
        </h2>
      ) : (
        <h2 className="cart-heading">Your Cart: is empty</h2>
      )}

      {/* {items.length ? (
        items.map((item) => (
          <div className="cart-item" key={item.imgUrl}>
            <CartItem item={item} />
          </div>
        ))
      ) : (
        <></>
      )} */}
      {slideRight((styles, item) => (
        <animated.div className="cart-item" key={item.imgUrl} style={styles}>
          <CartItem item={item} />
        </animated.div>
      ))}
    </div>
  );
};

export default Cart;
