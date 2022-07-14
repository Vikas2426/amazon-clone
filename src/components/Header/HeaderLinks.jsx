import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.utils.js";
import { itemCountContext } from "../ContextProvider.jsx";

export default function HeaderLinks() {
  const itemCount = useContext(itemCountContext);
  const [user] = useAuthState(auth);
  return (
    <div className="header-links">
      {/* Login  */}

      {user ? (
        <div className="nav-link-options">
          <span className="nav-link-option-top">{`${user.displayName}`},</span>
          <span
            className="nav-link-option-bottom"
            onClick={() => auth.signOut()}
          >
            Sign Out
          </span>
        </div>
      ) : (
        <Link to="/login" className="nav-link">
          <div className="nav-link-options">
            <span className="nav-link-option-top">Hello,</span>
            <span className="nav-link-option-bottom">Sign In</span>
          </div>
        </Link>
      )}

      {/* Orders */}
      {/* <Link to='/orders' className='nav-link'> */}
      <span className="nav-link">
        <div className="nav-link-options">
          <span className="nav-link-option-top">Returns</span>
          <span className="nav-link-option-bottom">& Orders</span>
        </div>
      </span>

      {/* Cart & Counter */}
      <Link to="/cart" className="nav-link">
        <div className="nav-link-cart">
          <span className="material-symbols-outlined">add_shopping_cart</span>
          <div className="item-count">{itemCount}</div>
        </div>
      </Link>
    </div>
  );
}
