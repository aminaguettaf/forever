import React, { useContext } from 'react';
import './PlaceOrder.css';
import Title from '../../components/title/Title';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const PlaceOrder = () => {
    const{getTotalCartAmount} = useContext(Context);
    return (
    <div className='place-order py-5'>
        <div className='container'>
            <form className='d-flex gap-5 align-items-center'>
                <div className='delivery-infos'>
                    <Title title1='Delivery' title2='Information'/>
                    <div className='form mt-5'>
                        <div className='input-container d-flex gap-2 mb-3'>
                            <input type='text' placeholder='First name' className='p-2 w-100'/>
                            <input type='text' placeholder='Last name' className='p-2 w-100'/>
                        </div>
                        <input type='email' placeholder='Email' className='p-2 w-100 mb-3'/>
                        <input type='text' placeholder='Email' className='p-2 w-100 mb-3'/>
                        <div className='input-container d-flex gap-2 mb-3'>
                            <input type='text' placeholder='City' className='p-2 w-100'/>
                            <input type='text' placeholder='State' className='p-2 w-100'/>
                        </div>
                        <div className='input-container d-flex gap-2 mb-3'>
                            <input type='text' placeholder='ZipCode' className='p-2 w-100'/>
                            <input type='text' placeholder='Country' className='p-2 w-100'/>
                        </div>
                        <input type='number' placeholder='Email' className='p-2 w-100'/>
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
                    <Link to='/place-order' className='button mt-3'>place order</Link>
                </div>
            </form>
        </div>
    </div>
    )
}

export default PlaceOrder
