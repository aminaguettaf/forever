import React from 'react';
import './Hero.css';
import {assets} from '../../assets/frontend_assets/assets'

const Hero = () => {
    return (
    <div className='hero'>
        <div className='container d-flex p-0'>
            <div className='text d-flex flex-column justify-content-center'>
                <div className='d-flex align-items-center gap-2'>
                    <div className='first-line'></div>
                    <p>our best sellers</p>
                </div>
                <h1>latest arrivals</h1>
                <div className='d-flex align-items-center gap-2'>
                    <p>our best sellers</p>
                    <div className='second-line'></div>
                </div>
            </div>
            <div className='img'>
                <img src={assets.hero_img} alt=''/>
            </div>
        </div>
    </div>
    )
}

export default Hero
