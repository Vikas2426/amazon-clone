import React from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import "./ProductCard.css";

const ProductCard = (props) => {
  const fade = useSpring({
    from: { opacity: 0, height: "0%" },
    to: { opacity: 1, height: "100%" },
    config: { duration: 500 },
  });
  return (
    <animated.div className="product-card" style={fade}>
      <h3 className="title">{props.title}</h3>
      <div className="img-container">
        <div className="product-details">
          <img className="product-img" src={props.url[0]} alt="product"></img>
          <p className="product-name">{props.name[0]}</p>
        </div>
        <div className="product-details">
          <img className="product-img" src={props.url[1]} alt="product"></img>
          <p className="product-name">{props.name[1]}</p>
        </div>
      </div>
      <div className="img-container">
        <div className="product-details">
          <img className="product-img" src={props.url[2]} alt="product"></img>
          <p className="product-name">{props.name[2]}</p>
        </div>
        <div className="product-details">
          <img className="product-img" src={props.url[3]} alt="product"></img>
          <p className="product-name">{props.name[3]}</p>
        </div>
      </div>
      <Link className="see-more-link" to="/products">
        See more
      </Link>
    </animated.div>
  );
};

export default ProductCard;
