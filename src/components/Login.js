import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import LoginCard from './LoginCard.js';
import SignInCard from './SignInCard.js';

function Login() {

    const [login, toggleLogin] = useState(true);

    function handleClick() {
        toggleLogin(!login);
    }
    return (
        <div id='login-page-container'>
            <Link to='/'>
                <div className="logo-container">
                    <img className="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt='Logo'></img>
                </div>
            </Link>
            <div className="login-page">
                {login ? <LoginCard toggle={handleClick} /> : <SignInCard toggle={handleClick} />}

            </div>
        </div>)

}



export default Login;
