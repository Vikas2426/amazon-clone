import React, { useState } from 'react';
import { signInWithGoogle, signInWithEmail } from '../../firebase/firebase.utils.js';


export default function LoginCard({ toggle }) {

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
        event.target.name === "login" &&
            signInWithEmail(email, password)

    }

    return (
        <div className='login-card'>
            <h2>Login</h2>
            <form>
                <input type='email' name='email' required placeholder='Email' onChange={handleChange}></input>
                <input type='password' name='password' required placeholder='Password' onChange={handleChange}></input>
            </form>
            <p id='loginTogglerParent'>Don't have an account ?
            <span
                    className="btn loginToggler"
                    onClick={toggle}>
                    Sign Up
                </span>
            </p>
            <button
                className='btn'
                type='submit'
                name='login'
                onClick={handleClick}>
                Log In
                </button>
            <button
                className='google btn'
                onClick={signInWithGoogle}>
                Sign in with Google
                </button>
        </div>);
}