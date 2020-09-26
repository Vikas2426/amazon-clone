import React from 'react';
import Header from './Header.js';
import './Home.css'

function Home() {
    return (
        <div className="Home">
            <Header />
            <img id='banner-img' src={require('../assets/banner-image-min.jpg')} alt='banner'/>
            <h1>Home Page</h1>
        </div>

    )

}

export default Home;

