import React from 'react'
import './TodaysDeal.css'
import list from '../assets/todaysDealItem'
import DealEndsIn from '../assets/DealEndsIn'

function TodaysDeal() {
    return (
        <div className='deals-container'>
            <div className="deals-carousel">
                Today's Deals
                <ul className="deal-products-container">
                    {list.map(item => <li className="deal-product" key={item.imgUrl}>

                        <img className="deal-img" src={item.imgUrl} alt='deal-product' />
                        <div className="deal-price">{item.price}</div>
                        <DealEndsIn />

                    </li>)}

                </ul>
            </div>
        </div>

    )
}

export default TodaysDeal
