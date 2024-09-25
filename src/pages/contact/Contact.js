import React from 'react';
import './Contact.css';
import contact from '../../assets/frontend_assets/contact_img.png';
import Title from '../../components/title/Title';

const Contact = () => {
    return (
    <div className='contact py-5'>
        <div className='container'>
            <Title title1='Contact' title2='Us'/>
            <div className='contact-container d-flex align-items-center gap-5 px-5 my-5'>
                <div className='img'>
                    <img src={contact} alt=''/>
                </div>
                <div className='text'>
                    <p className='fw-bold mb-4'>Our Store</p>
                    <p className='mb-4'>03 Avenue <br/> Rue Bourouba Messaoud, Sétif, Algérie</p>
                    <p className='mb-4'>Tel: 0557516383 <br/> Email: aminaguettaf98@gmail.com</p>
                    <p className='fw-bold mb-4'>Careers at Forever</p>
                    <p>Learn more about our teams and job openings.</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default Contact
