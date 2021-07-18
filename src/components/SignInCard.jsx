import React, { useState } from 'react';
import { createUserWithEmail } from '../firebase/firebase.utils.js';

export default function SignInCard({ toggle }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = event => {
        if (event.target.name === "email") {
            setEmail(event.target.value);
        }
        else {
            setPassword(event.target.value);
        }
    }

    const handleClick = event => {
        event.preventDefault();
        console.log(event.target.name);
        event.target.name === "login" && createUserWithEmail(email, password);

    }

    return (
        <div className='login-card'>
            <h3>Sign Up</h3>
            <form>
                <input type='email' name='email' required placeholder='Email' onChange={handleChange}></input>
                <input type='password' name='password' required placeholder='Password' onChange={handleChange}></input>
            </form>
            <p id='loginTogglerParent'>Already have an account ?
            <span className="btn loginToggler" onClick={toggle}>
                    Log In
                </span>
            </p>
            <button className='btn' type='submit' name='signup' onClick={handleClick}>Sign In</button>


        </div>
    )
}