import React from 'react';
import Header from './Header.js';
import ProductCard from './ProductCard.js';
import productList from '../assets/productList.js';
import './Home.css'

function Home() {
    return (
        <div className="Home">
            <Header />
            <img id='banner-img' src={require('../assets/banner-image-min.jpg')} alt='banner' />
            <div className='products-container'>
                <div className='products'>
                    {
                        productList.map((products, index) =>
                            <ProductCard key={index} title={products.title} url={products.url} name={products.name} />)}
                </div>
            </div>


        </div>

    )

}

export default Home;

