import React, { useContext, useEffect, useState } from 'react';
import './Product.css';
import {useParams} from 'react-router-dom';
import Title from '../../components/title/Title';
import Item from '../../item/Item';
import { Context } from '../../context/Context';
import {toast} from 'react-toastify';

const Product = () => {
  const{addToCart, products, url} = useContext(Context);
  const params = useParams();
  const product = products.find(p => p._id === params.id);
  const[image, setImage] = useState('');
  const[size, setSize] = useState('');

  useEffect(()=>{
    setImage(`${url}/images/${product.image[0]}`);
  },[product.image]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [image]);

  const handleAddToCart = ()=>{
    if(!size){
      toast.error('Select product size')
    }
    else{
      addToCart(product._id, size);
      toast.success('Product added')
    }
  }

  return (
    <div className='product'>
      <div className='container'>
        <div className='product-details d-flex gap-5 mb-5'>
          <div className='imgs d-flex gap-2'>
            <div className='first d-flex align-items-center flex-column gap-2'>
              {product.image.map((img, index)=>(
                <img
                  key={index}
                  onClick={() => setImage(`${url}/images/${img}`)} // Chemin relatif ici
                  src={`${url}/images/${img}`} // Chemin relatif ici
                  alt=''
                />
              ))}
            </div>
            <div className='second'>
              <img src={image} alt=''/>
            </div> 
          </div>
          <div className='text'>
            <h3 className='title mb-4'>{product.name}</h3>
            <h3 className='price mb-4'>${product.price}</h3>
            <p className='desc mb-4'>{product.description}</p>
            <div className='sizes mb-4'>
              <p className='mb-2'>select size</p>
              <div className='d-flex align-items-center gap-2'>
                {product.sizes.map((item, index)=>(
                <p key={index} onClick={()=>setSize(item)} className={`${size === item && 'active'}`}>{item}</p>
                ))}
              </div>
            </div>
            <button onClick={handleAddToCart}>add to cart</button>
          </div>
        </div>
        <div className='related-products mt-5'>
          <Title title1='related' title2='products'/>
          <div className='related-container mt-4'>
            {products.map((prod)=>{
              if(prod.category === product.category && prod.subCategory === product.subCategory){
                return(
                  <Item id={prod._id} key={prod._id} image={prod.image[0]} name={prod.name} price={prod.price}  onClick={() => {setImage(`${url}//images/${prod.image[0]}`);}}/>
                )
              }
              else{
                return null;
              }
            })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
