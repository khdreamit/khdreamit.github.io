import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaArrowRight,
  FaBullseye,
  FaChartLine,
  FaCheck,
  FaCode,
  FaFacebookF,
  FaGoogle,
  FaLightbulb,
  FaLinkedinIn,
  FaMegaport,
  FaPeopleCarry,
  FaRocket,
  FaSearch,
  FaShieldAlt,
  FaTiktok,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";

import CEOImage from "../../assets/CEO.png";

import SocialIcon from "../SocialIcon/SocialIcon";
import Footer from "../Footer/Footer";

import "./About.css";

const whatsappLink =
  "https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22";

const agencyValues = [
  {
    icon: <FaBullseye />,
    number: "01",
    title: "Goal Focused",
    text: "Every project starts with a clear business objective so strategy stays connected to the real goal.",
  },
  {
    icon: <FaChartLine />,
    number: "02",
    title: "Data Driven",
    text: "We use research, audience insights and performance data to guide strategic decisions.",
  },
  {
    icon: <FaShieldAlt />,
    number: "03",
    title: "Transparent",
    text: "Clear communication, realistic expectations and understandable reporting are part of our workflow.",
  },
  {
    icon: <FaRocket />,
    number: "04",
    title: "Growth Mindset",
    text: "We continuously test, learn, optimize and improve the digital growth process.",
  },
];

const teamCapabilities = [
  {
    icon: <FaGoogle />,
    tag: "PAID MEDIA",
    title: "Google Ads",
    text: "Search, Shopping, Performance Max and YouTube campaign strategy focused on relevant traffic and conversions.",
  },
  {
    icon: <FaFacebookF />,
    tag: "PAID SOCIAL",
    title: "Meta Advertising",
    text: "Facebook and Instagram advertising with audience research, creative testing and campaign optimization.",
  },
  {
    icon: <FaSearch />,
    tag: "ORGANIC GROWTH",
    title: "SEO",
    text: "Technical, on-page, off-page and local SEO strategies designed to improve online visibility.",
  },
  {
    icon: <FaCode />,
    tag: "WEB SOLUTIONS",
    title: "Website Development",
    text: "Modern responsive websites and landing pages built to support credibility, usability and conversion.",
  },
  {
    icon: <FaYoutube />,
    tag: "VIDEO GROWTH",
    title: "YouTube Marketing",
    text: "Channel optimization, SEO-focused content strategy and advertising support for sustainable video growth.",
  },
  {
    icon: <FaTiktok />,
    tag: "SOCIAL GROWTH",
    title: "Social Media",
    text: "Content direction, social strategy and audience-focused growth across modern social platforms.",
  },
];

const workingSteps = [
  {
    number: "01",
    title: "Discover",
    text: "We learn about your business, audience, market, offer and growth goals.",
  },
  {
    number: "02",
    title: "Strategize",
    text: "We turn research into a practical digital marketing and execution plan.",
  },
  {
    number: "03",
    title: "Execute",
    text: "Campaigns, content, optimization and development are handled through a clear workflow.",
  },
  {
    number: "04",
    title: "Optimize",
    text: "We review performance, identify opportunities and improve what matters most.",
  },
];

const About = () => {
  return (
    <div className="about-page">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="about-agency-hero">

        <div className="about-hero-grid"></div>

        <div className="about-hero-glow about-hero-glow-one"></div>
        <div className="about-hero-glow about-hero-glow-two"></div>

        <div className="about-orbit about-orbit-one">
          <span></span>
        </div>

        <div className="about-orbit about-orbit-two">
          <span></span>
        </div>

        <div className="container">
          <div className="about-agency-hero-content">

            <div className="about-eyebrow">
              <span className="about-eyebrow-dot"></span>
              KH DREAM IT
              <span className="about-eyebrow-line"></span>
              ABOUT & TEAM
            </div>

            <h1 className="about-hero-title">
              Building Digital
              <span>Growth Together.</span>
            </h1>

            <p className="about-hero-description">
              KH Dream IT is a digital marketing and web solutions agency
              focused on helping businesses build stronger visibility,
              generate better opportunities and create sustainable growth.
            </p>

            <div className="about-hero-actions">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="about-main-btn"
              >
                Start a Conversation
                <FaArrowRight />
              </a>

              <NavLink
                to="/services"
                className="about-outline-btn"
              >
                Explore Our Services
              </NavLink>

            </div>

            <div className="about-breadcrumb">
              <NavLink to="/">Home</NavLink>
              <span>›</span>
              <span>About & Team</span>
            </div>

          </div>
        </div>

        <div className="about-hero-bottom"></div>

      </section>


      {/* =====================================================
          WHO WE ARE
      ====================================================== */}
      <section className="about-agency-section">

        <div className="container">

          <div className="about-section-intro">

            <div>
              <span className="about-section-tag">
                WHO WE ARE
              </span>

              <h2>
                More Than an Agency.
                <span> A Growth Partner.</span>
              </h2>
            </div>

            <p>
              KH Dream IT brings digital marketing, advertising, SEO, social
              media and web solutions together under one agency. We focus on
              understanding the business first, then building the right
              strategy around its actual goals.
            </p>

          </div>


          <div className="about-agency-grid">

            <div className="about-story-card about-story-main">

              <div className="about-card-icon about-card-icon-large">
                <FaMegaport />
              </div>

              <span className="about-mini-label">
                OUR STORY
              </span>

              <h3>
                Strategy, creativity and technology working as one.
              </h3>

              <p>
                Digital growth rarely comes from one channel alone. A strong
                digital presence can require advertising, search visibility,
                social communication, useful content and a website that
                supports the customer journey.
              </p>

              <p>
                That is the approach behind KH Dream IT. Instead of treating
                every service as an isolated task, we look at the bigger
                picture and build connected digital solutions around the
                business.
              </p>

              <div className="about-story-bottom">
                <span>MARKETING</span>
                <span>SEO</span>
                <span>WEB</span>
                <span>GROWTH</span>
              </div>

            </div>


            <div className="about-side-stack">

              <div className="about-story-card about-story-small">

                <div className="about-card-icon">
                  <FaLightbulb />
                </div>

                <span className="about-mini-label">
                  OUR APPROACH
                </span>

                <h3>
                  Think clearly. Execute carefully.
                </h3>

                <p>
                  We turn business goals into practical actions, campaigns
                  and measurable improvement areas.
                </p>

              </div>


              <div className="about-story-card about-story-small about-gold-card">

                <div className="about-card-icon">
                  <FaUsers />
                </div>

                <span className="about-mini-label">
                  OUR TEAM
                </span>

                <h3>
                  Different skills. One direction.
                </h3>

                <p>
                  Marketing, advertising, SEO, social media and development
                  capabilities work together around the client's business goal.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MISSION & VISION
      ====================================================== */}
      <section className="about-mission-section">

        <div className="container">

          <div className="about-mission-heading">

            <span className="about-section-tag">
              MISSION & VISION
            </span>

            <h2>
              Where We Are Going
              <span> & Why We Exist.</span>
            </h2>

          </div>


          <div className="about-mission-grid">

            <div className="about-mission-card">

              <div className="about-mission-number">
                01
              </div>

              <div className="about-mission-icon">
                <FaRocket />
              </div>

              <span>
                OUR MISSION
              </span>

              <h3>
                Help businesses make better use of digital.
              </h3>

              <p>
                Our mission is to make digital marketing more practical,
                transparent and focused on business goals by combining
                strategy, execution and continuous optimization.
              </p>

            </div>


            <div className="about-mission-card about-mission-vision">

              <div className="about-mission-number">
                02
              </div>

              <div className="about-mission-icon">
                <FaBullseye />
              </div>

              <span>
                OUR VISION
              </span>

              <h3>
                Build long-term digital growth systems.
              </h3>

              <p>
                We want businesses to have a digital presence that does more
                than look good—a system that attracts attention, creates
                opportunities and supports sustainable growth.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ====================================================== */}
      <section className="about-values-section">

        <div className="container">

          <div className="about-section-heading-center">

            <span className="about-section-tag">
              WHAT WE BELIEVE
            </span>

            <h2>
              The Principles Behind
              <span> Our Work.</span>
            </h2>

            <p>
              These principles shape how we communicate, plan, execute and
              improve our work with clients.
            </p>

          </div>


          <div className="about-values-grid">

            {agencyValues.map((item) => (
              <div
                className="about-value-card"
                key={item.number}
              >

                <div className="about-value-top">

                  <div className="about-value-icon">
                    {item.icon}
                  </div>

                  <span>
                    {item.number}
                  </span>

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <div className="about-value-line"></div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CEO
      ====================================================== */}
      <section className="about-ceo-section">

        <div className="about-ceo-bg-circle about-ceo-bg-circle-one"></div>
        <div className="about-ceo-bg-circle about-ceo-bg-circle-two"></div>

        <div className="container">

          <div className="about-ceo-grid">

            {/* =========================
                CEO VISUAL
            ========================== */}
            <div className="about-ceo-visual">

              <div className="about-ceo-orbit orbit-one"></div>
              <div className="about-ceo-orbit orbit-two"></div>

              <div className="about-ceo-frame">

                <div className="about-ceo-frame-glow"></div>

                <div className="about-ceo-image-wrap">

                  <img
                    src={CEOImage}
                    alt="MD. Abdul Halim - CEO & Founder of KH Dream IT"
                    className="about-ceo-image"
                  />

                  <div className="about-ceo-image-overlay"></div>

                  <div className="about-ceo-image-label">
                    <span>KH DREAM IT</span>
                    <strong>CEO & FOUNDER</strong>
                  </div>

                </div>

              </div>


              {/* Floating card 01 */}
              <div className="about-ceo-floating floating-one">

                <div className="about-ceo-floating-icon">
                  <FaChartLine />
                </div>

                <div>
                  <strong>Strategy</strong>
                  <span>Driven</span>
                </div>

              </div>


              {/* Floating card 02 */}
              <div className="about-ceo-floating floating-two">

                <div className="about-ceo-floating-icon">
                  <FaRocket />
                </div>

                <div>
                  <strong>Growth</strong>
                  <span>Focused</span>
                </div>

              </div>

            </div>


            {/* =========================
                CEO CONTENT
            ========================== */}
            <div className="about-ceo-content">

              <span className="about-section-tag">
                AGENCY LEADERSHIP
              </span>

              <h2>
                Meet the
                <span> CEO & Founder.</span>
              </h2>

              <div className="about-ceo-name">
                MD. ABDUL HALIM
              </div>

              <div className="about-ceo-role">
                CEO & FOUNDER — KH DREAM IT
              </div>

              <p>
                Abdul Halim leads KH Dream IT with a focus on practical
                digital marketing, measurable growth and strong client
                communication.
              </p>

              <p>
                His role combines business understanding, strategic direction,
                campaign planning and coordination across the agency's
                digital services.
              </p>

              <div className="about-ceo-points">

                <div>
                  <FaCheck />
                  <span>Business-first thinking</span>
                </div>

                <div>
                  <FaCheck />
                  <span>Performance-focused execution</span>
                </div>

                <div>
                  <FaCheck />
                  <span>Clear client communication</span>
                </div>

                <div>
                  <FaCheck />
                  <span>Continuous optimization</span>
                </div>

              </div>

              <div className="about-ceo-actions">

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="about-dark-btn"
                >
                  Talk With Our CEO
                  <FaArrowRight />
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TEAM
      ====================================================== */}
      <section className="about-team-section">

        <div className="container">

          <div className="about-section-heading-center">

            <span className="about-section-tag">
              OUR TEAM
            </span>

            <h2>
              Different Expertise.
              <span> One Team.</span>
            </h2>

            <p>
              KH Dream IT brings together different digital capabilities so
              businesses can access the right expertise for each stage of
              their online growth.
            </p>

          </div>


          <div className="about-team-grid">

            {teamCapabilities.map((member, index) => (
              <div
                className="about-team-card"
                key={member.title}
                style={{
                  "--team-delay": `${index * 0.08}s`,
                }}
              >

                <div className="about-team-top">

                  <div className="about-team-icon">
                    {member.icon}
                  </div>

                  <FaArrowRight className="about-team-arrow" />

                </div>

                <span className="about-team-tag">
                  {member.tag}
                </span>

                <h3>
                  {member.title}
                </h3>

                <p>
                  {member.text}
                </p>

                <div className="about-team-bottom-line"></div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW WE WORK
      ====================================================== */}
      <section className="about-process-section">

        <div className="container">

          <div className="about-process-heading">

            <div>

              <span className="about-section-tag">
                HOW WE WORK
              </span>

              <h2>
                From First Conversation
                <span> To Real Execution.</span>
              </h2>

            </div>

            <p>
              Our workflow is designed to keep projects organized, clear and
              focused on continuous progress.
            </p>

          </div>


          <div className="about-process-grid">

            {workingSteps.map((step, index) => (
              <div
                className="about-process-card"
                key={step.number}
              >

                <div className="about-process-number">
                  {step.number}
                </div>

                {index < workingSteps.length - 1 && (
                  <div className="about-process-connector"></div>
                )}

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICE REACH
      ====================================================== */}
      <section className="about-reach-section">

        <div className="container">

          <div className="about-reach-box">

            <div className="about-reach-content">

              <span className="about-section-tag">
                WHAT WE CAN HELP WITH
              </span>

              <h2>
                One Agency.
                <span> Multiple Growth Channels.</span>
              </h2>

              <p>
                From attracting the right audience to improving the digital
                journey, our services can work individually or together as
                part of a broader growth strategy.
              </p>

              <NavLink
                to="/services"
                className="about-gold-btn"
              >
                View All Services
                <FaArrowRight />
              </NavLink>

            </div>


            <div className="about-reach-list">

              <div>
                <FaGoogle />
                <span>Google Ads</span>
              </div>

              <div>
                <FaFacebookF />
                <span>Meta Ads</span>
              </div>

              <div>
                <FaTiktok />
                <span>TikTok Ads</span>
              </div>

              <div>
                <FaYoutube />
                <span>YouTube</span>
              </div>

              <div>
                <FaSearch />
                <span>SEO</span>
              </div>

              <div>
                <FaCode />
                <span>Web Development</span>
              </div>

              <div>
                <FaPeopleCarry />
                <span>Social Media</span>
              </div>

              <div>
                <FaLinkedinIn />
                <span>Digital Strategy</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="about-final-section">

        <div className="about-final-glow about-final-glow-one"></div>
        <div className="about-final-glow about-final-glow-two"></div>

        <div className="container">

          <div className="about-final-content">

            <span className="about-section-tag">
              READY TO WORK TOGETHER?
            </span>

            <h2>
              Let's Build Something
              <span> That Grows.</span>
            </h2>

            <p>
              Tell us about your business, your challenge and where you want
              to go. We'll start with the conversation and build from there.
            </p>

            <div className="about-final-actions">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="about-main-btn"
              >
                Get Free Consultation
                <FaArrowRight />
              </a>

              <NavLink
                to="/contact"
                className="about-final-outline"
              >
                Contact KH Dream IT
              </NavLink>

            </div>

          </div>

        </div>

      </section>


      <SocialIcon />
      <Footer />

    </div>
  );
};

export default About;