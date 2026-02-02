import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import Logo from '../../assets/Logo.jpg'
import {
  FaFacebookF,
  FaGoogle,
  FaShopify,
  FaYoutube,
  FaGlobe,
  FaAmazon,
  FaShareAlt
} from "react-icons/fa";
import {
  FaClipboardCheck,
  FaFileCode,
  FaCogs,
  FaLink,
  FaMapMarkerAlt
} from "react-icons/fa";



const Navbar = () => {
    
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    
    const closeOffcanvas = () => {
        setShowOffcanvas(false);
    };
   
    const handleTogglerClick = () => {
        setShowOffcanvas(!showOffcanvas);
    };

    
    const links = [
        { path: "/", label: "Home" },
        { path: "/portfolio", label: "Portfolio" },
        { path: "/skills", label: "My Skills" },

        {
  label: "Service",
  submenu: [
    { path: "/facebook", label: "Facebook Ads" },
    { path: "/google", label: "Google Ads" },
    { path: "/shopify", label: "Shopify Ads" },
    { path: "/youtube", label: "YouTube SEO" },

    {
      label: "Website SEO",
      submenu: [
        { path: "/auditplan", label: "Audit Plan" },
        { path: "/onpage", label: "On-Page SEO" },
        { path: "/technical", label: "Technical SEO" },
        { path: "/offpage", label: "Off-Page SEO" },
        { path: "/local", label: "Local SEO" },
      ]
    },

    { path: "/amazon", label: "Amazon Book Promotion" },
    { path: "/socialMediaManage", label: "Social Media Management" },
  ]
},




        { path: "/about", label: "About" },
        { path: "/contact", label: "Contact" },
    ];

    const baseStyle = "px-3 py-2 rounded";
    const activeStyle = "activeColor text-white";
    const hoverStyle = "hover-activeColor";
    

    return (
        <nav className="navbar navbar-expand-lg shadow-sm py-3 sticky-top background custom-navbar-padding">
            <div className="container-fluid"> 

                <div className="navbar-brand me-auto">
                    <img
                        src={Logo}
                        alt="Logo"
                        style={{ height: "50px", objectFit: "contain" }}
                    />
                </div>

                {/* Toggler Button for Small Screens */}
                <button
                    className="navbar-toggler border-0" 
                    type="button"
                    onClick={handleTogglerClick}
                    aria-controls="offcanvasNavbar"
                    aria-expanded={showOffcanvas}
                    aria-label="Toggle navigation"
                >
                    
                    {showOffcanvas ? <FaTimes className="text-dark fs-4" /> : <FaBars className="text-dark fs-4" />}
                </button>

                
                <div className="collapse navbar-collapse" id="navbarNavLg">
                    <ul className="navbar-nav mx-auto gap-2">
                        {links.map((link, index) =>
                            link.submenu ? (
                                <li key={index} className="nav-item dropdown hover-dropdown">
                                    <span className="nav-link fw-bold dropdown-toggle custom-nav-link-padding">
                                        {link.label}
                                    </span>
                                    <ul className="dropdown-menu hero-bg">
                                        {link.submenu.map((sub, i) =>
                sub.submenu ? (
                    <li key={i} className="dropdown-submenu">
                    <NavLink
                to="/website"  // যেই page তুমি দিতে চাও
                className="dropdown-item fw-bold d-flex justify-content-between align-items-center"
                >
                Website SEO
                <span>▸</span>
                </NavLink>


      <ul className="dropdown-menu sub-menu">
        {sub.submenu.map((child, j) => (
  <li key={j}>
    <NavLink className="dropdown-item dropdown-animate" to={child.path}>
      <span className="dropdown-text">{child.label}</span>

      <span className="dropdown-icon-right">
        {child.label === "Audit Plan" && <FaClipboardCheck />}
        {child.label === "On-Page SEO" && <FaFileCode />}
        {child.label === "Technical SEO" && <FaCogs />}
        {child.label === "Off-Page SEO" && <FaLink />}
        {child.label === "Local SEO" && <FaMapMarkerAlt />}
      </span>

    </NavLink>
  </li>
))}

      </ul>
    </li>
  ) : (
    <li key={i}>
      <NavLink className="dropdown-item dropdown-animate" to={sub.path}>
            <span className="dropdown-text">{sub.label}</span>

            <span className="dropdown-icon-right">
                {sub.label === "Facebook Ads" && <FaFacebookF />}
                {sub.label === "Google Ads" && <FaGoogle />}
                {sub.label === "Shopify Ads" && <FaShopify />}
                {sub.label === "YouTube SEO" && <FaYoutube />}
                {sub.label === "Amazon Book Promotion" && <FaAmazon />}
                {sub.label === "Social Media Management" && <FaShareAlt />}
            </span>
        </NavLink>


    </li>
  )
)}

                                    </ul>
                                </li>
                            ) : (
                                <li className="nav-item" key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `${baseStyle} nav-link fw-medium ${
                                                isActive ? activeStyle : hoverStyle
                                            } fw-bold custom-nav-link-padding` // Added custom padding class
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            )
                        )}
                    </ul>

                    {/* Social Media Icons for Large Screens */}
                    <div className="d-flex gap-3 fs-5">
                        <a href="https://www.facebook.com/AdulHalim.net/" className="text-dark hover-color"><FaFacebook /></a>
                        <a href="https://www.instagram.com/khdreamit/" className="text-dark hover-color"><FaInstagramSquare /></a>
                        <a href="https://www.linkedin.com/in/khdreamit/" className="text-dark hover-color"><FaLinkedin /></a>
                    </div>
                </div>

                {/* Offcanvas Menu for Small Screens */}
                <div 
                    className={`offcanvas offcanvas-end custom-offcanvas ${showOffcanvas ? 'show' : ''}`}
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    data-bs-scroll="true" 
                >
                    <div className="offcanvas-header border-bottom background">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                            <img
                                src={Logo}
                                alt="Logo"
                                style={{ height: "50px", objectFit: "contain" }}
                            />
                        </h5>
                        <button
                            type="button"
                            className="close-btn"
                            onClick={closeOffcanvas}
                            aria-label="Close"
                        >
                            <FaTimes className="text-dark fs-5" /> 
                        </button>
                    </div>

                    <div className="offcanvas-body hero-bg">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-2">
                            {links.map((link, index) =>
                                link.submenu ? (
                                    <li key={index} className="nav-item dropdown">
                                        <span className="nav-link fw-bold dropdown-toggle d-block" data-bs-toggle="dropdown">
                                            {link.label}
                                        </span>
                                        <ul className="dropdown-menu hero-bg border-0 shadow-sm w-100">
                                            {link.submenu.map((sub, i) => (
                                                <li key={i}>
                                                    <NavLink className="dropdown-item" to={sub.path} onClick={closeOffcanvas}>
                                                        {sub.label}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ) : (
                                    <li className="nav-item" key={link.path}>
                                        <NavLink
                                            to={link.path}
                                            className={({ isActive }) =>
                                                `nav-link fw-bold ${isActive ? 'offcanvas-active-color text-white' : 'hover-offcanvas-color'}`
                                            }
                                            onClick={closeOffcanvas} 
                                        >
                                            {link.label}
                                        </NavLink>
                                    </li>
                                )
                            )}
                        </ul>

                        {/* Social Media Icons for Offcanvas */}
                        <div className="d-flex gap-3 fs-5 mt-4 border-top pt-3">
                            <a href="https://www.facebook.com/AdulHalim.net/" className="text-dark hover-color"><FaFacebook /></a>
                            <a href="https://www.instagram.com/khdreamit/" className="text-dark hover-color"><FaInstagramSquare /></a>
                            <a href="https://www.linkedin.com/in/khdreamit/" className="text-dark hover-color"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
                {/* Overlay for Offcanvas to close when clicked outside */}
                {showOffcanvas && <div className="offcanvas-backdrop fade show" onClick={closeOffcanvas}></div>}

            </div>
        </nav>
        
    );
};

export default Navbar;