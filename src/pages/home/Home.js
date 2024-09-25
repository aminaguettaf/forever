import React from 'react';
import './Home.css';
import Hero from '../../components/hero/Hero';
import LatestCol from '../../components/latest-collections/LatestCol';
import BestSellers from '../../components/best-sellers/BestSellers';
import Services from '../../components/services/Services';

const Home = () => {
    return (
    <div>
        <Hero />
        <LatestCol />
        <BestSellers />
        <Services />
    </div>
)
}
export default Home
