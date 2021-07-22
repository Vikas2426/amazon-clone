import React, { useRef} from 'react'
import './TodaysDeal.css'
import list from '../../assets/todaysDealItem'
import next from '../../assets/next.png'
import Item from '../Item';

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
            <div className="scroller left-scroller" onClick={scrollLeft}> <img src={next} alt='scroll left' /></div>
            <div className="deals-carousel">
                Today's Deals

                <ul className="deal-products-container" ref={listRef}>

                    {list.map(item =>  
                    <li className="deal-product" key={item.imgUrl}>
                    <Item item={item}/>
                    </li>)}

                </ul>
            </div>
            <div className="scroller right-scroller" onClick={scrollRight}> <img src={next} alt='scroll right' /></div>
        </div>

    )
}

export default TodaysDeal
