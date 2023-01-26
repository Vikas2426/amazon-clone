import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "../AddToCart";
import "./Item.css";

function Item({ item }) {
  return (
    <>
      <Link className="product-link" to={`/products/${item.id}`}>
        <img className="deal-img" src={item.image} alt="deal-product" />
        <p
          style={{
            width: "90%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {item.title}
        </p>
        <p className="deal-price">${item.price}</p>
      </Link>
      <AddToCart item={item} />
    </>
  );
}

export default Item;
