import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';


export default function HeaderLinks(){
    return(
        <div className='header-links'>
            {/* Login  */}
            <Link to='/login' className='nav-link'>
                <div className='nav-link-options'>
                    <span className='nav-link-option-top'>Hello,</span>
                    <span className='nav-link-option-bottom'>Sign In</span>
                </div>
            </Link>

            {/* Orders */}
            <Link to='/orders' className='nav-link'>
                <div className='nav-link-options'>
                    <span className='nav-link-option-top'>Returns</span>
                    <span className='nav-link-option-bottom'>& Orders</span>
                </div>
            </Link>

            {/* Prime */}
            <Link to='/prime' className='nav-link'>
                <div className='nav-link-options'>
                    <span className='nav-link-option-top'>Your</span>
                    <span className='nav-link-option-bottom'>Prime</span>
                </div>
            </Link>

            {/* Cart & Counter */}
            <Link to='/cart' className='nav-link'>
                <div className='nav-link-cart'>
                    <ShoppingCartIcon ></ShoppingCartIcon>
                    <div className='item-count'>0</div>
                </div>
            </Link>
        </div>
    )
}