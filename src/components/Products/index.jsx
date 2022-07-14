import React, { useState } from "react";
import list from "../../assets/todaysDealItem";
import Header from "../Header";
import Item from "../Item";
import "./Products.css";

function Products() {
  const [itemList, setList] = useState(list);

  const sortBy = (key) => {
    itemList.sort((first, second) => {
      if (first[key] < second[key]) {
        return -1;
      }
      if (first[key] < second[key]) {
        return 1;
      }
      return 0;
    });
    setList(JSON.parse(JSON.stringify(itemList)));
  };

  return (
    <div>
      <Header />
      <div className="sort-filter">
        <label>
          Sort by <i class="fas fa-sort"></i>
        </label>
        <button className="sort-btn" onClick={() => sortBy("name")}>
          Name
        </button>
        <button className="sort-btn" onClick={() => sortBy("price")}>
          Price
        </button>
      </div>

      <div className="product-container">
        {itemList.map((item) => (
          <div key={item.imgURL} className="item-container">
            <Item item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
