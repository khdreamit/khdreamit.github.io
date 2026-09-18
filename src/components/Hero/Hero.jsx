import React, { useEffect, useState } from "react";
import "../../App.css";
import { NavLink } from "react-router-dom";

import {
  FaArrowRight,
  FaGoogle,
  FaFacebookF,
  FaMicrosoft,
  FaYoutube,
  FaTiktok,
  FaLaptopCode,
  FaChartLine,
  FaBullseye,
  FaUsers,
  FaSearch,
  FaGlobe,
  FaCheckCircle,
  FaQuoteLeft,
  FaStar,
  FaRocket,
  FaLightbulb,
  FaSlidersH,
  FaCogs,
  FaMobileAlt,
  FaShoppingCart,
  FaLayerGroup,
  FaComments,
} from "react-icons/fa";


const Hero = () => {

  // =====================================================
  // TYPING ANIMATION
  // =====================================================

  const typingTexts = [
    "Helping Businesses",
    "Growing Brands",
    "Getting More Leads",
    "Driving More Sales",
    "Website Design & Development",
    "Building Modern Websites",
    "Creating Business Websites",
    "Designing High-Converting Websites",
  ];

  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {

    const currentText = typingTexts[textIndex];

    const typingSpeed = isDeleting ? 55 : 90;


    if (!isDeleting && text === currentText) {

      const pauseTimer = setTimeout(() => {
        setIsDeleting(true);
      }, 1400);

      return () => clearTimeout(pauseTimer);
    }


    if (isDeleting && text === "") {

      setIsDeleting(false);

      setTextIndex((prevIndex) => {
        return (prevIndex + 1) % typingTexts.length;
      });

      return;
    }


    const timer = setTimeout(() => {

      if (isDeleting) {

        setText(
          currentText.substring(
            0,
            text.length - 1
          )
        );

      } else {

        setText(
          currentText.substring(
            0,
            text.length + 1
          )
        );

      }

    }, typingSpeed);


    return () => clearTimeout(timer);

  }, [text, isDeleting, textIndex]);


  // =====================================================
  // GOOGLE REVIEWS
  // =====================================================

  const reviews = [
    {
      name: "Client Review",
      rating: "★★★★★",
      text: "Professional service and great communication. The team understood our advertising goals and provided valuable marketing support.",
    },
    {
      name: "Client Review",
      rating: "★★★★★",
      text: "Very helpful and professional. The advertising strategy was clear, well organized, and focused on business growth.",
    },
    {
      name: "Client Review",
      rating: "★★★★★",
      text: "Good communication and attention to detail. Highly recommended for businesses looking for digital advertising support.",
    },
  ];


  // =====================================================
  // WHY TRUST US
  // =====================================================

  const trustPoints = [
    {
      title: "Data-Driven Strategy",
      text: "We use campaign data, audience insights, and performance analysis to make smarter advertising decisions.",
      icon: <FaChartLine />,
      number: "01",
    },
    {
      title: "Performance Focused",
      text: "Our goal is not just traffic. We focus on generating qualified leads, sales, and measurable business growth.",
      icon: <FaBullseye />,
      number: "02",
    },
    {
      title: "Multi-Platform Expertise",
      text: "From Google and Meta to TikTok, Microsoft, YouTube, and Shopify marketing, we help businesses reach customers across multiple platforms.",
      icon: <FaUsers />,
      number: "03",
    },
    {
      title: "Transparent Communication",
      text: "We keep our clients informed with clear communication, campaign updates, and practical recommendations.",
      icon: <FaCheckCircle />,
      number: "04",
    },
  ];


  // =====================================================
  // SERVICES
  // =====================================================

  const services = [
    {
      title: "Google Ads",
      text: "Search, Shopping, Performance Max and YouTube advertising focused on business goals.",
      icon: <FaGoogle />,
      link: "/google",
      number: "01",
    },
    {
      title: "Meta Ads",
      text: "Facebook and Instagram campaigns designed to reach the right audience and generate action.",
      icon: <FaFacebookF />,
      link: "/facebook",
      number: "02",
    },
    {
      title: "Microsoft Ads",
      text: "Reach additional search audiences through Microsoft Advertising campaigns.",
      icon: <FaMicrosoft />,
      link: "/google",
      number: "03",
    },
    {
      title: "YouTube Ads",
      text: "Video advertising designed to increase awareness, engagement and customer interest.",
      icon: <FaYoutube />,
      link: "/youtube",
      number: "04",
    },
    {
      title: "SEO",
      text: "Technical, on-page, off-page and local SEO services to improve online visibility.",
      icon: <FaSearch />,
      link: "/website",
      number: "05",
    },
    {
      title: "Website Development",
      text: "Modern business websites, landing pages, frontend, backend and full-stack development.",
      icon: <FaLaptopCode />,
      link: "/ecommerce-website",
      number: "06",
    },
  ];


  // =====================================================
  // DIGITAL SOLUTIONS
  // =====================================================

  const solutions = [
    {
      title: "Marketing Strategy",
      text: "Understand the business, audience, offer and customer journey before spending budget.",
      icon: <FaLightbulb />,
    },
    {
      title: "Campaign Management",
      text: "Build, monitor and improve advertising campaigns around clear business objectives.",
      icon: <FaSlidersH />,
    },
    {
      title: "Website Experience",
      text: "Create modern websites and landing pages that make it easier for visitors to take action.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Tracking & Analysis",
      text: "Use available data and performance insights to understand what is working and what needs improvement.",
      icon: <FaChartLine />,
    },
  ];


  // =====================================================
  // PROCESS
  // =====================================================

  const processSteps = [
    {
      number: "01",
      title: "Understand",
      text: "We first understand your business, audience, goals and current online presence.",
      icon: <FaComments />,
    },
    {
      number: "02",
      title: "Research",
      text: "We review the market, competitors, audience behavior and available opportunities.",
      icon: <FaSearch />,
    },
    {
      number: "03",
      title: "Build Strategy",
      text: "We create a practical strategy based on your business objectives and project requirements.",
      icon: <FaCogs />,
    },
    {
      number: "04",
      title: "Launch & Improve",
      text: "We launch the campaign or website and continue looking for ways to improve the experience.",
      icon: <FaRocket />,
    },
  ];


  return (
    <main className="home-page">


      {/* =====================================================
          HERO SECTION
          ===================================================== */}

      <section className="hero-section">

        <div className="container py-5">

          <div className="hero-content text-center">

            {/* ================= TOP BRAND BADGE ================= */}

            <div className="hero-badge">

              <strong className="hero-brand-name">
                KH DREAM IT
              </strong>

              <span className="hero-divider">
                •
              </span>

              <span className="typing-text">
                {text}
                <span className="typing-cursor">
                  |
                </span>
              </span>

            </div>


            {/* ================= MAIN HEADING ================= */}

            <h1 className="hero-title">

              Digital Marketing That

              <br />

              <span className="hero-title-highlight">
                Drives Real Growth
              </span>

            </h1>


            {/* ================= DESCRIPTION ================= */}

            <p className="hero-description mx-auto">

              KH Dream IT helps businesses generate better leads, more
              sales, and measurable growth through data-driven digital
              marketing and high-converting advertising campaigns.

            </p>


            {/* ================= SERVICES ================= */}

            <p className="hero-services mx-auto">

              <strong>
                Google Ads
              </strong>

              <span>•</span>

              <strong>
                Meta Ads
              </strong>

              <span>•</span>

              <strong>
                Microsoft Ads
              </strong>

              <span>•</span>

              <strong>
                YouTube Ads
              </strong>

              <span>•</span>

              <strong>
                TikTok Ads
              </strong>

            </p>


            {/* ================= BUTTONS ================= */}

            <div className="hero-buttons">

              <NavLink
                to="/portfolio"
                className="hero-btn hero-btn-primary"
              >
                Explore Our Portfolio

                <span className="hero-arrow">
                  →
                </span>

              </NavLink>


              <NavLink
                to="/contact"
                className="hero-btn hero-btn-secondary"
              >
                Get Started
              </NavLink>

            </div>


            {/* ================= TRUST LINE ================= */}

            <div className="hero-trust">

              <span>
                ✓ Performance Focused
              </span>

              <span>
                ✓ Data-Driven Strategy
              </span>

              <span>
                ✓ Transparent Communication
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUICK INTRO
      ===================================================== */}

      <section className="home-intro-section">

        <div className="container">

          <div className="home-intro-card">

            <div className="home-intro-main">

              <span className="home-section-label">
                DIGITAL GROWTH PARTNER
              </span>

              <h2>
                More Than Advertising.
                <span> A Better Digital Presence.</span>
              </h2>

              <p>
                We combine digital advertising, search visibility and
                website development to help businesses create a stronger
                path from first impression to customer action.
              </p>

            </div>


            <div className="home-intro-points">

              <div>
                <FaBullseye />
                <strong>Clear Goals</strong>
                <span>Business-focused direction</span>
              </div>

              <div>
                <FaChartLine />
                <strong>Better Decisions</strong>
                <span>Performance-based insights</span>
              </div>

              <div>
                <FaGlobe />
                <strong>Digital Presence</strong>
                <span>Marketing + website solutions</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="home-services-section">

        <div className="container">


          <div className="home-section-heading">

            <span className="home-section-label">
              OUR SERVICES
            </span>

            <h2>
              Solutions Built Around
              <span> Your Business</span>
            </h2>

            <p>
              Choose the service you need today and build the next part
              of your digital growth journey with KH Dream IT.
            </p>

          </div>


          <div className="row g-4">

            {services.map((service) => (

              <div
                className="col-md-6 col-xl-4"
                key={service.number}
              >

                <NavLink
                  to={service.link}
                  className="home-service-card"
                >

                  <div className="service-card-top">

                    <div className="service-card-icon">
                      {service.icon}
                    </div>

                    <span className="service-card-number">
                      {service.number}
                    </span>

                  </div>


                  <h3>
                    {service.title}
                  </h3>


                  <p>
                    {service.text}
                  </p>


                  <span className="service-card-link">

                    Explore Service

                    <FaArrowRight />

                  </span>

                </NavLink>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DIGITAL SOLUTIONS
      ===================================================== */}

      <section className="home-solutions-section">

        <div className="container">

          <div className="solutions-layout">


            {/* LEFT */}

            <div className="solutions-intro">

              <span className="home-section-label">
                HOW WE ADD VALUE
              </span>

              <h2>
                One Business.
                <span> Multiple Digital Needs.</span>
              </h2>

              <p>
                A business may need advertising, SEO, better tracking,
                a stronger website, or several of them together. Our
                approach is built around understanding the whole digital
                journey instead of looking at one channel in isolation.
              </p>


              <NavLink
                to="/contact"
                className="solutions-button"
              >
                Discuss Your Project

                <FaArrowRight />

              </NavLink>

            </div>


            {/* RIGHT */}

            <div className="solutions-grid">

              {solutions.map((solution, index) => (

                <div
                  className="solution-card"
                  key={index}
                >

                  <div className="solution-icon">
                    {solution.icon}
                  </div>

                  <div>

                    <h3>
                      {solution.title}
                    </h3>

                    <p>
                      {solution.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="home-trust-section">

        <div className="container">


          <div className="home-section-heading">

            <span className="home-section-label">
              WHY KH DREAM IT?
            </span>

            <h2>
              Why Businesses
              <span> Choose Us</span>
            </h2>

            <p>
              We focus on practical digital strategies that support
              real business goals instead of chasing vanity metrics.
            </p>

          </div>


          <div className="row g-4">

            {trustPoints.map((point) => (

              <div
                className="col-md-6"
                key={point.number}
              >

                <article className="trust-point-card">

                  <div className="trust-point-number">
                    {point.number}
                  </div>

                  <div className="trust-point-icon">
                    {point.icon}
                  </div>

                  <div className="trust-point-content">

                    <h3>
                      {point.title}
                    </h3>

                    <p>
                      {point.text}
                    </p>

                  </div>

                  <div className="trust-point-arrow">
                    <FaArrowRight />
                  </div>

                </article>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PLATFORM STRIP
      ===================================================== */}

      <section className="home-platform-section">

        <div className="container">

          <div className="platform-heading">

            <span>
              DIGITAL PLATFORMS
            </span>

            <h2>
              Where We Help You Show Up
            </h2>

          </div>


          <div className="platform-list">

            <div className="platform-item">
              <FaGoogle />
              <span>Google</span>
            </div>

            <div className="platform-item">
              <FaFacebookF />
              <span>Meta</span>
            </div>

            <div className="platform-item">
              <FaMicrosoft />
              <span>Microsoft</span>
            </div>

            <div className="platform-item">
              <FaYoutube />
              <span>YouTube</span>
            </div>

            <div className="platform-item">
              <FaTiktok />
              <span>TikTok</span>
            </div>

            <div className="platform-item">
              <FaShoppingCart />
              <span>Shopify</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="home-process-section">

        <div className="container">


          <div className="home-section-heading text-center">

            <span className="home-section-label">
              OUR PROCESS
            </span>

            <h2>
              Simple Process.
              <span> Clear Direction.</span>
            </h2>

            <p>
              We keep the process straightforward so you know what
              happens from the first conversation to the final launch.
            </p>

          </div>


          <div className="process-timeline">

            {processSteps.map((step, index) => (

              <div
                className="process-item"
                key={step.number}
              >

                <div className="process-number">
                  {step.number}
                </div>

                <div className="process-icon">
                  {step.icon}
                </div>

                <div className="process-content">

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.text}
                  </p>

                </div>

                {index < processSteps.length - 1 && (
                  <div className="process-connector">
                    <FaArrowRight />
                  </div>
                )}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          GOOGLE REVIEWS
      ===================================================== */}

      <section className="home-reviews-section">

        <div className="container">


          <div className="home-section-heading text-center">

            <span className="home-section-label">
              CLIENT FEEDBACK
            </span>

            <h2>
              What Our Clients Say
            </h2>

            <p>
              We value our clients' experience and feedback.
            </p>

          </div>


          {/* GOOGLE HEADER */}

          <div className="google-review-header">

            <div className="google-review-brand">

              <div className="google-review-icon">
                <FaGoogle />
              </div>

              <div>

                <strong>
                  Google Reviews
                </strong>

                <span>
                  Client experience & feedback
                </span>

              </div>

            </div>


            <div className="google-review-stars">

              <div>

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <span>
                Reviews from our clients
              </span>

            </div>

          </div>


          {/* REVIEW CARDS */}

          <div className="row g-4">

            {reviews.map((review, index) => (

              <div
                className="col-md-4"
                key={index}
              >

                <article className="home-review-card">

                  <div className="review-card-top">

                    <div className="review-stars">

                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />

                    </div>

                    <FaQuoteLeft className="review-quote-icon" />

                  </div>


                  <p>
                    "{review.text}"
                  </p>


                  <div className="review-author">

                    <div className="review-avatar">
                      <FaUsers />
                    </div>

                    <div>

                      <strong>
                        {review.name}
                      </strong>

                      <span>
                        Google Review
                      </span>

                    </div>

                  </div>

                </article>

              </div>

            ))}

          </div>


          <div className="reviews-button-wrap">

            <a
              href="https://www.google.com/search?q=KH+Dream+IT"
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-button"
            >

              View More Google Reviews

              <FaArrowRight />

            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="home-final-cta">

        <div className="container">

          <div className="home-final-cta-box">


            <div className="final-cta-content">

              <span className="home-section-label">
                START YOUR PROJECT
              </span>

              <h2>
                Ready to Build a
                <span> Stronger Digital Presence?</span>
              </h2>

              <p>
                Whether you need better advertising campaigns, stronger
                online visibility, a landing page, or a modern business
                website, let's discuss your project.
              </p>


              <div className="final-cta-buttons">

                <NavLink
                  to="/contact"
                  className="final-cta-primary"
                >

                  Get Started

                  <FaArrowRight />

                </NavLink>


                <NavLink
                  to="/portfolio"
                  className="final-cta-secondary"
                >

                  Explore Portfolio

                </NavLink>

              </div>

            </div>


            <div className="final-cta-visual">

              <div className="cta-ring cta-ring-one"></div>

              <div className="cta-ring cta-ring-two"></div>

              <div className="cta-main-card">

                <div className="cta-main-icon">
                  <FaRocket />
                </div>

                <strong>
                  KH DREAM IT
                </strong>

                <span>
                  Digital Marketing
                </span>

                <span>
                  Website Development
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


    </main>
  );
};


export default Hero;