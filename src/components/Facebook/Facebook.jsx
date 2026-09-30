import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import SocialIcon from "../SocialIcon/SocialIcon";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaSearch,
  FaBullseye,
  FaCog,
  FaPenNib,
  FaChartLine,
  FaUsers,
  FaRetweet,
  FaCode,
  FaCheckCircle,
  FaChevronDown,
  FaCheck,
  FaArrowRight,
  FaFileAlt,
  FaLightbulb,
} from "react-icons/fa";

import "./facebook.css";

const Facebook = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: "Facebook Ad Strategy",
      icon: <FaSearch />,
      text: "A custom Meta Ads strategy based on your business goal, budget, audience, and campaign objective.",
    },
    {
      title: "Audience Research",
      icon: <FaUsers />,
      text: "Research and segmentation using demographics, interests, location, behavior, and customer intent.",
    },
    {
      title: "Campaign Setup & Management",
      icon: <FaCog />,
      text: "Complete campaign setup, budget allocation, placements, monitoring, and ongoing optimization.",
    },
    {
      title: "Ad Copywriting",
      icon: <FaPenNib />,
      text: "Clear and persuasive ad copy designed to communicate your offer and encourage users to take action.",
    },
    {
      title: "Lead Generation",
      icon: <FaChartLine />,
      text: "Lead-focused campaigns designed to attract relevant prospects and improve lead quality.",
    },
    {
      title: "Conversion & Sales",
      icon: <FaBullseye />,
      text: "Conversion-focused campaigns built around your customer journey, offer, audience, and tracking setup.",
    },
    {
      title: "Retargeting Ads",
      icon: <FaRetweet />,
      text: "Reconnect with people who already interacted with your website, page, products, or previous ads.",
    },
    {
      title: "Meta Pixel & Tracking",
      icon: <FaCode />,
      text: "Pixel and event tracking setup to help measure important actions and improve campaign decisions.",
    },
  ];

  const items = [
    {
      title: "Campaign Overview",
      desc: "A summary of active and completed campaigns and their objectives.",
    },
    {
      title: "Budget & Spending Analysis",
      desc: "A clear view of budget, actual spend, and spending patterns.",
    },
    {
      title: "Reach & Impressions",
      desc: "Data showing how many people saw the ads and how often.",
    },
    {
      title: "Click & Engagement Metrics",
      desc: "Important metrics such as clicks, CTR, CPC, and engagement.",
    },
    {
      title: "Lead & Sales Performance",
      desc: "Tracking of leads, conversions, purchases, cost per result, and ROAS when available.",
    },
    {
      title: "Audience Performance",
      desc: "Insights into age, gender, location, interests, and audience segments.",
    },
    {
      title: "Creative Performance",
      desc: "Review of images, videos, headlines, captions, and creative performance.",
    },
    {
      title: "Device Performance",
      desc: "Comparison of campaign performance across mobile and desktop.",
    },
    {
      title: "Placement Performance",
      desc: "Performance across Facebook Feed, Instagram Feed, Reels, Stories, and other placements.",
    },
    {
      title: "Conversion Tracking",
      desc: "Review of available website events and conversion tracking data.",
    },
    {
      title: "Next-Step Recommendations",
      desc: "A practical summary of what to improve, test, optimize, or scale next.",
    },
  ];

  const faqData = [
    {
      q: "Do I need to give access to my Facebook Page?",
      a: "Yes. To manage your advertising, the required Meta Business/Page and Ads Manager permissions are needed. You remain in control of your account and access.",
    },
    {
      q: "What results can I expect from Facebook Ads?",
      a: "Depending on your business and campaign objective, Meta Ads can support lead generation, sales, website traffic, engagement, or brand awareness. Results depend on the offer, audience, creative, tracking, and budget.",
    },
    {
      q: "Do you provide performance reports?",
      a: "Yes. Performance can be reviewed through key campaign metrics such as reach, clicks, leads, conversions, cost per result, and ROAS when applicable.",
    },
    {
      q: "Do you guarantee specific results?",
      a: "No specific numbers are guaranteed. Campaigns are monitored and optimized using available performance data.",
    },
    {
      q: "How long does it take to see results?",
      a: "The timeline varies by campaign objective, budget, audience, offer, and tracking setup. Early data can help identify what needs to be tested and optimized.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".fb-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fb-visible");
            observer.unobserve(entry.target);
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

  return (
    <div className="facebook-page">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="facebook-hero">
        <div className="facebook-hero-bg fb-orb-one"></div>
        <div className="facebook-hero-bg fb-orb-two"></div>

        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-7">
              <div className="fb-hero-content">

                <div className="fb-platform-badge">
                  <span className="fb-icon">
                    <FaFacebookF />
                  </span>

                  <span className="ig-icon">
                    <FaInstagram />
                  </span>

                  <span>Meta Ads Service</span>
                </div>

                <h1 className="fb-hero-title">
                  Facebook & Instagram
                  <span> Ads</span>
                </h1>

                <p className="fb-hero-text">
                  Target the right people, generate quality leads, and turn
                  attention into measurable business results with strategic
                  Meta advertising.
                </p>

                <div className="fb-hero-actions">
                  <Link
                    to="/portfolio"
                    state={{
                      category: "Facebook & Instagram Ads",
                    }}
                    className="fb-primary-btn"
                  >
                    View My Portfolio
                    <FaArrowRight />
                  </Link>

                  <button
                    onClick={() => scrollToSection("seePrice")}
                    className="fb-secondary-btn"
                  >
                    See Packages
                  </button>
                </div>

                <div className="fb-trust-line">
                  <span>
                    <FaCheckCircle /> Facebook Ads
                  </span>

                  <span>
                    <FaCheckCircle /> Instagram Ads
                  </span>

                  <span>
                    <FaCheckCircle /> Data-Driven Optimization
                  </span>
                </div>

              </div>
            </div>

            {/* HERO VISUAL */}
            <div className="col-lg-5">
              <div className="fb-dashboard-wrap">

                <div className="fb-dashboard-card">

                  <div className="fb-dashboard-top">
                    <div>
                      <small>CAMPAIGN PLATFORM</small>
                      <h4>Meta Ads</h4>
                    </div>

                    <div className="fb-dashboard-icons">
                      <span>
                        <FaFacebookF />
                      </span>
                      <span>
                        <FaInstagram />
                      </span>
                    </div>
                  </div>

                  <div className="fb-dashboard-line"></div>

                  <div className="fb-dashboard-label">
                    <span>Campaign Performance</span>
                    <FaChartLine />
                  </div>

                  <div className="fb-chart">
                    <span style={{ height: "35%" }}></span>
                    <span style={{ height: "48%" }}></span>
                    <span style={{ height: "42%" }}></span>
                    <span style={{ height: "65%" }}></span>
                    <span style={{ height: "58%" }}></span>
                    <span style={{ height: "78%" }}></span>
                    <span style={{ height: "90%" }}></span>
                  </div>

                  <div className="fb-metric-grid">

                    <div className="fb-metric">
                      <small>REACH</small>
                      <strong>Audience</strong>
                    </div>

                    <div className="fb-metric">
                      <small>CLICKS</small>
                      <strong>Traffic</strong>
                    </div>

                    <div className="fb-metric">
                      <small>LEADS</small>
                      <strong>Prospects</strong>
                    </div>

                    <div className="fb-metric">
                      <small>SALES</small>
                      <strong>Conversions</strong>
                    </div>

                  </div>

                </div>

                <div className="fb-floating-card fb-float-one">
                  <FaBullseye />
                  <div>
                    <small>Targeting</small>
                    <strong>Right Audience</strong>
                  </div>
                </div>

                <div className="fb-floating-card fb-float-two">
                  <FaChartLine />
                  <div>
                    <small>Optimization</small>
                    <strong>Continuous</strong>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= SERVICES ================= */}
      <section className="fb-services-section">
        <div className="container">

          <div className="fb-section-heading fb-reveal">
            <span className="fb-section-label">
              WHAT I CAN DO
            </span>

            <h2>
              Facebook & Instagram Ads
              <span> Services</span>
            </h2>

            <p>
              From strategy and targeting to campaign management,
              optimization, retargeting, and tracking.
            </p>
          </div>

          <div className="row g-4">

            {services.map((service, index) => (
              <div
                className="col-lg-3 col-md-6"
                key={index}
              >
                <div
                  className="fb-service-card fb-reveal"
                  style={{
                    transitionDelay: `${index * 70}ms`,
                  }}
                >
                  <div className="fb-service-icon">
                    {service.icon}
                  </div>

                  <span className="fb-service-number">
                    0{index + 1}
                  </span>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <div className="fb-card-arrow">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= DELIVERABLES ================= */}
      <section className="fb-deliverables-section">

        <div className="container">

          <div className="fb-section-heading center fb-reveal">

            <span className="fb-section-label">
              REPORTING & INSIGHTS
            </span>

            <h2>
              What You Will
              <span> Get</span>
            </h2>

            <p>
              A clear overview of campaign performance and practical
              recommendations for the next steps.
            </p>

          </div>


          <div className="fb-deliverables-box fb-reveal">

            <div className="fb-deliverables-header">

              <div className="fb-deliverable-main-icon">
                <FaFileAlt />
              </div>

              <div>
                <h3>My Deliverables Include</h3>
                <p>
                  Key campaign data, insights, and optimization opportunities.
                </p>
              </div>

            </div>


            <div className="row g-0">

              {items.map((item, index) => (
                <div
                  className="col-lg-6"
                  key={index}
                >
                  <div className="fb-deliverable-item">

                    <div className="fb-check-icon">
                      <FaCheckCircle />
                    </div>

                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>

                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= PRICING ================= */}
      <section
        className="fb-pricing-section"
        id="seePrice"
      >

        <div className="container">

          <div className="fb-section-heading center fb-reveal">

            <span className="fb-section-label">
              SIMPLE PRICING
            </span>

            <h2>
              Facebook Ads
              <span> Pricing</span>
            </h2>

            <p>
              Choose a monthly plan based on your campaign requirements.
            </p>

          </div>


          <div className="row g-4 justify-content-center">

            {/* BASIC */}
            <div className="col-lg-4 col-md-6">

              <div className="fb-price-card fb-reveal">

                <div className="fb-plan-name">
                  Basic
                </div>

                <div className="fb-price">
                  <span className="fb-old-price">$250</span>
                  <strong>$199</strong>
                  <small>/Month</small>
                </div>

                <p className="fb-price-description">
                  A simple starting package for focused campaigns.
                </p>

                <div className="fb-price-divider"></div>

                <ul>
                  <li><FaCheck /> Facebook & Instagram Ads</li>
                  <li><FaCheck /> 1 Campaign</li>
                  <li><FaCheck /> 1–2 Ad Creatives</li>
                  <li><FaCheck /> Basic Audience Targeting</li>
                  <li><FaCheck /> Weekly Performance Update</li>
                  <li><FaCheck /> WhatsApp / Email Support</li>
                </ul>

                <a
                  href="https://api.whatsapp.com/send?phone=8801947349917&text=Hello%20Abdul%2C%20I%27m%20interested%20in%20your%20Facebook%20Ads%20Basic%20package."
                  className="fb-price-btn"
                >
                  Order on WhatsApp
                  <FaArrowRight />
                </a>

              </div>

            </div>


            {/* STANDARD */}
            <div className="col-lg-4 col-md-6">

              <div className="fb-price-card featured fb-reveal">

                <div className="fb-popular">
                  Popular
                </div>

                <div className="fb-plan-name">
                  Standard
                </div>

                <div className="fb-price">
                  <span className="fb-old-price">$399</span>
                  <strong>$299</strong>
                  <small>/Month</small>
                </div>

                <p className="fb-price-description">
                  For businesses ready to manage multiple campaigns.
                </p>

                <div className="fb-price-divider"></div>

                <ul>
                  <li><FaCheck /> Everything in Basic</li>
                  <li><FaCheck /> Up to 3 Campaigns</li>
                  <li><FaCheck /> 3–5 Ad Creatives</li>
                  <li><FaCheck /> Smart Audience Targeting</li>
                  <li><FaCheck /> Pixel Setup if Needed</li>
                  <li><FaCheck /> Weekly Optimization</li>
                </ul>

                <a
                  href="https://api.whatsapp.com/send?phone=8801947349917&text=Hello%20Abdul%2C%20I%27m%20interested%20in%20your%20Facebook%20Ads%20Standard%20package."
                  className="fb-price-btn"
                >
                  Order on WhatsApp
                  <FaArrowRight />
                </a>

              </div>

            </div>


            {/* PREMIUM */}
            <div className="col-lg-4 col-md-6">

              <div className="fb-price-card fb-reveal">

                <div className="fb-plan-name">
                  Premium
                </div>

                <div className="fb-price">
                  <span className="fb-old-price">$600</span>
                  <strong>$399</strong>
                  <small>/Month</small>
                </div>

                <p className="fb-price-description">
                  For businesses needing deeper campaign management.
                </p>

                <div className="fb-price-divider"></div>

                <ul>
                  <li><FaCheck /> Everything in Standard</li>
                  <li><FaCheck /> Unlimited Campaigns</li>
                  <li><FaCheck /> Advanced Targeting</li>
                  <li><FaCheck /> Retargeting Campaigns</li>
                  <li><FaCheck /> Daily Optimization</li>
                  <li><FaCheck /> Priority Support</li>
                </ul>

                <a
                  href="https://api.whatsapp.com/send?phone=8801947349917&text=Hello%20Abdul%2C%20I%27m%20interested%20in%20your%20Facebook%20Ads%20Premium%20package."
                  className="fb-price-btn"
                >
                  Order on WhatsApp
                  <FaArrowRight />
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}
      <section className="fb-faq-section">

        <div className="container">

          <div className="fb-section-heading center fb-reveal">

            <span className="fb-section-label">
              HAVE QUESTIONS?
            </span>

            <h2>
              Frequently Asked
              <span> Questions</span>
            </h2>

            <p>
              Some common questions about Facebook and Instagram Ads management.
            </p>

          </div>


          <div className="fb-faq-list">

            {faqData.map((item, index) => (

              <div
                className={`fb-faq-item ${
                  openIndex === index ? "active" : ""
                } fb-reveal`}
                key={index}
                onClick={() => toggleFAQ(index)}
              >

                <div className="fb-faq-question">

                  <div>
                    <span className="fb-faq-number">
                      0{index + 1}
                    </span>

                    {item.q}
                  </div>

                  <FaChevronDown />

                </div>

                <div className="fb-faq-answer">
                  <p>{item.a}</p>
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= WHY ME ================= */}
      <section className="fb-why-section">

        <div className="container">

          <div className="fb-why-content fb-reveal">

            <span className="fb-section-label">
              MY APPROACH
            </span>

            <h2>
              A Clear & Data-Driven
              <span> Ads Process</span>
            </h2>

            <p>
              I focus on the complete campaign journey — from understanding
              your goal and audience to campaign setup, creative testing,
              optimization, tracking, and reporting.
            </p>

          </div>


          <div className="row g-4 mt-2">

            <div className="col-lg-4">
              <div className="fb-why-card fb-reveal">

                <div className="fb-why-icon">
                  <FaBullseye />
                </div>

                <h3>Goal Focused</h3>

                <p>
                  Campaign structure starts with your actual business
                  objective and desired customer action.
                </p>

              </div>
            </div>


            <div className="col-lg-4">
              <div className="fb-why-card fb-reveal">

                <div className="fb-why-icon">
                  <FaChartLine />
                </div>

                <h3>Data Driven</h3>

                <p>
                  Campaign decisions are based on available performance
                  data, testing, and ongoing optimization.
                </p>

              </div>
            </div>


            <div className="col-lg-4">
              <div className="fb-why-card fb-reveal">

                <div className="fb-why-icon">
                  <FaLightbulb />
                </div>

                <h3>Continuous Improvement</h3>

                <p>
                  Campaign performance is reviewed regularly to identify
                  opportunities for improvement and testing.
                </p>

              </div>
            </div>

          </div>

        </div>

      </section>


      <SocialIcon />
      <Footer />

    </div>
  );
};

export default Facebook;