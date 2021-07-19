import React, { useState } from 'react'
import { createContext } from 'react'


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

    function reduceQuantity(reduceItem){
        const newItems = [...items];
        for (let i =0; i<newItems.length; i++) {
            if (newItems[i].imgUrl === reduceItem.imgUrl) {
                newItems[i].quantity--;
                if(newItems[i].quantity === 0){
                    newItems.splice(i,1)
                }
            }
        }
        setItems(newItems);
    }

function addQuantity(addItem){
    const newItems = [...items];
    for (let i =0; i<newItems.length; i++) {
        if (newItems[i].imgUrl === addItem.imgUrl) {
            newItems[i].quantity++;
        }
    }
        setItems(newItems);
}

function removeItem(item){
    const newItems = [...items];
    for (let i =0; i<newItems.length; i++) {
        if (newItems[i].imgUrl === item.imgUrl) {
            newItems.splice(i,1);
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
<removeItemContext.Provider value={removeItem}>

                    
                        {children}
</removeItemContext.Provider>
</addQuantityContext.Provider>
                    </reduceQuantityContext.Provider>
                    </setItemsContext.Provider>
                </itemsContext.Provider>
            </setItemCountContext.Provider>
        </itemCountContext.Provider>
    )
}

export default ContextProvider
