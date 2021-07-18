import React, { useState } from 'react'
import { createContext } from 'react'


export const itemCountContext = createContext();
export const setItemCountContext = createContext();

function ContextProvider({ children }) {
    const [itemCount, setItemCount] = useState(0);
    // function addItem() {
    //     setItemCount(itemCount + 1);
    //     console.log({ itemCount });
    // }
    return (
        <itemCountContext.Provider value={itemCount}>
            <setItemCountContext.Provider value={setItemCount}>
                {children}
            </setItemCountContext.Provider>
        </itemCountContext.Provider>
    )
}

export default ContextProvider
