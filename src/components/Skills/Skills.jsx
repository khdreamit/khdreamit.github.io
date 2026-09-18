import React, { useEffect, useState } from "react";
import "./skills.css";

import {
  FaFacebookF,
  FaYoutube,
  FaShopify,
  FaGlobe,
  FaAmazon,
  FaBullhorn,
  FaTasks,
  FaTiktok,
  FaLaptopCode,
  FaCode,
  FaServer,
  FaLayerGroup,
  FaMobileAlt,
  FaPaintBrush,
  FaShoppingCart,
  FaBriefcase,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import { SiGoogleanalytics, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";

import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import SocialIcon from "../SocialIcon/SocialIcon";
import Footer from "../Footer/Footer";

import GoogleAdsIcon from "../../assets/google-ads.svg";


// ======================================================
// SKILLS DATA
// ======================================================

const skills = [

  // ---------------- MARKETING ----------------

  {
    id: 3,
    category: "Marketing",
    title: "Google Ads",
    desc: "Search, Display, Shopping and Performance Max campaigns built to reach high-intent customers.",
    icon: (
      <img
        src={GoogleAdsIcon}
        alt="Google Ads"
        className="google-ads-icon"
      />
    ),
    iconClass: "bg-google",
    path: "/google",
  },

  {
    id: 10,
    category: "Marketing",
    title: "Google Analytics",
    desc: "Data-driven insights to understand user behavior, traffic sources and website performance.",
    icon: <SiGoogleanalytics />,
    iconClass: "bg-googleanalytics",
    path: "/google",
  },

  {
    id: 9,
    category: "Marketing",
    title: "TikTok Ads",
    desc: "Performance-focused TikTok campaigns designed for awareness, leads and customer acquisition.",
    icon: <FaTiktok />,
    iconClass: "bg-tiktok",
    path: "/facebook",
  },

  {
    id: 1,
    category: "Marketing",
    title: "YouTube SEO & Promotion",
    desc: "Video SEO, thumbnails, optimization strategy and promotion designed for long-term growth.",
    icon: <FaYoutube />,
    iconClass: "bg-youtube",
    path: "/youtube",
  },

  {
    id: 2,
    category: "Marketing",
    title: "Facebook & Instagram Ads",
    desc: "Targeted Meta campaigns focused on reaching relevant audiences and generating conversions.",
    icon: <FaFacebookF />,
    iconClass: "bg-facebook",
    path: "/facebook",
  },

  {
    id: 4,
    category: "Marketing",
    title: "Social Media Marketing",
    desc: "Professional social media setup, branding, profile optimization and content planning.",
    icon: <FaTasks />,
    iconClass: "bg-task",
    path: "/socialMediaManage",
  },

  {
    id: 5,
    category: "Marketing",
    title: "Social Media Management",
    desc: "Content posting, analytics tracking, audience engagement and ongoing social media support.",
    icon: <FaBullhorn />,
    iconClass: "bg-manage",
    path: "/socialMediaManage",
  },

  {
    id: 6,
    category: "Marketing",
    title: "Shopify Marketing",
    desc: "Product promotion, retargeting and advertising campaigns designed to support store growth.",
    icon: <FaShopify />,
    iconClass: "bg-shopify",
    path: "/google",
  },

  {
    id: 7,
    category: "Marketing",
    title: "Amazon Book Promotion",
    desc: "Amazon SEO, paid advertising and book promotion strategies designed to increase visibility.",
    icon: <FaAmazon />,
    iconClass: "bg-amazon",
    path: "/amazon",
  },

  {
    id: 8,
    category: "Marketing",
    title: "Website SEO",
    desc: "Technical, on-page, off-page and local SEO to improve visibility and organic traffic.",
    icon: <FaGlobe />,
    iconClass: "bg-website",
    path: "/website",
  },


  // ---------------- WEBSITE DEVELOPMENT ----------------

  {
    id: 11,
    category: "Website Development",
    title: "Website Redesign",
    desc: "Modern redesigns that improve visual quality, user experience, responsiveness and conversion.",
    icon: <FaPaintBrush />,
    iconClass: "bg-redesign",
    path: "/website-redesign",
  },

  {
    id: 12,
    category: "Website Development",
    title: "Frontend Development",
    desc: "Responsive and interactive website interfaces built with modern frontend technologies.",
    icon: <SiReact />,
    iconClass: "bg-react",
    path: "/frontend-development",
  },

  {
    id: 13,
    category: "Website Development",
    title: "Backend Development",
    desc: "Secure backend systems, APIs, database integration and server-side functionality.",
    icon: <FaServer />,
    iconClass: "bg-backend",
    path: "/backend-development",
  },

  {
    id: 14,
    category: "Website Development",
    title: "Full-Stack Development",
    desc: "Complete web solutions combining frontend interfaces, backend systems and database integration.",
    icon: <FaLayerGroup />,
    iconClass: "bg-fullstack",
    path: "/full-stack-development",
  },

  {
    id: 15,
    category: "Website Development",
    title: "Landing Page Development",
    desc: "High-converting landing pages designed for campaigns, lead generation and product promotion.",
    icon: <FaLaptopCode />,
    iconClass: "bg-landing",
    path: "/landing-page",
  },

  {
    id: 16,
    category: "Website Development",
    title: "E-commerce Website",
    desc: "Modern online stores with product layouts, responsive design and customer-focused experiences.",
    icon: <FaShoppingCart />,
    iconClass: "bg-ecommerce",
    path: "/ecommerce-website",
  },

  {
    id: 17,
    category: "Website Development",
    title: "Business Website",
    desc: "Professional business websites designed to build trust, showcase services and generate inquiries.",
    icon: <FaBriefcase />,
    iconClass: "bg-business",
    path: "/ecommerce-website",
  },

  {
    id: 18,
    category: "Website Development",
    title: "Responsive Web Design",
    desc: "Clean layouts that work smoothly across desktop, tablet and mobile devices.",
    icon: <FaMobileAlt />,
    iconClass: "bg-responsive",
    path: "/frontend-development",
  },

  {
    id: 19,
    category: "Website Development",
    title: "React Development",
    desc: "Modern React-based websites with reusable components, smooth interactions and scalable structure.",
    icon: <SiReact />,
    iconClass: "bg-react-dark",
    path: "/frontend-development",
  },

  {
    id: 20,
    category: "Website Development",
    title: "Node.js Development",
    desc: "Backend development with APIs, server logic and database-connected web applications.",
    icon: <SiNodedotjs />,
    iconClass: "bg-node",
    path: "/backend-development",
  },

  {
    id: 21,
    category: "Website Development",
    title: "Database Integration",
    desc: "Structured database integration for websites and web applications requiring dynamic data.",
    icon: <SiMongodb />,
    iconClass: "bg-mongodb",
    path: "/backend-development",
  },

];


// ======================================================
// COMPONENT
// ======================================================

const Skills = () => {

  // ====================================================
  // HEADER TYPING ANIMATION
  // ====================================================

  const typingWords = [
    "Digital Marketing",
    "Google Ads",
    "Meta Ads",
    "Website SEO",
    "Website Development",
    "Modern Websites",
    "Full-Stack Development",
  ];

  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {

    const currentWord = typingWords[wordIndex];

    let timer;

    if (!isDeleting && typedText === currentWord) {

      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);

    } else if (isDeleting && typedText === "") {

      setIsDeleting(false);

      setWordIndex((prev) => {
        return (prev + 1) % typingWords.length;
      });

    } else {

      const speed = isDeleting ? 55 : 90;

      timer = setTimeout(() => {

        if (isDeleting) {

          setTypedText(
            currentWord.substring(0, typedText.length - 1)
          );

        } else {

          setTypedText(
            currentWord.substring(0, typedText.length + 1)
          );

        }

      }, speed);
    }

    return () => clearTimeout(timer);

  }, [typedText, isDeleting, wordIndex]);


  // ====================================================
  // RENDER
  // ====================================================

  return (
    <div className="skills-page">

      {/* NAVBAR */}
      <Navbar />


      {/* ==================================================
          HEADER
      ================================================== */}

      <header className="skill-header">

        <div className="skill-shape shape-one"></div>
        <div className="skill-shape shape-two"></div>
        <div className="skill-shape shape-three"></div>

        <div className="skill-header-content">

          <div className="skill-header-badge">
            <span className="header-dot"></span>
            KH DREAM IT
          </div>

          <h1 className="skill-header-title">
            Our SKILLS
          </h1>

          <div className="skill-header-typing">

            <span>We WORK WITH </span>

            <strong>
              {typedText}
            </strong>

            <span className="typing-cursor">
              |
            </span>

          </div>

          <div className="skills-breadcrumb">

            <Link to="/" className="breadcrumb-home">
              Home
            </Link>

            <span className="breadcrumb-arrow">
              →
            </span>

            <span className="breadcrumb-current">
              Our Skills
            </span>

          </div>

        </div>

      </header>


      {/* ==================================================
          INTRO
      ================================================== */}

      <section className="skills-intro">

        <div className="container">

          <div className="skills-intro-content">

            <span className="section-kicker">
              WHAT I CAN DO
            </span>

            <h2>
              Services & Skills
            </h2>

            <p>
              I provide practical digital marketing and website development
              services — from advertising campaigns and SEO to modern,
              responsive and high-converting websites.
            </p>

            <div className="intro-mini-points">

              <span>
                <FaCheckCircle />
                Digital Marketing
              </span>

              <span>
                <FaCheckCircle />
                Website Development
              </span>

              <span>
                <FaCheckCircle />
                Growth Focused
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
          MARKETING SKILLS
      ================================================== */}

      <section className="skills-section marketing-section">

        <div className="container">

          <div className="skills-section-heading">

            <div>
              <span className="section-kicker">
                DIGITAL MARKETING
              </span>

              <h2>
                Marketing Skills
              </h2>
            </div>

            <p>
              Platforms and strategies I use to help businesses attract,
              reach and convert the right audience.
            </p>

          </div>


          <div className="row g-4">

            {skills
              .filter((skill) => skill.category === "Marketing")
              .map((skill, index) => (

                <div
                  key={skill.id}
                  className="col-lg-4 col-md-6"
                >

                  <div
                    className="skill-card"
                    style={{
                      animationDelay: `${index * 0.06}s`,
                    }}
                  >

                    <div className="skill-card-header">

                      <div
                        className={`icon-box ${skill.iconClass}`}
                      >
                        {skill.icon}
                      </div>

                      <span className="skill-category">
                        Marketing
                      </span>

                    </div>


                    <h3 className="skill-title">
                      {skill.title}
                    </h3>


                    <p className="skill-desc">
                      {skill.desc}
                    </p>


                    <div className="skill-card-footer">

                      <span className="skill-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <Link
                        to={skill.path}
                        className="skill-learn"
                      >

                        Learn More

                        <FaArrowRight />

                      </Link>

                    </div>

                  </div>

                </div>

              ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          WEBSITE DEVELOPMENT
      ================================================== */}

      <section className="skills-section website-development-section">

        <div className="container">

          <div className="web-dev-heading">

            <div className="web-dev-title-side">

              <span className="section-kicker">
                WEBSITE DEVELOPMENT
              </span>

              <h2>
                Website Development
                <span> Skills</span>
              </h2>

              <p>
                From a simple business website to complete full-stack
                solutions, I build modern websites focused on speed,
                usability, responsiveness and professional presentation.
              </p>

            </div>


            <div className="web-dev-badge">

              <div className="web-dev-badge-icon">
                <FaCode />
              </div>

              <div>

                <strong>
                  Modern Web
                </strong>

                <span>
                  Clean • Responsive • Scalable
                </span>

              </div>

            </div>

          </div>


          <div className="row g-4">

            {skills
              .filter(
                (skill) =>
                  skill.category === "Website Development"
              )
              .map((skill, index) => (

                <div
                  key={skill.id}
                  className="col-lg-4 col-md-6"
                >

                  <div
                    className="skill-card web-skill-card"
                    style={{
                      animationDelay: `${index * 0.07}s`,
                    }}
                  >

                    <div className="skill-card-header">

                      <div
                        className={`icon-box ${skill.iconClass}`}
                      >
                        {skill.icon}
                      </div>

                      <span className="skill-category web-category">
                        Web Development
                      </span>

                    </div>


                    <h3 className="skill-title">
                      {skill.title}
                    </h3>


                    <p className="skill-desc">
                      {skill.desc}
                    </p>


                    <div className="skill-card-footer">

                      <span className="skill-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <Link
                        to={skill.path}
                        className="skill-learn web-learn"
                      >

                        Explore

                        <FaArrowRight />

                      </Link>

                    </div>

                  </div>

                </div>

              ))}

          </div>

        </div>

      </section>


      {/* ==================================================
          BOTTOM CTA
      ================================================== */}

      <section className="skills-bottom-cta">

        <div className="container">

          <div className="skills-cta-box">

            <div className="cta-glow"></div>

            <div className="skills-cta-content">

              <span className="section-kicker">
                LET'S WORK TOGETHER
              </span>

              <h2>
                Have a Project
                <span> in Mind?</span>
              </h2>

              <p>
                Whether you need a marketing campaign or a modern website,
                let's turn your idea into something useful, professional
                and built for growth.
              </p>

              <Link
                to="/contact"
                className="skills-cta-button"
              >

                Get Started

                <FaArrowRight />

              </Link>

            </div>


            <div className="cta-floating-icon icon-a">
              <FaLaptopCode />
            </div>

            <div className="cta-floating-icon icon-b">
              <FaBullhorn />
            </div>

            <div className="cta-floating-icon icon-c">
              <FaGlobe />
            </div>

          </div>

        </div>

      </section>


      {/* SOCIAL */}
      <SocialIcon />

      {/* FOOTER */}
      <Footer />

    </div>
  );
};


export default Skills;