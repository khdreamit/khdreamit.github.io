import React from 'react';
import '../../App.css';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutube, FaWhatsappSquare } from "react-icons/fa";

const SocialIcon = () => {
    return (
        <div className='social'>
        <div className="container-fluid px-5">
            <h4 className='fw-bold text-center pt-5'>Click the link below to join us!</h4>

            <div className="row py-5 g-3 text-center">

            <div className="col-12 col-sm-6 col-md-4 col-lg">
                <a href="https://www.facebook.com/AdulHalim.net/"
                className="d-block text-white text-decoration-none rounded py-2 px-3 facebook">
                <FaFacebook /> Facebook
                </a>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg">
                <a href="https://www.instagram.com/khdreamit/"
                className="d-block text-white text-decoration-none rounded py-2 px-3 instagram">
                <FaInstagramSquare /> Instagram
                </a>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg">
                <a href="https://www.linkedin.com/in/khdreamit/"
                className="d-block text-white text-decoration-none rounded py-2 px-3 linkedin">
                <FaLinkedin /> Linkedin
                </a>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg">
                <a href="https://www.youtube.com/@khdreamit"
                className="d-block text-white text-decoration-none rounded py-2 px-3 youtube">
                <FaYoutube /> Youtube
                </a>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg">
                <a href="https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22"
                className="d-block text-white text-decoration-none rounded py-2 px-3 whatsapp">
                <FaWhatsappSquare /> WhatsApp
                </a>
            </div>

            </div>
        </div>
        </div>

    );
};

export default SocialIcon;