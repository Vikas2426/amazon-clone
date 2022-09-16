import React, { useRef, useState } from "react";
import list from "../../assets/todaysDealItem";
import Header from "../Header";
import Item from "../Item";
import "./Products.css";

function Products() {
  const [itemList, setList] = useState(list);
  const currentSortFilter = useRef({ sameClicksCount: 1, key: "" });
  const sortBy = (key) => {
    const { key: currentKey, sameClicksCount } = currentSortFilter.current;
    currentSortFilter.current.sameClicksCount =
      key === currentKey ? sameClicksCount + 1 : 1;
    currentSortFilter.current.key = key;
    const increasingOrder = currentSortFilter.current.sameClicksCount % 2 !== 0;

    itemList.sort((first, second) => {
      if (first[key] < second[key]) {
        return increasingOrder ? -1 : 1;
      }
      if (first[key] > second[key]) {
        return increasingOrder ? 1 : -1;
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
          Sort by <i className="fas fa-sort"></i>
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
          <div key={item.id} className="item-container">
            <Item item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
