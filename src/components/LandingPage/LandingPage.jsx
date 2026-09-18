import React from "react";
import {
  FaBullseye,
  FaLaptopCode,
  FaMobileAlt,
  FaRocket,
  FaMousePointer,
  FaChartLine,
  FaPalette,
  FaCode,
  FaCheckCircle,
  FaArrowRight,
  FaUsers,
  FaSearch,
  FaLightbulb,
  FaCogs,
  FaLayerGroup,
  FaBolt,
  FaChevronDown,
} from "react-icons/fa";

import "./LandingPage.css";

const LandingPage = () => {
  const features = [
    {
      icon: FaBullseye,
      title: "Goal-Focused Design",
      text: "Create a focused landing page around one clear business goal, offer, service or campaign.",
    },
    {
      icon: FaMousePointer,
      title: "Strong Call-to-Action",
      text: "Place clear calls-to-action throughout the page to guide visitors toward the desired next step.",
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Responsive",
      text: "Build responsive landing pages that work properly across mobile, tablet and desktop devices.",
    },
    {
      icon: FaBolt,
      title: "Fast User Experience",
      text: "Keep the page structure focused and organized for a smoother browsing experience.",
    },
    {
      icon: FaPalette,
      title: "Professional Visual Design",
      text: "Use consistent colors, typography, spacing and visual hierarchy that match your brand.",
    },
    {
      icon: FaChartLine,
      title: "Conversion-Focused Structure",
      text: "Organize content, trust elements and CTAs to make the visitor journey clearer.",
    },
  ];

  const landingSections = [
    "Attention-grabbing hero section",
    "Clear offer or value proposition",
    "Benefits and key features",
    "Services or product information",
    "Problem and solution section",
    "Testimonials or trust section",
    "Portfolio or project showcase",
    "Pricing or package section",
    "FAQ section",
    "Contact or lead form",
    "Strong call-to-action sections",
    "Footer with important links",
  ];

  const useCases = [
    {
      icon: FaChartLine,
      title: "Lead Generation",
      text: "Landing pages designed to encourage visitors to submit a form, request a quote or contact your business.",
    },
    {
      icon: FaRocket,
      title: "Marketing Campaigns",
      text: "Focused pages for paid advertising campaigns from Google, Meta or other traffic sources.",
    },
    {
      icon: FaLaptopCode,
      title: "Service Promotion",
      text: "Promote a specific service with clear information, benefits, proof and a strong CTA.",
    },
    {
      icon: FaLayerGroup,
      title: "Product Launch",
      text: "Present a new product or offer using a focused page structure built around your campaign goal.",
    },
  ];

  const designElements = [
    {
      number: "01",
      title: "Visual Hierarchy",
      text: "Arrange headlines, supporting content, visuals and CTAs so visitors can understand the message quickly.",
    },
    {
      number: "02",
      title: "Focused Messaging",
      text: "Keep the page centered around the specific offer, service or action you want visitors to take.",
    },
    {
      number: "03",
      title: "Trust Elements",
      text: "Use reviews, testimonials, certifications, statistics or other relevant trust signals when available.",
    },
    {
      number: "04",
      title: "Clear User Flow",
      text: "Guide visitors logically from the main message through supporting information to the final action.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      icon: FaSearch,
      title: "Understand The Goal",
      text: "We identify the landing page goal, target audience, offer, traffic source and desired visitor action.",
    },
    {
      number: "02",
      icon: FaLightbulb,
      title: "Plan The Structure",
      text: "We organize the headline, content sections, benefits, proof, CTA and overall visitor journey.",
    },
    {
      number: "03",
      icon: FaPalette,
      title: "Design The Interface",
      text: "We create the visual direction, layout, typography, spacing and responsive design for the page.",
    },
    {
      number: "04",
      icon: FaCode,
      title: "Develop The Page",
      text: "The approved design is converted into a responsive and functional landing page.",
    },
    {
      number: "05",
      icon: FaMobileAlt,
      title: "Responsive Testing",
      text: "We test the page across different screen sizes and check the important interactions and sections.",
    },
    {
      number: "06",
      icon: FaCheckCircle,
      title: "Final Review",
      text: "We review the final page, make necessary refinements and prepare it for launch or campaign use.",
    },
  ];

  const benefits = [
    {
      icon: FaBullseye,
      title: "One Clear Goal",
      text: "A dedicated landing page keeps visitors focused on one specific offer, service or action.",
    },
    {
      icon: FaUsers,
      title: "Better Visitor Experience",
      text: "A focused structure can make it easier for visitors to understand what you offer and what to do next.",
    },
    {
      icon: FaMousePointer,
      title: "Clear CTAs",
      text: "Strategically placed calls-to-action help direct visitors toward your intended conversion action.",
    },
    {
      icon: FaMobileAlt,
      title: "Responsive Design",
      text: "The page is designed to work across mobile, tablet and desktop devices.",
    },
    {
      icon: FaPalette,
      title: "Brand Consistency",
      text: "Your landing page can follow your existing brand colors, typography and visual identity.",
    },
    {
      icon: FaRocket,
      title: "Campaign Ready",
      text: "Focused landing pages can be created for specific services, products, offers and marketing campaigns.",
    },
  ];

  const faqs = [
    {
      question: "What is a landing page?",
      answer:
        "A landing page is a focused web page designed around a specific goal, such as generating leads, promoting a service, collecting inquiries or presenting an offer.",
    },
    {
      question: "Can you build a landing page for Google Ads or Meta Ads?",
      answer:
        "Yes. A landing page can be designed around a specific advertising campaign, audience, offer and desired conversion action.",
    },
    {
      question: "Can you create a landing page from my existing design?",
      answer:
        "Yes. We can convert an existing design, wireframe, reference or concept into a responsive landing page.",
    },
    {
      question: "Will the landing page be mobile responsive?",
      answer:
        "Yes. Responsive behavior for mobile, tablet and desktop screen sizes is part of the development process.",
    },
    {
      question: "Can you add a contact or lead form?",
      answer:
        "Yes. Forms can be added according to your requirements and can later be connected with email, CRM, backend or other systems.",
    },
    {
      question: "Can you build a landing page using React?",
      answer:
        "Yes. React can be used to build reusable and interactive landing page components when the project requirements call for it.",
    },
  ];

  return (
    <main className="landing-page-service">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="lp-hero">
        <div className="container">

          <div className="row align-items-center gy-5">

            <div className="col-lg-7">
              <div className="lp-hero-content">

                <span className="lp-badge">
                  <FaBullseye />
                  Website Development Service
                </span>

                <h1>
                  Landing Pages
                  <span> Designed To Focus Visitors On Action</span>
                </h1>

                <p className="lp-hero-text">
                  We create modern, responsive and focused landing pages for
                  services, products, lead generation and marketing campaigns.
                  Every section is designed around your specific goal and
                  audience.
                </p>

                <div className="lp-hero-buttons">

                  <a
                    href="/contact"
                    className="lp-btn lp-btn-primary"
                  >
                    Start Your Landing Page
                    <FaArrowRight />
                  </a>

                  <a
                    href="/portfolio"
                    className="lp-btn lp-btn-secondary"
                  >
                    View Our Work
                  </a>

                </div>

                <div className="lp-trust-row">

                  <div>
                    <FaCheckCircle />
                    <span>Mobile Responsive</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Clear CTA</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Goal Focused</span>
                  </div>

                </div>

              </div>
            </div>


            <div className="col-lg-5">

              <div className="lp-hero-visual">

                <div className="lp-browser">

                  <div className="lp-browser-top">

                    <div className="lp-browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="lp-browser-address"></div>

                  </div>


                  <div className="lp-browser-content">

                    <div className="lp-preview-nav">

                      <div className="lp-preview-logo"></div>

                      <div className="lp-preview-links">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>

                    </div>


                    <div className="lp-preview-main">

                      <div className="lp-preview-copy">

                        <span></span>
                        <span></span>
                        <span></span>

                        <div className="lp-preview-button"></div>

                      </div>

                      <div className="lp-preview-image"></div>

                    </div>


                    <div className="lp-preview-feature-row">

                      <div></div>
                      <div></div>
                      <div></div>

                    </div>

                  </div>

                </div>


                <div className="lp-floating-card lp-floating-one">

                  <FaMousePointer />

                  <div>
                    <strong>Clear CTA</strong>
                    <small>Action Focused</small>
                  </div>

                </div>


                <div className="lp-floating-card lp-floating-two">

                  <FaChartLine />

                  <div>
                    <strong>Conversion</strong>
                    <small>Goal Focused</small>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="lp-section lp-features-section">

        <div className="container">

          <div className="lp-section-heading text-center">

            <span className="lp-small-label">
              What We Offer
            </span>

            <h2>
              Landing Pages Built
              <span> Around Your Goal</span>
            </h2>

            <p>
              A landing page should communicate the offer clearly, reduce
              unnecessary distractions and guide visitors toward the next
              action.
            </p>

          </div>


          <div className="row g-4 mt-2">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  className="col-md-6 col-lg-4"
                  key={index}
                >

                  <div className="lp-feature-card">

                    <div className="lp-feature-icon">
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


      {/* =====================================================
          LANDING PAGE STRUCTURE
      ===================================================== */}

      <section className="lp-section lp-structure-section">

        <div className="container">

          <div className="row align-items-center gy-5">

            <div className="col-lg-5">

              <div className="lp-structure-heading">

                <span className="lp-small-label">
                  Page Structure
                </span>

                <h2>
                  Everything Your
                  <span> Landing Page May Need</span>
                </h2>

                <p>
                  The exact sections depend on your project, but a strong
                  landing page can include the important information visitors
                  need before taking action.
                </p>

                <a
                  href="/contact"
                  className="lp-btn lp-btn-primary"
                >
                  Discuss Your Landing Page
                  <FaArrowRight />
                </a>

              </div>

            </div>


            <div className="col-lg-7">

              <div className="lp-section-list">

                {landingSections.map((item, index) => (

                  <div
                    className="lp-section-list-item"
                    key={index}
                  >

                    <span className="lp-list-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="lp-list-check">
                      <FaCheckCircle />
                    </span>

                    <span className="lp-list-text">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          USE CASES
      ===================================================== */}

      <section className="lp-section lp-use-section">

        <div className="container">

          <div className="lp-section-heading text-center">

            <span className="lp-small-label">
              Use Cases
            </span>

            <h2>
              Landing Pages For
              <span> Different Goals</span>
            </h2>

            <p>
              A landing page can be created for different business,
              advertising and marketing objectives.
            </p>

          </div>


          <div className="row g-4 mt-2">

            {useCases.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  className="col-md-6 col-lg-3"
                  key={index}
                >

                  <div className="lp-use-card">

                    <div className="lp-use-icon">
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


      {/* =====================================================
          DESIGN ELEMENTS
      ===================================================== */}

      <section className="lp-section lp-design-section">

        <div className="container">

          <div className="lp-section-heading text-center">

            <span className="lp-small-label">
              Design Strategy
            </span>

            <h2>
              What Makes A Landing Page
              <span> Easy To Understand?</span>
            </h2>

            <p>
              A focused landing page combines clear messaging, visual
              hierarchy, trust elements and a logical user journey.
            </p>

          </div>


          <div className="row g-4 mt-2">

            {designElements.map((item, index) => (

              <div
                className="col-md-6 col-lg-3"
                key={index}
              >

                <div className={`lp-design-card lp-design-${index + 1}`}>

                  <div className="lp-design-number">
                    {item.number}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          VISUAL SECTION
      ===================================================== */}

      <section className="lp-section lp-visual-section">

        <div className="container">

          <div className="row align-items-center gy-5">

            <div className="col-lg-6">

              <div className="lp-device-visual">

                <div className="lp-desktop">

                  <div className="lp-desktop-top">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="lp-desktop-body">

                    <div className="lp-desktop-heading">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="lp-desktop-hero-block"></div>

                    <div className="lp-desktop-cards">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                  </div>

                </div>


                <div className="lp-mobile-device">

                  <div className="lp-mobile-screen">

                    <div className="lp-mobile-heading">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="lp-mobile-block"></div>

                    <div className="lp-mobile-button"></div>

                    <div className="lp-mobile-lines">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                  </div>

                </div>

              </div>

            </div>


            <div className="col-lg-6">

              <div className="lp-visual-content">

                <span className="lp-small-label">
                  Responsive Landing Pages
                </span>

                <h2>
                  Designed For
                  <span> Every Screen</span>
                </h2>

                <p>
                  Your visitors may come from phones, tablets or desktop
                  devices. We build landing pages with responsive layouts so
                  the content and CTAs remain easy to use across screen sizes.
                </p>

                <div className="lp-visual-points">

                  <div>
                    <FaCheckCircle />
                    <span>Responsive mobile layout</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Tablet-friendly sections</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Desktop-focused layout</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Touch-friendly CTA elements</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Readable typography</span>
                  </div>

                  <div>
                    <FaCheckCircle />
                    <span>Consistent visual hierarchy</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="lp-section lp-process-section">

        <div className="container">

          <div className="lp-section-heading text-center">

            <span className="lp-small-label">
              Our Process
            </span>

            <h2>
              How We Build Your
              <span> Landing Page</span>
            </h2>

            <p>
              We start with the campaign or business goal, then build the page
              structure, design and functionality around that objective.
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

                  <div className="lp-process-card">

                    <div className="lp-process-top">

                      <span className="lp-process-number">
                        {step.number}
                      </span>

                      <div className="lp-process-icon">
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

      <section className="lp-section lp-benefits-section">

        <div className="container">

          <div className="lp-section-heading text-center">

            <span className="lp-small-label">
              Benefits
            </span>

            <h2>
              Why Use A
              <span> Dedicated Landing Page?</span>
            </h2>

            <p>
              A dedicated page can keep your message focused and make it
              easier for visitors to understand the offer and take action.
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

                  <div className="lp-benefit-card">

                    <div className="lp-benefit-icon">
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

      <section className="lp-cta-section">

        <div className="container">

          <div className="lp-cta-box">

            <div className="lp-cta-content">

              <span className="lp-small-label">
                Start Your Campaign
              </span>

              <h2>
                Need A Landing Page
                <span> For Your Business or Ads?</span>
              </h2>

              <p>
                Tell us about your service, product, campaign or offer. We can
                build a focused landing page around your audience and desired
                action.
              </p>

              <a
                href="/contact"
                className="lp-btn lp-btn-dark"
              >
                Get Started
                <FaArrowRight />
              </a>

            </div>


            <div className="lp-cta-visual">

              <FaBullseye />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="lp-section lp-faq-section">

        <div className="container">

          <div className="lp-section-heading text-center">

            <span className="lp-small-label">
              FAQ
            </span>

            <h2>
              Frequently Asked
              <span> Questions</span>
            </h2>

          </div>


          <div className="lp-faq-wrapper">

            {faqs.map((faq, index) => (

              <details
                className="lp-faq-item"
                key={index}
              >

                <summary>

                  <span>{faq.question}</span>

                  <FaChevronDown />

                </summary>

                <div className="lp-faq-answer">

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

      <section className="lp-final-section">

        <div className="container">

          <div className="lp-final-content text-center">

            <div className="lp-final-icon">
              <FaRocket />
            </div>

            <h2>
              Turn Your
              <span> Traffic Into Action</span>
            </h2>

            <p>
              A clear message, focused structure, responsive design and strong
              calls-to-action—all built around your landing page goal.
            </p>

            <a
              href="/contact"
              className="lp-btn lp-btn-primary"
            >
              Build My Landing Page
              <FaArrowRight />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
};

export default LandingPage;