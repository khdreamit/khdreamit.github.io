import React from "react";
import {
  FaLayerGroup,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaPlug,
  FaShieldAlt,
  FaMobileAlt,
  FaRocket,
  FaCode,
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaCheckCircle,
  FaArrowRight,
  FaUsers,
  FaCogs,
  FaCloud,
  FaProjectDiagram,
  FaSearch,
  FaLightbulb,
  FaTools,
  FaChevronDown,
} from "react-icons/fa";

import "./FullStackDevelopment.css";

const FullStackDevelopment = () => {
  const services = [
    {
      icon: FaLaptopCode,
      title: "Frontend Development",
      text: "Build responsive, modern and interactive user interfaces that provide a clear and smooth experience across devices.",
    },
    {
      icon: FaServer,
      title: "Backend Development",
      text: "Develop server-side functionality, application logic and backend systems that power your website or web application.",
    },
    {
      icon: FaDatabase,
      title: "Database Integration",
      text: "Connect your application with a suitable database structure to store, manage and retrieve project data.",
    },
    {
      icon: FaPlug,
      title: "API Development",
      text: "Create APIs that allow the frontend, backend, mobile applications and external services to communicate with each other.",
    },
    {
      icon: FaShieldAlt,
      title: "Authentication & Security",
      text: "Implement login, registration, permissions and practical security measures based on the requirements of your project.",
    },
    {
      icon: FaRocket,
      title: "Deployment & Optimization",
      text: "Prepare the complete application for deployment and improve the overall structure, performance and usability.",
    },
  ];

  const technologies = [
    {
      icon: FaReact,
      title: "React",
      text: "Component-based frontend development for modern web interfaces.",
    },
    {
      icon: FaJsSquare,
      title: "JavaScript",
      text: "Interactive functionality and application logic.",
    },
    {
      icon: FaNodeJs,
      title: "Node.js",
      text: "Server-side JavaScript runtime for backend applications.",
    },
    {
      icon: FaServer,
      title: "Express.js",
      text: "Backend framework for APIs and web application services.",
    },
    {
      icon: FaDatabase,
      title: "MongoDB / MySQL",
      text: "Database solutions selected according to project requirements.",
    },
    {
      icon: FaGitAlt,
      title: "Git & GitHub",
      text: "Version control and organized project development.",
    },
  ];

  const stackLayers = [
    {
      number: "01",
      icon: FaLaptopCode,
      title: "Frontend Layer",
      text: "The part of the application users see and interact with.",
      points: [
        "Responsive UI",
        "Navigation",
        "Forms",
        "Interactive Components",
      ],
    },
    {
      number: "02",
      icon: FaServer,
      title: "Backend Layer",
      text: "The server-side system responsible for application functionality.",
      points: [
        "Business Logic",
        "APIs",
        "Authentication",
        "Request Handling",
      ],
    },
    {
      number: "03",
      icon: FaDatabase,
      title: "Database Layer",
      text: "The data layer responsible for storing and managing application information.",
      points: [
        "Data Storage",
        "Data Retrieval",
        "Data Management",
        "Database Integration",
      ],
    },
  ];

  const projectTypes = [
    "Business web applications",
    "Service business websites",
    "Custom web applications",
    "Admin dashboards",
    "Booking systems",
    "Customer portals",
    "Authentication-based applications",
    "Database-powered websites",
    "Lead management systems",
    "API-powered applications",
    "E-commerce applications",
    "Internal business tools",
  ];

  const processSteps = [
    {
      number: "01",
      icon: FaSearch,
      title: "Requirement Analysis",
      text: "We understand the business goals, users, features, data requirements and technical needs of your application.",
    },
    {
      number: "02",
      icon: FaLightbulb,
      title: "Architecture Planning",
      text: "We plan the frontend, backend, database, API structure and overall application architecture.",
    },
    {
      number: "03",
      icon: FaLaptopCode,
      title: "Frontend Development",
      text: "We build the user interface, responsive layouts, navigation and interactive frontend components.",
    },
    {
      number: "04",
      icon: FaServer,
      title: "Backend Development",
      text: "We develop the server-side functionality, business logic, APIs and required application services.",
    },
    {
      number: "05",
      icon: FaDatabase,
      title: "Database Integration",
      text: "We connect the application with the required database and implement the necessary data operations.",
    },
    {
      number: "06",
      icon: FaTools,
      title: "Testing & Deployment",
      text: "We test the complete application, fix issues and prepare the project for deployment and future updates.",
    },
  ];

  const benefits = [
    {
      icon: FaLayerGroup,
      title: "Complete Development",
      text: "Frontend, backend and database functionality can be developed as one connected application.",
    },
    {
      icon: FaProjectDiagram,
      title: "Connected Systems",
      text: "Your interface, APIs, server-side logic and database work together as a complete system.",
    },
    {
      icon: FaUsers,
      title: "Better User Experience",
      text: "Create a smoother experience by connecting frontend interactions with reliable backend functionality.",
    },
    {
      icon: FaCogs,
      title: "Custom Functionality",
      text: "Build features around your actual business requirements instead of relying only on fixed templates.",
    },
    {
      icon: FaShieldAlt,
      title: "Structured Access",
      text: "Support authentication, permissions and role-based access when required by the application.",
    },
    {
      icon: FaRocket,
      title: "Ready To Grow",
      text: "A well-planned full-stack structure can make it easier to add new features as the project evolves.",
    },
  ];

  const faqs = [
    {
      question: "What is full-stack development?",
      answer:
        "Full-stack development covers the main layers of a web application, including the frontend, backend, APIs and database integration.",
    },
    {
      question: "Can you build both the frontend and backend?",
      answer:
        "Yes. A full-stack project can include the user interface, server-side functionality, APIs, authentication and database integration.",
    },
    {
      question: "Can you build a custom web application from scratch?",
      answer:
        "Yes. Custom web applications can be planned and developed according to your business requirements, user flow and required features.",
    },
    {
      question: "Can you connect a React frontend with a backend?",
      answer:
        "Yes. A React frontend can communicate with a backend through APIs and can work with database-driven functionality.",
    },
    {
      question: "Can you add user login and registration?",
      answer:
        "Yes. Authentication features such as registration, login, user sessions and role-based access can be implemented when required.",
    },
    {
      question: "Can you work with an existing project?",
      answer:
        "Yes. Full-stack development can also involve extending, rebuilding or integrating parts of an existing frontend, backend or database system.",
    },
  ];

  return (
    <main className="full-stack-development-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="fs-hero">
        <div className="container">

          <div className="row align-items-center gy-5">

            <div className="col-lg-7">
              <div className="fs-hero-content">

                <span className="fs-badge">
                  <FaLayerGroup />
                  Website Development Service
                </span>

                <h1>
                  Complete
                  <span> Full-Stack Development</span>
                  For Modern Web Applications
                </h1>

                <p className="fs-hero-text">
                  Build your website or web application from frontend to
                  backend. We connect responsive interfaces, APIs, databases,
                  authentication and business logic into one complete system.
                </p>

                <div className="fs-hero-buttons">

                  <a
                    href="/contact"
                    className="fs-btn fs-btn-primary"
                  >
                    Start Your Project
                    <FaArrowRight />
                  </a>

                  <a
                    href="/portfolio"
                    className="fs-btn fs-btn-secondary"
                  >
                    View Our Work
                  </a>

                </div>

                <div className="fs-trust-row">

                  <div>
                    <FaCheckCircle />
                    <span>Frontend + Backend</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>API + Database</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Responsive System</span>
                  </div>

                </div>

              </div>
            </div>


            <div className="col-lg-5">

              <div className="fs-hero-visual">

                <div className="fs-stack-card">

                  <div className="fs-stack-header">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>


                  <div className="fs-stack-body">

                    <div className="fs-layer fs-layer-frontend">

                      <div className="fs-layer-icon">
                        <FaLaptopCode />
                      </div>

                      <div className="fs-layer-content">
                        <strong>Frontend</strong>
                        <small>User Interface</small>
                      </div>

                    </div>


                    <div className="fs-connection">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>


                    <div className="fs-layer fs-layer-api">

                      <div className="fs-layer-icon">
                        <FaPlug />
                      </div>

                      <div className="fs-layer-content">
                        <strong>API / Server</strong>
                        <small>Application Logic</small>
                      </div>

                    </div>


                    <div className="fs-connection">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>


                    <div className="fs-layer fs-layer-database">

                      <div className="fs-layer-icon">
                        <FaDatabase />
                      </div>

                      <div className="fs-layer-content">
                        <strong>Database</strong>
                        <small>Application Data</small>
                      </div>

                    </div>

                  </div>

                </div>


                <div className="fs-floating-card fs-floating-one">

                  <FaCode />

                  <div>
                    <strong>Full Stack</strong>
                    <small>Complete System</small>
                  </div>

                </div>


                <div className="fs-floating-card fs-floating-two">

                  <FaCloud />

                  <div>
                    <strong>Deployment</strong>
                    <small>Ready To Launch</small>
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

      <section className="fs-section fs-services-section">

        <div className="container">

          <div className="fs-section-heading text-center">

            <span className="fs-small-label">
              What We Offer
            </span>

            <h2>
              Complete Full-Stack
              <span> Development Services</span>
            </h2>

            <p>
              We can handle the main technical layers of your web project,
              from the user-facing interface to server-side logic and data
              management.
            </p>

          </div>


          <div className="row g-4 mt-2">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  className="col-md-6 col-lg-4"
                  key={index}
                >

                  <div className="fs-service-card">

                    <div className="fs-service-icon">
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


      {/* =====================================================
          FULL STACK ARCHITECTURE
      ===================================================== */}

      <section className="fs-section fs-stack-section">

        <div className="container">

          <div className="fs-section-heading text-center">

            <span className="fs-small-label">
              Full-Stack Architecture
            </span>

            <h2>
              Three Main Layers
              <span> Working Together</span>
            </h2>

            <p>
              A full-stack application connects the interface users interact
              with to the backend functionality and the data layer behind it.
            </p>

          </div>


          <div className="row g-4 mt-2">

            {stackLayers.map((layer, index) => {
              const Icon = layer.icon;

              return (
                <div
                  className="col-lg-4"
                  key={index}
                >

                  <div className={`fs-architecture-card fs-architecture-${index + 1}`}>

                    <div className="fs-architecture-top">

                      <span className="fs-architecture-number">
                        {layer.number}
                      </span>

                      <div className="fs-architecture-icon">
                        <Icon />
                      </div>

                    </div>

                    <h3>{layer.title}</h3>

                    <p>{layer.text}</p>

                    <div className="fs-layer-points">

                      {layer.points.map((point) => (
                        <div key={point}>
                          <FaCheckCircle />
                          <span>{point}</span>
                        </div>
                      ))}

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGIES
      ===================================================== */}

      <section className="fs-section fs-tech-section">

        <div className="container">

          <div className="fs-section-heading text-center">

            <span className="fs-small-label">
              Technology Stack
            </span>

            <h2>
              Tools For
              <span> Full-Stack Development</span>
            </h2>

            <p>
              Technology choices depend on your project type, features,
              complexity, data requirements and future development needs.
            </p>

          </div>


          <div className="row g-4 mt-2">

            {technologies.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <div
                  className="col-md-6 col-lg-4"
                  key={index}
                >

                  <div className="fs-tech-card">

                    <div className="fs-tech-icon">
                      <Icon />
                    </div>

                    <div>

                      <h3>{tech.title}</h3>

                      <p>{tech.text}</p>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONNECTED SYSTEM VISUAL
      ===================================================== */}

      <section className="fs-section fs-system-section">

        <div className="container">

          <div className="row align-items-center gy-5">

            <div className="col-lg-6">

              <div className="fs-system-visual">

                <div className="fs-system-browser">

                  <div className="fs-system-browser-top">

                    <div className="fs-browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="fs-browser-address">
                      yourapp.com
                    </div>

                  </div>


                  <div className="fs-system-browser-body">

                    <div className="fs-preview-nav">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="fs-preview-heading">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="fs-preview-main">

                      <div></div>

                      <div className="fs-preview-side">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                    </div>

                  </div>

                </div>


                <div className="fs-system-api">

                  <div className="fs-api-header">
                    <FaPlug />
                    API
                  </div>

                  <div className="fs-api-line"></div>
                  <div className="fs-api-line"></div>
                  <div className="fs-api-line short"></div>

                </div>


                <div className="fs-system-database">

                  <div className="fs-db-icon">
                    <FaDatabase />
                  </div>

                  <div>
                    <strong>Database</strong>
                    <small>Connected</small>
                  </div>

                </div>

              </div>

            </div>


            <div className="col-lg-6">

              <div className="fs-system-content">

                <span className="fs-small-label">
                  Connected Application
                </span>

                <h2>
                  One Complete System
                  <span> From Interface To Data</span>
                </h2>

                <p>
                  Full-stack development brings different parts of a web
                  application together. Users interact with the frontend,
                  requests are handled through the backend and required data
                  is stored and managed through the database layer.
                </p>


                <div className="fs-system-points">

                  <div>
                    <FaCheckCircle />
                    <span>Responsive frontend interface</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Backend business logic</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>API communication</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Database integration</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Authentication and permissions</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Deployment-ready project structure</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT WE BUILD
      ===================================================== */}

      <section className="fs-section fs-build-section">

        <div className="container">

          <div className="row align-items-center gy-5">

            <div className="col-lg-5">

              <div className="fs-build-heading">

                <span className="fs-small-label">
                  What We Build
                </span>

                <h2>
                  Full-Stack Solutions
                  <span> For Different Projects</span>
                </h2>

                <p>
                  Build complete websites and web applications with the
                  frontend, backend and database working together as one
                  system.
                </p>

                <a
                  href="/contact"
                  className="fs-btn fs-btn-primary"
                >
                  Discuss Your Project
                  <FaArrowRight />
                </a>

              </div>

            </div>


            <div className="col-lg-7">

              <div className="fs-build-list">

                {projectTypes.map((item, index) => (
                  <div
                    className="fs-build-item"
                    key={index}
                  >
                    <FaCheckCircle />
                    <span>{item}</span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="fs-section fs-process-section">

        <div className="container">

          <div className="fs-section-heading text-center">

            <span className="fs-small-label">
              Our Process
            </span>

            <h2>
              How We Build Your
              <span> Full-Stack Application</span>
            </h2>

            <p>
              From planning and architecture to frontend, backend, database
              integration and testing, each stage is connected to the next.
            </p>

          </div>


          <div className="row g-4 mt-2">

            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  className="col-md-6 col-lg-4"
                  key={index}
                >

                  <div className="fs-process-card">

                    <div className="fs-process-top">

                      <span className="fs-process-number">
                        {step.number}
                      </span>

                      <div className="fs-process-icon">
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


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="fs-section fs-benefits-section">

        <div className="container">

          <div className="fs-section-heading text-center">

            <span className="fs-small-label">
              Benefits
            </span>

            <h2>
              Why Choose A
              <span> Full-Stack Solution?</span>
            </h2>

            <p>
              A complete development approach can connect the main technical
              layers of your application and provide one consistent structure
              for future development.
            </p>

          </div>


          <div className="row g-4 mt-2">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  className="col-md-6 col-lg-4"
                  key={index}
                >

                  <div className="fs-benefit-card">

                    <div className="fs-benefit-icon">
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


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="fs-cta-section">

        <div className="container">

          <div className="fs-cta-box">

            <div className="fs-cta-content">

              <span className="fs-small-label">
                Start Your Application
              </span>

              <h2>
                Need A Complete
                <span> Full-Stack Website?</span>
              </h2>

              <p>
                Tell us about your project, required features, users and
                business goals. We can discuss the frontend, backend, database
                and overall development structure your project needs.
              </p>

              <a
                href="/contact"
                className="fs-btn fs-btn-dark"
              >
                Get Started
                <FaArrowRight />
              </a>

            </div>


            <div className="fs-cta-visual">

              <FaLayerGroup />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="fs-section fs-faq-section">

        <div className="container">

          <div className="fs-section-heading text-center">

            <span className="fs-small-label">
              FAQ
            </span>

            <h2>
              Frequently Asked
              <span> Questions</span>
            </h2>

          </div>


          <div className="fs-faq-wrapper">

            {faqs.map((faq, index) => (
              <details
                className="fs-faq-item"
                key={index}
              >

                <summary>

                  <span>{faq.question}</span>

                  <FaChevronDown />

                </summary>

                <div className="fs-faq-answer">

                  <p>{faq.answer}</p>

                </div>

              </details>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="fs-final-section">

        <div className="container">

          <div className="fs-final-content text-center">

            <div className="fs-final-icon">
              <FaRocket />
            </div>

            <h2>
              Build Your Complete
              <span> Web Application</span>
            </h2>

            <p>
              Frontend. Backend. APIs. Database. Authentication. One
              connected development solution.
            </p>

            <a
              href="/contact"
              className="fs-btn fs-btn-primary"
            >
              Start Full-Stack Development
              <FaArrowRight />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default FullStackDevelopment;