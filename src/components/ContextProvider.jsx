import React, { useState } from "react";
import { createContext } from "react";

export const cartContext = createContext();

function ContextProvider({ children }) {
  const [itemCount, setItemCount] = useState(0);
  const [items, setItems] = useState([]);

  /*
Increase the quantity of the item
*/
  function addQuantity(newItem) {
    let found = false;
    const itemsCopy = [...items];
    for (const item of itemsCopy) {
      if (item.imgUrl === newItem.imgUrl) {
        newItem.quantity++;
        found = true;
      }
    }
    if (!found) {
      newItem.quantity = 1;
      itemsCopy.push(newItem);
    }
    setItems(itemsCopy);
    setItemCount((prev) => prev + 1);
  }

  /*
Reduce the quantity of the item
*/
  function reduceQuantity(currItem) {
    const newItems = [...items];
    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].imgUrl === currItem.imgUrl) {
        setItemCount((prev) => prev - 1);
        newItems[i].quantity--;
        if (newItems[i].quantity === 0) {
          newItems.splice(i, 1);
        }
      }
    }
    setItems(newItems);
  }

  /*
Remove entire item from cart
*/
  function removeItem(item) {
    const newItems = [...items];
    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].imgUrl === item.imgUrl) {
        setItemCount((prev) => prev - item.quantity);
        newItems.splice(i, 1);
        item.quantity = 0;
      }
    }

    setItems(newItems);
  }

  return (
    <cartContext.Provider
      value={{
        itemCount,
        setItemCount,
        items,
        addQuantity,
        reduceQuantity,
        removeItem,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default ContextProvider;
