import React, { useContext } from 'react';
import './LatestCol.css';
import Title from '../title/Title';
import Item from '../../item/Item';
import { Context } from '../../context/Context';

const LatestCol = () => {
    const{products} = useContext(Context);
    return (
    <div className='latest-collection py-5'>
        <div className='container'>
            <Title title1='latest' title2='collection'/>
            <div className='latest-container mt-5'>
                {products.map((product)=>{
                    return(
                        <Item id={product._id} key={product._id} image={product.image[0]} name={product.name} price={product.price}/>
                    )
                    
                })}
            </div>
        </div>
    </div>
    )
}

export default LatestCol
