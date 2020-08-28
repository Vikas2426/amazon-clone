import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return <nav className='header'>
        <Link to='/'>
            <img className="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='Logo'></img>
        </Link>
    </nav>
}

export default Header;