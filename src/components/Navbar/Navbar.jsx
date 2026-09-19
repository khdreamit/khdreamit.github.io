import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import Logo from '../../assets/Logo.jpg'
import {
  FaFacebookF,
  FaGoogle,
  FaShopify,
  FaAmazon,
  FaShareAlt
} from "react-icons/fa";
import {
  FaClipboardCheck,
  FaFileCode,
  FaCogs,
  FaLink,
  FaMapMarkerAlt,
  FaPalette,
  FaLaptopCode,
  FaServer,
  FaLayerGroup,
  FaBriefcase,
  FaBullseye,
  FaStore
} from "react-icons/fa";

const Navbar = () => {
 
    const [showOffcanvas, setShowOffcanvas] = useState(false);
 
    const closeOffcanvas = () => {
        setShowOffcanvas(false);
    };
 
    const handleTogglerClick = () => {
        setShowOffcanvas(!showOffcanvas);
    };
 
    // ---------- Services mega-menu: click দিয়ে open/close ----------
    const [servicesOpen, setServicesOpen] = useState(false);
    const megaRef = useRef(null);
 
    const toggleServicesMenu = () => {
        setServicesOpen((prev) => !prev);
    };
 
    const closeServicesMenu = () => {
        setServicesOpen(false);
    };
 
    // মেনুর বাইরে click করলে বন্ধ হয়ে যাবে
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (megaRef.current && !megaRef.current.contains(e.target)) {
                setServicesOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
 
    // ================= NAV STRUCTURE =================
    // "Services" ekhon mega-menu — 3 ta column ek shathe show hobe:
    // Marketing Services | Website SEO | Website Development
    const links = [
        { path: "/", label: "Home" },
        { path: "/portfolio", label: "Portfolio" },
        { path: "/skills", label: " Our Skills" },
 
        {
    label: "Services",
    mega: true,
    columns: [
        {
            title: "Marketing Services",
            items: [
                 { path: "/google", label: "Google Ads", icon: FaGoogle },
                { path: "/facebook", label: "Facebook Ads", icon: FaFacebookF },
               
                { path: "/shopify", label: "Shopify Marketing", icon: FaShopify },
                { path: "/amazon", label: "Amazon Book Promotion", icon: FaAmazon },
                { path: "/socialMediaManage", label: "Social Media Management", icon: FaShareAlt },
            ],
        },

        {
            title: "Website SEO",
            items: [
                { path: "/website", label: "Website SEO", icon: FaClipboardCheck },
                  { path: "/local", label: "Local SEO", icon: FaMapMarkerAlt },
                { path: "/auditplan", label: "SEO Audit Plan", icon: FaClipboardCheck },
                { path: "/onpage", label: "On-Page SEO", icon: FaFileCode },
                { path: "/technical", label: "Technical SEO", icon: FaCogs },
                { path: "/offpage", label: "Off-Page SEO", icon: FaLink },
                
              
            ],
        },

        {
            title: "Website Development",
            items: [
                 {
                    path: "/landing-page",
                    label: "Landing Page",
                    icon: FaBullseye
                },
                {
                    path: "/website-redesign",
                    label: "Website Redesign",
                    icon: FaPalette
                },

                  {
                    path: "/ecommerce-website",
                    label: "Recent Projects",
                    icon: FaStore
                },
                {
                    path: "/frontend-development",
                    label: "Frontend Development",
                    icon: FaLaptopCode
                },
                {
                    path: "/backend-development",
                    label: "Backend Development",
                    icon: FaServer
                },
                {
                    path: "/full-stack-development",
                    label: "Full-Stack Development",
                    icon: FaLayerGroup
                },
               
               
              
            ],
        },
    ],
},
 
        {
            label: "Client",
            submenu: [
                { path: "/meeting", label: "Client Meeting" },
                { path: "/review", label: "Client Review" },
            ],
        },
 
        {
            label: "About",
            submenu: [
                { path: "/about", label: "About Me" },
                { path: "/certificates", label: "Certificates" },
            ],
        },
 
        { path: "/contact", label: "Contact" },
    ];
 
    const baseStyle = "px-3 py-2 rounded";
    const activeStyle = "activeColor text-white";
    const hoverStyle = "hover-activeColor";
 
    return (
        <nav className="navbar navbar-expand-lg shadow-sm py-3 fixed-top background custom-navbar-padding">
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
 
                {/* ================= DESKTOP MENU ================= */}
                <div className="collapse navbar-collapse" id="navbarNavLg">
                    <ul className="navbar-nav mx-auto gap-2">
                        {links.map((link, index) =>
                            link.mega ? (
                                // ---------- MEGA MENU (Services) — click দিয়ে open/close ----------
                                <li
                                    key={index}
                                    className="nav-item dropdown mega-dropdown-parent"
                                    ref={megaRef}
                                >
                                    <span
                                        className="nav-link fw-bold dropdown-toggle custom-nav-link-padding"
                                        onClick={toggleServicesMenu}
                                        role="button"
                                    >
                                        {link.label}
                                    </span>
 
                                    <div className={`mega-dropdown-menu hero-bg ${servicesOpen ? "show" : ""}`}>
                                        <div className="mega-dropdown-row">
                                            {link.columns.map((col, ci) => (
                                                <div className="mega-dropdown-col" key={ci}>
                                                    <h6 className="mega-col-title">{col.title}</h6>
                                                    <ul className="mega-col-list">
                                                        {col.items.map((item, ii) => {
                                                            const Icon = item.icon;
                                                            return (
                                                                <li key={ii}>
                                                                    <NavLink
                                                                        className="dropdown-item dropdown-animate"
                                                                        to={item.path}
                                                                        onClick={closeServicesMenu}
                                                                    >
                                                                        <span className="dropdown-text">{item.label}</span>
                                                                        {Icon && (
                                                                            <span className="dropdown-icon-right">
                                                                                <Icon />
                                                                            </span>
                                                                        )}
                                                                    </NavLink>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                            ) : link.submenu ? (
                                // ---------- NORMAL DROPDOWN (Client / About) ----------
                                <li key={index} className="nav-item dropdown hover-dropdown">
                                    <span className="nav-link fw-bold dropdown-toggle custom-nav-link-padding">
                                        {link.label}
                                    </span>
                                    <ul className="dropdown-menu hero-bg">
                                        {link.submenu.map((sub, i) => (
                                            <li key={i}>
                                                <NavLink className="dropdown-item dropdown-animate" to={sub.path}>
                                                    <span className="dropdown-text">{sub.label}</span>
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ) : (
                                // ---------- SIMPLE LINK ----------
                                <li className="nav-item" key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `${baseStyle} nav-link fw-medium ${
                                                isActive ? activeStyle : hoverStyle
                                            } fw-bold custom-nav-link-padding`
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
 
                {/* ================= OFFCANVAS MENU (Mobile) ================= */}
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
                                link.mega ? (
                                    // ---------- MOBILE MEGA MENU (stacked columns) ----------
                                    <li key={index} className="nav-item">
                                        <span className="nav-link fw-bold d-block" data-bs-toggle="dropdown">
                                            {link.label}
                                        </span>
                                        {link.columns.map((col, ci) => (
                                            <div key={ci} className="mobile-mega-col">
                                                <p className="mobile-mega-title">{col.title}</p>
                                                <ul className="mobile-mega-list">
                                                    {col.items.map((item, ii) => (
                                                        <li key={ii}>
                                                            <NavLink className="dropdown-item" to={item.path} onClick={closeOffcanvas}>
                                                                {item.label}
                                                            </NavLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </li>
                                ) : link.submenu ? (
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
 
                {showOffcanvas && <div className="offcanvas-backdrop fade show" onClick={closeOffcanvas}></div>}
 
            </div>
        </nav>
    );
};
 
export default Navbar;
 