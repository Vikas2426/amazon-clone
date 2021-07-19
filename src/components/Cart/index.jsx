import React, { useContext } from 'react';
import { addQuantityContext, itemsContext, reduceQuantityContext, removeItemContext } from '../ContextProvider';
import Header from '../Header';
import Total from '../Total';
import './Cart.css';

const Cart = () => {
    const items = useContext(itemsContext);
    const addQuantity = useContext(addQuantityContext);
    const reduceQuantity = useContext(reduceQuantityContext);
    const removeItem = useContext(removeItemContext);

    return <div className="Cart">
        <Header />
 {items.length ? 
 <h2 className='cart-heading'>Your Cart:  <Total/></h2>
 : 
 <h2 className='cart-heading' >Your Cart: is empty</h2> 
 }
        {items.length ? items.map(item => (
            <div className='cart-item' key={item.imgUrl}>
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
            </div>
        ))
:<></>
        }
        {/* Total: <Total/> */}
    </div>
}

export default Cart;