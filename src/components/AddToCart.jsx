import React, { useContext } from 'react'
import './AddToCart.css';
import { itemCountContext, setItemCountContext } from './ContextProvider';
function AddToCart({ item }) {
    const itemCount = useContext(itemCountContext);
    const setItemCount = useContext(setItemCountContext);
    const addToCart = () => {
        setItemCount(itemCount + 1);
    }
    return (

        <button className='add-to-Cart-btn' onClick={addToCart}>Add to Cart</button>

    )
}

export default AddToCart
