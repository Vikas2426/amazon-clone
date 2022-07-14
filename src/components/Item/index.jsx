import React from "react";
import AddToCart from "../AddToCart";
import "./Item.css";

function Item({ item }) {
  return (
    <>
      <img className="deal-img" src={item.imgUrl} alt="deal-product" />
      <h3>{item.name}</h3>
      <p className="deal-price">${item.price}</p>
      <AddToCart item={item} />
    </>
  );
}

export default Item;
