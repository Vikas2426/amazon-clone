import React from 'react';
import './Login.css';
import { signInWithGoogle } from '../firebase/firebase.utils.js';

const Login = () => {
    return (
        <div className="login-page">
            <div className='login-card'>
                <button className='login-btn' onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
        </div>)
}



export default Login;