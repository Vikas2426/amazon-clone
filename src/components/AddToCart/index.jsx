import React, { useContext } from 'react'
import './AddToCart.css';
import { itemCountContext, setItemCountContext, setItemsContext } from '../ContextProvider';

function AddToCart({ item }) {
    const itemCount = useContext(itemCountContext);
    const setItemCount = useContext(setItemCountContext);
    const addItems = useContext(setItemsContext);

    const addToCart = () => {
        setItemCount(itemCount + 1);
        addItems(item)
    }
    return (

        <button className='add-to-Cart-btn' onClick={addToCart}>Add to Cart</button>

    )
}

export default AddToCart
