import React from 'react';
import './Services.css';

const Services = () => {
    return (
    <div className='services my-5'>
        <div className='container d-flex align-items-center justify-content-around'>
            <div className='service d-flex flex-column align-items-center justify-content-center gap-2'>
                <i class="fa-brands fa-stack-exchange"></i>
                <p>Easy Exchange Policy</p>
                <p className='desc'>We offer hassle free exchange policy</p>
            </div>
            <div className='service d-flex flex-column align-items-center justify-content-center gap-2'>
                <i class="fa-solid fa-check"></i>
                <p>7 Days Return Policy</p>
                <p className='desc'>We provide 7 days free return policy</p>
            </div>
            <div className='service d-flex flex-column align-items-center justify-content-center gap-2'>
                <i class="fa-solid fa-headphones"></i>
                <p>Best customer support</p>
                <p className='desc'>we provide 24/7 customer support</p>
            </div>
        </div>
    </div>
    )
}

export default Services
