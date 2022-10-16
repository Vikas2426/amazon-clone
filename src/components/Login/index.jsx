import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import LoginCard from "./LoginCard";
import SignInCard from "./SignInCard";
import { auth } from "../../firebase/firebase.utils.js";
import { useAuthState } from "react-firebase-hooks/auth";
import WavesBackground from "../WavesBackground.css";
function Login() {
  const [login, toggleLogin] = useState(true);
  const navigate = useNavigate();
  function handleClick() {
    toggleLogin(!login);
  }
  const [user] = useAuthState(auth);

  return user ? (
    navigate(-1)
  ) : (
    <WavesBackground>
      <div id="login-container">
        <Link to="/">
          <div className="logo-container">
            <img
              className="logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Logo"
            ></img>
          </div>
        </Link>
        <div className="login-page">
          {login ? (
            <LoginCard toggle={handleClick} />
          ) : (
            <SignInCard toggle={handleClick} />
          )}
        </div>
      </div>
    </WavesBackground>
  );
}

export default Login;
