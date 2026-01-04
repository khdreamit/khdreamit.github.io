import React from "react";
import './skills.css'
import { FcGoogle } from "react-icons/fc";
import {
  FaFacebookF,
  FaYoutube,
  FaShopify,
  FaGlobe,
  FaAmazon,
  FaBullhorn,
  FaTasks,
} from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router";
import SocialIcon from "../SocialIcon/SocialIcon";
import Footer from "../Footer/Footer";


const skills = [
  {
    id: 1,
    title: "YouTube SEO & Promotion",
    desc: "Video SEO, thumbnails, ranking strategy & organic growth.",
    icon: <FaYoutube />,
    iconClass: "bg-youtube",
    path: "/youtube"
  },
  {
    id: 2,
    title: "Facebook & Instagram Ads",
    desc: "Laser-targeted campaigns built for leads & conversions.",
    icon: <FaFacebookF />,
    iconClass: "bg-facebook",
    path: "/facebook"
  },
  {
    id: 3,
    title: "Google Ads",
    desc: "Search + Display ads to capture high-intent buyers.",
    icon: <FcGoogle />,
    iconClass: "bg-google",
    path: "/google"
  },

  {
    id: 4,
    title: "Social Media Account Create",
    desc: "Professional setup with branding, bio optimization & posting plan.",
    icon: <FaTasks />,
    iconClass: "bg-task",
    path: "/socialMediaManage"
  },
  {
    id: 5,
    title: "Social Media Management",
    desc: "Content posting, analytics tracking & community engagement.",
    icon: <FaBullhorn />,
    iconClass: "bg-manage",
    path: "/socialMediaManage"
  },
 

  {
    id: 6,
    title: "Shopify Ads",
    desc: "Product ads, retargeting & ROI-focused campaigns.",
    icon: <FaShopify />,
    iconClass: "bg-shopify",
    path: "/google"
  },
  {
    id: 7,
    title: "Amazon Book Promotion",
    desc: "Amazon SEO, paid ads & review-boosting strategies.",
    icon: <FaAmazon />,
    iconClass: "bg-amazon",
    path: "/amazon"
  },
  {
    id: 8,
    title: "Website SEO",
    desc: "Optimize your website to grow traffic and visibility organically.",
    icon: <FaGlobe />,
    iconClass: "bg-website",
    path: "/website"
  },
];

const Skills = () => {
  return (
<div>
    <Navbar />

      <div className="review-header">
        <h1 className="text-white fw-bold ls">MY SKILLS</h1>
      </div>

    <section className="py-5 skills-section">
      <div className="container-fluid px-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-2">Services & Skills</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: 780 }}>
            I provide end-to-end digital marketing services — from creating
            profiles to running conversion-focused ad campaigns and YouTube
            promotions.
          </p>
        </div>

        <div className="row g-4">
          {skills.map((s) => (
            <div key={s.id} className="col-lg-4 col-md-6">
              <div className="skill-card p-4 h-100 d-flex flex-column">
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-wrapper mb-3">
                    <span className={`icon-box ${s.iconClass}`}>{s.icon}</span>
                   </div>
                  <h5 className="mb-0 skill-title">{s.title}</h5>
                </div>

                <p className="text-muted flex-grow-1">{s.desc}</p>

                <div className="mt-3">
                  {/* <a href="#contact" className="btn btn-outline-primary btn-sm">
                    Get this service
                  </a> */}


                    <div className="mt-3">
                    <Link 
                        to={s.path}
                        className="btn btn-link btn-sm ms-2"
                    >
                        Learn more →
                    </Link>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <SocialIcon />
    <Footer />

    </div>
  );
};

export default Skills;
