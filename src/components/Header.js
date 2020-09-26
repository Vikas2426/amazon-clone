import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import HeaderLinks from './HeaderLinks.js';
import "./Header.css";
import DrawerButton from './DrawerButton.js';
import SideDrawer from './SideDrawer.js'


const Header = () => {
    const [sideDrawerIsOpen, setSideDrawerIsOpen] = useState(false);
    const handleDrawerButtonClick=()=>{
        setSideDrawerIsOpen(prevState => !prevState);
          }

    return <nav className='nav header'>
        <div className='drawer-btn-container'>
            <DrawerButton btnClick={handleDrawerButtonClick}/>
        </div>
        {sideDrawerIsOpen && <SideDrawer btnClick={handleDrawerButtonClick}/> }
        {/* Amazon Logo */}
        <Link to='/'>
            <div className="logo-container">
                <img className="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='Logo'></img>
            </div>

        </Link>

        {/* Search Bar  */}
        <div className='nav-search'>
            <input name="search-bar" className="search-bar" placeholder='search for items'></input>
            <SearchIcon className='search-icon'></SearchIcon>
        </div>

        {/* Links */}
        <HeaderLinks />
    </nav>
}

export default Header;