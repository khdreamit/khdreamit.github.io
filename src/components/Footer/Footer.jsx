import React from "react";

import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsappSquare,
  FaTelegram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import FooterLogo from "../../assets/FooterLogo.jpg";

import { NavLink } from "react-router-dom";


const Footer = () => {

  // =====================================================
  // MAIN MENU
  // =====================================================

  const menus = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/portfolio",
      label: "Portfolio",
    },
    {
      path: "/skills",
      label: "My Skills",
    },
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ];


  // =====================================================
  // SERVICES
  // =====================================================

  const submenu = [
    {
      path: "/google",
      label: "Google Ads",
    },
    {
      path: "/facebook",
      label: "Facebook Ads",
    },
    {
      path: "/youtube",
      label: "YouTube SEO",
    },
    {
      path: "/website",
      label: "Website SEO",
    },
    {
      path: "/amazon",
      label: "Amazon Book Promotion",
    },
    {
      path: "/socialMediaManage",
      label: "Social Media Management",
    },
  ];


  return (
    <footer className="footer pt-5 pb-3">

      <div className="container-fluid px-3 px-sm-5">

        <div className="row gy-4">


          {/* =================================================
              LOGO / ABOUT
          ================================================= */}

          <div className="col-md-3">

            <div className="navbar-brand">

              <img
                src={FooterLogo}
                alt="KH Dream IT Logo"
                style={{
                  height: "50px",
                  objectFit: "contain",
                }}
              />

            </div>


            <p className="pe-3 pt-3">
              Never despair never worry never lose patience
              keep trying inshallah you will succeed
            </p>


            {/* SOCIAL ICONS */}

            <div className="d-flex gap-3 fs-5">

              <a
                href="https://www.facebook.com/AdulHalim.net/"
                className="text-dark hover-color"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>


              <a
                href="https://www.instagram.com/khdreamit/"
                className="text-dark hover-color"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagramSquare />
              </a>


              <a
                href="https://www.linkedin.com/in/khdreamit/"
                className="text-dark hover-color"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>


              <a
                href="https://x.com/KHDreamIt"
                className="text-dark hover-color"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <FaXTwitter />
              </a>

            </div>

          </div>


          {/* =================================================
              MENU
          ================================================= */}

          <div className="col-md-3">

            <h5 className="fw-bold mb-3 border-bottom pb-2">
              Menu
            </h5>

            <ul className="list-unstyled">

              {menus.map((item) => (

                <li
                  key={item.path}
                  className="mb-2"
                >

                  <NavLink
                    className="footer-link text-dark"
                    to={item.path}
                  >
                    {item.label}
                  </NavLink>

                </li>

              ))}

            </ul>

          </div>


          {/* =================================================
              SERVICES
          ================================================= */}

          <div className="col-md-3">

            <h5 className="fw-bold mb-3 border-bottom pb-2">
              Services
            </h5>

            <ul className="list-unstyled">

              {submenu.map((item) => (

                <li
                  key={item.path}
                  className="mb-2"
                >

                  <NavLink
                    className="footer-link text-dark"
                    to={item.path}
                  >
                    {item.label}
                  </NavLink>

                </li>

              ))}

            </ul>

          </div>


          {/* =================================================
              CONTACT
          ================================================= */}

          <div className="col-md-3">

            <h5 className="fw-bold mb-3 border-bottom pb-2">
              Contact
            </h5>

            <ul className="list-unstyled">

              <li className="mb-2 d-flex align-items-center gap-2">
                <FaPhoneAlt />
                <span>+880 1947349917</span>
              </li>


              <li className="mb-2 d-flex align-items-center gap-2">
                <FaPhoneAlt />
                <span>+880 1922771378</span>
              </li>


              <li className="mb-2 d-flex align-items-center gap-2">
                <FaWhatsappSquare />
                <span>+880 1947349917</span>
              </li>


              <li className="mb-2 d-flex align-items-center gap-2">
                <FaTelegram />
                <span>@khdreamit</span>
              </li>


              <li className="mb-2 d-flex align-items-center gap-2">
                <FaEnvelope />
                <span>khdreamit@gmail.com</span>
              </li>

            </ul>

          </div>

        </div>


        {/* =================================================
            DIVIDER
        ================================================= */}

        <hr className="border-secondary mt-4" />


        {/* =================================================
            COPYRIGHT
        ================================================= */}

        <div className="text-center py-4">

          © {new Date().toLocaleDateString("en-US")} Abdul Halim —
          Digital Marketing Expert.

        </div>

      </div>

    </footer>
  );
};


export default Footer;