import React, { useState } from "react";
import { createUserWithEmail } from "../../firebase/firebase.utils.js";
import LoginSignUpForm from "./LoginSignUpForm.jsx";

export default function SignInCard({ toggle }) {
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
    event.target.name === "login" && createUserWithEmail(email, password);
  };

  return (
    <div className="login-card">
      <LoginSignUpForm
        handleChange={handleChange}
        pageName={"Sign Up"}
        toggle={toggle}
        handleClick={handleClick}
      />
    </div>
  );
}
