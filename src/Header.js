import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./Header.css";


const Header = () => {
    return <nav className='nav'>
    {/* Amazon Logo */}
        <Link to='/'>
            <img className="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='Logo'></img>
        </Link>
       
    {/* Search Bar  */}
        <div className='nav-search'>
            <input name="search-bar" className="search-bar" placeholder='search for items'></input>
            <SearchIcon className='search-icon'></SearchIcon>
        </div>

    {/* Links */}

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

    </nav>
}

export default Header;