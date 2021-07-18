import React, { useState } from 'react'
import { createContext } from 'react'


export const itemCountContext = createContext();
export const setItemCountContext = createContext();
export const itemsContext = createContext();
export const setItemsContext = createContext();

function ContextProvider({ children }) {
    const [itemCount, setItemCount] = useState(0);
    const [items, setItems] = useState([]);
    function addItems(newItem) {
        newItem.quantity = 1;
        for (const item of items) {
            if (item.imgUrl === newItem.imgUrl) {
                item.quantity++;
            }
        }
        if (newItem.quantity === 1) {

            setItems(prev => [...prev, newItem]);
        }
    }
    return (
        <itemCountContext.Provider value={itemCount}>
            <setItemCountContext.Provider value={setItemCount}>
                <itemsContext.Provider value={items}>
                    <setItemsContext.Provider value={addItems}>
                        {children}
                    </setItemsContext.Provider>
                </itemsContext.Provider>
            </setItemCountContext.Provider>
        </itemCountContext.Provider>
    )
}

export default ContextProvider
