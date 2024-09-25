import React from 'react';
import './About.css';
import Title from '../../components/title/Title';
import about from '../../assets/frontend_assets/about_img.png';

const About = () => {
    return (
    <div className='about py-5'>
      <div className='container'>
        <Title title1='About' title2='Us'/>
        <div className='about-container d-flex align-items-center gap-5 my-5'>
          <div className='img'>
            <img src={about} alt=''/>
          </div>
          <div className='text'>
            <p className='mb-3'>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
            <p className='mb-3'>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
            <p className='mb-3 fw-bold'>Our mission</p>
            <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
          </div>
        </div>
        <Title title1='Why' title2='Choose' title3='Us'/>
        <div className='choose-container d-flex mt-5'>
          <div className='box p-5'>
            <p className='mb-3 fw-bold'>quality assurance:</p>
            <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='box p-5'>
            <p className='mb-3 fw-bold'>Convenience:</p>
            <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='box p-5'>
            <p className='mb-3 fw-bold'>Exceptional Customer Service:</p>
            <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
