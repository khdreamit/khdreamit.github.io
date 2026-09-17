import React, { useEffect, useState } from 'react';
import '../../App.css';
import { NavLink } from 'react-router-dom';

const Hero = () => {

  // =====================================================
  // TYPING ANIMATION
  // =====================================================

  const typingTexts = [
  'Helping Businesses',
  'Growing Brands',
  'Getting More Leads',
  'Driving More Sales',
  'Website Design & Development',
  'Building Modern Websites',
  'Creating Business Websites',
  'Designing High-Converting Websites',
];

  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typingTexts[textIndex];

    let typingSpeed = isDeleting ? 55 : 90;

    // When text is completely typed
    if (!isDeleting && text === currentText) {
      const pauseTimer = setTimeout(() => {
        setIsDeleting(true);
      }, 1400);

      return () => clearTimeout(pauseTimer);
    }

    // When text is completely deleted
    if (isDeleting && text === '') {
      setIsDeleting(false);
      setTextIndex((prevIndex) => {
        return (prevIndex + 1) % typingTexts.length;
      });

      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(currentText.substring(0, text.length - 1));
      } else {
        setText(currentText.substring(0, text.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);

  }, [text, isDeleting, textIndex]);


  // =====================================================
  // GOOGLE REVIEWS
  // =====================================================

  const reviews = [
    {
      name: 'Client Review',
      rating: '★★★★★',
      text: 'Professional service and great communication. The team understood our advertising goals and provided valuable marketing support.',
    },
    {
      name: 'Client Review',
      rating: '★★★★★',
      text: 'Very helpful and professional. The advertising strategy was clear, well organized, and focused on business growth.',
    },
    {
      name: 'Client Review',
      rating: '★★★★★',
      text: 'Good communication and attention to detail. Highly recommended for businesses looking for digital advertising support.',
    },
  ];


  // =====================================================
  // WHY TRUST US
  // =====================================================

  const trustPoints = [
    {
      title: 'Data-Driven Strategy',
      text: 'We use campaign data, audience insights, and performance analysis to make smarter advertising decisions.',
    },
    {
      title: 'Performance Focused',
      text: 'Our goal is not just traffic. We focus on generating qualified leads, sales, and measurable business growth.',
    },
    {
      title: 'Multi-Platform Expertise',
      text: 'From Google and Meta to TikTok, Microsoft, YouTube, and Shopify marketing, we help businesses reach customers across multiple platforms.',
    },
    {
      title: 'Transparent Communication',
      text: 'We keep our clients informed with clear communication, campaign updates, and practical recommendations.',
    },
  ];


  return (
    <>
      {/* =====================================================
          HERO SECTION
          ===================================================== */}

      <section className="hero-section">

        <div className="container py-5">

          <div className="hero-content text-center">

            {/* ================= TOP BRAND BADGE ================= */}

            <div className="hero-badge">

              <strong className="hero-brand-name">
                KH DREAM IT
              </strong>

              <span className="hero-divider">
                •
              </span>

              <span className="typing-text">
  {text}
  <span className="typing-cursor">|</span>
</span>

            </div>


            {/* ================= MAIN HEADING ================= */}

            <h1 className="hero-title">

              Digital Marketing That

              <br />

              <span className="hero-title-highlight">
                Drives Real Growth
              </span>

            </h1>


            {/* ================= DESCRIPTION ================= */}

            <p className="hero-description mx-auto">

              KH Dream IT helps businesses generate better leads, more
              sales, and measurable growth through data-driven digital
              marketing and high-converting advertising campaigns.

            </p>


            {/* ================= SERVICES ================= */}

            <p className="hero-services mx-auto">

              <strong>
                Google Ads
              </strong>

              <span>•</span>

              <strong>
                Meta Ads
              </strong>

              <span>•</span>

              <strong>
                Microsoft Ads
              </strong>

              <span>•</span>

              <strong>
                YouTube Ads
              </strong>

              <span>•</span>

              <strong>
                TikTok Ads
              </strong>

            </p>


            {/* ================= BUTTONS ================= */}

            <div className="hero-buttons">

              <NavLink
                to="/portfolio"
                className="hero-btn hero-btn-primary"
              >
                Explore Our Portfolio

                <span className="hero-arrow">
                  →
                </span>

              </NavLink>


              <NavLink
                to="/contact"
                className="hero-btn hero-btn-secondary"
              >
                Get Started
              </NavLink>

            </div>


            {/* ================= TRUST LINE ================= */}

            <div className="hero-trust">

              <span>
                ✓ Performance Focused
              </span>

              <span>
                ✓ Data-Driven Strategy
              </span>

              <span>
                ✓ Transparent Communication
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GOOGLE REVIEWS
          ===================================================== */}

      <section className="py-5 bg-light">

        <div className="container-fluid px-4 px-lg-5 py-5">

          {/* ================= SECTION TITLE ================= */}

          <div className="text-center mb-4">

            <span className="text-secondary fw-semibold">
              Client Feedback
            </span>

            <h2 className="fw-bold mt-2">
              What Our Clients Say
            </h2>

            <p
              className="text-muted"
              style={{
                fontSize: '16px',
              }}
            >
              We value our clients' experience and feedback.
            </p>

          </div>


          {/* ================= REVIEW CARDS ================= */}

          <div className="row g-4">

            {reviews.map((review, index) => (

              <div
                className="col-md-4"
                key={index}
              >

                <div
                  className="bg-white rounded-4 shadow-sm p-4 h-100"
                >

                  {/* STAR RATING */}

                  <div className="text-warning fs-5 mb-3">
                    {review.rating}
                  </div>


                  {/* REVIEW TEXT */}

                  <p
                    className="text-dark"
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.7',
                    }}
                  >
                    "{review.text}"
                  </p>


                  {/* CLIENT NAME */}

                  <h6 className="fw-bold mb-0">
                    {review.name}
                  </h6>

                  <small className="text-muted">
                    Google Review
                  </small>

                </div>

              </div>

            ))}

          </div>


          {/* ================= REVIEW CTA ================= */}

          <div className="text-center mt-4">

            <a
              href="https://www.google.com/search?q=KH+Dream+IT"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark px-4 py-2"
            >
              View More Google Reviews
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY TRUST US
          ===================================================== */}

      <section className="py-5">

        <div className="container-fluid px-4 px-lg-5 py-5">

          {/* ================= SECTION TITLE ================= */}

          <div className="text-center mb-5">

            <span className="text-secondary fw-semibold">
              Why KH Dream IT?
            </span>

            <h2 className="fw-bold mt-2">
              Why Businesses Choose Us
            </h2>

            <p
              className="text-muted mx-auto"
              style={{
                maxWidth: '700px',
                fontSize: '16px',
                lineHeight: '1.7',
              }}
            >
              We focus on building practical advertising strategies
              that support real business goals, not just vanity metrics.
            </p>

          </div>


          {/* ================= TRUST POINTS ================= */}

          <div className="row g-4">

            {trustPoints.map((point, index) => (

              <div
                className="col-md-6"
                key={index}
              >

                <div
                  className="p-4 border rounded-4 h-100"
                >

                  {/* NUMBER */}

                  <div
                    className="d-flex align-items-center justify-content-center bg-dark text-white rounded-circle mb-3"
                    style={{
                      width: '45px',
                      height: '45px',
                      fontWeight: '600',
                    }}
                  >
                    {index + 1}
                  </div>


                  {/* TITLE */}

                  <h4 className="fw-bold">
                    {point.title}
                  </h4>


                  {/* DESCRIPTION */}

                  <p
                    className="text-muted mb-0"
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.7',
                    }}
                  >
                    {point.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </>
  );
};

export default Hero;