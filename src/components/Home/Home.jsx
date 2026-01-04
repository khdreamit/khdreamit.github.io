import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import SocialIcon from '../SocialIcon/SocialIcon';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <SocialIcon />
            <Footer />
        </div>
    );
};

export default Home;