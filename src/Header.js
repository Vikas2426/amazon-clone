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
            <input name="search-bar" className="search-bar"></input>
            <SearchIcon className='search-icon'></SearchIcon>
        </div>

    </nav>
}

export default Header;