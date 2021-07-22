import React from "react";
import "./DrawerButton.css";

function DrawerButton({ btnClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    btnClick();
  };

  return (
    <button className="drawer-btn" onClick={handleClick}>
      <div className="drawer-btn-line"></div>
      <div className="drawer-btn-line"></div>
      <div className="drawer-btn-line"></div>
    </button>
  );
}

export default DrawerButton;
