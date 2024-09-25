import React from 'react';
import './Footer.css';
import {assets} from '../../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div className='footer my-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <img src={assets.logo} alt=''/>
            <p className='mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className='col-lg-3'>
            <h3>company</h3>
            <ul className='mt-3'>
              <li className='mb-2'>home</li>
              <li className='mb-2'>about us</li>
              <li className='mb-2'>delivery</li>
              <li className='mb-2'>privacy policy</li>
            </ul>
          </div>
          <div className='col-lg-3'>
            <h3>get in touch</h3>
            <ul className='mt-3'>
              <li className='mb-2'>0557516383</li>
              <li className='mb-2'>aminaguettaf98@gmail.com</li>
              <li className='mb-2'>instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
