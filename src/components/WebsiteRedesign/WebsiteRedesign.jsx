import React from "react";
import {
  FaPalette,
  FaMobileAlt,
  FaRocket,
  FaSearch,
  FaCode,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaLaptopCode,
  FaUsers,
  FaShieldAlt,
  FaTools,
  FaSyncAlt,
  FaLightbulb,
  FaChevronDown,
} from "react-icons/fa";

import "./WebsiteRedesign.css";

const WebsiteRedesign = () => {
  const redesignFeatures = [
    {
      icon: FaPalette,
      title: "Modern UI Design",
      text: "Refresh your website with a clean, modern and professional interface that matches your brand.",
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Responsive",
      text: "Make your website look and work properly across mobile phones, tablets and desktop devices.",
    },
    {
      icon: FaRocket,
      title: "Better Performance",
      text: "Improve page structure, user experience and loading performance for a smoother browsing experience.",
    },
    {
      icon: FaSearch,
      title: "SEO-Friendly Structure",
      text: "Improve the website structure and on-page elements to create a better foundation for search visibility.",
    },
    {
      icon: FaCode,
      title: "Clean Development",
      text: "Rebuild outdated sections with cleaner, more maintainable and scalable code.",
    },
    {
      icon: FaChartLine,
      title: "Conversion Focused",
      text: "Improve calls-to-action, page layout and user flow to help visitors take meaningful actions.",
    },
  ];

  const problems = [
    "Outdated website design",
    "Poor mobile experience",
    "Slow or confusing user experience",
    "Old website structure",
    "Weak call-to-action sections",
    "Difficult navigation",
    "Inconsistent branding",
    "Low-quality or outdated content layout",
  ];

  const includedItems = [
    "Website design audit",
    "UI/UX improvement",
    "Responsive layout redesign",
    "Navigation improvement",
    "Homepage redesign",
    "Service page redesign",
    "Landing page improvement",
    "Call-to-action optimization",
    "Typography and spacing improvement",
    "Color and branding consistency",
    "Image and content layout improvement",
    "Clean and organized frontend structure",
  ];

  const processSteps = [
    {
      number: "01",
      icon: FaSearch,
      title: "Website Audit",
      text: "We review your existing website, identify design, usability, structure and performance issues.",
    },
    {
      number: "02",
      icon: FaLightbulb,
      title: "Redesign Planning",
      text: "We plan the new structure, page layout, visual direction and improvements based on your business goals.",
    },
    {
      number: "03",
      icon: FaPalette,
      title: "UI/UX Redesign",
      text: "We redesign key sections with a modern visual style, clearer hierarchy and improved user experience.",
    },
    {
      number: "04",
      icon: FaLaptopCode,
      title: "Development",
      text: "The approved design is implemented into a responsive and functional website.",
    },
    {
      number: "05",
      icon: FaMobileAlt,
      title: "Responsive Testing",
      text: "We test the redesigned website across desktop, tablet and mobile screen sizes.",
    },
    {
      number: "06",
      icon: FaCheckCircle,
      title: "Final Review",
      text: "We check the final website, fix issues and prepare the redesigned version for launch.",
    },
  ];

  const benefits = [
    {
      icon: FaUsers,
      title: "Better User Experience",
      text: "Help visitors find important information faster with a clearer and easier website structure.",
    },
    {
      icon: FaShieldAlt,
      title: "Professional Brand Image",
      text: "Present your company with a modern website that looks more trustworthy and professional.",
    },
    {
      icon: FaSyncAlt,
      title: "Fresh Website Structure",
      text: "Replace outdated layouts and improve the overall organization of your website.",
    },
    {
      icon: FaTools,
      title: "Easy Future Updates",
      text: "A cleaner structure makes future content and development updates easier to manage.",
    },
  ];

  const faqs = [
    {
      question: "Can you redesign my existing website without changing the content?",
      answer:
        "Yes. We can keep your existing content where appropriate and focus mainly on design, layout, structure, responsiveness and user experience.",
    },
    {
      question: "Can you redesign only selected pages?",
      answer:
        "Yes. You can redesign the complete website or only specific pages such as the homepage, service pages, landing pages or contact page.",
    },
    {
      question: "Will the redesigned website be mobile responsive?",
      answer:
        "Yes. Responsive design is an important part of the redesign process, so the website can adapt to different screen sizes.",
    },
    {
      question: "Can you work with my existing website technology?",
      answer:
        "In many cases, yes. The redesign approach depends on your current technology, website structure and the changes required.",
    },
    {
      question: "Do you also improve the website's user experience?",
      answer:
        "Yes. The redesign can include navigation, layout, content hierarchy, calls-to-action and other user experience improvements.",
    },
  ];

  return (
    <main className="website-redesign-page">

      {/* ================= HERO ================= */}
      <section className="wr-hero">
        <div className="container">
          <div className="row align-items-center gy-5">

            <div className="col-lg-7">
              <div className="wr-hero-content">

                <span className="wr-badge">
                  <FaPalette />
                  Website Development Service
                </span>

                <h1>
                  Transform Your Old Website Into a
                  <span> Modern & Professional Website</span>
                </h1>

                <p className="wr-hero-text">
                  Is your website outdated, slow, difficult to use or not
                  mobile-friendly? We redesign existing websites with a modern
                  layout, better user experience, responsive design and a
                  professional visual structure.
                </p>

                <div className="wr-hero-buttons">
                  <a href="/contact" className="wr-btn wr-btn-primary">
                    Start Your Redesign
                    <FaArrowRight />
                  </a>

                  <a href="/portfolio" className="wr-btn wr-btn-secondary">
                    View Our Work
                  </a>
                </div>

                <div className="wr-trust-row">
                  <div>
                    <FaCheckCircle />
                    <span>Responsive Design</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Modern UI/UX</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Clean Development</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-5">
              <div className="wr-hero-card">

                <div className="wr-window-top">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="wr-dashboard">

                  <div className="wr-dashboard-header">
                    <div className="wr-mini-logo"></div>

                    <div className="wr-mini-menu">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>

                  <div className="wr-dashboard-body">

                    <div className="wr-dashboard-title">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>

                    <div className="wr-dashboard-buttons">
                      <span></span>
                      <span></span>
                    </div>

                    <div className="wr-dashboard-grid">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>

                  </div>

                </div>

                <div className="wr-floating-card wr-floating-card-one">
                  <FaMobileAlt />
                  <div>
                    <strong>Responsive</strong>
                    <small>All Devices</small>
                  </div>
                </div>

                <div className="wr-floating-card wr-floating-card-two">
                  <FaRocket />
                  <div>
                    <strong>Modern UI</strong>
                    <small>Better Experience</small>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="wr-section wr-intro-section">
        <div className="container">
          <div className="wr-section-heading text-center">

            <span className="wr-small-label">
              Why Website Redesign?
            </span>

            <h2>
              Your Website Should Reflect
              <span> Your Business</span>
            </h2>

            <p>
              Your website is often the first place where potential customers
              learn about your business. A modern, easy-to-use and responsive
              website can create a better first impression and make it easier
              for visitors to understand your services.
            </p>

          </div>

          <div className="row g-4 mt-2">

            {redesignFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div className="wr-feature-card">

                    <div className="wr-feature-icon">
                      <Icon />
                    </div>

                    <h3>{feature.title}</h3>

                    <p>{feature.text}</p>

                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>


      {/* ================= PROBLEMS ================= */}
      <section className="wr-section wr-problem-section">
        <div className="container">

          <div className="row align-items-center gy-5">

            <div className="col-lg-6">
              <div className="wr-problem-content">

                <span className="wr-small-label">
                  Signs You Need A Redesign
                </span>

                <h2>
                  Is Your Website
                  <span> Holding Your Business Back?</span>
                </h2>

                <p>
                  An outdated website can make it harder for visitors to
                  navigate your business, understand your services and take
                  action.
                </p>

                <div className="wr-problem-list">

                  {problems.map((problem, index) => (
                    <div className="wr-problem-item" key={index}>
                      <FaCheckCircle />
                      <span>{problem}</span>
                    </div>
                  ))}

                </div>

              </div>
            </div>

            <div className="col-lg-6">
              <div className="wr-problem-visual">

                <div className="wr-old-website">
                  <div className="wr-visual-label">
                    BEFORE
                  </div>

                  <div className="wr-old-top"></div>

                  <div className="wr-old-content">
                    <div className="wr-old-sidebar"></div>

                    <div className="wr-old-main">
                      <div></div>
                      <div></div>
                      <div></div>

                      <div className="wr-old-box-row">
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="wr-arrow-center">
                  <FaArrowRight />
                </div>


                <div className="wr-new-website">
                  <div className="wr-visual-label">
                    AFTER
                  </div>

                  <div className="wr-new-top"></div>

                  <div className="wr-new-content">

                    <div className="wr-new-heading">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="wr-new-box-row">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>

                    <div className="wr-new-footer"></div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= WHAT'S INCLUDED ================= */}
      <section className="wr-section wr-included-section">
        <div className="container">

          <div className="wr-section-heading text-center">

            <span className="wr-small-label">
              What's Included
            </span>

            <h2>
              Complete Website
              <span> Redesign Service</span>
            </h2>

            <p>
              We can improve the visual design, structure, responsiveness and
              overall website experience based on your specific requirements.
            </p>

          </div>

          <div className="row g-3 mt-3">

            {includedItems.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="wr-included-item">
                  <FaCheckCircle />
                  <span>{item}</span>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= PROCESS ================= */}
      <section className="wr-section wr-process-section">
        <div className="container">

          <div className="wr-section-heading text-center">

            <span className="wr-small-label">
              Our Process
            </span>

            <h2>
              How We
              <span> Redesign Your Website</span>
            </h2>

            <p>
              We follow a structured process to understand the current website,
              plan improvements and build a cleaner final experience.
            </p>

          </div>

          <div className="row g-4 mt-2">

            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div className="col-md-6 col-lg-4" key={index}>

                  <div className="wr-process-card">

                    <div className="wr-process-top">

                      <span className="wr-process-number">
                        {step.number}
                      </span>

                      <div className="wr-process-icon">
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
      <section className="wr-section wr-benefits-section">
        <div className="container">

          <div className="row align-items-center gy-5">

            <div className="col-lg-5">
              <div className="wr-benefits-heading">

                <span className="wr-small-label">
                  Benefits
                </span>

                <h2>
                  A Better Website Can
                  <span> Create A Better Experience</span>
                </h2>

                <p>
                  Website redesign is not only about changing colors or
                  replacing images. It is about improving how your website
                  looks, feels and works for your visitors.
                </p>

                <a href="/contact" className="wr-btn wr-btn-primary">
                  Discuss Your Website
                  <FaArrowRight />
                </a>

              </div>
            </div>

            <div className="col-lg-7">

              <div className="row g-4">

                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;

                  return (
                    <div className="col-md-6" key={index}>
                      <div className="wr-benefit-card">

                        <div className="wr-benefit-icon">
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

          </div>

        </div>
      </section>


      {/* ================= WHO IT IS FOR ================= */}
      <section className="wr-section wr-audience-section">
        <div className="container">

          <div className="wr-section-heading text-center">

            <span className="wr-small-label">
              Perfect For
            </span>

            <h2>
              Website Redesign For
              <span> Different Business Needs</span>
            </h2>

            <p>
              A redesign can be useful for businesses that already have a
              website but want a more modern, professional and user-friendly
              online presence.
            </p>

          </div>

          <div className="row g-4 mt-2">

            <div className="col-md-6 col-lg-3">
              <div className="wr-audience-card">
                <div className="wr-audience-number">01</div>
                <h3>Small Businesses</h3>
                <p>
                  Give your business website a modern and professional look.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="wr-audience-card">
                <div className="wr-audience-number">02</div>
                <h3>Service Businesses</h3>
                <p>
                  Improve service pages, navigation and calls-to-action.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="wr-audience-card">
                <div className="wr-audience-number">03</div>
                <h3>Growing Brands</h3>
                <p>
                  Update your website as your business and brand evolve.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="wr-audience-card">
                <div className="wr-audience-number">04</div>
                <h3>Old Websites</h3>
                <p>
                  Replace outdated layouts with a cleaner modern structure.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="wr-cta-section">
        <div className="container">

          <div className="wr-cta-box">

            <div className="wr-cta-content">

              <span className="wr-small-label">
                Ready To Upgrade?
              </span>

              <h2>
                Let's Redesign Your Website
                <span> For A Better Online Presence</span>
              </h2>

              <p>
                Share your existing website with us and tell us what you want
                to improve. We'll discuss the redesign requirements and the
                right approach for your project.
              </p>

              <a href="/contact" className="wr-btn wr-btn-dark">
                Get Started
                <FaArrowRight />
              </a>

            </div>

            <div className="wr-cta-icon">
              <FaLaptopCode />
            </div>

          </div>

        </div>
      </section>


      {/* ================= FAQ ================= */}
      <section className="wr-section wr-faq-section">
        <div className="container">

          <div className="wr-section-heading text-center">

            <span className="wr-small-label">
              FAQ
            </span>

            <h2>
              Frequently Asked
              <span> Questions</span>
            </h2>

          </div>

          <div className="wr-faq-wrapper">

            {faqs.map((faq, index) => (
              <details className="wr-faq-item" key={index}>

                <summary>
                  <span>{faq.question}</span>
                  <FaChevronDown />
                </summary>

                <div className="wr-faq-answer">
                  <p>{faq.answer}</p>
                </div>

              </details>
            ))}

          </div>

        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="wr-final-section">
        <div className="container">

          <div className="wr-final-content text-center">

            <div className="wr-final-icon">
              <FaRocket />
            </div>

            <h2>
              Give Your Website
              <span> A Fresh New Look</span>
            </h2>

            <p>
              Modern design. Better user experience. Responsive layout.
              Cleaner structure.
            </p>

            <a href="/contact" className="wr-btn wr-btn-primary">
              Start Your Website Redesign
              <FaArrowRight />
            </a>

          </div>

        </div>
      </section>

    </main>
  );
};

export default WebsiteRedesign;