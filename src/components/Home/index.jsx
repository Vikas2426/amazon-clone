import React from "react";
import Header from "../Header";
import ProductCard from "../ProductCard";
import productList from "../../assets/productList.js";
import "./Home.css";
import TodaysDeal from "../TodaysDeal";

function Home() {
  return (
    <div className="Home">
      <Header />
      <img id="banner-img" src={require("../../assets/banner2.jpg")} alt="banner" />
      <div className="products-container">
        {/* <div className="products"> */}
        {productList.map((products, index) => (
          <ProductCard key={index} title={products.title} url={products.url} name={products.name} />
        ))}
        {/* </div> */}
      </div>
      <TodaysDeal />
    </div>
  );
}

export default Home;
