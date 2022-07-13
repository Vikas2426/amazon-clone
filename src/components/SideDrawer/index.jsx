import React from "react";
import HeaderLinks from "../Header/HeaderLinks";
import "./SideDrawer.css";

function SideDrawer({ btnClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    btnClick();
  };
  return (
    <nav className="side-drawer">
      <div className="drawer-close-btn">
        <button onClick={handleClick}>
          <i class="fas fa-times"></i>
        </button>
      </div>
      <HeaderLinks />
    </nav>
  );
}

export default SideDrawer;
