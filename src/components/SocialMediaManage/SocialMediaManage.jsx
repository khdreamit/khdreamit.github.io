
import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import SocialIcon from "../SocialIcon/SocialIcon";
import Footer from "../Footer/Footer";
import { FaCheck, FaTimes } from "react-icons/fa";
import YoutubeHero from "../../assets/youtubeHero.jpg";
import YouSeo from "../../assets/youSeo.png";
import "../Youtube/youtube.css";
import "aos/dist/aos.css";
import YouMan from "../../assets/youMan2.png";
import ServiceImg from "../../assets/Youtube.jpg";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaHockeyPuck,
  FaTags,
  FaImage,
  FaChartBar,
  FaPeopleArrows,
  FaPuzzlePiece,
  FaCheckCircle,
  FaChevronDown,
} from "react-icons/fa";

const SocialMediaManage = () => {
  // Core Social Media Management Services
  const services = [
    {
      title: "Social Media Account Audit",
      icon: <FaSearch />,
      items: [
        "Review of social profiles, branding, bio, and account setup",
        "Content performance and engagement analysis",
        "Identify issues limiting reach, engagement, and growth",
        "Audience insights and engagement audit",
        "Competitor and industry benchmarking",
        "Actionable recommendations for improvement",
      ],
    },
    {
      title: "Social Media Strategy & Content Planning",
      icon: <FaHockeyPuck />,
      items: [
        "Audience, niche, and market research",
        "Content theme and topic discovery",
        "Platform-specific content opportunities",
        "Competitor content comparison",
        "Engaging post and campaign ideas",
        "Content calendar delivery (Excel/Google Sheet)",
      ],
    },
    {
      title: "Content Creation & Post Optimization",
      icon: <FaTags />,
      items: [
        "Engaging captions and post copywriting",
        "Relevant hashtag and keyword placement",
        "Clear, audience-focused content structure",
        "Platform-specific hashtag strategy",
        "Post formatting for better discoverability",
        "Platform best practices and brand consistency",
      ],
    },
    {
      title: "Creative & Engagement Optimization",
      icon: <FaImage />,
      items: [
        "Review of reach, clicks, and engagement",
        "Identify creative and content gaps",
        "Creative direction for visuals and brand consistency",
        "Creative testing recommendations",
        "Caption–creative alignment strategy",
        "Actionable recommendations for improvement",
      ],
    },
    {
      title: "Social Media Growth Strategy",
      icon: <FaChartBar />,
      items: [
        "Reach and discoverability strategy",
        "Platform-specific growth strategy",
        "Community and engagement strategy",
        "Posting schedule and frequency planning",
        "Profile and post optimization",
        "Engagement and response plan",
      ],
    },
    {
      title: "Competitor & Audience Research",
      icon: <FaPeopleArrows />,
      items: [
        "Competitor content performance review",
        "Their content themes and formats",
        "Their engagement, posting frequency, and creative analysis",
        "Differentiated content strategy",
        "Identify content opportunities in your niche",
        "Actionable recommendations for improvement",
      ],
    },
    {
      title: "Community Management & Optimization",
      icon: <FaPuzzlePiece />,
      items: [
        "Platform-specific content optimization",
        "Audience interaction strategy",
        "Audience engagement improvement plan",
        "Consistent reach and engagement plan",
        "Platform-friendly content structure",
        "Actionable recommendations for improvement",
      ],
    },
  ];

  // Deliverables
  const items = [
    "Social Media Audit Report – Profile issues, content gaps & growth roadmap",
    "Content Optimization – Captions, hashtags & post formatting",
    "Audience & Hashtag Research – Relevant topics, hashtags & audience insights",
    "Creative Optimization Guide – Visual recommendations & testing ideas",
    "Competitor Research Report – Content insights and opportunities",
    "Platform Performance Review – Reach, engagement & posting-time insights",
    "Social Media Growth Plan – 30-day content and engagement roadmap",
    "Monthly Performance Report – Key metrics and progress summary",
    "Bonus Resources – Content ideas, captions & hashtag suggestions",
  ];

  const splitText = (text) => {
    const [title, desc] = text.split("–");
    return {
      title: title.trim(),
      desc: desc ? desc.trim() : "",
    };
  };

  // Frequently Asked Questions
  const faqData = [
    {
      q: "Do you need access to my social media accounts?",
      a: "I can prepare an audit and strategy without account access. To publish posts, manage messages, or make changes, I’ll need appropriate page or business access—never your password.",
    },
    {
      q: "Do you guarantee followers or engagement?",
      a: "I can’t guarantee specific follower, reach, or engagement numbers. I focus on consistent, data-informed management and provide a clear plan to improve performance.",
    },
    {
      q: "Do you create social media content and designs?",
      a: "Yes. Content design and creative production can be included based on the selected package and agreed deliverables.",
    },
    {
      q: "How do you measure social media performance?",
      a: "I track relevant metrics such as reach, engagement rate, profile visits, clicks, follower growth, and content performance. Reports help show progress transparently.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  // Smooth scroll to pricing
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <Navbar />

      {/* Social Media Management Hero Section */}
      <div className="youtube-hero d-flex align-items-center text-center">
        <div className="container">
          <h1 className="fw-bold text-white mb-3">
            Social Media Management – Grow Your Brand Online
          </h1>

          <p
            className="text-white-80 fw-bold mx-auto"
            style={{ maxWidth: "600px" }}
          >
            Strategic social media management for businesses: content
            planning, publishing, community engagement, and performance
            tracking.
          </p>

          <div className="mt-4 d-flex justify-content-center gap-3">
            <Link
              to="/portfolio"
              state={{ category: "Social Media Management" }}
              className="btn btn-warning fw-semibold px-2 px-sm-4 py-2 rounded-pill shadow"
            >
              View My Portfolio
            </Link>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("seePrice");
              }}
              className="btn btn-outline-light fw-semibold px-2 px-sm-4 py-2 rounded-pill shadow"
            >
              See Packages
            </a>
          </div>
        </div>
      </div>

      {/* Social Media Introduction */}

      {/*
      <div className="py-5 yourIntro">
        <div className="container-fluid px-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0 text-center youImg">
              <img
                src={YouMan}
                alt="Profile"
                className="img-fluid rounded-3 shadow"
                style={{ maxWidth: "70%" }}
              />
            </div>

            <div className="col-lg-6">
              <h4 className="text-secondary fw-semibold mb-2">
                Hello, I'm
              </h4>

              <h1 className="fw-bold display-4">
                MD. ABDUL HALIM
              </h1>

              <p className="mt-3 text-dark fs-5">
                I’m a Social Media Management specialist focused on
                helping businesses build a consistent online presence,
                connect with their audience, and strengthen brand
                awareness. I combine content planning, platform-specific
                optimization, community engagement, and performance
                tracking to support sustainable social media growth.
              </p>

              <div className="mt-4 d-flex gap-3">
                <a
                  href="https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22"
                  className="btn btn-dark px-4 py-2"
                >
                  Contact With Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}

      {/* What is Social Media Management? */}

      <div className="herobg py-5">
        <div className="container-fluid px-5">
          <div className="row align-items-center youtube-bg">
            {/* Text Content */}

            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="fw-bold">
                What is Social Media Management?
              </h1>

              <p className="lead">
                Social Media Management is the process of planning,
                creating, publishing, and managing content across social
                platforms. It helps businesses maintain a consistent
                online presence, connect with their audience, build brand
                awareness, and track performance.
              </p>

              <a
                href="https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22"
                className="btn mt-3 hero-btn"
              >
                Contact On WhatsApp
              </a>
            </div>

            {/* Hero Image */}

            <div className="col-lg-6 text-center">
              <img
                src={YoutubeHero}
                alt="Social Media Management"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Social Media Management is Important */}

      <div className="py-5 feature-section">
        <div className="container-fluid px-5">
          <div className="row align-items-center">
            <div className="col-lg-5 text-center mb-4 mb-lg-0">
              <img
                src={YouSeo}
                alt="Social Media Management Benefits"
                className="img-fluid rounded shadow-lg feature-img"
              />
            </div>

            <div className="col-lg-7">
              <h2 className="fw-bold mb-3">
                Why Is Social Media Management Important?
              </h2>

              <p className="text-muted">
                Social media management helps your brand stay active,
                connect with customers, build trust, and create consistent
                opportunities for engagement and business growth.
              </p>

              <div className="benefit-box p-4 rounded shadow-sm">
                <ul className="list-unstyled">
                  <li>
                    <span className="check-icon">✔</span> Stronger and
                    more consistent brand presence
                  </li>
                  <li>
                    <span className="check-icon">✔</span> Consistent
                    content across social platforms
                  </li>
                  <li>
                    <span className="check-icon">✔</span> Improved
                    audience engagement
                  </li>
                  <li>
                    <span className="check-icon">✔</span> Community
                    growth and customer relationships
                  </li>
                  <li>
                    <span className="check-icon">✔</span> More effective
                    content and calls to action
                  </li>
                  <li>
                    <span className="check-icon">✔</span> Data-informed
                    content decisions
                  </li>
                  <li>
                    <span className="check-icon">✔</span> More
                    opportunities to generate leads
                  </li>
                  <li>
                    <span className="check-icon">✔</span> Stronger brand
                    credibility and recognition
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Social Media Management Services */}

      <section className="py-5 service">
        <div className="container-fluid px-5">
          <div className="serviceCont mb-5">
            <h1 className="mb-3">
              Core Social Media Management Services
            </h1>

            <p className="text-muted fs-5">
              Our social media management services help businesses plan
              content, engage audiences, and maintain a consistent online
              presence.
            </p>
          </div>

          {/* First 6 Service Cards */}

          <div className="row g-5">
            {services.slice(0, 6).map((service, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="service-card card text-center border-0 pt-5 position-relative h-100">
                  <div className="icon-circle position-absolute top-0 start-50 translate-middle shadow-sm">
                    {service.icon}
                  </div>

                  <div className="card-body">
                    <h4 className="card-title mb-3 fw-bold">
                      {service.title}
                    </h4>

                    <ul className="list-unstyled text-start">
                      {service.items.map((item, i) => (
                        <li
                          key={i}
                          className="mb-2 d-flex align-items-center"
                        >
                          <FaCheck className="text-secondary me-2 fs-5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Last Service Card + Image */}

          <div className="row g-5 mt-3">
            <div className="col-lg-4 col-md-6">
              <div className="service-card card text-center border-0 pt-5 position-relative h-100">
                <div className="icon-circle position-absolute top-0 start-50 translate-middle shadow-sm">
                  {services[6].icon}
                </div>

                <div className="card-body">
                  <h4 className="card-title mb-3 fw-bold">
                    {services[6].title}
                  </h4>

                  <ul className="list-unstyled text-start">
                    {services[6].items.map((item, i) => (
                      <li
                        key={i}
                        className="mb-2 d-flex align-items-center"
                      >
                        <FaCheck className="text-secondary me-2 fs-5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Image */}

            <div className="col-lg-8 col-md-6 d-flex align-items-center">
              <img
                src={ServiceImg}
                alt="Social Media Management Services"
                className="img-fluid w-100 rounded last-row-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}

      <section className="py-5 deliverable-wow">
        <div className="container-fluid px-5">
          <div className="text-center mb-5">
            <h1 className="fw-bold wow-title">
              What You Will Get (Deliverables)
            </h1>

            <div className="underline mx-auto"></div>

            <p className="wow-subtitle text-muted mt-3 fs-5">
              You will receive a social media management package designed
              to strengthen your brand presence, content consistency, and
              audience engagement.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="wow-box p-4 p-md-5">
                <h4 className="fw-bold pb-4">
                  My deliverables include:
                </h4>

                {items.map((item, i) => {
                  const { title, desc } = splitText(item);

                  return (
                    <div key={i} className="wow-item d-flex mb-4">
                      <div className="icon-wrap me-3">
                        <FaCheckCircle className="wow-icon" />
                      </div>

                      <div>
                        <h5 className="fw-bold mb-1 item-title">
                          {title}
                        </h5>

                        <p className="text-muted mb-0 item-desc">
                          {desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}

      <section className="py-5 faq-section">
        <div className="container-fluid px-5">
          <h1 className="text-center mb-5 faq-title">
            FREQUENTLY ASKED QUESTIONS (FAQ)
          </h1>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              {faqData.map((item, i) => (
                <div
                  key={i}
                  className="faq-item p-3 p-md-4 mb-3 rounded shadow-sm"
                  onClick={() => toggleFAQ(i)}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="faq-question m-0">{item.q}</h5>

                    <FaChevronDown
                      className={`faq-icon ${
                        openIndex === i ? "rotate" : ""
                      }`}
                    />
                  </div>

                  <div
                    className={`faq-answer mt-3 ${
                      openIndex === i ? "open" : ""
                    }`}
                  >
                    {item.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Management Pricing Plans */}

      <div className="bacgkround" id="seePrice">
        <div className="container-fluid px-5 py-5">
          <div>
            <h2 className="text-center fw-bold mb-2">
              Social Media Management Pricing Plans
            </h2>

            <p className="text-center text-muted mb-5">
              Choose a plan that fits your business goals
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Basic Plan */}

            <div className="col-md-4">
              <div
                className="pricing-box text-center p-4 position-relative"
                data-aos="fade-left"
              >
                <div className="plan-title">Basic</div>

                <h2 className="price">
                  <span className="old-price">$49</span> $29{" "}
                  <span>/Project</span>
                </h2>

                <ul className="features list-unstyled text-start mt-3">
                  <li>
                    <FaCheck /> Content Calendar & Captions
                  </li>
                  <li>
                    <FaCheck /> Hashtag & Audience Research
                  </li>
                  <li>
                    <FaCheck /> Post Design Guidance
                  </li>
                  <li>
                    <FaTimes className="text-danger" /> Competitor
                    Research
                  </li>
                  <li>
                    <FaTimes className="text-danger" /> Performance
                    Summary
                  </li>
                </ul>

                <a
                  href="https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22"
                  className="pricing-btn mt-4 btn"
                >
                  Order Now On WhatsApp
                </a>
              </div>
            </div>

            {/* Standard Plan */}

            <div className="col-md-4">
              <div
                className="pricing-box featured text-center p-4 position-relative"
                data-aos="zoom-in"
              >
                <div className="plan-title featured-title">
                  Standard
                </div>

                <h2 className="price">
                  <span className="old-price">$89</span> $59{" "}
                  <span>/Project</span>
                </h2>

                <ul className="features list-unstyled text-start mt-3">
                  <li>
                    <FaCheck /> Content Planning & Captions
                  </li>
                  <li>
                    <FaCheck /> Monthly Content Calendar
                  </li>
                  <li>
                    <FaCheck /> Competitor & Audience Research
                  </li>
                  <li>
                    <FaCheck /> Hashtag & Caption Optimization
                  </li>
                  <li>
                    <FaTimes className="text-danger" /> 24/7 Support
                  </li>
                </ul>

                <a
                  href="https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22"
                  className="pricing-btn featured-btn mt-4 btn"
                >
                  Order Now On WhatsApp
                </a>
              </div>
            </div>

            {/* Premium Plan */}

            <div className="col-md-4">
              <div
                className="pricing-box text-center p-4 position-relative"
                data-aos="fade-right"
              >
                <div className="plan-title">Premium</div>

                <h2 className="price">
                  <span className="old-price">$149</span> $99{" "}
                  <span>/Project</span>
                </h2>

                <ul className="features list-unstyled text-start mt-3">
                  <li>
                    <FaCheck /> Full Social Media Management
                  </li>
                  <li>
                    <FaCheck /> Content Strategy & Account Audit
                  </li>
                  <li>
                    <FaCheck /> Performance Monitoring & Reporting
                  </li>
                  <li>
                    <FaCheck /> Content Optimization
                  </li>
                  <li>
                    <FaCheck /> 24/7 Priority Support
                  </li>
                </ul>

                <a
                  href="https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22"
                  className="pricing-btn mt-4 btn"
                >
                  Order Now On WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SocialIcon />
      <Footer />
    </div>
  );
};

export default SocialMediaManage;