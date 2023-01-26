import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState();
  useEffect(() => {
    const { signal, abort } = new AbortController();
    (async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
        signal,
      });
      const json = await res.json();
      setProductDetails(json);
    })();
    return () => {
      abort();
    };
  }, [id]);

  return (
    <div>
      <Header />

      {!productDetails ? (
        <h1>Loading...</h1>
      ) : (
        <img
          className="product-img"
          src={productDetails.image}
          alt={`${productDetails.title}`}
        ></img>
      )}
    </div>
  );
};

export default ProductDetail;
