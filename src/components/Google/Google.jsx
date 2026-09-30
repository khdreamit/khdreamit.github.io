import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import SocialIcon from "../SocialIcon/SocialIcon";
import Footer from "../Footer/Footer";

import {
  FaCheck,
  FaSearch,
  FaChartLine,
  FaBullseye,
  FaPenNib,
  FaShoppingCart,
  FaChartPie,
  FaClock,
  FaGoogle,
  FaArrowRight,
  FaChevronDown,
  FaLayerGroup,
  FaRocket,
  FaChartBar,
  FaLaptop,
  FaFileAlt,
  FaCog,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "./google.css";
import "aos/dist/aos.css";


const Google = () => {

  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);


  /* =========================================================
     SERVICES
  ========================================================= */

  const services = [
    {
      icon: <FaCog />,
      title: "Account Setup & Audit",
      text: "Set up a clean Google Ads account or audit your existing campaigns to identify structural and tracking issues.",
      items: [
        "Account & campaign structure",
        "Conversion goals",
        "Billing configuration",
        "Account audit",
      ],
    },

    {
      icon: <FaSearch />,
      title: "Keyword Research",
      text: "Find relevant search terms based on user intent, competition and your business goals.",
      items: [
        "High-intent keywords",
        "Negative keywords",
        "Search intent research",
        "Keyword grouping",
      ],
    },

    {
      icon: <FaPenNib />,
      title: "Ad Copywriting",
      text: "Create clear and relevant ad messaging designed to match search intent and business offers.",
      items: [
        "Responsive search ads",
        "Multiple headlines",
        "Descriptions",
        "A/B testing variations",
      ],
    },

    {
      icon: <FaBullseye />,
      title: "Campaign Targeting",
      text: "Configure targeting based on location, audience, devices, schedules and campaign objectives.",
      items: [
        "Location targeting",
        "Audience targeting",
        "Device targeting",
        "Ad scheduling",
      ],
    },

    {
      icon: <FaChartPie />,
      title: "Tracking & Analytics",
      text: "Set up the measurement system needed to understand clicks, leads, purchases and other actions.",
      items: [
        "GA4",
        "Google Tag Manager",
        "Conversion tracking",
        "UTM tracking",
      ],
    },

    {
      icon: <FaChartLine />,
      title: "Optimization & Scaling",
      text: "Review campaign data and make ongoing adjustments based on performance and available conversion data.",
      items: [
        "Bid adjustments",
        "Search term cleanup",
        "Budget optimization",
        "Ad testing",
      ],
    },

    {
      icon: <FaShoppingCart />,
      title: "Shopping & E-commerce",
      text: "Build and optimize Google Ads campaigns for businesses selling products online.",
      items: [
        "Merchant Center",
        "Product feeds",
        "Shopping campaigns",
        "Performance Max",
      ],
    },

    {
      icon: <FaLaptop />,
      title: "Display & YouTube Ads",
      text: "Reach potential customers beyond Google Search through visual and video advertising campaigns.",
      items: [
        "Display campaigns",
        "YouTube campaigns",
        "Remarketing",
        "Audience targeting",
      ],
    },

    {
      icon: <FaRocket />,
      title: "Remarketing",
      text: "Reconnect with people who have previously interacted with your website, products or content.",
      items: [
        "Website visitors",
        "Product viewers",
        "Cart abandoners",
        "Custom audiences",
      ],
    },
  ];


  /* =========================================================
     PROCESS
  ========================================================= */

  const process = [
    {
      number: "01",
      icon: <FaSearch />,
      title: "Research",
      text: "Understand your business, market, competitors, customers and search intent.",
    },
    {
      number: "02",
      icon: <FaLayerGroup />,
      title: "Strategy",
      text: "Build the campaign structure, targeting, keywords, budget and conversion strategy.",
    },
    {
      number: "03",
      icon: <FaRocket />,
      title: "Launch",
      text: "Create ads, configure targeting and tracking, then launch the campaigns.",
    },
    {
      number: "04",
      icon: <FaChartBar />,
      title: "Optimize",
      text: "Review available performance data and continuously improve campaigns.",
    },
  ];


  /* =========================================================
     DELIVERABLES
  ========================================================= */

  const deliverables = [
    "Campaign structure",
    "Keyword research",
    "Negative keyword list",
    "Ad copy",
    "Audience targeting",
    "Conversion tracking",
    "Performance reports",
    "Optimization recommendations",
  ];


  /* =========================================================
     FAQ
  ========================================================= */

  const faqData = [
    {
      q: "Do I need an existing Google Ads account?",
      a: "No. I can work with a new account or audit and optimize an existing Google Ads account.",
    },

    {
      q: "Is the advertising budget included?",
      a: "No. Your advertising budget is paid directly to Google from your own account. My pricing covers the service and management work.",
    },

    {
      q: "Can I keep access to my Google Ads account?",
      a: "Yes. The account remains yours and you keep access and ownership.",
    },

    {
      q: "Do you guarantee a specific number of leads or sales?",
      a: "No. Advertising performance depends on factors such as the market, offer, competition, landing page, budget and available conversion data.",
    },

    {
      q: "Can you manage an existing campaign?",
      a: "Yes. Existing campaigns can be audited, reorganized and optimized based on the current account structure and performance data.",
    },

    {
      q: "How often do you optimize campaigns?",
      a: "Optimization frequency depends on the campaign, budget and amount of available data. The focus is on making informed changes rather than changing things without enough data.",
    },
  ];


  /* =========================================================
     FAQ STATE
  ========================================================= */

  const [openIndex, setOpenIndex] = useState(null);


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  /* =========================================================
     SCROLL TO PRICING
  ========================================================= */

  const scrollToPricing = () => {
    const element = document.getElementById("google-pricing");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  return (
    <div className="google-page">

      <Navbar />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="google-hero">

        {/* Animated background */}
        <div className="hero-orb hero-orb-one"></div>
        <div className="hero-orb hero-orb-two"></div>
        <div className="hero-grid"></div>

        <div className="container">

          <div className="hero-content">

            <div className="hero-google-icon">
              <FaGoogle />
            </div>


            <div className="hero-small-text">
              GOOGLE ADS MANAGEMENT
            </div>


            <h1 className="hero-title">

              Turn Google Searches Into

              <span className="hero-highlight">
                Qualified Customers
              </span>

            </h1>


            <p className="hero-description">

              Build, manage and optimize Google Ads campaigns with
              structured targeting, conversion tracking and ongoing
              performance optimization.

            </p>


            <div className="hero-buttons">

              <Link
                to="/portfolio"
                state={{ category: "Google Ads" }}
                className="google-primary-btn"
              >
                View My Work
                <FaArrowRight />
              </Link>


              <button
                className="google-secondary-btn"
                onClick={scrollToPricing}
              >
                See Packages
              </button>

            </div>


            <div className="hero-trust">

              <span>
                <FaCheck />
                Conversion Tracking
              </span>

              <span>
                <FaCheck />
                Data-Driven Optimization
              </span>

              <span>
                <FaCheck />
                Transparent Reporting
              </span>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="google-intro-section">

        <div className="container">

          <div className="intro-grid">

            <div className="intro-content reveal reveal-left">

              <div className="section-label">
                <span></span>
                GOOGLE ADS
              </div>

              <h2>
                Reach People When
                <span> They're Searching</span>
              </h2>

              <p>
                Google Ads allows businesses to appear in front of
                people who are actively searching for products or
                services they need.
              </p>

              <p>
                My approach focuses on clean campaign structure,
                relevant keywords, accurate tracking and continuous
                optimization based on available data.
              </p>


              <div className="intro-points">

                <div>
                  <FaCheck />
                  <span>Search-intent focused campaigns</span>
                </div>

                <div>
                  <FaCheck />
                  <span>Clear conversion tracking</span>
                </div>

                <div>
                  <FaCheck />
                  <span>Structured optimization</span>
                </div>

              </div>

            </div>


            <div className="intro-visual reveal reveal-right">

              <div className="google-dashboard-card">

                <div className="dashboard-top">

                  <div className="dashboard-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span className="dashboard-title">
                    Campaign Overview
                  </span>

                </div>


                <div className="dashboard-content">

                  <div className="metric-card">

                    <small>Clicks</small>

                    <strong>2,486</strong>

                    <span className="metric-up">
                      +24.8%
                    </span>

                  </div>


                  <div className="metric-card">

                    <small>CTR</small>

                    <strong>6.82%</strong>

                    <span className="metric-up">
                      +12.4%
                    </span>

                  </div>


                  <div className="metric-card">

                    <small>Conversions</small>

                    <strong>186</strong>

                    <span className="metric-up">
                      +18.6%
                    </span>

                  </div>


                  <div className="fake-chart">

                    <div className="chart-line"></div>

                    <div className="chart-point point-one"></div>
                    <div className="chart-point point-two"></div>
                    <div className="chart-point point-three"></div>
                    <div className="chart-point point-four"></div>
                    <div className="chart-point point-five"></div>

                  </div>


                  <div className="campaign-status">

                    <span className="status-dot"></span>

                    Campaign Optimization Active

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="google-services-section">

        <div className="container">

          <div className="section-heading reveal">

            <div className="section-label center">
              <span></span>
              WHAT I DO
              <span></span>
            </div>

            <h2>
              Google Ads
              <span> Services</span>
            </h2>

            <p>
              Everything needed to build, manage and improve
              your Google Ads campaigns.
            </p>

          </div>


          <div className="services-grid">

            {services.map((service, index) => (

              <div
                className="service-card reveal"
                key={index}
                style={{
                  "--delay": `${index * 0.07}s`,
                }}
              >

                <div className="service-icon">
                  {service.icon}
                </div>


                <div className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </div>


                <h3>
                  {service.title}
                </h3>


                <p>
                  {service.text}
                </p>


                <ul>

                  {service.items.map((item, itemIndex) => (

                    <li key={itemIndex}>

                      <FaCheck />

                      <span>
                        {item}
                      </span>

                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="google-process-section">

        <div className="container">

          <div className="section-heading reveal">

            <div className="section-label center">
              <span></span>
              MY PROCESS
              <span></span>
            </div>

            <h2>
              From Research
              <span> To Optimization</span>
            </h2>

            <p>
              A simple process designed to keep campaigns
              structured and measurable.
            </p>

          </div>


          <div className="process-grid">

            {process.map((item, index) => (

              <div
                className="process-card reveal"
                key={index}
                style={{
                  "--delay": `${index * 0.12}s`,
                }}
              >

                <div className="process-number">
                  {item.number}
                </div>


                <div className="process-icon">
                  {item.icon}
                </div>


                <h3>
                  {item.title}
                </h3>


                <p>
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
          DELIVERABLES
      ===================================================== */}

      <section className="google-deliverables-section">

        <div className="container">

          <div className="deliverables-wrapper reveal">

            <div className="deliverables-content">

              <div className="section-label">
                <span></span>
                DELIVERABLES
              </div>

              <h2>
                What You'll
                <span> Receive</span>
              </h2>

              <p>
                Clear campaign work, documentation and reporting
                so you can understand what was done and what the
                available data shows.
              </p>


              <Link
                to="/contact"
                className="deliverables-btn"
              >
                Discuss Your Campaign
                <FaArrowRight />
              </Link>

            </div>


            <div className="deliverables-list">

              {deliverables.map((item, index) => (

                <div
                  className="deliverable-item"
                  key={index}
                >

                  <div className="deliverable-check">
                    <FaCheck />
                  </div>

                  <span>
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          PRICING
      ===================================================== */}

      <section
        className="google-pricing-section"
        id="google-pricing"
      >

        <div className="container">

          <div className="section-heading reveal">

            <div className="section-label center">
              <span></span>
              PRICING
              <span></span>
            </div>

            <h2>
              Simple Google Ads
              <span> Packages</span>
            </h2>

            <p>
              Choose a starting package based on the size and
              needs of your campaign.
            </p>

          </div>


          <div className="pricing-grid">


            {/* BASIC */}

            <div className="pricing-card reveal">

              <div className="pricing-label">
                BASIC
              </div>


              <h3>
                Starter
              </h3>


              <div className="pricing-price">

                <span className="old-price">
                  $249
                </span>

                $99

                <small>
                  /month
                </small>

              </div>


              <p className="pricing-description">
                For businesses starting with a focused
                Google Ads campaign.
              </p>


              <ul>

                <li>
                  <FaCheck />
                  1 Campaign Setup
                </li>

                <li>
                  <FaCheck />
                  Keyword Research
                </li>

                <li>
                  <FaCheck />
                  2 Ad Variations
                </li>

                <li>
                  <FaCheck />
                  Audience Targeting
                </li>

                <li>
                  <FaCheck />
                  Basic Reporting
                </li>

                <li>
                  <FaCheck />
                  Budget Management
                </li>

              </ul>


              <a
                href="https://api.whatsapp.com/send?phone=8801947349917&text=Hi%20Abdul%2C%20I%27m%20interested%20in%20your%20Google%20Ads%20Starter%20package."
                target="_blank"
                rel="noreferrer"
                className="pricing-button"
              >
                Get Started
                <FaArrowRight />
              </a>

            </div>



            {/* STANDARD */}

            <div className="pricing-card featured-pricing reveal">

              <div className="popular-badge">
                MOST POPULAR
              </div>


              <div className="pricing-label">
                STANDARD
              </div>


              <h3>
                Growth
              </h3>


              <div className="pricing-price">

                <span className="old-price">
                  $349
                </span>

                $199

                <small>
                  /month
                </small>

              </div>


              <p className="pricing-description">
                For businesses that need multiple campaigns
                and ongoing optimization.
              </p>


              <ul>

                <li>
                  <FaCheck />
                  Everything in Starter
                </li>

                <li>
                  <FaCheck />
                  Up to 3 Campaigns
                </li>

                <li>
                  <FaCheck />
                  5 Ad Variations
                </li>

                <li>
                  <FaCheck />
                  Conversion Tracking
                </li>

                <li>
                  <FaCheck />
                  Bi-Weekly Reporting
                </li>

                <li>
                  <FaCheck />
                  Optimization & Testing
                </li>

              </ul>


              <a
                href="https://api.whatsapp.com/send?phone=8801947349917&text=Hi%20Abdul%2C%20I%27m%20interested%20in%20your%20Google%20Ads%20Growth%20package."
                target="_blank"
                rel="noreferrer"
                className="pricing-button featured-button"
              >
                Get Started
                <FaArrowRight />
              </a>

            </div>



            {/* PREMIUM */}

            <div className="pricing-card reveal">

              <div className="pricing-label">
                PREMIUM
              </div>


              <h3>
                Scale
              </h3>


              <div className="pricing-price">

                <span className="old-price">
                  $499
                </span>

                $299

                <small>
                  /month
                </small>

              </div>


              <p className="pricing-description">
                For businesses managing larger campaigns
                and multiple advertising goals.
              </p>


              <ul>

                <li>
                  <FaCheck />
                  Everything in Growth
                </li>

                <li>
                  <FaCheck />
                  Multiple Campaigns
                </li>

                <li>
                  <FaCheck />
                  10+ Ad Variations
                </li>

                <li>
                  <FaCheck />
                  Advanced Tracking
                </li>

                <li>
                  <FaCheck />
                  Weekly Reporting
                </li>

                <li>
                  <FaCheck />
                  Remarketing & Optimization
                </li>

              </ul>


              <a
                href="https://api.whatsapp.com/send?phone=8801947349917&text=Hi%20Abdul%2C%20I%27m%20interested%20in%20your%20Google%20Ads%20Scale%20package."
                target="_blank"
                rel="noreferrer"
                className="pricing-button"
              >
                Get Started
                <FaArrowRight />
              </a>

            </div>

          </div>


          <p className="pricing-note reveal">
            * Advertising spend is separate and paid directly to Google.
          </p>

        </div>

      </section>



      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="google-faq-section">

        <div className="container">

          <div className="section-heading reveal">

            <div className="section-label center">
              <span></span>
              FAQ
              <span></span>
            </div>

            <h2>
              Frequently Asked
              <span> Questions</span>
            </h2>

          </div>


          <div className="faq-container">

            {faqData.map((item, index) => (

              <div
                className={`google-faq-item reveal ${
                  openIndex === index ? "faq-open" : ""
                }`}
                key={index}
                style={{
                  "--delay": `${index * 0.06}s`,
                }}
                onClick={() => toggleFAQ(index)}
              >

                <div className="faq-question">

                  <span>
                    {item.q}
                  </span>

                  <FaChevronDown />

                </div>


                <div className="faq-answer">

                  <p>
                    {item.a}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="google-final-cta">

        <div className="cta-orb cta-orb-one"></div>
        <div className="cta-orb cta-orb-two"></div>

        <div className="container">

          <div className="cta-content reveal">

            <div className="cta-icon">
              <FaGoogle />
            </div>

            <h2>
              Ready to Build a
              <span> Better Google Ads Campaign?</span>
            </h2>

            <p>
              Let's discuss your business, goals and current
              advertising setup and see what can be improved.
            </p>


            <div className="cta-buttons">

              <Link
                to="/contact"
                className="cta-primary"
              >
                Start a Conversation
                <FaArrowRight />
              </Link>


              <a
                href="https://api.whatsapp.com/send?phone=8801947349917&text=Hi%20Abdul%2C%20I%27d%20like%20to%20discuss%20Google%20Ads%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
                className="cta-secondary"
              >
                Contact on WhatsApp
              </a>

            </div>

          </div>

        </div>

      </section>



      <SocialIcon />

      <Footer />

    </div>
  );
};


export default Google;