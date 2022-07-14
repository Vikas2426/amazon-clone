import React, { useState } from "react";
import {
  signInWithGoogle,
  signInWithEmail,
} from "../../firebase/firebase.utils.js";
import LoginSignUpForm from "./LoginSignUpForm.jsx";

export default function LoginCard({ toggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(event.target.name);
    event.target.name === "login" && signInWithEmail(email, password);
  };

  return (
    <div className="login-card">
      <LoginSignUpForm
        handleChange={handleChange}
        pageName={"Login"}
        toggle={toggle}
        handleClick={handleClick}
      />
      <button className="google btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}
