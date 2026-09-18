import React, { useMemo, useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaGlobe,
} from "react-icons/fa";

import "./EcommerceWebsite.css";

const EcommerceWebsite = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "HVAC",
    "Roofing",
    "Car Detailing",
    "Restaurant",
    "E-commerce",
    "Construction",
    "Dental",
    "Law Firm",
    "Real Estate",
    "Cleaning",
    "Plumbing",
    "Landing Page",
    "Business Website",
  ];

  /*
    =========================================================
    PROJECT DATA

    NOTE:
    These are placeholder project details.
    Replace the title, description, technologies,
    demo, github and preview content with your real projects.
    =========================================================
  */

  const projects = [
    // =====================================================
    // HVAC
    // =====================================================

    {
      id: 1,
      category: "HVAC",
      style: "01",
      title: "CoolAir HVAC",
      description:
        "Modern HVAC service website designed to present heating, cooling and emergency services clearly.",
      technologies: ["React", "CSS", "Bootstrap"],
      demo: "#",
      github: "#",
      label: "HVAC Service",

      previewTitle: "Comfortable Air.",
      previewSubtitle: "Reliable HVAC Service",
      previewText: "AC Repair • Installation • Maintenance",
      previewButton: "Get Free Quote",
    },

    {
      id: 2,
      category: "HVAC",
      style: "02",
      title: "Comfort Climate",
      description:
        "Professional HVAC business website with service sections, service areas and contact-focused layout.",
      technologies: ["HTML", "CSS", "JavaScript"],
      demo: "#",
      github: "#",
      label: "HVAC Website",

      previewTitle: "Your Comfort Matters.",
      previewSubtitle: "Heating & Cooling Experts",
      previewText: "Fast service for homes and businesses",
      previewButton: "Book Service",
    },

    // =====================================================
    // ROOFING
    // =====================================================

    {
      id: 3,
      category: "Roofing",
      style: "03",
      title: "RoofPro Services",
      description:
        "Professional roofing company website focused on roofing services, projects and quote requests.",
      technologies: ["React", "CSS", "JavaScript"],
      demo: "#",
      github: "#",
      label: "Roofing Company",

      previewTitle: "Strong Roofs.",
      previewSubtitle: "Built To Protect Your Home",
      previewText: "Roof Repair • Replacement • Inspection",
      previewButton: "Request Estimate",
    },

    {
      id: 4,
      category: "Roofing",
      style: "04",
      title: "Elite Roofing",
      description:
        "Clean and trustworthy roofing website with service categories, company information and CTA sections.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      demo: "#",
      github: "#",
      label: "Roofing Website",

      previewTitle: "Quality Roofing.",
      previewSubtitle: "Trusted Local Roofers",
      previewText: "Residential & Commercial Roofing",
      previewButton: "Get Started",
    },

    // =====================================================
    // CAR DETAILING
    // =====================================================

    {
      id: 5,
      category: "Car Detailing",
      style: "05",
      title: "Auto Shine Studio",
      description:
        "Premium car detailing website showcasing detailing packages, gallery and booking information.",
      technologies: ["React", "CSS", "JavaScript"],
      demo: "#",
      github: "#",
      label: "Detailing Studio",

      previewTitle: "Make Your Car Shine.",
      previewSubtitle: "Premium Auto Detailing",
      previewText: "Detailing • Ceramic Coating • Interior",
      previewButton: "Book Now",
    },

    {
      id: 6,
      category: "Car Detailing",
      style: "06",
      title: "Detail Garage",
      description:
        "Modern automotive detailing website with service cards, vehicle care sections and contact CTA.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      demo: "#",
      github: "#",
      label: "Car Detailing",

      previewTitle: "Your Car. Our Detail.",
      previewSubtitle: "Professional Vehicle Care",
      previewText: "Exterior • Interior • Paint Protection",
      previewButton: "View Services",
    },

    // =====================================================
    // RESTAURANT
    // =====================================================

    {
      id: 7,
      category: "Restaurant",
      style: "07",
      title: "Emberwood Restaurant",
      description:
        "Elegant restaurant website featuring menu presentation, gallery, banquet information and booking.",
      technologies: ["React", "Bootstrap", "CSS"],
      demo: "#",
      github: "#",
      label: "Restaurant",

      previewTitle: "Taste Something Special.",
      previewSubtitle: "Fresh Food • Warm Atmosphere",
      previewText: "Dinner • Private Events • Catering",
      previewButton: "View Menu",
    },

    {
      id: 8,
      category: "Restaurant",
      style: "08",
      title: "Urban Table",
      description:
        "Modern restaurant website designed around food presentation, reservations and business information.",
      technologies: ["HTML", "CSS", "JavaScript"],
      demo: "#",
      github: "#",
      label: "Restaurant Website",

      previewTitle: "Good Food. Great Moments.",
      previewSubtitle: "Modern Dining Experience",
      previewText: "Reserve your table and enjoy the evening",
      previewButton: "Reserve Table",
    },

    // =====================================================
    // E-COMMERCE
    // =====================================================

    {
      id: 9,
      category: "E-commerce",
      style: "09",
      title: "Nova Store",
      description:
        "Modern e-commerce storefront concept with product categories, featured products and shopping sections.",
      technologies: ["React", "CSS", "JavaScript"],
      demo: "#",
      github: "#",
      label: "Online Store",

      previewTitle: "Shop Your Style.",
      previewSubtitle: "New Arrivals Every Week",
      previewText: "Fashion • Accessories • Everyday Essentials",
      previewButton: "Shop Now",
    },

    {
      id: 10,
      category: "E-commerce",
      style: "10",
      title: "Urban Market",
      description:
        "Clean online shopping interface with product discovery, category navigation and responsive layouts.",
      technologies: ["React", "Bootstrap", "CSS"],
      demo: "#",
      github: "#",
      label: "E-commerce Store",

      previewTitle: "Everything In One Place.",
      previewSubtitle: "Simple Online Shopping",
      previewText: "Discover products made for everyday life",
      previewButton: "Explore Products",
    },

    // =====================================================
    // CONSTRUCTION
    // =====================================================

    {
      id: 11,
      category: "Construction",
      style: "11",
      title: "BuildCore",
      description:
        "Construction company website presenting commercial and residential projects, services and company information.",
      technologies: ["React", "CSS", "Bootstrap"],
      demo: "#",
      github: "#",
      label: "Construction",

      previewTitle: "Built To Last.",
      previewSubtitle: "Construction & Project Solutions",
      previewText: "Residential • Commercial • Renovation",
      previewButton: "View Projects",
    },

    {
      id: 12,
      category: "Construction",
      style: "12",
      title: "Prime Construction",
      description:
        "Professional construction website with project showcases, service areas and consultation CTA.",
      technologies: ["HTML", "CSS", "JavaScript"],
      demo: "#",
      github: "#",
      label: "Construction Website",

      previewTitle: "Build With Confidence.",
      previewSubtitle: "From Plan To Completion",
      previewText: "Quality construction for modern spaces",
      previewButton: "Request Consultation",
    },

    // =====================================================
    // DENTAL
    // =====================================================

    {
      id: 13,
      category: "Dental",
      style: "13",
      title: "BrightSmile Dental",
      description:
        "Friendly dental clinic website designed to highlight treatments, doctors, appointment information and services.",
      technologies: ["React", "CSS", "Bootstrap"],
      demo: "#",
      github: "#",
      label: "Dental Clinic",

      previewTitle: "A Brighter Smile Starts Here.",
      previewSubtitle: "Modern Dental Care",
      previewText: "Cleaning • Cosmetic • Family Dentistry",
      previewButton: "Book Appointment",
    },

    {
      id: 14,
      category: "Dental",
      style: "14",
      title: "DentalCare Studio",
      description:
        "Professional dental website featuring treatment sections, clinic information and patient-focused navigation.",
      technologies: ["HTML", "CSS", "JavaScript"],
      demo: "#",
      github: "#",
      label: "Dental Website",

      previewTitle: "Care You Can Trust.",
      previewSubtitle: "Comfortable Dental Experience",
      previewText: "Professional care for your whole family",
      previewButton: "Meet Our Team",
    },

    // =====================================================
    // LAW FIRM
    // =====================================================

    {
      id: 15,
      category: "Law Firm",
      style: "15",
      title: "Justice Legal",
      description:
        "Professional law firm website built around legal practice areas, attorney profiles and consultation CTA.",
      technologies: ["React", "CSS", "JavaScript"],
      demo: "#",
      github: "#",
      label: "Law Firm",

      previewTitle: "Experience. Strategy. Results.",
      previewSubtitle: "Trusted Legal Counsel",
      previewText: "Business • Family • Civil Law",
      previewButton: "Schedule Consultation",
    },

    {
      id: 16,
      category: "Law Firm",
      style: "16",
      title: "LegalPoint",
      description:
        "Clean corporate legal website with practice areas, firm information, attorney sections and contact details.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      demo: "#",
      github: "#",
      label: "Legal Website",

      previewTitle: "Legal Guidance That Matters.",
      previewSubtitle: "Focused On Your Case",
      previewText: "Experienced attorneys serving local clients",
      previewButton: "Contact Attorney",
    },

    // =====================================================
    // REAL ESTATE
    // =====================================================

    {
      id: 17,
      category: "Real Estate",
      style: "17",
      title: "Prime Estates",
      description:
        "Modern real estate website featuring property sections, listings, agent information and inquiry areas.",
      technologies: ["React", "CSS", "Bootstrap"],
      demo: "#",
      github: "#",
      label: "Real Estate",

      previewTitle: "Find A Place You'll Love.",
      previewSubtitle: "Modern Homes & Properties",
      previewText: "Homes • Apartments • Commercial Spaces",
      previewButton: "View Properties",
    },

    {
      id: 18,
      category: "Real Estate",
      style: "18",
      title: "Urban Properties",
      description:
        "Property-focused website concept designed for showcasing homes, apartments and commercial spaces.",
      technologies: ["HTML", "CSS", "JavaScript"],
      demo: "#",
      github: "#",
      label: "Property Website",

      previewTitle: "Your Next Address.",
      previewSubtitle: "Discover Better Properties",
      previewText: "Explore homes in the locations you love",
      previewButton: "Explore Homes",
    },

    // =====================================================
    // CLEANING
    // =====================================================

    {
      id: 19,
      category: "Cleaning",
      style: "19",
      title: "FreshClean Pro",
      description:
        "Professional cleaning service website with residential, commercial and deep-cleaning service sections.",
      technologies: ["React", "CSS", "Bootstrap"],
      demo: "#",
      github: "#",
      label: "Cleaning Service",

      previewTitle: "A Cleaner Space.",
      previewSubtitle: "A Better Everyday",
      previewText: "Home • Office • Deep Cleaning",
      previewButton: "Book Cleaning",
    },

    {
      id: 20,
      category: "Cleaning",
      style: "20",
      title: "Sparkle Cleaning",
      description:
        "Clean and simple service business website designed to make service information and contact actions easy to find.",
      technologies: ["HTML", "CSS", "JavaScript"],
      demo: "#",
      github: "#",
      label: "Cleaning Website",

      previewTitle: "Fresh. Clean. Simple.",
      previewSubtitle: "Professional Cleaning Team",
      previewText: "Reliable cleaning for homes and businesses",
      previewButton: "Get A Quote",
    },

    // =====================================================
    // PLUMBING
    // =====================================================

    {
      id: 21,
      category: "Plumbing",
      style: "21",
      title: "RapidFlow Plumbing",
      description:
        "Emergency plumbing service website with service categories, service area information and strong contact sections.",
      technologies: ["React", "CSS", "JavaScript"],
      demo: "#",
      github: "#",
      label: "Plumbing Service",

      previewTitle: "Plumbing Help When You Need It.",
      previewSubtitle: "Fast Local Plumbing Service",
      previewText: "Repair • Installation • Emergency Service",
      previewButton: "Call For Service",
    },

    {
      id: 22,
      category: "Plumbing",
      style: "22",
      title: "BluePipe Plumbing",
      description:
        "Professional plumbing business website designed for service visibility, trust and lead generation.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      demo: "#",
      github: "#",
      label: "Plumbing Website",

      previewTitle: "Reliable Plumbing. Done Right.",
      previewSubtitle: "Residential & Commercial Services",
      previewText: "Pipes • Drains • Water Systems",
      previewButton: "Request Service",
    },

    // =====================================================
    // LANDING PAGE
    // =====================================================

    {
      id: 23,
      category: "Landing Page",
      style: "23",
      title: "LeadFlow Landing Page",
      description:
        "Conversion-focused landing page concept with clear messaging, benefits, CTA sections and responsive design.",
      technologies: ["React", "CSS", "JavaScript"],
      demo: "#",
      github: "#",
      label: "Landing Page",

      previewTitle: "Turn More Clicks Into Leads.",
      previewSubtitle: "Focused Marketing Landing Page",
      previewText: "Clear message • Strong CTA • Mobile Ready",
      previewButton: "Get Started",
    },

    {
      id: 24,
      category: "Landing Page",
      style: "24",
      title: "LaunchPro Landing",
      description:
        "Focused landing page design created for promoting a service, offer or digital product.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      demo: "#",
      github: "#",
      label: "Marketing Landing Page",

      previewTitle: "Launch Your Next Offer.",
      previewSubtitle: "A Landing Page Built For Action",
      previewText: "Present your offer with clarity and focus",
      previewButton: "Learn More",
    },

    // =====================================================
    // BUSINESS WEBSITE
    // =====================================================

    {
      id: 25,
      category: "Business Website",
      style: "25",
      title: "Vertex Business",
      description:
        "Corporate business website with company information, services, portfolio, testimonials and contact sections.",
      technologies: ["React", "Bootstrap", "CSS"],
      demo: "#",
      github: "#",
      label: "Business Website",

      previewTitle: "Grow Your Business Online.",
      previewSubtitle: "Professional Digital Presence",
      previewText: "Services • About • Projects • Contact",
      previewButton: "Explore Company",
    },

    {
      id: 26,
      category: "Business Website",
      style: "26",
      title: "GrowthWorks",
      description:
        "Professional business website concept focused on presenting services, brand identity and customer information.",
      technologies: ["HTML", "CSS", "JavaScript"],
      demo: "#",
      github: "#",
      label: "Company Website",

      previewTitle: "Built For Business Growth.",
      previewSubtitle: "Modern Company Website",
      previewText: "Clear services • Strong branding • Easy contact",
      previewButton: "View Services",
    },
  ];

  /* =====================================================
     FILTER PROJECTS
  ===================================================== */

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main className="all-portfolio-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="portfolio-hero">

        <div className="container">

          <div className="portfolio-hero-content text-center">

            <span className="portfolio-eyebrow">
              <FaLaptopCode />
              Website Development Portfolio
            </span>

            <h1>
              Our Website
              <span> Development Portfolio</span>
            </h1>

            <p>
              Explore a collection of website projects across different
              industries and business types. Browse the categories below to
              view specific types of work.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          CATEGORY FILTER
      ===================================================== */}

      <section className="portfolio-filter-section">

        <div className="container">

          <div className="portfolio-filter">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "portfolio-filter-btn active"
                    : "portfolio-filter-btn"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECT SECTION
      ===================================================== */}

      <section className="portfolio-project-section">

        <div className="container">

          {/* Header */}

          <div className="portfolio-project-header">

            <div>

              <span className="portfolio-section-label">
                Selected Projects
              </span>

              <h2>
                {activeCategory === "All"
                  ? "All Website Projects"
                  : `${activeCategory} Projects`}
              </h2>

            </div>


            <div className="portfolio-count">

              <FaGlobe />

              <span>
                {filteredProjects.length} Projects
              </span>

            </div>

          </div>


          {/* Project Grid */}

          <div className="row g-4">

            {filteredProjects.map((project) => (

              <div
                className="col-md-6 col-xl-4"
                key={project.id}
              >

                <article
                  className={`portfolio-project-card portfolio-project-${project.style}`}
                >

                  {/* =================================================
                      PROJECT PREVIEW
                  ================================================= */}

                  <div className="portfolio-project-preview">

                    {/* Browser Top */}

                    <div className="preview-browser-bar">

                      <div className="preview-dots">

                        <span></span>
                        <span></span>
                        <span></span>

                      </div>

                      <div className="preview-url">
                        project-preview.com
                      </div>

                    </div>


                    {/* Website Preview */}

                    <div className="preview-content">

                      {/* Brand */}

                      <div className="preview-brand">
                        {project.title}
                      </div>


                      {/* Hero Text */}

                      <div className="preview-heading">

                        <strong className="preview-title">
                          {project.previewTitle}
                        </strong>

                        <span className="preview-subtitle">
                          {project.previewSubtitle}
                        </span>

                        <small className="preview-description">
                          {project.previewText}
                        </small>

                        <button
                          type="button"
                          className="preview-cta"
                        >
                          {project.previewButton}
                        </button>

                      </div>


                      {/* Main Website Visual */}

                      <div className="preview-main-block">

                        <div className="preview-image-label">
                          {project.category}
                        </div>

                      </div>


                      {/* Bottom Website Features */}

                      <div className="preview-grid">

                        <span>
                          <strong>01</strong>
                          <small>Professional</small>
                        </span>

                        <span>
                          <strong>02</strong>
                          <small>Responsive</small>
                        </span>

                        <span>
                          <strong>03</strong>
                          <small>Modern</small>
                        </span>

                      </div>

                    </div>


                    {/* Project Category */}

                    <div className="preview-overlay">

                      <span>
                        {project.label}
                      </span>

                    </div>

                  </div>


                  {/* =================================================
                      CARD CONTENT
                  ================================================= */}

                  <div className="portfolio-project-content">

                    {/* Category + Number */}

                    <div className="portfolio-project-top">

                      <span className="portfolio-project-category">
                        {project.category}
                      </span>

                      <span className="portfolio-project-number">
                        #{String(project.id).padStart(2, "0")}
                      </span>

                    </div>


                    {/* Project Title */}

                    <h3>
                      {project.title}
                    </h3>


                    {/* Description */}

                    <p>
                      {project.description}
                    </p>


                    {/* Technologies */}

                    <div className="portfolio-tech-list">

                      {project.technologies.map((tech) => (

                        <span key={tech}>

                          <FaCode />

                          {tech}

                        </span>

                      ))}

                    </div>


                    {/* Action Buttons */}

                    <div className="portfolio-project-actions">

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-demo-btn"
                      >

                        Live Demo

                        <FaExternalLinkAlt />

                      </a>


                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-github-btn"
                      >

                        GitHub

                        <FaGithub />

                      </a>

                    </div>

                  </div>

                </article>

              </div>

            ))}

          </div>


          {/* =====================================================
              EMPTY STATE
          ===================================================== */}

          {filteredProjects.length === 0 && (

            <div className="portfolio-empty">

              <div className="portfolio-empty-icon">
                <FaLaptopCode />
              </div>

              <h3>
                No projects found
              </h3>

              <p>
                More projects will be added to this category soon.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="portfolio-cta-section">

        <div className="container">

          <div className="portfolio-cta-box">

            <div className="portfolio-cta-content">

              <span className="portfolio-section-label">
                Have A Project In Mind?
              </span>

              <h2>
                Let's Build Your
                <span> Next Website</span>
              </h2>

              <p>
                Tell us about your business, website requirements and project
                goals. We can discuss the right website solution for your
                project.
              </p>

              <a
                href="/contact"
                className="portfolio-cta-btn"
              >
                Start Your Project
                <FaArrowRight />
              </a>

            </div>


            <div className="portfolio-cta-visual">

              <div className="cta-circle cta-circle-one"></div>

              <div className="cta-circle cta-circle-two"></div>

              <FaLaptopCode />

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default EcommerceWebsite;