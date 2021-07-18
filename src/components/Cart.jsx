import React, { useContext } from 'react';
import { itemsContext } from './ContextProvider';
import Header from './Header';
import './Cart.css';

const Cart = () => {
    const items = useContext(itemsContext);
    return <div className="Cart">
        <Header />

        {items.length ? items.map(item => (
            <div className='cart-item'>
                <img src={item.imgUrl} alt='item' className='cart-item-img' />
                <div className='cart-item-details'>
                    <p className='cart-item-price'>${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
                {/* <button disabled>Remove</button> */}
            </div>
        ))

            : <h2 style={{ textAlign: 'center' }}>No item added to cart yet!</h2>
        }
    </div>
}

export default Cart;