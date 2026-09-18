import React from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaRocket,
  FaPalette,
  FaCode,
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaCheckCircle,
  FaArrowRight,
  FaUsers,
  FaSearch,
  FaCogs,
  FaLayerGroup,
  FaLightbulb,
  FaShieldAlt,
  FaChevronDown,
} from "react-icons/fa";

import "./FrontendDevelopment.css";

const FrontendDevelopment = () => {
  const frontendServices = [
    {
      icon: FaPalette,
      title: "Modern UI Development",
      text: "Create clean, modern and professional user interfaces that match your brand and business goals.",
    },
    {
      icon: FaMobileAlt,
      title: "Responsive Web Design",
      text: "Build layouts that work smoothly across mobile phones, tablets, laptops and desktop screens.",
    },
    {
      icon: FaRocket,
      title: "Performance Optimization",
      text: "Improve frontend structure and loading experience for a smoother and faster user experience.",
    },
    {
      icon: FaCode,
      title: "Interactive Websites",
      text: "Add useful interactions, animations and dynamic elements that make the website more engaging.",
    },
    {
      icon: FaSearch,
      title: "SEO-Friendly Frontend",
      text: "Build a clean frontend structure that provides a strong foundation for search engine optimization.",
    },
    {
      icon: FaCogs,
      title: "Component-Based Development",
      text: "Create reusable and organized frontend components that make projects easier to maintain and expand.",
    },
  ];

  const technologies = [
    {
      icon: FaHtml5,
      title: "HTML5",
      text: "Semantic and structured page markup.",
    },
    {
      icon: FaCss3Alt,
      title: "CSS3",
      text: "Modern styling, layouts and responsive design.",
    },
    {
      icon: FaJsSquare,
      title: "JavaScript",
      text: "Interactive and dynamic website functionality.",
    },
    {
      icon: FaReact,
      title: "React",
      text: "Component-based modern frontend applications.",
    },
    {
      icon: FaBootstrap,
      title: "Bootstrap",
      text: "Responsive layouts and reusable UI components.",
    },
    {
      icon: FaGitAlt,
      title: "Git & GitHub",
      text: "Version control and organized project development.",
    },
  ];

  const buildItems = [
    "Business websites",
    "Company websites",
    "Landing pages",
    "Portfolio websites",
    "Service websites",
    "Agency websites",
    "Personal websites",
    "Dashboard interfaces",
    "Frontend web applications",
    "Responsive website interfaces",
    "Redesigned website interfaces",
    "Custom UI components",
  ];

  const processSteps = [
    {
      number: "01",
      icon: FaLightbulb,
      title: "Requirement Analysis",
      text: "We understand your business, target audience, website goals and the features required for the frontend.",
    },
    {
      number: "02",
      icon: FaPalette,
      title: "UI Planning",
      text: "We plan page layouts, visual hierarchy, colors, typography, sections and overall user experience.",
    },
    {
      number: "03",
      icon: FaCode,
      title: "Frontend Development",
      text: "The approved layout is converted into a responsive and functional frontend using suitable technologies.",
    },
    {
      number: "04",
      icon: FaMobileAlt,
      title: "Responsive Implementation",
      text: "The interface is adjusted for mobile, tablet and desktop screen sizes.",
    },
    {
      number: "05",
      icon: FaCogs,
      title: "Testing & Optimization",
      text: "We test navigation, interactions, responsiveness and other important frontend elements.",
    },
    {
      number: "06",
      icon: FaCheckCircle,
      title: "Final Delivery",
      text: "After the final review, the completed frontend is prepared for deployment or integration with the backend.",
    },
  ];

  const benefits = [
    {
      icon: FaUsers,
      title: "Better User Experience",
      text: "Create a clear and easy-to-use interface that helps visitors navigate your website comfortably.",
    },
    {
      icon: FaMobileAlt,
      title: "Responsive Across Devices",
      text: "Ensure your website adapts properly to different screen sizes and modern devices.",
    },
    {
      icon: FaRocket,
      title: "Smooth Performance",
      text: "Use a cleaner frontend structure to provide a smoother browsing and interaction experience.",
    },
    {
      icon: FaLayerGroup,
      title: "Scalable Structure",
      text: "Build reusable components and organized frontend code that can grow with your project.",
    },
    {
      icon: FaShieldAlt,
      title: "Maintainable Code",
      text: "Keep the frontend organized so future improvements and updates are easier to manage.",
    },
    {
      icon: FaSearch,
      title: "SEO-Friendly Foundation",
      text: "Use structured frontend practices that support technical and on-page SEO requirements.",
    },
  ];

  const faqs = [
    {
      question: "What is frontend development?",
      answer:
        "Frontend development is the part of web development focused on what users see and interact with in a browser, including layouts, navigation, buttons, forms, animations and responsive design.",
    },
    {
      question: "Can you build a frontend from my existing design?",
      answer:
        "Yes. We can convert an existing design, reference or UI concept into a responsive and functional website frontend.",
    },
    {
      question: "Can you create a custom React website?",
      answer:
        "Yes. React can be used to build component-based websites and web interfaces with reusable sections and interactive features.",
    },
    {
      question: "Will the frontend work on mobile devices?",
      answer:
        "Yes. Responsive development is included so the website can adapt to mobile phones, tablets and desktop screens.",
    },
    {
      question: "Can you integrate the frontend with a backend?",
      answer:
        "Yes. The frontend can be prepared for API and backend integration depending on the project requirements.",
    },
    {
      question: "Can you redesign only part of my website?",
      answer:
        "Yes. Specific sections or selected pages can be redesigned or rebuilt without necessarily replacing the entire website.",
    },
  ];

  return (
    <main className="frontend-development-page">

      {/* ================= HERO ================= */}
      <section className="fd-hero">
        <div className="container">
          <div className="row align-items-center gy-5">

            <div className="col-lg-7">
              <div className="fd-hero-content">

                <span className="fd-badge">
                  <FaLaptopCode />
                  Website Development Service
                </span>

                <h1>
                  Build a Modern,
                  <span> Responsive & High-Quality Frontend</span>
                </h1>

                <p className="fd-hero-text">
                  We create modern and responsive website interfaces designed
                  around your business goals, brand identity and user
                  experience. From simple business websites to interactive
                  React interfaces, we build clean and scalable frontends.
                </p>

                <div className="fd-hero-buttons">
                  <a href="/contact" className="fd-btn fd-btn-primary">
                    Start Your Project
                    <FaArrowRight />
                  </a>

                  <a href="/portfolio" className="fd-btn fd-btn-secondary">
                    View Our Work
                  </a>
                </div>

                <div className="fd-trust-row">
                  <div>
                    <FaCheckCircle />
                    <span>Responsive Design</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Clean Code</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Modern UI</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-5">
              <div className="fd-hero-visual">

                <div className="fd-browser">

                  <div className="fd-browser-top">
                    <div className="fd-browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="fd-address-bar"></div>
                  </div>

                  <div className="fd-browser-content">

                    <div className="fd-preview-navbar">
                      <div className="fd-preview-logo"></div>

                      <div className="fd-preview-links">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>

                    <div className="fd-preview-hero">
                      <div className="fd-preview-copy">
                        <span></span>
                        <span></span>
                        <span></span>

                        <div className="fd-preview-btns">
                          <div></div>
                          <div></div>
                        </div>
                      </div>

                      <div className="fd-preview-image"></div>
                    </div>

                    <div className="fd-preview-cards">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>

                  </div>

                </div>

                <div className="fd-floating-card fd-floating-one">
                  <FaReact />
                  <div>
                    <strong>React</strong>
                    <small>Modern UI</small>
                  </div>
                </div>

                <div className="fd-floating-card fd-floating-two">
                  <FaMobileAlt />
                  <div>
                    <strong>Responsive</strong>
                    <small>All Devices</small>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= INTRO / SERVICES ================= */}
      <section className="fd-section fd-services-section">
        <div className="container">

          <div className="fd-section-heading text-center">

            <span className="fd-small-label">
              What We Offer
            </span>

            <h2>
              Frontend Development
              <span> Focused On Users</span>
            </h2>

            <p>
              A good frontend combines visual design, usability,
              responsiveness and functionality. We focus on creating
              interfaces that are easy to understand and enjoyable to use.
            </p>

          </div>

          <div className="row g-4 mt-2">

            {frontendServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div className="fd-service-card">

                    <div className="fd-service-icon">
                      <Icon />
                    </div>

                    <h3>{service.title}</h3>

                    <p>{service.text}</p>

                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ================= TECHNOLOGIES ================= */}
      <section className="fd-section fd-tech-section">
        <div className="container">

          <div className="fd-section-heading text-center">

            <span className="fd-small-label">
              Technologies
            </span>

            <h2>
              Tools We Use For
              <span> Frontend Development</span>
            </h2>

            <p>
              We select the right frontend tools based on the project type,
              complexity, design requirements and future scalability.
            </p>

          </div>

          <div className="row g-4 mt-2">

            {technologies.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <div className="col-6 col-md-4 col-lg-2" key={index}>
                  <div className="fd-tech-card">

                    <div className="fd-tech-icon">
                      <Icon />
                    </div>

                    <h3>{tech.title}</h3>

                    <p>{tech.text}</p>

                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ================= WHAT WE BUILD ================= */}
      <section className="fd-section fd-build-section">
        <div className="container">

          <div className="row align-items-center gy-5">

            <div className="col-lg-5">

              <div className="fd-build-heading">

                <span className="fd-small-label">
                  What We Build
                </span>

                <h2>
                  Frontend Solutions
                  <span> For Different Projects</span>
                </h2>

                <p>
                  From small business websites to larger interactive
                  interfaces, we can build a frontend according to your
                  project requirements.
                </p>

                <a href="/contact" className="fd-btn fd-btn-primary">
                  Discuss Your Project
                  <FaArrowRight />
                </a>

              </div>

            </div>

            <div className="col-lg-7">

              <div className="fd-build-list">

                {buildItems.map((item, index) => (
                  <div className="fd-build-item" key={index}>
                    <FaCheckCircle />
                    <span>{item}</span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= PROCESS ================= */}
      <section className="fd-section fd-process-section">
        <div className="container">

          <div className="fd-section-heading text-center">

            <span className="fd-small-label">
              Our Process
            </span>

            <h2>
              How We Build Your
              <span> Frontend</span>
            </h2>

            <p>
              We follow a structured process from planning to final delivery
              so the frontend stays organized and aligned with your goals.
            </p>

          </div>

          <div className="row g-4 mt-2">

            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div className="col-md-6 col-lg-4" key={index}>

                  <div className="fd-process-card">

                    <div className="fd-process-top">

                      <span className="fd-process-number">
                        {step.number}
                      </span>

                      <div className="fd-process-icon">
                        <Icon />
                      </div>

                    </div>

                    <h3>{step.title}</h3>

                    <p>{step.text}</p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ================= BENEFITS ================= */}
      <section className="fd-section fd-benefits-section">
        <div className="container">

          <div className="fd-section-heading text-center">

            <span className="fd-small-label">
              Benefits
            </span>

            <h2>
              Why Invest In
              <span> Professional Frontend Development?</span>
            </h2>

            <p>
              A well-built frontend can improve how visitors interact with
              your website and provide a stronger foundation for future
              development.
            </p>

          </div>

          <div className="row g-4 mt-2">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div className="col-md-6 col-lg-4" key={index}>

                  <div className="fd-benefit-card">

                    <div className="fd-benefit-icon">
                      <Icon />
                    </div>

                    <h3>{benefit.title}</h3>

                    <p>{benefit.text}</p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ================= PROJECT TYPES ================= */}
      <section className="fd-section fd-project-section">
        <div className="container">

          <div className="row align-items-center gy-5">

            <div className="col-lg-6">

              <div className="fd-project-visual">

                <div className="fd-device fd-desktop-device">

                  <div className="fd-device-screen">

                    <div className="fd-screen-header"></div>

                    <div className="fd-screen-body">

                      <div className="fd-screen-left">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <div className="fd-screen-right">

                        <div></div>

                        <div className="fd-screen-box-row">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>

                      </div>

                    </div>

                  </div>

                  <div className="fd-device-stand"></div>

                </div>


                <div className="fd-device fd-mobile-device">

                  <div className="fd-mobile-screen">

                    <div className="fd-mobile-header"></div>

                    <div className="fd-mobile-content">
                      <span></span>
                      <span></span>
                      <span></span>

                      <div></div>
                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div className="col-lg-6">

              <div className="fd-project-content">

                <span className="fd-small-label">
                  Built For Your Goals
                </span>

                <h2>
                  Create A Frontend That
                  <span> Works For Your Business</span>
                </h2>

                <p>
                  Whether you need a simple company website, a landing page,
                  an agency website or a custom React interface, the frontend
                  should clearly communicate your message and guide visitors
                  toward the right action.
                </p>

                <div className="fd-project-points">

                  <div>
                    <FaCheckCircle />
                    <span>Clear website structure</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Consistent visual design</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Responsive layouts</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Interactive user interface</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Reusable frontend components</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Future-ready development structure</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="fd-cta-section">
        <div className="container">

          <div className="fd-cta-box">

            <div className="fd-cta-content">

              <span className="fd-small-label">
                Start Your Project
              </span>

              <h2>
                Need A Modern Frontend
                <span> For Your Website?</span>
              </h2>

              <p>
                Tell us about your website, design idea or business
                requirements. We can discuss the right frontend approach for
                your project.
              </p>

              <a href="/contact" className="fd-btn fd-btn-dark">
                Get Started
                <FaArrowRight />
              </a>

            </div>

            <div className="fd-cta-icon">
              <FaLaptopCode />
            </div>

          </div>

        </div>
      </section>


      {/* ================= FAQ ================= */}
      <section className="fd-section fd-faq-section">
        <div className="container">

          <div className="fd-section-heading text-center">

            <span className="fd-small-label">
              FAQ
            </span>

            <h2>
              Frequently Asked
              <span> Questions</span>
            </h2>

          </div>

          <div className="fd-faq-wrapper">

            {faqs.map((faq, index) => (
              <details className="fd-faq-item" key={index}>

                <summary>
                  <span>{faq.question}</span>
                  <FaChevronDown />
                </summary>

                <div className="fd-faq-answer">
                  <p>{faq.answer}</p>
                </div>

              </details>
            ))}

          </div>

        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="fd-final-section">
        <div className="container">

          <div className="fd-final-content text-center">

            <div className="fd-final-icon">
              <FaRocket />
            </div>

            <h2>
              Let's Build A Frontend
              <span> Your Visitors Will Love</span>
            </h2>

            <p>
              Modern interface. Responsive design. Clean development.
              Better user experience.
            </p>

            <a href="/contact" className="fd-btn fd-btn-primary">
              Start Frontend Development
              <FaArrowRight />
            </a>

          </div>

        </div>
      </section>

    </main>
  );
};

export default FrontendDevelopment;