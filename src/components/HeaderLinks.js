import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase.utils.js';


export default function HeaderLinks() {

    const [user] = useAuthState(auth);
    return (
        <div className='header-links'>
            {/* Login  */}

            {user ?
                <div className='nav-link-options'>
                    <span className='nav-link-option-bottom' onClick={() => auth.signOut()}>Sign Out</span>
                </div>
                :
                <Link to='/login' className='nav-link'>
                    <div className='nav-link-options'>
                        <span className='nav-link-option-top'>Hello,</span>
                        <span className='nav-link-option-bottom'>Sign In</span>
                    </div>
                </Link>}

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