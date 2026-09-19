import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./website.css";

import Navbar from "../Navbar/Navbar";
import SocialIcon from "../SocialIcon/SocialIcon";
import Footer from "../Footer/Footer";

import {
  FaArrowRight,
  FaChartLine,
  FaCheck,
  FaCheckCircle,
  FaChevronDown,
  FaClipboardCheck,
  FaCode,
  FaCogs,
  FaExternalLinkAlt,
  FaFileAlt,
  FaGlobe,
  FaKey,
  FaLayerGroup,
  FaLink,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaPenNib,
  FaRocket,
  FaSearch,
  FaShieldAlt,
  FaSitemap,
  FaTools,
  FaUsers,
} from "react-icons/fa";


// ============================================
// Letter-by-letter animation
// ============================================
const AnimatedText = ({ text }) => {
  return (
    <span className="seo-animated-text">
      {Array.from(text).map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="seo-letter"
          style={{
            animationDelay: `${index * 0.09}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};


function Website() {
  // ============================================
  // Scroll reveal animation
  // ============================================
  useEffect(() => {
    const elements = document.querySelectorAll(".seo-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("seo-visible");
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


  // ============================================
  // WhatsApp
  // ============================================
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=8801947349917&text=Hello%20I%20want%20to%20discuss%20Website%20SEO";


  // ============================================
  // SEO Services
  // ============================================
  const services = [
    {
      icon: FaClipboardCheck,
      title: "SEO Audit",
      text: "Find technical issues, content gaps, indexing problems and SEO opportunities across your website.",
      link: "/auditplan",
    },
    {
      icon: FaCogs,
      title: "Technical SEO",
      text: "Improve website structure, crawlability, indexing, speed, mobile usability and technical health.",
      link: "/technical",
    },
    {
      icon: FaFileAlt,
      title: "On-Page SEO",
      text: "Optimize titles, headings, content structure, internal links, keywords and important page elements.",
      link: "/onpage",
    },
    {
      icon: FaLink,
      title: "Off-Page SEO",
      text: "Build a stronger online presence through quality links, authority signals and strategic outreach.",
      link: "/offpage",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Local SEO",
      text: "Improve visibility for local searches with optimized business information and location-focused SEO.",
      link: "/local",
    },
    {
      icon: FaSearch,
      title: "Keyword Research",
      text: "Discover relevant search terms based on your audience, services, competition and business goals.",
      link: "/auditplan",
    },
  ];


  // ============================================
  // SEO Pillars
  // ============================================
  const pillars = [
    {
      number: "01",
      icon: FaSearch,
      title: "Search Strategy",
      text: "Build a clear keyword and search strategy around the services, topics and customers that matter most.",
    },
    {
      number: "02",
      icon: FaTools,
      title: "Technical Health",
      text: "Create a technically sound website that search engines can crawl, understand and index efficiently.",
    },
    {
      number: "03",
      icon: FaRocket,
      title: "Organic Growth",
      text: "Improve visibility through consistent optimization, useful content and long-term SEO improvements.",
    },
  ];


  // ============================================
  // Benefits
  // ============================================
  const benefits = [
    {
      icon: FaChartLine,
      title: "Better Search Visibility",
      text: "Improve your chances of appearing for relevant searches and reaching more potential customers.",
    },
    {
      icon: FaUsers,
      title: "More Relevant Visitors",
      text: "Target users who are actively searching for your products, services or information.",
    },
    {
      icon: FaGlobe,
      title: "Stronger Online Presence",
      text: "Build a more professional and discoverable digital presence across important search results.",
    },
    {
      icon: FaShieldAlt,
      title: "Healthy Website Foundation",
      text: "Fix technical and structural problems that can reduce search performance and user experience.",
    },
    {
      icon: FaMobileAlt,
      title: "Mobile-Friendly Experience",
      text: "Improve usability and SEO performance across phones, tablets and desktop devices.",
    },
    {
      icon: FaLayerGroup,
      title: "Long-Term SEO Growth",
      text: "Use a structured approach that supports sustainable organic growth instead of short-term tricks.",
    },
  ];


  // ============================================
  // Deliverables
  // ============================================
  const deliverables = [
    "Website SEO audit",
    "Keyword research",
    "Title & meta optimization",
    "Heading structure optimization",
    "Internal linking recommendations",
    "Technical SEO checks",
    "Mobile usability review",
    "Indexing & crawlability review",
    "Content optimization recommendations",
    "Competitor research",
    "Google Search Console review",
    "Google Analytics review",
  ];


  // ============================================
  // Process
  // ============================================
  const processSteps = [
    {
      step: "01",
      icon: FaSearch,
      title: "Audit & Research",
      text: "We review your current website, keywords, competitors and major SEO opportunities.",
    },
    {
      step: "02",
      icon: FaKey,
      title: "Strategy",
      text: "We organize the findings into a practical SEO strategy based on your business goals.",
    },
    {
      step: "03",
      icon: FaCode,
      title: "Optimization",
      text: "Important technical, content and on-page improvements are implemented or documented.",
    },
    {
      step: "04",
      icon: FaChartLine,
      title: "Monitor & Improve",
      text: "Performance is reviewed regularly and the SEO strategy is refined over time.",
    },
  ];


  // ============================================
  // Pricing
  // ============================================
  const pricingPlans = [
    {
      name: "Basic",
      price: "$149",
      period: "/ month",
      description: "For small websites that need a strong SEO foundation.",
      features: [
        "Website SEO audit",
        "Keyword research",
        "On-page optimization",
        "Technical SEO review",
        "Basic competitor research",
        "Monthly SEO recommendations",
      ],
    },
    {
      name: "Standard",
      price: "$249",
      period: "/ project",
      popular: true,
      description: "For businesses that want a complete SEO optimization plan.",
      features: [
        "Full SEO audit",
        "Keyword research",
        "On-page SEO",
        "Technical SEO",
        "Competitor analysis",
        "Internal linking strategy",
        "Content optimization",
        "Detailed action plan",
      ],
    },
    {
      name: "Premium",
      price: "$349",
      period: "/ month",
      description: "For businesses focused on long-term organic growth.",
      features: [
        "Everything in Standard",
        "Ongoing SEO optimization",
        "Advanced keyword strategy",
        "Content recommendations",
        "Off-page SEO support",
        "Local SEO support",
        "Performance monitoring",
        "Monthly reporting",
      ],
    },
  ];


  // ============================================
  // Add-ons
  // ============================================
  const addons = [
    {
      title: "Extra Keyword",
      price: "$20",
      text: "Additional keyword research and targeting.",
    },
    {
      title: "Blog Content",
      price: "$50",
      text: "SEO-focused blog content for your website.",
    },
    {
      title: "GA + GSC Setup",
      price: "$50",
      text: "Google Analytics and Search Console setup.",
    },
    {
      title: "Advanced Link Building",
      price: "$100",
      text: "Additional monthly link-building support.",
    },
    {
      title: "Local Citation",
      price: "$30",
      text: "Local citation setup for one location.",
    },
  ];


  // ============================================
  // FAQ
  // ============================================
  const faqs = [
    {
      question: "How long does SEO take to show results?",
      answer:
        "SEO is a long-term process. The timeline depends on your website, competition, keywords, current authority and the amount of optimization required.",
    },
    {
      question: "Can you work with my existing website?",
      answer:
        "Yes. SEO can be performed on an existing website. The first step is usually an audit to identify technical, content and structural opportunities.",
    },
    {
      question: "Do you guarantee first-page Google rankings?",
      answer:
        "No responsible SEO service can guarantee a specific Google ranking position because search results are influenced by many changing factors.",
    },
    {
      question: "Do you provide monthly SEO services?",
      answer:
        "Yes. Ongoing SEO can include technical improvements, content optimization, keyword strategy, monitoring and reporting.",
    },
    {
      question: "Can you help with local SEO?",
      answer:
        "Yes. Local SEO can include location-based keyword strategy, business information optimization, local signals and citation work.",
    },
    {
      question: "Can you audit a website before starting?",
      answer:
        "Yes. A website audit is a useful starting point for identifying the most important SEO problems and opportunities.",
    },
  ];


  return (
    <>
      <Navbar />

      {/* ============================================
          HERO SECTION
      ============================================ */}
      <section className="seo-hero">
        <div className="seo-hero-grid"></div>

        <div className="seo-hero-glow seo-glow-one"></div>
        <div className="seo-hero-glow seo-glow-two"></div>

        <div className="container">
          <div className="seo-hero-centered">

            {/* Page title */}
            <div className="seo-page-heading seo-reveal">
              <span className="seo-page-heading-line"></span>

              <h1 className="seo-page-title">
                <AnimatedText text="WEBSITE SEO" />
              </h1>

              <span className="seo-page-heading-line"></span>
            </div>


            {/* Label */}
            <div className="seo-hero-label seo-reveal seo-delay-1">
              <span className="seo-label-dot"></span>
              PROFESSIONAL SEO SERVICE
            </div>


            {/* Main heading */}
            <h2 className="seo-main-heading seo-reveal seo-delay-2">
              Grow Your Website With
              <span> Search Visibility</span>
            </h2>


            {/* Description */}
            <p className="seo-hero-description seo-reveal seo-delay-3">
              Improve your website&apos;s technical health, content,
              keyword targeting and organic search visibility with
              a clear and practical SEO strategy.
            </p>


            {/* Buttons */}
            <div className="seo-hero-buttons seo-reveal seo-delay-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="seo-btn seo-btn-primary"
              >
                Get a Free Mini Audit
                <FaArrowRight />
              </a>

              <a
                href="#seo-services"
                className="seo-btn seo-btn-secondary"
              >
                Explore SEO Services
                <FaExternalLinkAlt />
              </a>
            </div>


            {/* Trust row */}
            <div className="seo-trust-row seo-reveal seo-delay-4">
              <div>
                <FaCheckCircle />
                <span>Technical SEO</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>On-Page SEO</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Off-Page SEO</span>
              </div>
            </div>


            {/* SEO Visual */}
            <div className="seo-centered-visual seo-reveal seo-delay-3">

              <div className="seo-visual-card">

                <div className="seo-visual-top">
                  <div className="seo-visual-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span>WEBSITE SEO</span>
                </div>


                <div className="seo-visual-body">

                  <div className="seo-visual-score">
                    <small>SEO Performance</small>
                    <strong>Optimizing</strong>
                  </div>


                  <div className="seo-visual-chart">

                    <div className="seo-visual-grid">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <svg
                      viewBox="0 0 500 180"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,155 C50,150 70,125 105,130 C140,135 155,105 190,112 C225,119 245,80 275,91 C310,103 325,63 355,73 C390,85 410,45 440,55 C465,63 480,35 500,20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>


                    <span className="seo-chart-dot dot-one"></span>
                    <span className="seo-chart-dot dot-two"></span>
                    <span className="seo-chart-dot dot-three"></span>
                    <span className="seo-chart-dot dot-four"></span>
                  </div>


                  <div className="seo-visual-stats">
                    <div>
                      <small>Keywords</small>
                      <strong>Targeted</strong>
                    </div>

                    <div>
                      <small>Traffic</small>
                      <strong>Organic</strong>
                    </div>

                    <div>
                      <small>Visibility</small>
                      <strong>Growing</strong>
                    </div>
                  </div>

                </div>
              </div>


              {/* Floating card left */}
              <div className="seo-hero-float seo-float-left">
                <FaSearch />

                <div>
                  <strong>Keyword Research</strong>
                  <span>Optimized</span>
                </div>
              </div>


              {/* Floating card right */}
              <div className="seo-hero-float seo-float-right">
                <FaChartLine />

                <div>
                  <strong>Organic Growth</strong>
                  <span>Improving</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ============================================
          INTRO / SEO PILLARS
      ============================================ */}
      <section className="seo-section seo-intro-section">
        <div className="container">

          <div className="seo-section-heading seo-reveal">
            <span className="seo-section-kicker">
              A STRONG SEO FOUNDATION
            </span>

            <h2>
              SEO That Supports Your
              <span> Business Growth</span>
            </h2>

            <p>
              Good SEO is more than placing keywords on a page.
              It combines technical health, useful content, search intent,
              website structure and consistent optimization.
            </p>
          </div>


          <div className="seo-pillars-grid">

            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  className="seo-pillar-card seo-reveal"
                  key={pillar.number}
                >
                  <div className="seo-pillar-number">
                    {pillar.number}
                  </div>

                  <div className="seo-pillar-icon">
                    <Icon />
                  </div>

                  <h3>{pillar.title}</h3>

                  <p>{pillar.text}</p>
                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ============================================
          SERVICES
      ============================================ */}
      <section
        className="seo-section seo-services-section"
        id="seo-services"
      >
        <div className="container">

          <div className="seo-section-heading seo-reveal">
            <span className="seo-section-kicker">
              SEO SERVICES
            </span>

            <h2>
              Everything Your Website
              <span> Needs to Grow</span>
            </h2>

            <p>
              Choose the SEO services that match your current website
              condition, business goals and search visibility needs.
            </p>
          </div>


          <div className="seo-services-grid">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  className="seo-service-card seo-reveal"
                  key={service.title}
                >

                  <div className="seo-service-top">
                    <span className="seo-service-index">
                      0{index + 1}
                    </span>

                    <div className="seo-service-icon">
                      <Icon />
                    </div>
                  </div>


                  <h3>{service.title}</h3>

                  <p>{service.text}</p>


                  <Link
                    to={service.link}
                    className="seo-service-link"
                  >
                    Explore Service
                    <FaArrowRight />
                  </Link>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ============================================
          BENEFITS
      ============================================ */}
      <section className="seo-section seo-benefits-section">
        <div className="container">

          <div className="seo-two-column">

            <div className="seo-benefits-content seo-reveal">

              <span className="seo-section-kicker">
                WHY SEO MATTERS
              </span>

              <h2>
                Turn Search Visibility
                <span> Into Opportunity</span>
              </h2>

              <p>
                A well-optimized website can make it easier for potential
                customers to discover your business when they are already
                searching for relevant products, services and information.
              </p>


              <div className="seo-benefits-grid">

                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      className="seo-benefit-item"
                      key={benefit.title}
                    >
                      <div className="seo-benefit-icon">
                        <Icon />
                      </div>

                      <div>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.text}</p>
                      </div>
                    </div>
                  );
                })}

              </div>

            </div>


            {/* Right visual */}
            <div className="seo-benefit-visual seo-reveal">

              <div className="seo-orbit-card">

                <div className="seo-orbit-main">
                  <FaGlobe />
                  <span>SEO</span>
                </div>

                <div className="seo-orbit-item orbit-one">
                  <FaSearch />
                  <span>Keywords</span>
                </div>

                <div className="seo-orbit-item orbit-two">
                  <FaCode />
                  <span>Technical</span>
                </div>

                <div className="seo-orbit-item orbit-three">
                  <FaPenNib />
                  <span>Content</span>
                </div>

                <div className="seo-orbit-item orbit-four">
                  <FaLink />
                  <span>Links</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ============================================
          DELIVERABLES
      ============================================ */}
      <section className="seo-section seo-deliverables-section">
        <div className="container">

          <div className="seo-section-heading seo-reveal">

            <span className="seo-section-kicker">
              WHAT&apos;S INCLUDED
            </span>

            <h2>
              Practical SEO
              <span> Deliverables</span>
            </h2>

            <p>
              Clear, useful SEO work designed around the actual needs
              of your website instead of unnecessary complexity.
            </p>

          </div>


          <div className="seo-deliverables-wrap seo-reveal">

            <div className="seo-deliverables-heading">
              <div className="seo-deliverables-icon">
                <FaClipboardCheck />
              </div>

              <div>
                <span>DELIVERABLE CHECKLIST</span>
                <h3>Core SEO Optimization</h3>
              </div>
            </div>


            <div className="seo-deliverables-grid">

              {deliverables.map((item) => (
                <div
                  className="seo-deliverable-item"
                  key={item}
                >
                  <FaCheck />
                  <span>{item}</span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* ============================================
          PROCESS
      ============================================ */}
      <section className="seo-section seo-process-section">
        <div className="container">

          <div className="seo-section-heading seo-reveal">

            <span className="seo-section-kicker">
              OUR PROCESS
            </span>

            <h2>
              A Simple, Structured
              <span> SEO Process</span>
            </h2>

            <p>
              Every SEO project follows a clear process so that
              priorities are easy to understand and improvements
              can be tracked over time.
            </p>

          </div>


          <div className="seo-process-grid">

            {processSteps.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="seo-process-card seo-reveal"
                  key={item.step}
                >

                  <div className="seo-process-number">
                    {item.step}
                  </div>

                  <div className="seo-process-icon">
                    <Icon />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ============================================
          PRICING
      ============================================ */}
      <section className="seo-section seo-pricing-section">
        <div className="container">

          <div className="seo-section-heading seo-reveal">

            <span className="seo-section-kicker">
              SEO PLANS
            </span>

            <h2>
              Choose a Plan That Fits
              <span> Your Needs</span>
            </h2>

            <p>
              Flexible SEO options for websites at different stages of
              growth and optimization.
            </p>

          </div>


          <div className="seo-pricing-grid">

            {pricingPlans.map((plan) => (
              <div
                className={`seo-pricing-card seo-reveal ${
                  plan.popular ? "seo-pricing-featured" : ""
                }`}
                key={plan.name}
              >

                {plan.popular && (
                  <div className="seo-popular-badge">
                    MOST REQUESTED
                  </div>
                )}


                <div className="seo-pricing-top">
                  <span>{plan.name}</span>

                  <div className="seo-pricing-price">
                    <strong>{plan.price}</strong>
                    <small>{plan.period}</small>
                  </div>

                  <p>{plan.description}</p>
                </div>


                <div className="seo-pricing-features">

                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="seo-pricing-feature"
                    >
                      <FaCheckCircle />
                      <span>{feature}</span>
                    </div>
                  ))}

                </div>


                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="seo-plan-btn"
                >
                  Get Started
                  <FaArrowRight />
                </a>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ============================================
          ADD-ONS
      ============================================ */}
      <section className="seo-section seo-addon-section">
        <div className="container">

          <div className="seo-section-heading seo-reveal">

            <span className="seo-section-kicker">
              OPTIONAL ADD-ONS
            </span>

            <h2>
              Extend Your SEO
              <span> Strategy</span>
            </h2>

            <p>
              Add specific services when your project requires extra SEO support.
            </p>

          </div>


          <div className="seo-addon-grid">

            {addons.map((addon) => (
              <div
                className="seo-addon-card seo-reveal"
                key={addon.title}
              >

                <div className="seo-addon-price">
                  {addon.price}
                </div>

                <h3>{addon.title}</h3>

                <p>{addon.text}</p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Add to Project
                  <FaArrowRight />
                </a>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ============================================
          CTA
      ============================================ */}
      <section className="seo-cta-section">
        <div className="container">

          <div className="seo-cta-box seo-reveal">

            <div className="seo-cta-icon">
              <FaRocket />
            </div>

            <span>READY TO IMPROVE YOUR WEBSITE?</span>

            <h2>
              Let&apos;s Build a Better
              <span> Search Presence</span>
            </h2>

            <p>
              Get a practical SEO review and find out where your website
              can improve its search visibility.
            </p>

            <div className="seo-cta-buttons">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="seo-btn seo-btn-primary"
              >
                Get a Free Mini Audit
                <FaArrowRight />
              </a>

              <a
                href="#seo-faq"
                className="seo-btn seo-btn-secondary"
              >
                View FAQ
                <FaChevronDown />
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* ============================================
          FAQ
      ============================================ */}
      <section
        className="seo-section seo-faq-section"
        id="seo-faq"
      >
        <div className="container">

          <div className="seo-section-heading seo-reveal">

            <span className="seo-section-kicker">
              FAQ
            </span>

            <h2>
              Frequently Asked
              <span> Questions</span>
            </h2>

            <p>
              Here are answers to some common questions about website SEO.
            </p>

          </div>


          <div className="seo-faq-list">

            {faqs.map((faq, index) => (
              <details
                className="seo-faq-item seo-reveal"
                key={faq.question}
              >

                <summary>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{faq.question}</strong>

                  <FaChevronDown />
                </summary>

                <div className="seo-faq-answer">
                  <p>{faq.answer}</p>
                </div>

              </details>
            ))}

          </div>

        </div>
      </section>


      {/* ============================================
          SOCIAL ICON
      ============================================ */}
      <SocialIcon />


      {/* ============================================
          FOOTER
      ============================================ */}
      <Footer />
    </>
  );
}

export default Website;