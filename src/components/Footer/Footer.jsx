import React from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedin, } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaWhatsappSquare, FaTelegram  } from "react-icons/fa";
import FooterLogo from '../../assets/FooterLogo.jpg';
import { NavLink } from 'react-router';


const Footer = () => {

// const menus = ["Home", "Service", "Portfolio", "Client", "My Skills", "About & Team", "Contact"]
const menus = [
        { path: "/", label: "Home" },
        { path: "/portfolio", label: "Portfolio" },
        { path: "/skills", label: "My Skills" },
        { path: "/about", label: "About" },
        { path: "/contact", label: "Contact" },
]

const submenu = [
     { path: "/youtube", label: "YouTube SEO" },
     { path: "/facebook", label: "Facebook Ads" },
     { path: "/google", label: "Google Ads" },
     { path: "/website", label: "Website SEO" },
     { path: "/amazon", label: "Amazon Book Promotion" },
     { path: "/socialMediaManage", label: "Social Media Management" },
]

    return (
        <footer className="footer pt-5 pb-3">
            <div className="container-fluid px-5">
                <div className="row gy-4">

                    {/* Content / Logo Section */}
                    <div className="col-md-3">
                        <div className="navbar-brand">
                          <img 
                            src={FooterLogo} 
                            alt="Logo" 
                            style={{ height: "50px", objectFit: "contain" }} 
                          />
                        </div>
                        <p className="pe-3 pt-3">
                            Never despair never worry never lose patience keep trying inshallah you will succeed
                        </p>

                        <div className="d-flex gap-3 fs-5">
                            <a href="https://www.facebook.com/AdulHalim.net/" className="text-dark hover-color"><FaFacebook /></a>
                            <a href="https://www.instagram.com/khdreamit/" className="text-dark hover-color"><FaInstagramSquare /></a>
                            <a href="https://www.linkedin.com/in/khdreamit/" className="text-dark hover-color"><FaLinkedin /></a>
                        </div>
                    </div>

                    {/* Menu Section */}
                    <div className="col-md-3">
                        <h5 className="fw-bold mb-3 border-bottom pb-2">Menu</h5>
                        <ul className="list-unstyled">
                            { menus.map((item, i) => (
                                <li key={i} className="mb-2">
                                    <NavLink className="footer-link text-dark" to={item.path}>
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Section */}
                    <div className="col-md-3">
                        <h5 className="fw-bold mb-3 border-bottom pb-2">Services</h5>
                        <ul className="list-unstyled">
                            { submenu.map((item, i) => (
                                <li key={i} className="mb-2">
                                    <NavLink className="footer-link text-dark" to={item.path}>
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="col-md-3">
                        <h5 className="fw-bold mb-3 border-bottom pb-2">Contact</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2 d-flex align-items-center gap-2">
                                <FaPhoneAlt /> +8801947349917
                            </li>
                            <li className="mb-2 d-flex align-items-center gap-2">
                                <FaWhatsappSquare /> +8801947349917
                            </li>
                            <li className="mb-2 d-flex align-items-center gap-2">
                                <FaTelegram /> +8801947349917
                            </li>
                            <li className="mb-2 d-flex align-items-center gap-2">
                                <FaEnvelope /> khdreamit@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-secondary mt-4" />

                {/* Copyright */}
                <p className="text-center m-0 small">
                    © {new Date().getFullYear()} Abdul Halim — All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
