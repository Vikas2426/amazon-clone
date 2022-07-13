import React, { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { cartContext } from "../ContextProvider";
import Header from "../Header";
import Total from "../Total";
import "./Cart.css";
import { useTransition, animated } from "react-spring";
import banner from "../../assets/cart-banner.jpg";

const Cart = () => {
  const { items } = useContext(cartContext);

  const slideRight = useTransition(items, {
    enter: { x: "0%", postiion: "relative" },
    leave: { x: "100vw", position: "relative" },
    config: { duration: 400 },
  });

  return (
    <div className="Cart">
      <Header />
      <img className="cart-banner" src={banner} alt="cart-banner" />
      {items.length ? (
        <h2 className="cart-heading">
          Your Cart: <Total />
        </h2>
      ) : (
        <h2 className="cart-heading">Your Cart: is empty</h2>
      )}
      {!items.length ? (
        <h1 className="empty-cart-icon">
          <i class="fas fa-shopping-cart"></i>
        </h1>
      ) : (
        slideRight((styles, item) => (
          <animated.div className="cart-item" key={item.imgUrl} style={styles}>
            <CartItem item={item} />
          </animated.div>
        ))
      )}
    </div>
  );
};

export default Cart;
