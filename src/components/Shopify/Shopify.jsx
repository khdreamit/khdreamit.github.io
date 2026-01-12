import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import SocialIcon from '../SocialIcon/SocialIcon';
import Footer from '../Footer/Footer';
import { FaCheck, FaTag, FaTimes } from "react-icons/fa";
import YoutubeHero from '../../assets/s.jpg'
import YouSeo from '../../assets/r.jpg'
import '../Youtube/youtube.css'
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { PiMegaphoneDuotone } from "react-icons/pi";
import { FaSearch, FaChartLine, FaPenNib,FaShoppingCart, FaImage, FaChartPie, FaClock,  FaBullseye, FaCheckCircle, FaChevronDown} from "react-icons/fa";;




const Shopify = () => {

const services = [
  {
    title: "Ad Account Setup & Tracking",
    icon: <PiMegaphoneDuotone />,
    items: [
      "Facebook & Google Ads account setup",
      "Pixel & Conversion tracking",
      "Google Analytics integration",
      "Event tracking for conversions",
      "Data-driven optimization ready",
    ],
  },
  {
    title: "Audience Research & Targeting",
    icon: <FaChartLine  />,
    items: [
      "Buyer persona identification",
      "Interest & behavior targeting",
      "Competitor audience analysis",
      "Custom & Lookalike audience creation",
      "Target people ready to buy",
      
    ],
  },
  {
    title: " Campaign Strategy & Funnel Planning",
    icon: <FaSearch />,
    items: [
      "Full-funnel campaign setup",
      "Budget allocation & structuring",
      "TOF, MOF, BOF planning",
      "Scaling roadmap for growth",
      "Goal-oriented strategy",
    ],
  },
  {
    title: "Creative Strategy & Ad Copywriting",
    icon: <FaPenNib />,
    items: [
      "High-converting ad copy",
      "Headlines, primary text & CTA",
      "Image & video ad direction",
      "Scroll-stopping creative angles",
      "Engaging visuals & messaging",
    ],
  },
  {
    title: "Google Ads for Shopify",
    icon: <FaImage />,
    items: [
      "Google Shopping feed setup",
      "Search & Display campaigns",
      "Performance Max campaigns",
      "Keyword & bid optimization",
      "Trackable sales & ROI",
    ],
  },
  {
    title: " Retargeting & Remarketing Ads",
    icon: <FaChartPie />,
    items: [
      "Cart abandonment campaigns",
      "Product view retargeting",
      "Past customer targeting",
      "Warm audience conversion",
      "Increased ROAS",
    ],
  },
  {
    title: "Scaling & Budget Optimization",
    icon: <FaClock />,
    items: [
      "Horizontal & vertical scaling",
      "Budget allocation & control",
      "Reduce wasted ad spend",
      "Scale winning campaigns safely",
      "Predictable growth",
    ],
  },
  {
    title: "Reporting, Analytics & Optimization",
    icon: <FaBullseye />,
    items: [
      "Weekly & monthly reports",
      "KPI tracking (ROAS, CPA, AOV)",
      "Performance analysis",
      "Data-driven improvement",
      "Continuous growth insights",
    ],
  },
  {
    title: " Facebook & Instagram Ads Management",
    icon: <FaShoppingCart />,
    items: [
      "Campaign launch & monitoring",
      "Daily optimization & tweaks",
      "A/B testing ads & audiences",
      "Placement optimization",
      "Cost & ROAS improvement",
    ],
  },
]; 



const items = [
  {
    title: "Ad Performance Report",
    desc: "clicks, conversions, ROAS & overall ad results."
  },
  {
    title: "Sales & Revenue Report",
    desc: "total sales and revenue generated from ads"
  },
  {
    title: "Audience Performance Report",
    desc: "which audiences convert best"
  },
  {
    title: "Creative Performance Report",
    desc: "top-performing ads and creatives"
  },
  {
    title: "Funnel Performance Report",
    desc: "customer journey and drop-off analysis"
  },
  {
    title: "Budget & Spend Report",
    desc: "ad spend breakdown and efficiency"
  },
  {
    title: "Retargeting Report",
    desc: "recovered sales from warm audiences"
  },
  {
    title: "Weekly Optimization Report",
    desc: "improvements and tests done weekly."
  },
  {
    title: "Monthly Growth Summary",
    desc: "overall progress and growth insights"
  },
  {
    title: "Custom Insights Report",
    desc: "clear recommendations for scaling"
  },

];



  const faqData = [
    {
      q: "How long does it take to see results from Shopify Ads?",
      a: "Most stores start seeing traffic and initial sales within 7–14 days, while stable and scalable results usually take 30–60 days of optimization."
    },
    {
      q: "Is ad spend included in your pricing?",
      a: "No. Ad spend is separate and paid directly to Facebook or Google. My fee covers strategy, setup, management, and optimization."
    },
    {
      q: "Which platforms do you advertise on?",
      a: "I run Facebook, Instagram, Tiktok and Google Ads, depending on your product, budget, and business goals."
    },
    {
      q: "Do you guarantee sales or ROAS?",
      a: "I don’t promise fake guarantees, but I focus on data-driven strategies to maximize conversions, ROAS, and long-term growth."
    },
    {
      q: "What do you need from me to get started?",
      a: "Access to your Shopify store, ad accounts, and basic product information — I handle everything else."
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

        {/* Google hero  */}

<div className="shopify-hero d-flex align-items-center text-center">
  <div className="container">
    <h1 className="fw-bold text-white mb-3">
      Shopify Ads Expert Helping Brands Generate Consistent Sales
    </h1>
    <p className="text-white-80 fw-bold mx-auto" style={{ maxWidth: "600px" }}>
      Performance-focused Facebook & Google Ads for serious Shopify brands
    </p>

    <div className="mt-4 d-flex justify-content-center gap-3">
      <Link
  to="/portfolio"
  state={{ category: "Google Ads" }}
  className="btn btn-warning fw-semibold px-2 px-sm-4 py-2 rounded-pill shadow"
>
  View My Portfolio
</Link>
      <a href="#" onClick={(e) => {
       e.preventDefault();
        scrollToSection('seePrice');
        }} 
        className="btn btn-outline-light fw-semibold px-2 px-sm-4 py-2 rounded-pill shadow"
      >
        See Packages
      </a>
    </div>
  </div>
</div>







    {/* Google intro  */}

<div className="herobg py-5">
  <div className="container-fluid px-3 px-sm-5">
    <div className="row align-items-center youtube-bg">

      {/* Text Content */}
      <div className="col-lg-6 mb-4 mb-lg-0" >
        <h1 className="fw-bold">What is shopify Ads?</h1>
        <p className="lead">
           Shopify Ads means running paid ads (like Facebook, Instagram, or Google Ads) to bring targeted customers to your Shopify store and turn them into sales.

            Instead of waiting for people to find your store, Shopify Ads helps your products reach the right audience who are already interested in buying.
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


{/* why google ads need */}

<div className="py-5 feature-section">
  <div className="container-fluid px-3 px-sm-5">
    <div className="row align-items-center">

      <div className="col-lg-5 text-center mb-4 mb-lg-0">
        <img src={YouSeo} alt="YouTube SEO" className="img-fluid rounded shadow-lg feature-img" />
      </div>

      <div className="col-lg-7">
        <h2 className="fw-bold mb-3">Why Are Shopify Ads Important?</h2>
        <p className="text-muted">
          Shopify Ads are important because they help Shopify store owners get traffic, sales, and growth faster.

Without ads, most Shopify stores struggle to get customers. Ads allow your products to reach the right people on platforms like Facebook, Instagram, and Google — exactly where buyers spend their time.
        </p>

        <div className="benefit-box p-4 rounded shadow-sm">
          <ul className="list-unstyled">
            <li><span className="check-icon">✔</span> Instant traffic & visibility for your Shopify store</li>
            <li><span className="check-icon">✔</span> Targeted customers who are ready to buy</li>
            <li><span className="check-icon">✔</span> Faster sales without waiting for organic growth</li>
            <li><span className="check-icon">✔</span> Full control over ad budget & scaling</li>
            <li><span className="check-icon">✔</span> Higher conversion rate with data-driven ads</li>
            <li><span className="check-icon">✔</span> Retargeting to bring back lost visitors</li>
            <li><span className="check-icon">✔</span> Scalable growth & predictable revenue</li>
            <li><span className="check-icon">✔</span> Better ROI with optimized ad campaigns</li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</div>




{/* service  */}

<section className="py-5 service">
  <div className="container-fluid px-3 px-sm-5">

    {/* Service Container */}
    <div className="serviceCont mb-5">
      <h1 className="mb-3">My Services</h1>
      <p className="text-muted fs-5">
        Smart Strategy. Clean Execution. Real, Measurable Growth.
      </p>
    </div>

  
    <div className="row g-5">
      {services.map((service, idx) => (
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


  </div>
</section>




{/* Deliverables  */}

<section className="py-5 deliverable-wow">
  <div className="container-fluid px-3 px-sm-5">

    {/* Title */}
    <div className="text-center mb-5">
      <h1 className="fw-bold wow-title">What You Will Get (Deliverables)</h1>
      <div className="underline mx-auto"></div>

      <p className="wow-subtitle text-muted mt-3 fs-5">
        Everything You Need to Run Profitable Shopify Ads.      </p>
    </div>

    {/* Box */}
    <div className="row justify-content-center">
      <div className="col-12">
        <div className="wow-box p-2 p-md-5">

          <h4 className='fw-bold pb-4'>My deliverables include:</h4>

          <div className="row">
            {items.map((item, i) => (
              <div key={i} className="col-md-6 mb-4">
                <div className="wow-item d-flex">
                  <div className="icon-wrap me-3 p-1 p-sm-2">
                    <FaCheckCircle className="wow-icon" />
                  </div>

                  <div>
                    <h5 className="fw-bold mb-1 item-title">{item.title}</h5>
                    <p className="text-muted mb-0 item-desc">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>

  </div>
</section>    
            

    {/* pricing plan  */}
    <div className='bacgkround' id='seePrice'>
    <div className="container-fluid px-3 px-sm-5 py-5">
      <div>
        <h2 className="text-center fw-bold mb-2"> Pricing Plans</h2>
       <p className="text-center text-muted mb-5">Choose a plan that fits your growth goal</p>
      </div>

      <div className="row g-4 justify-content-center">

        {/* Basic */}
        <div className="col-md-4">
          <div className="pricing-box text-center p-4 position-relative" data-aos="fade-left">
            <div className="plan-title">Basic</div>

            <h2 className="price">
              <span className="old-price">$300</span> $199 <span>/Month</span>
            </h2>

            <ul className="features list-unstyled text-start mt-3">
              <li><FaCheck /> Complete ad account & tracking setup</li>
              <li><FaCheck /> 1 platform (Facebook or Google Ads)</li>
              <li><FaCheck /> Ad campaigns + basic funnel</li>
              <li><FaCheck /> Initial audience & creative testing</li>
              <li><FaCheck /> Weekly performance report</li>
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
              <span className="old-price">$400</span> $299 <span>/Month</span>
            </h2>

            <ul className="features list-unstyled text-start mt-3">
              <li><FaCheck /> Everything in Basic</li>
              <li><FaCheck /> Facebook + Google Ads management</li>
              <li><FaCheck /> Full-funnel strategy (TOF–MOF–BOF)</li>
              <li><FaCheck /> Advanced audience & creative testing</li>
              <li><FaCheck /> Retargeting & ROAS optimization</li>
              <li><FaCheck /> Weekly + detailed monthly reports</li>
            </ul>

            <a href='https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22' className="pricing-btn featured-btn mt-4 btn">Order Now On WhatsApp</a>
          </div>
        </div>

        {/* Premium */}
        <div className="col-md-4">
          <div className="pricing-box text-center p-4 position-relative" data-aos="fade-right">
            <div className="plan-title">Custom Plan</div>

            <div className='d-flex justify-content-center gap-2 pt-4'>
              <h4 className='fw-bold'>Price:</h4>
              <p className='pt-1 fw-bold'>Custom</p>
            </div>

            <ul className="features list-unstyled text-start mt-3">
              <li><FaCheck /> Choose any platform </li>
              <li><FaCheck /> Fully custom ad strategy & funnel</li>
              <li><FaCheck /> Unlimited campaigns & testing</li>
              <li><FaCheck /> Dedicated ads manager</li>
              <li><FaCheck /> Weekly growth & scaling calls</li>
              <li><FaCheck /> Custom reporting & insights</li>
            </ul>

            <a href='https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22' className="pricing-btn mt-4 btn">Get a Custom Plan</a>
          </div>
        </div>

      </div>
    </div>
    </div>

    {/* FAQ  */}

   <section className="py-5 faq-section">
      <div className="container-fluid px-3 px-sm-5">

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

export default Shopify;