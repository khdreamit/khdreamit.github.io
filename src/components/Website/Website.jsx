import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import SocialIcon from '../SocialIcon/SocialIcon';
import Footer from '../Footer/Footer';
import { FaCheck, FaTimes } from "react-icons/fa";
import YoutubeHero from '../../assets/youtubeHero.jpg'
import YouSeo from '../../assets/youSeo.png'
import '../Youtube/youtube.css'
import './website.css'
import "aos/dist/aos.css";
import {FaAudible, FaSearch, FaTools, FaLink, FaMapMarkerAlt, FaFileAlt,  FaCheckCircle, FaChevronDown} from "react-icons/fa";import { Link } from 'react-router';
;




const Website = () => {

const services = [
  {
    icon: <FaAudible size={40} className="mb-3 icon"/>,
    title: 'Audit Plan',
    description: 'Analyze your website to uncover issues and boost performance, SEO, and user experience.',
    path: '/auditplan'
  },
  {
    icon: <FaSearch size={40} className="mb-3 icon"/>,
    title: 'On-Page SEO',
    description: 'We improve your titles, headings, content, and structure to help your pages rank better.',
    path: '/onpage'
  },
  {
    icon: <FaTools size={40} className="mb-3 icon"/>,
    title: 'Technical SEO',
    description: 'We fix behind-the-scenes issues, increase speed, and ensure smooth performance on all devices.',
    path: '/technical'
  },
  {
    icon: <FaLink size={40} className="mb-3 icon"/>,
    title: 'Off-Page SEO & Backlinks',
    description: 'We build safe, high-quality backlinks that boost your website’s trust and authority.',
    path: '/offpage'
  },
  {
    icon: <FaMapMarkerAlt size={40} className="mb-3 icon"/>,
    title: 'Local SEO',
    description: 'We help your business appear in local searches and Google Maps so nearby customers can find you easily.',
    path: '/local'
  },
  {
    icon: <FaFileAlt size={40} className="mb-3 icon"/>,
    title: 'Content Optimization',
    description: 'Enhance existing content or create new SEO-friendly content to attract more visitors.',
    path: 'content'
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

        {/* Website hero  */}

<div className="youtube-hero d-flex align-items-center text-center">
  <div className="container">
    <h1 className="fw-bold text-white mb-3">
      Your website deserves to be seen — let’s grow together
    </h1>
    <p className="text-white-80 fw-bold mx-auto" style={{ maxWidth: "600px" }}>
      We guide your website to the top with simple steps, clear strategy, and genuine support
    </p>

    <div className="mt-4 d-flex justify-content-center gap-3">
      <a href="https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22" className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow">
        Get a Free Channel Audit
      </a>

      <a href="#" onClick={(e) => {
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


{/* website intro  */}

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




    {/* website intro  */}

<div className="herobg py-5">
  <div className="container-fluid px-5">
    <div className="row align-items-center youtube-bg">

      {/* Text Content */}
      <div className="col-lg-6 mb-4 mb-lg-0" >
        <h1 className="fw-bold">What is Website SEO?</h1>
        <div >
          Website SEO (Search Engine Optimization) is the practice of optimizing your website to make it easily discoverable on search engines like Google. A well-optimized site ranks higher in search results, attracts more visitors, builds trust with your audience, and creates greater growth opportunities for your business.
          <br /> <br />
          <h6 className="fw-bold">SEO focuses on three key areas: </h6>
          <ul>
            <li><strong>On-Page SEO: </strong> Improving your content, keywords, titles, and structure so search engines understand your website better.</li>
            <li><strong>Technical SEO:</strong> Making sure your site is fast, secure, and easy to browse.</li>
            <li><strong>Off-Page SEO: </strong> Building authority through backlinks and trust signals from other sites. </li>
          </ul>
                
          In short, effective SEO makes your website more visible, easier to find, and more successful online — all organically, without the need to pay for ads.
        </div>

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


{/* why website seo need */}

<div className="py-5 feature-section">
  <div className="container-fluid px-5">
    <div className="row align-items-center">

      <div className="col-lg-5 text-center mb-4 mb-lg-0">
        <img src={YouSeo} alt="YouTube SEO" className="img-fluid rounded shadow-lg feature-img" />
      </div>

      <div className="col-lg-7">
        <h2 className="fw-bold mb-3">Why Website SEO Is Important?</h2>
        <p className="text-muted">
          Website SEO is important because it helps your business get seen by the right people at the right time. When someone searches for a service or product you offer, SEO makes sure your website shows up higher in the results — giving you a better chance to attract real customers.
        </p>

        <div className="benefit-box p-4 rounded shadow-sm">
          <ul className="list-unstyled">
            <h6 className='fw-bold'>Good SEO can:</h6>
            <li><span className="check-icon p-2">✔</span> <strong>Increase Visibility: </strong> People find your business faster.</li>
            <li><span className="check-icon p-2">✔</span> <strong>Build Trust:: </strong> Websites that rank higher feel more reliable to visitors.</li>
            <li><span className="check-icon p-2">✔</span> <strong>Bring Free Traffic: </strong> You attract visitors naturally without paying for ads.</li>
            <li><span className="check-icon p-2">✔</span> <strong>Improve User Experience: </strong>  A well-optimized site loads faster and feels smoother.</li>
            <li><span className="check-icon p-2">✔</span> <strong>Boost Sales & Growth: </strong> More visitors = more potential customers.</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</div>




{/* service  */}

 <section className="py-5 service">
      <div className="container-fluid px-5">
        {/* Service Header */}
        <div className="serviceCont mb-5 text-center">
          <h1 className="mb-3">Our SEO Services</h1>
          <p className="text-muted fs-5">
            We offer easy, helpful SEO services to make your website more visible and user-friendly.
          </p>
        </div>

        {/* Services Row */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm p-4 text-center" >
                {service.icon}
                <h5 className="mt-3 mb-3 fw-bold">{service.title}</h5>
                <p className="text-muted">{service.description}</p>
                <Link to={service.path} className="btn button mt-3">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>




{/* Deliverables  */}

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
            

{/* FAQ  */}

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


    {/* pricing plan  */}
    <div className='bacgkround' id='seePrice'>
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
              <span className="old-price">$49</span> $29 <span>/Project</span>
            </h2>

            <ul className="features list-unstyled text-start mt-3">
              <li><FaCheck /> Title Optimization</li>
              <li><FaCheck /> Keyword Research</li>
              <li><FaCheck /> Thumbnail Suggestion</li>
              <li><FaTimes className="text-danger" /> Competitor Analysis</li>
              <li><FaTimes className="text-danger" /> SEO Report</li>
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
              <span className="old-price">$89</span> $59 <span>/Project</span>
            </h2>

            <ul className="features list-unstyled text-start mt-3">
              <li><FaCheck /> Title + Tag Optimization</li>
              <li><FaCheck /> Full Keyword Plan</li>
              <li><FaCheck /> Competitor Research</li>
              <li><FaCheck /> SEO Description</li>
              <li><FaTimes className="text-danger" /> 24/7 Support</li>
            </ul>

            <a href='https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22' className="pricing-btn featured-btn mt-4 btn">Order Now On WhatsApp</a>
          </div>
        </div>

        {/* Premium */}
        <div className="col-md-4">
          <div className="pricing-box text-center p-4 position-relative" data-aos="fade-right">
            <div className="plan-title">Premium</div>

            <h2 className="price">
              <span className="old-price">$149</span> $99 <span>/Project</span>
            </h2>

            <ul className="features list-unstyled text-start mt-3">
              <li><FaCheck /> Full YouTube SEO</li>
              <li><FaCheck /> Ranking Strategy & Audit</li>
              <li><FaCheck /> Performance Monitoring</li>
              <li><FaCheck /> Thumbnail A/B Testing</li>
              <li><FaCheck /> 24/7 Priority Support</li>
            </ul>

            <a href='https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22' className="pricing-btn mt-4 btn">Order Now On WhatsApp</a>
          </div>
        </div>

      </div>
    </div>
    </div>

    <SocialIcon />
    <Footer />
    </div>
    );
};

export default Website;