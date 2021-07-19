import React, { useState } from 'react'
import list from '../../assets/todaysDealItem';
import Header from '../Header';
import Item from '../Item';
import './Products.css';

function Products() {
const [itemList, setList] = useState(list);

    const sortByName=()=>{
        list.sort((first, second)=>{
            if (first.name < second.name) {
                return -1;
            }
            if (first.name < second.name) {
                return 1;
            }
            return 0;
        })

        setList(JSON.parse(JSON.stringify(list)));
    }
    const sortByPrice=()=>{
        list.sort((first, second)=>{
            if (first.price < second.price) {
                return -1;
              }
              if (first.price < second.price) {
                return 1;
              }
              return 0;
        })
        setList(JSON.parse(JSON.stringify(list)));
        

    }
    return (
        <div>
        <Header />
        <div className='sort-filter'>
        <label>
        Sort by:
        </label>
        <button className='sort-btn' onClick={sortByName}>Name</button>
        <button className='sort-btn' onClick={sortByPrice}>Price</button>
        </div>

            <div className="product-container" >

{itemList.map(item =><div key={item.imgURL} className='item-container'>

<Item item={item}/>
</div> 
)}

</div>
        </div>
    )
}

export default Products
