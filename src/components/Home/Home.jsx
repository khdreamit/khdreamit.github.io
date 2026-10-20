
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import SocialIcon from '../SocialIcon/SocialIcon';
import SEO from '../SEO/SEO';

const Home = () => {
    return (
        <div>
            <SEO
                title="KH Dream IT | Digital Marketing & Web Development"
                description="khdreamIT helps businesses grow with Google Ads, Meta Ads, and professional website development services."
            />

            <Navbar />
            <Hero />
            <SocialIcon />
            <Footer />
        </div>
    );
};

export default Home;
