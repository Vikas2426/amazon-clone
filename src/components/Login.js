import React, { Component } from 'react';
import './Login.css';
import { signInWithGoogle, signInWithEmail, createUserWithEmail } from '../firebase/firebase.utils.js';


class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleClick = event => {
        event.preventDefault();
        console.log(event.target.name);
        event.target.name === "login" ?
            signInWithEmail(this.state.email, this.state.password)
            : createUserWithEmail(this.state.email, this.state.password);

    }

    // handleSignIn = event => {
    //     event.preventDefault();
    //     createUserWithEmail(this.state.email, this.state.password);
    // }
    render() {
        return (<div className="login-page">
            <div className='login-card'>
                <p>Login</p>
                <form>
                    <input type='email' name='email' required placeholder='Email' onChange={this.handleChange}></input>
                    <input type='password' name='password' required placeholder='Password' onChange={this.handleChange}></input>
                </form>

                <button className='btn' type='submit' name='login' onClick={this.handleClick}>Log In</button>
                <button className='google btn' onClick={signInWithGoogle}>Sign in with Google</button>

            </div>
            <div className='login-card'>
                <p>Sign Up</p>
                <form>
                    <input type='email' name='email' required placeholder='Email' onChange={this.handleChange}></input>
                    <input type='password' name='password' required placeholder='Password' onChange={this.handleChange}></input>
                </form>

                <button className='btn' type='submit' name='signup' onClick={this.handleClick}>Sign In</button>


            </div>
        </div>)
    }
}



export default Login;
