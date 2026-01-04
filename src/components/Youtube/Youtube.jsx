import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import SocialIcon from '../SocialIcon/SocialIcon';
import Footer from '../Footer/Footer';
import { FaCheck, FaTimes } from "react-icons/fa";
import YoutubeHero from '../../assets/youtubeHero.jpg'
import YouSeo from '../../assets/youSeo.png'
import './youtube.css'
import "aos/dist/aos.css";
import YouMan from '../../assets/youMan2.png'
import ServiceImg from '../../assets/Youtube.jpg'
import { FaSearch, FaHockeyPuck, FaTags, FaImage , FaChartBar , FaPeopleArrows , FaPuzzlePiece, FaCheckCircle, FaChevronDown} from "react-icons/fa";;




const Youtube = () => {

const services = [
  {
    title: "Complete YouTube Channel Audit",
    icon: <FaSearch />,
    items: [
      "Full review of channel settings, branding, and structure",
      "SEO score analysis for each video",
      "Identification of issues harming visibility or ranking",
      "Audience retention and watch-time audit",
      "Competitor gap analysis",
      "Actionable recommendations for improvement",
    ],
  },
  {
    title: "Keyword Research (Niche + Video-Level)",
    icon: <FaHockeyPuck />,
    items: [
      "In-depth niche keyword analysis",
      "Long-tail keyword discovery",
      "High-intent keyword selection",
      "Competitor keyword comparison",
      "Click-boost title keyword suggestions",
      "Full keyword list delivery (Excel/Google Sheet)",
    ],
  },
  {
    title: "Title, Description & Tags Optimization",
    icon: <FaTags  />,
    items: [
      "SEO-friendly title writing",
      "High-ranking keyword placement",
      "Engaging description with proper structure",
      "Hashtag optimization",
      "Tag creation for maximum discoverability",
      "Compliance with YouTube SEO best practices",
    ],
  },
  {
    title: "Thumbnail & CTR Improvement",
    icon: <FaImage />,
    items: [
      "CTR analysis (click-through rate review)",
      "Thumbnail problem detection",
      "Color, design & clarity suggestions",
      "A/B thumbnail guidance",
      "Title–thumbnail alignment strategy",
      "Actionable recommendations for improvement",
    ],
  },
  {
    title: "Video Ranking Strategy",
    icon: <FaChartBar />,
    items: [
      "Search ranking strategy",
      "Suggested video strategy",
      "Browse feature strategy",
      "Upload timing & frequency optimization",
      "Algorithm-friendly metadata setup",
      "First 30 minutes engagement plan",
    ],
  },
  {
    title: "Competitor Research",
    icon: <FaPeopleArrows  />,
    items: [
      "Competitor performance breakdown",
      "Their ranking keywords",
      "Their CTR, retention & metadata analysis",
      "Strategy to outperform competitors",
      "Market gap exploitation",
      "Actionable recommendations for improvement",
    ],
  },
  {
    title: "YouTube Algorithm Optimization",
    icon: <FaPuzzlePiece  />,
    items: [
      "Search + Suggested algorithm alignment",
      "Session time improvement strategy",
      "Audience retention optimization",
      "Watch-time growth plan",
      "Algorithm-friendly content structure",
      "Actionable recommendations for improvement",
    ],
  },
]; 



  const items = [
    "Channel Audit Report – SEO issues, optimization gaps & growth roadmap",
    "Video SEO Optimization – Titles, descriptions, tags & metadata",
    "Keyword Research File – Long-tail, short-tail, and low-competition keywords",
    "CTR Optimization Guide – Thumbnail suggestions & A/B testing plan",
    "Competitor Analysis Report – Insights to outrank winning channels",
    "Algorithm Behavior Analysis – Retention, suggested video & timing strategy",
    "Ranking Strategy Plan – 30-day SEO action plan",
    "SEO Score Improvement Report – Before/after performance summary",
    "Bonus Resources – Content ideas + thumbnail scripts"
  ];

  const splitText = (text) => {
    const [title, desc] = text.split("–");
    return {
      title: title.trim(),
      desc: desc ? desc.trim() : ""
    };
  };



  const faqData = [
    {
      q: "Do you need channel access?",
      a: "I can deliver full audit and editable files without access. If you want me to implement changes, channel manager access is required (no password, manager role)."
    },
    {
      q: "Do you guarantee subscribers or views?",
      a: "I cannot guarantee specific numbers. I guarantee professional SEO improvements and an actionable plan that increases the chance of improved discovery and growth."
    },
    {
      q: "Can you help with thumbnails/design?",
      a: "Yes — I provide thumbnail guidelines and 2–3 mockups. Full design work can be added as an extra."
    },
    {
      q: "How do you measure success?",
      a: "Key metrics: search impressions, CTR, average view duration, suggested impressions, and subscriber rate. I provide before/after screenshots for transparency."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };
    
    
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start'
            });
        }
    };


    return (
    <div>
        <Navbar />

        {/* youtube hero  */}

<div className="youtube-hero d-flex align-items-center text-center">
  <div className="container">
    <h1 className="fw-bold text-white mb-3">
      YouTube SEO Services – Grow Your Channel Faster
    </h1>
    <p className="text-white-80 fw-bold mx-auto" style={{ maxWidth: "600px" }}>
      Data-driven optimization for channels and videos: full audits, keyword strategy,
      metadata fixes, thumbnail & retention improvements.
    </p>

    <div className="mt-4 d-flex justify-content-center gap-3">
      <a href="https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22" className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow">
        Get a Free Channel Audit
      </a>
     
      <a 
        href="#" 
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('seePrice');
        }} 
        className="btn btn-outline-light fw-semibold px-4 py-2 rounded-pill shadow"
      >
        See Packages
      </a>
    </div>
  </div>
</div>


{/* Youtuber intro  */}

{/* <div className="py-5 yourIntro">
  <div className="container-fluid px-5">
    <div className="row align-items-center">

      
      <div className="col-lg-6 mb-4 mb-lg-0 text-center youImg">
        <img src={YouMan} alt="Profile" className="img-fluid rounded-3 shadow" style={{ maxWidth: "70%" }}/>
      </div>

      
      <div className="col-lg-6">
        <h4 className="text-secondary fw-semibold mb-2">Hello, I'm</h4>
        <h1 className="fw-bold display-4">MD. ABDUL HALIM</h1>
        
        <p className="mt-3 text-dark fs-5">
           I’m a YouTube SEO specialist focused on helping creators and businesses increase search visibility, boost CTR, and maximize watch time. I combine keyword research, metadata optimization, thumbnail strategy, and analytics-driven improvements to turn good videos into discoverable videos. Get a professional audit and a clear, actionable plan to grow your channel — or let me implement the changes and manage your channel SEO end-to-end.
        </p>

        <div className="mt-4 d-flex gap-3">
          <a href="https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22" 
             className="btn btn-dark px-4 py-2">
            Contact With Me
          </a>
          
        </div>
      </div>

    </div>
  </div>
</div> */}




   {/* youtube intro  */}

<div className="herobg py-5">
  <div className="container-fluid px-5">
    <div className="row align-items-center youtube-bg">

      {/* Text Content */}
      <div className="col-lg-6 mb-4 mb-lg-0" >
        <h1 className="fw-bold">What is YouTube SEO?</h1>
        <p className="lead">
          YouTube SEO is the process of optimizing your videos, channel, and content so that they rank higher in YouTube search results and related videos. Since YouTube is the second largest search engine in the world (after Google), proper SEO ensures more visibility, views, and subscribers organically — without paying for ads.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22"
          className="btn mt-3 hero-btn"
        >
          Contact On WhatsApp
        </a>
      </div>

      {/* Hero Image */}
      <div className="col-lg-6 text-center">
        <img src={YoutubeHero} alt="YouTube SEO Hero" className="img-fluid rounded shadow-lg" />
      </div>

    </div>
    </div>
</div>


{/* why youtube seo need */}

<div className="py-5 feature-section">
  <div className="container-fluid px-5">
    <div className="row align-items-center">

      <div className="col-lg-5 text-center mb-4 mb-lg-0">
        <img src={YouSeo} alt="YouTube SEO" className="img-fluid rounded shadow-lg feature-img" />
      </div>

      <div className="col-lg-7">
        <h2 className="fw-bold mb-3">Why YouTube SEO is Important?</h2>
        <p className="text-muted">
          YouTube SEO helps your content rank higher in search & suggested results,
          increasing organic views, engagement, and long-term channel growth without relying on paid promotions.
        </p>

        <div className="benefit-box p-4 rounded shadow-sm">
          <ul className="list-unstyled">
            <li><span className="check-icon">✔</span> Higher search rankings on YouTube & Google</li>
            <li><span className="check-icon">✔</span> More organic views without paid ads</li>
              <li><span className="check-icon">✔</span> Better audience retention & watch-time</li>
            <li><span className="check-icon">✔</span> Faster subscriber & community growth</li>
            <li><span className="check-icon">✔</span> Higher click-through rate via optimized metadata</li>
            <li><span className="check-icon">✔</span> Evergreen long-term ranking & traffic</li>
            <li><span className="check-icon">✔</span> Better monetization & sponsorship deals</li>
            <li><span className="check-icon">✔</span> Increased credibility & niche authority</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</div>




{/* service  */}

<section className="py-5 service">
  <div className="container-fluid px-5">

    {/* Service Container */}
    <div className="serviceCont mb-5">
      <h1 className="mb-3">Core YouTube SEO Services</h1>
      <p className="text-muted fs-5">
        Our Core YouTube SEO services are designed to boost organic growth...
      </p>
    </div>

    {/* ---- FIRST 6 BOXES (3 + 3) ---- */}
    <div className="row g-5">
      {services.slice(0, 6).map((service, idx) => (
        <div key={idx} className="col-lg-4 col-md-6">
          <div className="service-card card text-center border-0 pt-5 position-relative h-100">

            <div className="icon-circle position-absolute top-0 start-50 translate-middle shadow-sm">
              {service.icon}
            </div>

            <div className="card-body">
              <h4 className="card-title mb-3 fw-bold">{service.title}</h4>

              <ul className="list-unstyled text-start">
                {service.items.map((item, i) => (
                  <li key={i} className="mb-2 d-flex align-items-center">
                    <FaCheck className="text-secondary me-2 fs-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            </div>

          </div>
        </div>
      ))}
    </div>

    {/* ---- LAST ROW (1 BOX + IMAGE) ---- */}
    <div className="row g-5 mt-3">

      {/* Single Box (7th item) */}
      <div className="col-lg-4 col-md-6">
        <div className="service-card card text-center border-0 pt-5 position-relative h-100">

          <div className="icon-circle position-absolute top-0 start-50 translate-middle shadow-sm">
            {services[6].icon}
          </div>

          <div className="card-body">
            <h4 className="card-title mb-3 fw-bold">{services[6].title}</h4>

            <ul className="list-unstyled text-start">
              {services[6].items.map((item, i) => (
                <li key={i} className="mb-2 d-flex align-items-center">
                  <FaCheck className="text-secondary me-2 fs-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>

      {/* IMAGE → 2 COLUMN SPACE */}
      <div className="col-lg-8 col-md-6 d-flex align-items-center">
        <img
          src={ServiceImg}
          alt=""
          className="img-fluid w-100 rounded last-row-img"
        />
      </div>

    </div>

  </div>
</section>




{/* Deliverables  */}

   <section className="py-5 deliverable-wow">
      <div className="container-fluid px-5">

        {/* Title */}
        <div className="text-center mb-5">
          <h1 className="fw-bold wow-title">What You Will Get (Deliverables)</h1>
          <div className="underline mx-auto"></div>

          <p className="wow-subtitle text-muted mt-3 fs-5">
            You will receive a complete YouTube SEO package designed to boost visibility,
            rankings, and audience engagement.
          </p>
        </div>

        {/* Box */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="wow-box p-4 p-md-5">

              <h4 className='fw-bold pb-4'>My deliverables include:</h4>

              {items.map((item, i) => {
                const { title, desc } = splitText(item);
                return (
                  <div key={i} className="wow-item d-flex mb-4">
                    <div className="icon-wrap me-3">
                      <FaCheckCircle className="wow-icon" />
                    </div>

                    <div>
                      <h5 className="fw-bold mb-1 item-title">{title}</h5>
                      <p className="text-muted mb-0 item-desc">{desc}</p>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>

      </div>
    </section>     
            




    {/* pricing plan  */}
    <div className='bacgkround' id="seePrice">
    <div className="container-fluid px-5 py-5">
      <div>
        <h2 className="text-center fw-bold mb-2">YouTube SEO Pricing Plans</h2>
       <p className="text-center text-muted mb-5">Choose a plan that fits your growth goal</p>
      </div>

      <div className="row g-4 justify-content-center">

        {/* Basic */}
        <div className="col-md-4">
          <div className="pricing-box text-center p-4 position-relative" data-aos="fade-left">
            <div className="plan-title">Basic</div>

            <h2 className="price">
              <span className="old-price">$150</span> $99 <span>/Project</span>
            </h2>

            <ul className="features list-unstyled text-start mt-3">
              <li><FaCheck /> Mini Channel audit</li>
              <li><FaCheck /> Youtube channel evaluation</li>
              <li><FaCheck /> Title & description optimized</li>
              <li><FaCheck /> Thumbnail Optimization</li>
              <li><FaCheck /> Meta tag optimization</li>
              <li><FaCheck /> Captions and transcripts</li>
              <li><FaCheck /> 5 Keyword/hashtag research</li>
              <li><FaCheck /> Quick growth tips</li>
            </ul>

            <a href='https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22' className="pricing-btn mt-4 btn">Order Now On WhatsApp</a>
          </div>
        </div>

        {/* Standard - Featured */}
        <div className="col-md-4">
          <div className="pricing-box featured text-center p-4 position-relative" data-aos="zoom-in">
            {/* <span className="best-badge">Best Value</span> */}
            <div className="plan-title featured-title">Standard</div>

            <h2 className="price">
              <span className="old-price">$250</span> $199 <span>/Project</span>
            </h2>

            <ul className="features list-unstyled text-start mt-3">
              <li><FaCheck /> Everything in Basic</li>
              <li><FaCheck /> Full Channel audit</li>
              <li><FaCheck /> Youtube channel evaluation</li>
              <li><FaCheck /> Title & description optimizedn</li>
              <li><FaCheck /> Thumbnail Optimization</li>
              <li><FaCheck /> Competitor Analysis</li>
              <li><FaCheck /> Captions and transcripts</li>
              <li><FaCheck /> Content ideas</li>
              <li><FaCheck /> 10 Keyword/hashtag research</li>
              <li><FaCheck /> Ranking Strategy Plan</li>
              <li><FaCheck /> Weekly performance report</li>
            </ul>

            <a href='https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22' className="pricing-btn featured-btn mt-4 btn">Order Now On WhatsApp</a>
          </div>
        </div>

        {/* Premium */}
        <div className="col-md-4">
          <div className="pricing-box text-center p-4 position-relative" data-aos="fade-right">
            <div className="plan-title">Premium</div>

            <h2 className="price">
              <span className="old-price">$350</span> $299 <span>/Project</span>
            </h2>

            <ul className="features list-unstyled text-start mt-3">
              <li><FaCheck /> Everything in Standard</li>
              <li><FaCheck /> ull Channel Audit</li>
              <li><FaCheck /> Advanced Analytics Setup</li>
              <li><FaCheck /> Advanced Competitor Analysis</li>
              <li><FaCheck /> Youtube channel Optimization</li>
              <li><FaCheck /> 20 Keyword/hashtag research</li>
              <li><FaCheck /> full guidance and support + Suggestion</li>
              <li><FaCheck /> Ranking Strategy Plan</li>
              <li><FaCheck /> Monthly growth strategy report</li>
            </ul>

            <a href='https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22' className="pricing-btn mt-4 btn">Order Now On WhatsApp</a>
          </div>
        </div>

      </div>
    </div>
    </div>


{/* FAQ  */}

   <section className="py-5 faq-section">
      <div className="container-fluid px-5">

        <h1 className="text-center mb-5 faq-title">FREQUENTLY ASKED QUESTIONS (FAQ)</h1>

        <div className="row justify-content-center">
          <div className="col-lg-10">

            {faqData.map((item, i) => (
              <div
                key={i}
                className="faq-item p-3 p-md-4 mb-3 rounded shadow-sm"
                onClick={() => toggleFAQ(i)}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="faq-question m-0">{item.q}</h5>

                  <FaChevronDown
                    className={`faq-icon ${openIndex === i ? "rotate" : ""}`}
                  />
                </div>

                <div
                  className={`faq-answer mt-3 ${openIndex === i ? "open" : ""}`}
                >
                  {item.a}
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>

    <SocialIcon />
    <Footer />
    </div>
    );
};

export default Youtube;