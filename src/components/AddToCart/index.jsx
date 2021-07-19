import React, { useContext } from 'react'
import './AddToCart.css';
import { setItemsContext } from '../ContextProvider';

function AddToCart({ item }) {
    const addItems = useContext(setItemsContext);

    const addToCart = () => {
        addItems(item)
    }
    return (

        <button className='add-to-Cart-btn' onClick={addToCart}>Add to Cart</button>

    )
}

export default AddToCart
