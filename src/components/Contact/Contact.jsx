import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import {
  FaArrowRight,
  FaCheck,
  FaChevronDown,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaGoogle,
  FaHeadset,
  FaPhoneAlt,
  FaRocket,
  FaSearch,
  FaShieldAlt,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
  FaChartLine,
  FaComments,
  FaBullseye,
  FaCode,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import SocialIcon from "../SocialIcon/SocialIcon";
import Footer from "../Footer/Footer";

import "./Contact.css";

const API_BASE =
  window.location.hostname === "localhost"
    ? "http://127.0.0.1:8000"
    : "https://khdreamit-github-io.onrender.com";

const whatsappLink =
  "https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22";

const facebookLink =
  "https://www.facebook.com/AdulHalim.net/";

const instagramLink =
  "https://www.instagram.com/khdreamit/";

const linkedinLink =
  "https://www.linkedin.com/in/khdreamit/";

const services = [
  "Google Ads",
  "Meta Ads",
  "TikTok Ads",
  "YouTube Ads",
  "SEO",
  "Social Media",
  "Website Development",
  "Landing Page",
];

const processSteps = [
  {
    number: "01",
    icon: <FaComments />,
    title: "Tell Us About Your Business",
    text: "Share your business, website, current challenge and what you want to achieve.",
  },
  {
    number: "02",
    icon: <FaBullseye />,
    title: "We Understand Your Goal",
    text: "We review your requirements and identify the most relevant direction for your business.",
  },
  {
    number: "03",
    icon: <FaChartLine />,
    title: "We Build The Direction",
    text: "We discuss strategy, priorities, scope and the practical next steps.",
  },
  {
    number: "04",
    icon: <FaRocket />,
    title: "Start Moving Forward",
    text: "Once everything is clear, the project can move into execution and optimization.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    website_url: "",
    goal: "",
    business_type: "",
    other_business: "",
    message: "",
  });

  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPhone = (phone) =>
    /^[+]?[0-9\s\-()]{7,20}$/.test(phone);

  const errors = {
    full_name: !formData.full_name
      ? "Please enter your full name."
      : "",

    email: !formData.email
      ? "Please enter your email address."
      : !isValidEmail(formData.email)
      ? "Please enter a valid email address."
      : "",

    phone: !formData.phone
      ? "Please enter your phone or WhatsApp number."
      : !isValidPhone(formData.phone)
      ? "Please enter a valid phone number."
      : "",

    goal: !formData.goal
      ? "Please select your main goal."
      : "",

    business_type: !formData.business_type
      ? "Please select your business type."
      : "",

    other_business:
      formData.business_type === "Other" &&
      !formData.other_business
        ? "Please specify your business type."
        : "",
  };

  const isFormValid = Object.values(errors).every(
    (item) => item === ""
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));

    setSuccess("");
    setError("");
  };

  const handleBlur = (event) => {
    const { name } = event.target;

    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const allTouched = {
      full_name: true,
      email: true,
      phone: true,
      goal: true,
      business_type: true,
      other_business:
        formData.business_type === "Other",
    };

    setTouched(allTouched);

    if (!isFormValid) {
      return;
    }

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      /*
        IMPORTANT:
        This keeps the same endpoint and payload structure
        used by the existing Admin Panel lead system.
      */

      await axios.post(`${API_BASE}/leads/submit`, {
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        website_url: formData.website_url,

        company_name:
          formData.business_type === "Other"
            ? formData.other_business
            : formData.business_type,

        company_email: "",

        source:
          `Goal: ${formData.goal} | ` +
          `Business: ${formData.business_type} | ` +
          `Message: ${formData.message}`,
      });

      setSuccess(
        "Your inquiry has been sent successfully. Thank you for contacting KH Dream IT!"
      );

      setFormData({
        full_name: "",
        email: "",
        phone: "",
        website_url: "",
        goal: "",
        business_type: "",
        other_business: "",
        message: "",
      });

      setTouched({});
    } catch (submitError) {
      setError(
        "We couldn't send your inquiry right now. Please try again or contact us directly on WhatsApp."
      );
    } finally {
      setLoading(false);
    }
  };

  const getInputClass = (field) => {
    if (!touched[field]) {
      return "contact-field";
    }

    return errors[field]
      ? "contact-field contact-field-error"
      : "contact-field contact-field-success";
  };

  const getSelectClass = (field) => {
    if (!touched[field]) {
      return "contact-field contact-select-field";
    }

    return errors[field]
      ? "contact-field contact-select-field contact-field-error"
      : "contact-field contact-select-field contact-field-success";
  };

  const faqs = [
    {
      question: "What should I include in my first message?",
      answer:
        "A short description of your business, your website if you have one, your main goal and the service you are interested in is enough to start.",
    },
    {
      question: "Can I contact KH Dream IT before choosing a service?",
      answer:
        "Yes. You can share your business situation first. We can discuss your requirements and identify the relevant service or approach.",
    },
    {
      question: "What digital services does KH Dream IT provide?",
      answer:
        "Our services include Google Ads, Meta Ads, TikTok Ads, YouTube Ads, SEO, social media marketing, landing pages and website development.",
    },
    {
      question: "Can I contact the agency directly?",
      answer:
        "Yes. You can contact KH Dream IT through WhatsApp, phone, email and our social media channels.",
    },
  ];

  return (
    <div className="contact-page">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="contact-hero">

        <div className="contact-hero-grid"></div>

        <div className="contact-glow contact-glow-one"></div>
        <div className="contact-glow contact-glow-two"></div>
        <div className="contact-glow contact-glow-three"></div>

        <div className="contact-orbit contact-orbit-one"></div>
        <div className="contact-orbit contact-orbit-two"></div>

        <div className="container">
          <div className="contact-hero-content">

            <div className="contact-hero-pill">
              <span className="contact-pulse-dot"></span>
              KH DREAM IT
              <span className="contact-pill-divider">•</span>
              LET'S CONNECT
            </div>

            <h1 className="contact-hero-title">

              <span className="contact-title-line">
                Let's Talk About
              </span>

              <span className="contact-title-gradient">
                Your Growth.
              </span>

            </h1>

            <p className="contact-hero-text">
              Have a business goal, marketing challenge or website project
              in mind? Tell us what you're working on and let's explore the
              right digital direction together.
            </p>

            <div className="contact-hero-actions">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="contact-hero-primary"
              >
                <span>Start a Conversation</span>
                <FaArrowRight />
              </a>

              <a
                href="mailto:khdreamit@gmail.com"
                className="contact-hero-secondary"
              >
                <FaEnvelope />
                <span>Email Us</span>
              </a>

            </div>

            <div className="contact-hero-trust">

              <span>
                <FaCheck />
                Business Focused
              </span>

              <span>
                <FaCheck />
                Clear Communication
              </span>

              <span>
                <FaCheck />
                Practical Strategy
              </span>

            </div>

            <div className="contact-breadcrumb">
              <NavLink to="/">Home</NavLink>
              <span>›</span>
              <span>Contact</span>
            </div>

          </div>
        </div>

        <div className="contact-hero-bottom"></div>

      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="contact-intro-section">

        <div className="container">

          <div className="contact-section-heading">

            <span className="contact-section-tag">
              GET IN TOUCH
            </span>

            <h2>
              Great Projects
              <span> Start With A Conversation.</span>
            </h2>

            <p>
              Whether you're looking for more leads, more sales, better
              visibility or a stronger digital presence, start by telling us
              what your business needs.
            </p>

          </div>


          <div className="contact-info-grid">

            {/* PHONE */}
            <a
              href="tel:+8801947349917"
              className="contact-info-card"
            >

              <div className="contact-info-top">

                <div className="contact-info-icon">
                  <FaPhoneAlt />
                </div>

                <span className="contact-info-number">
                  01
                </span>

              </div>

              <span className="contact-info-label">
                CALL / WHATSAPP
              </span>

              <h3>
                Let's Talk Directly
              </h3>

              <p>
                +880 1947349917
              </p>

              <div className="contact-card-arrow">
                <FaArrowRight />
              </div>

            </a>


            {/* EMAIL */}
            <a
              href="mailto:khdreamit@gmail.com"
              className="contact-info-card"
            >

              <div className="contact-info-top">

                <div className="contact-info-icon">
                  <FaEnvelope />
                </div>

                <span className="contact-info-number">
                  02
                </span>

              </div>

              <span className="contact-info-label">
                EMAIL
              </span>

              <h3>
                Send Your Inquiry
              </h3>

              <p>
                khdreamit@gmail.com
              </p>

              <div className="contact-card-arrow">
                <FaArrowRight />
              </div>

            </a>


            {/* CONSULTATION */}
            <div className="contact-info-card">

              <div className="contact-info-top">

                <div className="contact-info-icon">
                  <FaHeadset />
                </div>

                <span className="contact-info-number">
                  03
                </span>

              </div>

              <span className="contact-info-label">
                CONSULTATION
              </span>

              <h3>
                Discuss Your Needs
              </h3>

              <p>
                Share your goals and let's discuss the right direction.
              </p>

              <div className="contact-card-arrow">
                <FaArrowRight />
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SOCIAL CONNECTION
      ====================================================== */}
      <section className="contact-social-section">

        <div className="container">

          <div className="contact-social-box">

            <div className="contact-social-copy">

              <span className="contact-section-tag">
                FIND US ONLINE
              </span>

              <h3>
                Prefer Social Media?
              </h3>

              <p>
                Connect with KH Dream IT through our social platforms and
                keep up with our latest work.
              </p>

            </div>

            <div className="contact-social-links">

              <a
                href={facebookLink}
                target="_blank"
                rel="noreferrer"
                className="contact-social-link"
              >
                <FaFacebookF />
                <span>Facebook</span>
              </a>

              <a
                href={instagramLink}
                target="_blank"
                rel="noreferrer"
                className="contact-social-link"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>

              <a
                href={linkedinLink}
                target="_blank"
                rel="noreferrer"
                className="contact-social-link"
              >
                <FaLinkedinIn />
                <span>LinkedIn</span>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="contact-social-link"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN FORM
      ====================================================== */}
      <section className="contact-form-section">

        <div className="contact-form-bg-circle circle-one"></div>
        <div className="contact-form-bg-circle circle-two"></div>

        <div className="container">

          <div className="contact-form-layout">

            {/* ==========================================
                LEFT
            =========================================== */}
            <div className="contact-form-intro">

              <span className="contact-section-tag">
                PROJECT INQUIRY
              </span>

              <h2>
                Tell Us About
                <span> Your Project.</span>
              </h2>

              <p>
                Give us a little information about your business and what
                you're trying to achieve. This helps us understand your
                requirements before the conversation begins.
              </p>


              <div className="contact-mini-list">

                <div className="contact-mini-card">

                  <div className="contact-mini-icon">
                    <FaBullseye />
                  </div>

                  <div>
                    <strong>
                      Goal First
                    </strong>

                    <span>
                      Tell us what you want to achieve.
                    </span>
                  </div>

                </div>


                <div className="contact-mini-card">

                  <div className="contact-mini-icon">
                    <FaSearch />
                  </div>

                  <div>
                    <strong>
                      Understand The Business
                    </strong>

                    <span>
                      Tell us about your market and audience.
                    </span>
                  </div>

                </div>


                <div className="contact-mini-card">

                  <div className="contact-mini-icon">
                    <FaChartLine />
                  </div>

                  <div>
                    <strong>
                      Find The Direction
                    </strong>

                    <span>
                      We'll discuss the relevant next steps.
                    </span>
                  </div>

                </div>

              </div>


              {/* QUICK WHATSAPP */}
              <div className="contact-quick-box">

                <div className="contact-quick-icon">
                  <FaWhatsapp />
                </div>

                <div className="contact-quick-copy">

                  <span>
                    NEED A QUICK CONVERSATION?
                  </span>

                  <strong>
                    Message us directly on WhatsApp.
                  </strong>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open WhatsApp
                    <FaArrowRight />
                  </a>

                </div>

              </div>

            </div>


            {/* ==========================================
                FORM
            =========================================== */}
            <div className="contact-form-card">

              <div className="contact-form-header">

                <div className="contact-form-badge">
                  START HERE
                </div>

                <h3>
                  Let's Discuss Your Business
                </h3>

                <p>
                  Fill in the required information and send your inquiry.
                </p>

              </div>


              {/* SUCCESS */}
              {success && (
                <div className="contact-alert contact-success-alert">

                  <div className="contact-alert-icon">
                    <FaCheck />
                  </div>

                  <div>
                    <strong>
                      Message Sent Successfully
                    </strong>

                    <span>
                      {success}
                    </span>
                  </div>

                </div>
              )}


              {/* ERROR */}
              {error && (
                <div className="contact-alert contact-error-alert">

                  <div className="contact-alert-icon">
                    !
                  </div>

                  <div>
                    <strong>
                      Submission Failed
                    </strong>

                    <span>
                      {error}
                    </span>
                  </div>

                </div>
              )}


              <form
                onSubmit={handleSubmit}
                noValidate
              >

                <div className="contact-form-grid">


                  {/* FULL NAME */}
                  <div className="contact-form-group">

                    <label>
                      Full Name
                      <span>*</span>
                    </label>

                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClass("full_name")}
                      placeholder="Enter your full name"
                    />

                    {touched.full_name &&
                      errors.full_name && (
                        <small className="contact-error-text">
                          {errors.full_name}
                        </small>
                    )}

                  </div>


                  {/* EMAIL */}
                  <div className="contact-form-group">

                    <label>
                      Email Address
                      <span>*</span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClass("email")}
                      placeholder="your@email.com"
                    />

                    {touched.email &&
                      errors.email && (
                        <small className="contact-error-text">
                          {errors.email}
                        </small>
                    )}

                  </div>


                  {/* PHONE */}
                  <div className="contact-form-group">

                    <label>
                      WhatsApp / Phone
                      <span>*</span>
                    </label>

                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClass("phone")}
                      placeholder="+880 1XXXXXXXXX"
                    />

                    {touched.phone &&
                      errors.phone && (
                        <small className="contact-error-text">
                          {errors.phone}
                        </small>
                    )}

                  </div>


                  {/* WEBSITE */}
                  <div className="contact-form-group">

                    <label>
                      Website URL
                    </label>

                    <input
                      type="text"
                      name="website_url"
                      value={formData.website_url}
                      onChange={handleChange}
                      className="contact-field"
                      placeholder="https://yourwebsite.com"
                    />

                  </div>


                  {/* GOAL */}
                  <div className="contact-form-group contact-form-full">

                    <label>
                      What Is Your Main Goal?
                      <span>*</span>
                    </label>

                    <div className="contact-select-wrap">

                      <select
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getSelectClass("goal")}
                      >

                        <option value="">
                          Select your main goal
                        </option>

                        <option value="Leads">
                          Generate More Leads
                        </option>

                        <option value="Sales">
                          Increase Sales
                        </option>

                        <option value="Traffic">
                          Increase Website Traffic
                        </option>

                      </select>

                      <FaChevronDown />

                    </div>

                    {touched.goal &&
                      errors.goal && (
                        <small className="contact-error-text">
                          {errors.goal}
                        </small>
                    )}

                  </div>


                  {/* BUSINESS */}
                  <div className="contact-form-group contact-form-full">

                    <label>
                      Business / Service Type
                      <span>*</span>
                    </label>

                    <div className="contact-select-wrap">

                      <select
                        name="business_type"
                        value={formData.business_type}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getSelectClass(
                          "business_type"
                        )}
                      >

                        <option value="">
                          Select your business type
                        </option>

                        <option value="E-commerce / Online Shop">
                          E-commerce / Online Shop
                        </option>

                        <option value="Local Business (Restaurant, Salon, etc.)">
                          Local Business
                        </option>

                        <option value="Real Estate">
                          Real Estate
                        </option>

                        <option value="Education / Coaching">
                          Education / Coaching
                        </option>

                        <option value="Healthcare / Clinic">
                          Healthcare / Clinic
                        </option>

                        <option value="Travel & Tourism">
                          Travel & Tourism
                        </option>

                        <option value="Fashion & Clothing">
                          Fashion & Clothing
                        </option>

                        <option value="SaaS / Tech Product">
                          SaaS / Tech Product
                        </option>

                        <option value="Other">
                          Other
                        </option>

                      </select>

                      <FaChevronDown />

                    </div>

                    {touched.business_type &&
                      errors.business_type && (
                        <small className="contact-error-text">
                          {errors.business_type}
                        </small>
                    )}

                  </div>


                  {/* OTHER BUSINESS */}
                  {formData.business_type === "Other" && (
                    <div className="contact-form-group contact-form-full">

                      <label>
                        Specify Your Business
                        <span>*</span>
                      </label>

                      <input
                        type="text"
                        name="other_business"
                        value={formData.other_business}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClass(
                          "other_business"
                        )}
                        placeholder="Enter your business type"
                      />

                      {touched.other_business &&
                        errors.other_business && (
                          <small className="contact-error-text">
                            {errors.other_business}
                          </small>
                      )}

                    </div>
                  )}


                  {/* SERVICES */}
                  <div className="contact-form-group contact-form-full">

                    <label>
                      Services We Can Help With
                    </label>

                    <div className="contact-service-list">

                      {services.map((service, index) => (
                        <span
                          key={service}
                          className="contact-service-pill"
                          style={{
                            "--service-delay":
                              `${index * 0.04}s`,
                          }}
                        >
                          {service}
                        </span>
                      ))}

                    </div>

                  </div>


                  {/* MESSAGE */}
                  <div className="contact-form-group contact-form-full">

                    <label>
                      Tell Us More
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="contact-field contact-message-field"
                      rows="6"
                      placeholder="Tell us about your business, current marketing, website, campaign or project..."
                    />

                  </div>

                </div>


                {/* SUBMIT */}
                <div className="contact-submit-area">

                  <button
                    type="submit"
                    disabled={!isFormValid || loading}
                    className="contact-submit-button"
                  >

                    {loading ? (
                      <>
                        <span className="contact-spinner"></span>
                        Sending Inquiry...
                      </>
                    ) : (
                      <>
                        Submit Project Inquiry
                        <FaArrowRight />
                      </>
                    )}

                  </button>

                  <div className="contact-submit-security">

                    <FaShieldAlt />

                    <span>
                      Your inquiry is submitted through our secure
                      website lead system.
                    </span>

                  </div>

                  {!isFormValid && (
                    <p className="contact-form-required-note">
                      Please complete all required fields to continue.
                    </p>
                  )}

                </div>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      <section className="contact-process-section">

        <div className="container">

          <div className="contact-section-heading">

            <span className="contact-section-tag">
              WHAT HAPPENS NEXT
            </span>

            <h2>
              From Your Message
              <span> To The Next Step.</span>
            </h2>

            <p>
              We keep the beginning simple, clear and focused on
              understanding your business.
            </p>

          </div>


          <div className="contact-process-grid">

            {processSteps.map((step, index) => (
              <div
                className="contact-process-card"
                key={step.number}
              >

                <div className="contact-process-top">

                  <div className="contact-process-number">
                    {step.number}
                  </div>

                  <div className="contact-process-icon">
                    {step.icon}
                  </div>

                </div>

                {index < processSteps.length - 1 && (
                  <div className="contact-process-line"></div>
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
          FAQ
      ====================================================== */}
      <section className="contact-faq-section">

        <div className="container">

          <div className="contact-section-heading">

            <span className="contact-section-tag">
              QUESTIONS
            </span>

            <h2>
              Before You
              <span> Reach Out.</span>
            </h2>

            <p>
              A few common questions about starting a conversation
              with KH Dream IT.
            </p>

          </div>


          <div className="contact-faq-list">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={
                    `contact-faq-item ${
                      isOpen
                        ? "contact-faq-open"
                        : ""
                    }`
                  }
                >

                  <button
                    type="button"
                    className="contact-faq-question"
                    onClick={() =>
                      setOpenFaq(
                        isOpen
                          ? -1
                          : index
                      )
                    }
                  >

                    <span>
                      {faq.question}
                    </span>

                    <FaChevronDown />

                  </button>

                  <div className="contact-faq-answer">

                    <p>
                      {faq.answer}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="contact-final-section">

        <div className="contact-final-grid"></div>

        <div className="contact-final-glow final-one"></div>
        <div className="contact-final-glow final-two"></div>

        <div className="container">

          <div className="contact-final-content">

            <span className="contact-section-tag">
              YOUR NEXT STEP
            </span>

            <h2>
              Have Something
              <span>In Mind?</span>
            </h2>

            <p>
              Don't overthink the first step. Tell us about your business,
              your goal or your challenge and let's start from there.
            </p>

            <div className="contact-final-actions">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="contact-final-primary"
              >
                <FaWhatsapp />
                Talk on WhatsApp
              </a>

              <a
                href="mailto:khdreamit@gmail.com"
                className="contact-final-secondary"
              >
                <FaEnvelope />
                Send an Email
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

export default Contact;