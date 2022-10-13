import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderLinks from "./HeaderLinks";
import "./Header.css";
import DrawerButton from "../DrawerButton";
import SideDrawer from "../SideDrawer";

const Header = () => {
  const [sideDrawerIsOpen, setSideDrawerIsOpen] = useState(false);
  const handleDrawerButtonClick = () => {
    setSideDrawerIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="nav header">
      <div className="drawer-btn-container">
        <DrawerButton btnClick={handleDrawerButtonClick} />
      </div>
      {sideDrawerIsOpen && <SideDrawer btnClick={handleDrawerButtonClick} />}
      {/* Amazon Logo */}
      <Link to="/">
        <div className="logo-container">
          <img
            className="logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Logo"
          ></img>
        </div>
      </Link>

      {/* Search Bar  */}
      <div className="nav-search">
        <input name="search-bar" className="search-bar"></input>
        <span className="material-symbols-outlined search-icon">search</span>
      </div>

      {/* Links */}
      <HeaderLinks />
    </nav>
  );
};

export default Header;
