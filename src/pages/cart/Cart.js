import React, { useContext, useEffect, useState } from 'react';
import "./Cart.css";
import Title from '../../components/title/Title';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';


const Cart = () => {
  const{cart, updateQuantity, getTotalCartAmount, products} = useContext(Context);
  const[cartData, setCartData] = useState([]);
  // const [subtotal, setSubtotal] = useState(0);

  useEffect(()=>{
    const tempData = [];
    // let tempSubtotal = 0
    for(const items in cart){
      for(const item in cart[items]){
        if(cart[items][item]){
          // const product = products.find((product) => product._id === items);
          tempData.push({
            _id: items,
            size: item,
            quantity: cart[items][item]
          });
          // tempSubtotal += product.price * cart[items][item];
        }
      }
    }
    setCartData(tempData);
    // setSubtotal(tempSubtotal);
  },[cart])
  return (
    <div className='cart'>
      <div className='container'>
        <div className='your-cart'>
          <Title title1='Your' title2='Cart'/>
          <div className='cart-content mt-5'>
            {cartData.map((prod, index)=>{
              const productData = products.find((product)=> product._id === prod._id);
              return(
                <div key={index} className='cart-item d-flex align-items-center justify-content-between py-2'>
                  <div className='item-infos d-flex align-items-center gap-4'>
                    <img src={`http://localhost:4000/images/${productData.image[0]}`} alt=''/>
                    <div className='infos'>
                      <h5 className='name mb-3'>{productData.name}</h5>
                      <div className='d-flex align-items-center gap-5 '>
                        <p className='price'>$ {productData.price}</p>
                        <p className='size'>{prod.size}</p>
                      </div>
                    </div>
                  </div>
                  <input onChange={(e)=>{
                    const value = e.target.value;
                    if(value === '' || parseInt(value,10) === 0){
                      updateQuantity(prod._id, prod.size, 0);
                    }
                    else{
                      updateQuantity(prod._id, prod.size, parseInt(value, 10));
                    }
                  }} value={prod.quantity}  type='number'/>
                  <i onClick={()=>updateQuantity(prod._id, prod.size, 0)} className="fa-solid fa-trash"></i>
                </div>
              )
            })}
          
          </div>
        </div>
        <div className='cart-totals'>
          <Title title1='Cart' title2='Totals'/>
          <div className='total d-flex align-items-center justify-content-between mt-4 py-3'>
            <p className='labem'>Subtotal</p>
            <p className='price'>$ {getTotalCartAmount()}</p>
          </div>
          <div className='total d-flex align-items-center justify-content-between py-3'>
            <p className='labem'>Shipping Fee</p>
            <p className='price'>$ 10.00</p>
          </div>
          <div className='total d-flex align-items-center justify-content-between py-3'>
            <p className='labem'>Total</p>
            <p className='price'>$ {getTotalCartAmount() + 10}</p>
          </div>
          <Link to='/place-order' className='button mt-3'>proceed to checkout</Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
