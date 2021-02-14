import React, { useRef } from 'react'
import './TodaysDeal.css'
import list from '../assets/todaysDealItem'
import DealEndsIn from '../assets/DealEndsIn'

function TodaysDeal() {

    const listRef = useRef();

    const scrollLeft = () => {
        listRef.current.scrollLeft -= 300;
    }

    const scrollRight = () => {
        listRef.current.scrollLeft += 300;
    }

    return (
        <div className='deals-container'>
            <div className="scroller left-scroller" onClick={scrollLeft}> &#60; </div>

            <div className="deals-carousel">
                Today's Deals
                    <ul className="deal-products-container" ref={listRef}>

                    {list.map(item => <li className="deal-product" key={item.imgUrl}>

                        <img className="deal-img" src={item.imgUrl} alt='deal-product' />
                        <div className="deal-price">{item.price}</div>
                        <DealEndsIn />

                    </li>)}
                </ul>
            </div>
            <div className="scroller right-scroller" onClick={scrollRight}>  &#62; </div>

        </div>

    )
}

export default TodaysDeal
