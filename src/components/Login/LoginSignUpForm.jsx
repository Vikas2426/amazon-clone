import React from "react";
import { Link } from "react-router-dom";

function LoginSignUpForm({ pageName, handleChange, toggle, handleClick }) {
  const toggleBtnText = pageName === "Login" ? "Sign up" : "Log In";
  const toggleText =
    pageName === "Login"
      ? "Don't have an account ?"
      : "Already have an account ? ";
  const primaryBtnText = pageName === "Login" ? "Login" : "SignUp";

  return (
    <>
      <h2>{pageName}</h2>
      <form>
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          onChange={handleChange}
        ></input>
      </form>
      <p id="loginTogglerParent">
        {toggleText}{" "}
        <span className="btn loginToggler" onClick={toggle}>
          {toggleBtnText}
        </span>
      </p>
      <div className="login-btn-container">
        <button
          className="btn"
          type="submit"
          name="signup"
          onClick={handleClick}
        >
          {primaryBtnText}
        </button>
        <Link to="/" className="btn secondary-btn">
          Cancel
        </Link>
      </div>
    </>
  );
}

export default LoginSignUpForm;
