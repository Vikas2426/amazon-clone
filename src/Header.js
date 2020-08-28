import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css";


const Header = () => {
    return <nav className='header'>
        <Link to='/'>
            <img className="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='Logo'></img>
        </Link>
        <div className='header-search'>
            <input name="search-bar" className="search-bar" placeholder='search for items'></input>
            <SearchIcon className='search-icon'></SearchIcon>
        </div>

        <Link to='/login' className='header-link'>
            <div className='header-link-options'>
            <span>Hello,</span>
            <span>Sign In</span>
            </div>
        </Link>
        <Link to='/orders' className='header-link'>
        <div className='header-link-options'>
            <span>Returns</span>
            <span>& Orders</span>
            </div>
        </Link>
        <Link to='/prime' className='header-link'>
        <div className='header-link-options'>
            <span>Your</span>
            <span>Prime</span>
            </div>
        </Link>

    </nav>
}

export default Header;