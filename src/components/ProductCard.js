import React from 'react';
import './ProductCard.css';

const ProductCard = (props) => {
    return <div className='product-card'>
        <h3 className='title'>{props.title}</h3>
        <div className='img-container'>
            <div className='product-details'>
                <img className='product-img' src={props.url[0]}></img>
<p className='product-name'>{props.name[0]}</p>
            </div>
            <div className='product-details'>
                <img className='product-img' src={props.url[1]}></img>
                <p className='product-name'>{props.name[1]}</p>
            </div>
        </div>
        <div className='img-container'>
            <div className='product-details'>
                <img className='product-img' src={props.url[2]}></img>
                <p className='product-name'>{props.name[2]}</p>
            </div>
            <div className='product-details'>
                <img className='product-img' src={props.url[3]}></img>
                <p className='product-name'>{props.name[3]}</p>
            </div>
        </div>
        <a className='see-more-link' href="#">See more</a>

    </div>
}

export default ProductCard;