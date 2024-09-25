import React, { useContext } from 'react';
import './BestSellers.css';
import Title from '../title/Title';
import Item from '../../item/Item';
import { Context } from '../../context/Context';

const BestSellers = () => {
    const{products}= useContext(Context);
    return (
    <div className='best-seller my-5'>
        <div className='container'>
            <Title title1='best' title2='sellers'/>
            <div className='best-container mt-5'>
                {products.map((product)=>{
                    if(product.bestSeller === true){
                        return(
                            <Item id={product._id} key={product._id} image={product.image[0]} name={product.name} price={product.price}/>
                        )
                    }
                    else{
                        return null;
                    }
                })}
            </div>
        </div>
    </div>
)
}

export default BestSellers
