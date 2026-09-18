import React from "react";
import {
  FaServer,
  FaDatabase,
  FaCode,
  FaCogs,
  FaShieldAlt,
  FaRocket,
  FaCloud,
  FaPlug,
  FaCheckCircle,
  FaArrowRight,
  FaLock,
  FaChartLine,
  FaUsers,
  FaLayerGroup,
  FaTools,
  FaProjectDiagram,
  FaSearch,
  FaLightbulb,
  FaChevronDown,
} from "react-icons/fa";

import "./BackendDevelopment.css";

const BackendDevelopment = () => {
  const backendServices = [
    {
      icon: FaServer,
      title: "Custom Backend Development",
      text: "Build reliable backend systems that handle your website functionality, business logic and application data.",
    },
    {
      icon: FaPlug,
      title: "API Development",
      text: "Create structured APIs that allow your frontend, mobile apps and other systems to communicate with your backend.",
    },
    {
      icon: FaDatabase,
      title: "Database Integration",
      text: "Connect and organize application data using a database structure suitable for your project's requirements.",
    },
    {
      icon: FaLock,
      title: "Authentication & Access",
      text: "Implement login, registration, user roles and access control based on your application's needs.",
    },
    {
      icon: FaShieldAlt,
      title: "Backend Security",
      text: "Apply practical security measures to help protect user data, authentication systems and application endpoints.",
    },
    {
      icon: FaRocket,
      title: "Performance Optimization",
      text: "Improve backend response time, request handling and application structure for a smoother experience.",
    },
  ];

  const technologies = [
    {
      title: "Node.js",
      text: "JavaScript runtime for scalable backend applications.",
    },
    {
      title: "Express.js",
      text: "Lightweight framework for APIs and web applications.",
    },
    {
      title: "MongoDB",
      text: "Flexible database solution for application data.",
    },
    {
      title: "REST API",
      text: "Structured communication between frontend and backend systems.",
    },
    {
      title: "MySQL",
      text: "Relational database support for structured applications.",
    },
    {
      title: "Git & GitHub",
      text: "Version control for organized and collaborative development.",
    },
  ];

  const buildItems = [
    "Custom backend systems",
    "REST APIs",
    "Authentication systems",
    "User registration and login",
    "Admin dashboards",
    "Database-powered websites",
    "Booking systems",
    "Contact and lead management systems",
    "Content management features",
    "Role-based access systems",
    "Third-party API integrations",
    "Frontend and backend integrations",
  ];

  const securityItems = [
    {
      icon: FaLock,
      title: "Authentication",
      text: "Secure login and registration flows can be implemented according to the application requirements.",
    },
    {
      icon: FaShieldAlt,
      title: "Authorization",
      text: "Different users can be given different levels of access to application resources.",
    },
    {
      icon: FaDatabase,
      title: "Data Protection",
      text: "Backend systems can be structured to handle sensitive application data carefully.",
    },
    {
      icon: FaTools,
      title: "Validation",
      text: "Server-side validation helps ensure incoming data follows expected rules.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      icon: FaSearch,
      title: "Requirement Analysis",
      text: "We understand your application requirements, users, features, data flow and backend functionality.",
    },
    {
      number: "02",
      icon: FaProjectDiagram,
      title: "System Planning",
      text: "We plan the backend architecture, APIs, database structure, authentication and required integrations.",
    },
    {
      number: "03",
      icon: FaCode,
      title: "Backend Development",
      text: "We build the server-side functionality, business logic, APIs and database connections.",
    },
    {
      number: "04",
      icon: FaDatabase,
      title: "Database Setup",
      text: "Application data is organized and connected with the backend according to project requirements.",
    },
    {
      number: "05",
      icon: FaShieldAlt,
      title: "Testing & Security",
      text: "We test requests, responses, validation, authentication and important backend functionality.",
    },
    {
      number: "06",
      icon: FaRocket,
      title: "Deployment & Integration",
      text: "The backend is prepared for deployment and connected with the frontend or other required systems.",
    },
  ];

  const benefits = [
    {
      icon: FaCogs,
      title: "Powerful Functionality",
      text: "Handle business logic, data processing and application functionality behind your website.",
    },
    {
      icon: FaDatabase,
      title: "Organized Data",
      text: "Store, manage and retrieve website or application data through a structured backend system.",
    },
    {
      icon: FaPlug,
      title: "Easy Integration",
      text: "Connect your frontend with APIs, databases and third-party services.",
    },
    {
      icon: FaUsers,
      title: "User Management",
      text: "Support user accounts, roles, permissions and other user-related functionality.",
    },
    {
      icon: FaShieldAlt,
      title: "Security-Focused Structure",
      text: "Use practical backend security practices to protect application functionality and data.",
    },
    {
      icon: FaChartLine,
      title: "Future Scalability",
      text: "Create a backend structure that can be extended as your website or application grows.",
    },
  ];

  const faqs = [
    {
      question: "What is backend development?",
      answer:
        "Backend development focuses on the server-side part of a website or application. It handles business logic, databases, APIs, authentication and other functionality that works behind the user interface.",
    },
    {
      question: "Can you build a custom API?",
      answer:
        "Yes. Custom APIs can be developed to connect your frontend with databases, applications and other services.",
    },
    {
      question: "Can you connect a frontend website with a database?",
      answer:
        "Yes. A backend can connect the frontend with a database and handle the requests needed to store, retrieve or update data.",
    },
    {
      question: "Can you add login and registration?",
      answer:
        "Yes. User registration, login, authentication and role-based access can be implemented based on your project requirements.",
    },
    {
      question: "Can you integrate third-party APIs?",
      answer:
        "Yes. External services and APIs can be integrated when they provide the functionality required by the project.",
    },
    {
      question: "Can you work with an existing frontend?",
      answer:
        "Yes. A backend can be developed or integrated with an existing React, HTML, WordPress or other frontend depending on the project structure.",
    },
  ];

  return (
    <main className="backend-development-page">

      {/* ================= HERO ================= */}
      <section className="bd-hero">
        <div className="container">
          <div className="row align-items-center gy-5">

            <div className="col-lg-7">
              <div className="bd-hero-content">

                <span className="bd-badge">
                  <FaServer />
                  Website Development Service
                </span>

                <h1>
                  Powerful Backend Systems
                  <span> Built For Your Website</span>
                </h1>

                <p className="bd-hero-text">
                  Build the technology behind your website with reliable
                  backend functionality, APIs, database integration,
                  authentication and scalable application architecture.
                </p>

                <div className="bd-hero-buttons">
                  <a href="/contact" className="bd-btn bd-btn-primary">
                    Start Your Project
                    <FaArrowRight />
                  </a>

                  <a href="/portfolio" className="bd-btn bd-btn-secondary">
                    View Our Work
                  </a>
                </div>

                <div className="bd-trust-row">

                  <div>
                    <FaCheckCircle />
                    <span>Custom APIs</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Database Integration</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Secure Architecture</span>
                  </div>

                </div>

              </div>
            </div>


            <div className="col-lg-5">
              <div className="bd-hero-visual">

                <div className="bd-server-card">

                  <div className="bd-server-top">
                    <div className="bd-server-light"></div>
                    <span>BACKEND SYSTEM</span>
                  </div>

                  <div className="bd-server-body">

                    <div className="bd-server-rack">
                      <div>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <div>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                      <div>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>

                    <div className="bd-server-flow">

                      <div className="bd-flow-node">
                        <FaCode />
                        <span>Frontend</span>
                      </div>

                      <div className="bd-flow-line"></div>

                      <div className="bd-flow-node">
                        <FaServer />
                        <span>API</span>
                      </div>

                      <div className="bd-flow-line"></div>

                      <div className="bd-flow-node">
                        <FaDatabase />
                        <span>Database</span>
                      </div>

                    </div>

                  </div>

                </div>

                <div className="bd-floating-card bd-floating-one">
                  <FaPlug />
                  <div>
                    <strong>API Ready</strong>
                    <small>Connected Systems</small>
                  </div>
                </div>

                <div className="bd-floating-card bd-floating-two">
                  <FaShieldAlt />
                  <div>
                    <strong>Secure</strong>
                    <small>Protected Backend</small>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= SERVICES ================= */}
      <section className="bd-section bd-services-section">
        <div className="container">

          <div className="bd-section-heading text-center">

            <span className="bd-small-label">
              What We Offer
            </span>

            <h2>
              Complete Backend
              <span> Development Services</span>
            </h2>

            <p>
              We build the server-side functionality your website or
              application needs to process data, connect systems and support
              your users.
            </p>

          </div>


          <div className="row g-4 mt-2">

            {backendServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div className="col-md-6 col-lg-4" key={index}>

                  <div className="bd-service-card">

                    <div className="bd-service-icon">
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
      <section className="bd-section bd-tech-section">
        <div className="container">

          <div className="bd-section-heading text-center">

            <span className="bd-small-label">
              Technologies
            </span>

            <h2>
              Backend Technologies
              <span> & Tools</span>
            </h2>

            <p>
              Technology choices depend on the project requirements,
              functionality, database structure and expected future growth.
            </p>

          </div>


          <div className="row g-4 mt-2">

            {technologies.map((tech, index) => (
              <div className="col-md-6 col-lg-4" key={index}>

                <div className="bd-tech-card">

                  <div className="bd-tech-number">
                    0{index + 1}
                  </div>

                  <div>
                    <h3>{tech.title}</h3>
                    <p>{tech.text}</p>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= API & DATABASE ================= */}
      <section className="bd-section bd-api-section">
        <div className="container">

          <div className="row align-items-center gy-5">

            <div className="col-lg-6">

              <div className="bd-api-visual">

                <div className="bd-api-window">

                  <div className="bd-api-window-top">
                    <span></span>
                    <span></span>
                    <span></span>

                    <div className="bd-api-address">
                      api.yourwebsite.com
                    </div>
                  </div>

                  <div className="bd-api-body">

                    <div className="bd-api-method">
                      <span>POST</span>
                      <strong>/api/users</strong>
                    </div>

                    <div className="bd-code-lines">
                      <span className="line-long"></span>
                      <span className="line-medium"></span>
                      <span className="line-short"></span>
                      <span className="line-long"></span>
                      <span className="line-medium"></span>
                      <span className="line-short"></span>
                    </div>

                    <div className="bd-api-response">
                      <div>
                        <FaCheckCircle />
                        Request Successful
                      </div>

                      <span>200 OK</span>
                    </div>

                  </div>

                </div>


                <div className="bd-database-box">

                  <div className="bd-db-header">
                    <FaDatabase />
                    Database
                  </div>

                  <div className="bd-db-row"></div>
                  <div className="bd-db-row"></div>
                  <div className="bd-db-row"></div>
                  <div className="bd-db-row"></div>

                </div>

              </div>

            </div>


            <div className="col-lg-6">

              <div className="bd-api-content">

                <span className="bd-small-label">
                  APIs & Database
                </span>

                <h2>
                  Connect Your Website
                  <span> With The Data It Needs</span>
                </h2>

                <p>
                  Modern websites and applications often need more than a
                  visual interface. A backend connects your frontend with
                  databases, APIs, authentication systems and other services.
                </p>

                <div className="bd-api-points">

                  <div>
                    <FaCheckCircle />
                    <span>Custom REST API development</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Frontend and backend integration</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Database connection and management</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>User authentication and authorization</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Third-party service integration</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Structured server-side application logic</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= WHAT WE BUILD ================= */}
      <section className="bd-section bd-build-section">
        <div className="container">

          <div className="row align-items-center gy-5">

            <div className="col-lg-5">

              <div className="bd-build-heading">

                <span className="bd-small-label">
                  What We Build
                </span>

                <h2>
                  Backend Solutions
                  <span> For Different Projects</span>
                </h2>

                <p>
                  We can develop backend functionality for websites, business
                  systems and custom web applications based on your project's
                  requirements.
                </p>

                <a href="/contact" className="bd-btn bd-btn-primary">
                  Discuss Your Project
                  <FaArrowRight />
                </a>

              </div>

            </div>


            <div className="col-lg-7">

              <div className="bd-build-list">

                {buildItems.map((item, index) => (
                  <div className="bd-build-item" key={index}>
                    <FaCheckCircle />
                    <span>{item}</span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= SECURITY ================= */}
      <section className="bd-section bd-security-section">
        <div className="container">

          <div className="bd-section-heading text-center">

            <span className="bd-small-label">
              Security
            </span>

            <h2>
              Backend Built With
              <span> Practical Security In Mind</span>
            </h2>

            <p>
              Security requirements vary by project. We consider
              authentication, validation, authorization and data protection
              while developing backend functionality.
            </p>

          </div>


          <div className="row g-4 mt-2">

            {securityItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="col-md-6 col-lg-3" key={index}>

                  <div className="bd-security-card">

                    <div className="bd-security-icon">
                      <Icon />
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ================= PROCESS ================= */}
      <section className="bd-section bd-process-section">
        <div className="container">

          <div className="bd-section-heading text-center">

            <span className="bd-small-label">
              Our Process
            </span>

            <h2>
              How We Develop Your
              <span> Backend</span>
            </h2>

            <p>
              We move from requirements and architecture planning to
              development, testing and final integration.
            </p>

          </div>


          <div className="row g-4 mt-2">

            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div className="col-md-6 col-lg-4" key={index}>

                  <div className="bd-process-card">

                    <div className="bd-process-top">

                      <span className="bd-process-number">
                        {step.number}
                      </span>

                      <div className="bd-process-icon">
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
      <section className="bd-section bd-benefits-section">
        <div className="container">

          <div className="bd-section-heading text-center">

            <span className="bd-small-label">
              Benefits
            </span>

            <h2>
              Why A Reliable Backend
              <span> Matters</span>
            </h2>

            <p>
              The backend is responsible for much of the functionality users
              do not see. A well-structured backend helps support the
              application as your requirements grow.
            </p>

          </div>


          <div className="row g-4 mt-2">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div className="col-md-6 col-lg-4" key={index}>

                  <div className="bd-benefit-card">

                    <div className="bd-benefit-icon">
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


      {/* ================= CTA ================= */}
      <section className="bd-cta-section">
        <div className="container">

          <div className="bd-cta-box">

            <div className="bd-cta-content">

              <span className="bd-small-label">
                Build Your Backend
              </span>

              <h2>
                Need A Backend
                <span> For Your Website or Application?</span>
              </h2>

              <p>
                Tell us about your project, required features and current
                frontend. We'll discuss the backend architecture and
                functionality your project needs.
              </p>

              <a href="/contact" className="bd-btn bd-btn-dark">
                Get Started
                <FaArrowRight />
              </a>

            </div>

            <div className="bd-cta-icon">
              <FaServer />
            </div>

          </div>

        </div>
      </section>


      {/* ================= FAQ ================= */}
      <section className="bd-section bd-faq-section">
        <div className="container">

          <div className="bd-section-heading text-center">

            <span className="bd-small-label">
              FAQ
            </span>

            <h2>
              Frequently Asked
              <span> Questions</span>
            </h2>

          </div>


          <div className="bd-faq-wrapper">

            {faqs.map((faq, index) => (
              <details className="bd-faq-item" key={index}>

                <summary>
                  <span>{faq.question}</span>
                  <FaChevronDown />
                </summary>

                <div className="bd-faq-answer">
                  <p>{faq.answer}</p>
                </div>

              </details>
            ))}

          </div>

        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="bd-final-section">
        <div className="container">

          <div className="bd-final-content text-center">

            <div className="bd-final-icon">
              <FaRocket />
            </div>

            <h2>
              Build The Technology
              <span> Behind Your Website</span>
            </h2>

            <p>
              APIs. Database integration. Authentication. Business logic.
              Scalable backend functionality.
            </p>

            <a href="/contact" className="bd-btn bd-btn-primary">
              Start Backend Development
              <FaArrowRight />
            </a>

          </div>

        </div>
      </section>

    </main>
  );
};

export default BackendDevelopment;