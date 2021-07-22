import React, { useContext }  from 'react'

import { addQuantityContext,  reduceQuantityContext, removeItemContext } from '../ContextProvider';


function CartItem({item}) {
    const addQuantity = useContext(addQuantityContext);
    const reduceQuantity = useContext(reduceQuantityContext);
    const removeItem = useContext(removeItemContext);

    return <>
    <img src={item.imgUrl} alt='item' className='cart-item-img' />
    <div className='cart-item-details'>
    <h3>{item.name}</h3>
        <p className='cart-item-price'>${item.price}</p>
        <div>
        <button className='change-quantity-btn' onClick={()=>reduceQuantity(item)}>-</button>
        {item.quantity}
        <button className='change-quantity-btn' onClick={()=>addQuantity(item)}>+</button>
        </div>
    <button className='remove-item-btn'  onClick={()=>removeItem(item)}>Remove</button>
    </div>
</>
}

export default CartItem
