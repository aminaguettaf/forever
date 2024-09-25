import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import './Item.css';
import { Context } from '../context/Context';

const Item = ({image, name, price, id}) => {
    const{url}= useContext(Context);
    return (
        <Link to={`/product/${id}`} className='item'>
            <div className='img'>
                <img src={`${url}/images/${image}`} alt=''/>
            </div>
            <div className='text pt-3'>
                <p className='title mb-2'>{name}</p>
                <p className='price'>${price}</p>
            </div>
        </Link>
    )
}

export default Item;
