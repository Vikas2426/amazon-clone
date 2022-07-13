import React from "react";

function AddRemoveBtns({ quantity, addItem, removeItem }) {
  return (
    <div className="add-remove-item-btn">
      <button className="add-remove-btn" onClick={removeItem}>
        <span className="material-symbols-outlined">minimize</span>
      </button>
      <h3>{quantity}</h3>
      <button className="add-remove-btn" onClick={addItem}>
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
  );
}

export default AddRemoveBtns;
