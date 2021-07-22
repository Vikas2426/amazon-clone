import React, { useState } from "react";
import { createContext } from "react";

export const itemCountContext = createContext();
export const setItemCountContext = createContext();
export const itemsContext = createContext();
export const setItemsContext = createContext();
export const reduceQuantityContext = createContext();
export const addQuantityContext = createContext();
export const removeItemContext = createContext();

function ContextProvider({ children }) {
  const [itemCount, setItemCount] = useState(0);
  const [items, setItems] = useState([]);

  function addItems(newItem) {
    let found = false;
    const itemsCopy = JSON.parse(JSON.stringify(items));
    for (const item of itemsCopy) {
      if (item.imgUrl === newItem.imgUrl) {
        item.quantity++;
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

  function reduceQuantity(reduceItem) {
    const newItems = [...items];
    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].imgUrl === reduceItem.imgUrl) {
        setItemCount((prev) => prev - 1);
        newItems[i].quantity--;
        if (newItems[i].quantity === 0) {
          newItems.splice(i, 1);
        }
      }
    }
    setItems(newItems);
  }

  function addQuantity(addItem) {
    const newItems = [...items];
    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].imgUrl === addItem.imgUrl) {
        setItemCount((prev) => prev + 1);

        newItems[i].quantity++;
      }
    }
    setItems(newItems);
  }

  function removeItem(item) {
    const newItems = [...items];
    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].imgUrl === item.imgUrl) {
        setItemCount((prev) => prev - item.quantity);
        newItems.splice(i, 1);
      }
    }

    setItems(newItems);
  }

  return (
    <itemCountContext.Provider value={itemCount}>
      <setItemCountContext.Provider value={setItemCount}>
        <itemsContext.Provider value={items}>
          <setItemsContext.Provider value={addItems}>
            <reduceQuantityContext.Provider value={reduceQuantity}>
              <addQuantityContext.Provider value={addQuantity}>
                <removeItemContext.Provider value={removeItem}>{children}</removeItemContext.Provider>
              </addQuantityContext.Provider>
            </reduceQuantityContext.Provider>
          </setItemsContext.Provider>
        </itemsContext.Provider>
      </setItemCountContext.Provider>
    </itemCountContext.Provider>
  );
}

export default ContextProvider;
