import React from "react";
import "./DrawerButton.css";

function DrawerButton({ btnClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    btnClick();
  };

  return (
    <button className="drawer-btn" onClick={handleClick}>
      <i className="fas fa-bars"></i>
    </button>
  );
}

export default DrawerButton;
