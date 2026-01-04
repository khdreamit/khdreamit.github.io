import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import SocialIcon from '../SocialIcon/SocialIcon';
import Footer from '../Footer/Footer';
import { FaCheck, FaTag, FaTimes } from "react-icons/fa";
import YoutubeHero from '../../assets/youtubeHero.jpg'
import YouSeo from '../../assets/youSeo.png'
import '../Youtube/youtube.css'
import "aos/dist/aos.css";
import { FaSearch, FaChartLine, FaTags, FaPenNib,FaShoppingCart, FaImage, FaChartPie, FaClock,  FaBullseye, FaCheckCircle, FaChevronDown} from "react-icons/fa";;




const Google = () => {

const services = [
  {
    title: "Google Ads Account Setup & Smart Audit",
    icon: <FaTags />,
    items: [
      "Professional Google Ads account setup",
      "Billing & payment configuration",
      "Goal & conversion setup",
      "Complete account audit (if you already have one)",
      "Clear 30-day action roadmap",
    ],
  },
  {
    title: "High-Performance Campaign Creation",
    icon: <FaChartLine  />,
    items: [
      "Search Ads (high-intent customers)",
      "Display Ads (awareness + reach)",
      "YouTube Ads (fast visibility)",
      "Performance Max (AI-driven multi-channel growth)",
      "Local Service Ads",
      "Shopping Ads (for e-commerce stores)",
    ],
  },
  {
    title: " Deep Keyword Research & Competitor Analysis",
    icon: <FaSearch />,
    items: [
      "High-intent keywords",
      "Negative keywords (to stop waste)",
      "Competitor keyword insights",
      "Clean keyword groups & campaign structure",
    ],
  },
  {
    title: "Conversion-Focused Ad Copywriting",
    icon: <FaPenNib />,
    items: [
      "Engaging headlines",
      "Clear value-driven descriptions",
      "Multiple ad variations for A/B testing",
      "Smart keyword placement",
    ],
  },
  {
    title: "Professional Display Creatives",
    icon: <FaImage />,
    items: [
      "Modern, clean display banners",
      "Brand-consistent visuals",
      "YouTube ad creative direction",
      "Mobile-first layouts",
    ],
  },
  {
    title: " Conversion Tracking & Analytics Setup",
    icon: <FaChartPie />,
    items: [
      "Google Tag Manager (GTM)",
      "Google Analytics 4 (GA4)",
      "Form, call, purchase tracking",
      "Enhanced conversions",
      "UTM tracking for clean data",
    ],
  },
  {
    title: "Daily & Weekly Optimization",
    icon: <FaClock />,
    items: [
      "Smart bid adjustments",
      "Keyword cleanup",
      "Quality score improvement",
      "Device & location targeting",
      "Ad copy & creative A/B testing",
      "Budget shifting to best performers",
    ],
  },
  {
    title: "Remarketing & Smart Audience Targeting",
    icon: <FaBullseye />,
    items: [
      "Website visitor remarketing",
      "Add-to-cart retargeting",
      "YouTube viewer retargeting",
      "Custom audience targeting",
      "In-market & affinity audiences",
    ],
  },
  {
    title: " E-Commerce Google Ads (Specialized)",
    icon: <FaShoppingCart />,
    items: [
      "Merchant Center setup",
      "Product feed optimization",
      "Shopping Ads",
      "Performance Max for e-commerce",
      "Product-level bid cont",
      "ROAS-focused scaling",
    ],
  },
]; 



const items = [
  {
    title: "Full Campaign Report",
    desc: "A clean, easy-to-understand summary including campaigns created, ad groups and keywords added, targeting setup, audience strategy, bidding model used, search term and keyword performance, and what was optimized and why."
  },
  {
    title: "Performance Metrics Summary",
    desc: "I will provide the final stats including impressions and clicks, CTR, CPC, conversions, cost per conversion, ROAS for e-commerce, top-performing keywords, and worst-performing keywords. This helps you understand the exact impact of your ads."
  },
  {
    title: "Ad Copy & Creative Files",
    desc: "You will receive all ad headlines and descriptions, all display banners in PNG or JPG format, any variations used for A/B testing, and video script or YouTube guidance if applicable."
  },
  {
    title: "Keyword Research File",
    desc: "A complete keyword sheet including target keywords, search volume, competition level, CPC estimates, negative keyword list, and grouping structure."
  },
  {
    title: "Tracking & Analytics Documentation",
    desc: "You will receive proper tracking proof such as a list of all tracking events set up, GA4 event screenshots, GTM tag and trigger list, conversion tracking validation, and UTM structure guide. This ensures your data is 100% accurate."
  },
  {
    title: "Account Structure Blueprint",
    desc: "A visual or written layout of campaigns, ad groups, keywords, ad assets, and audience lists. This helps you or any future marketer easily understand the setup."
  },
  {
    title: "Optimization Summary (What Improvements Were Made)",
    desc: "A summary of all optimization tasks including keyword cleanup, bid adjustments, budget reallocation, ad testing, quality score improvements, negative keywords added, and audience refinements."
  },
  {
    title: "Final Recommendation Report",
    desc: "A short strategy document explaining what to do next, budget suggestions, new opportunities, next 30-day plan, and funnel or landing page improvement ideas."
  },
  {
    title: "Video Walkthrough (Optional)",
    desc: "If needed, you will also receive a screen-recorded video of 5–10 minutes explaining campaign overview, performance breakdown, how to read data, and what to do moving forward."
  },

];



  const faqData = [
    {
      q: "When will I start seeing results from Google Ads?",
      a: "Most clients notice early results within 3–7 days after the ads go live. For fully optimized performance, it usually takes 2–4 weeks as the system learns and improves."
    },
    {
      q: "Do you handle the ad budget for me?",
      a: "The ad budget is paid directly to Google from your own account. I only charge a service/management fee — giving you full transparency and control at all times."
    },
    {
      q: "Will I have access to my Google Ads account?",
      a: "Absolutely, yes. You will always have 100% access and ownership of your account. I believe in complete transparency."
    },
    {
      q: "Can you work with my existing Google Ads account?",
      a: "Of course! I can optimize what you already have or rebuild your campaigns from scratch — whichever brings you better performance."
    },
    {
      q: "Do you guarantee results?",
      a: "No marketer can promise guaranteed results — but I guarantee: Smart strategy, Honest work, Data-driven decisions, Continuous optimization, Steady performance improvement"
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

<div className="youtube-hero d-flex align-items-center text-center">
  <div className="container">
    <h1 className="fw-bold text-white mb-3">
      Grow Your Business with Expert Google Ads Management
    </h1>
    <p className="text-white-80 fw-bold mx-auto" style={{ maxWidth: "600px" }}>
      Drive targeted traffic, increase conversions, and maximize your ROI with tailored Google Ads campaigns designed for your business.
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


{/* Googler intro  */}

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
           I am specialize in creating high-performing Google Ads campaigns that drive real results. From keyword research and ad copywriting to campaign setup and optimization, every strategy is tailored to increase visibility, attract quality leads, and maximize ROI. Whether you’re a small business or a growing brand, i ensure your ads reach the right audience at the right time.
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




    {/* Google intro  */}

<div className="herobg py-5">
  <div className="container-fluid px-5">
    <div className="row align-items-center youtube-bg">

      {/* Text Content */}
      <div className="col-lg-6 mb-4 mb-lg-0" >
        <h1 className="fw-bold">What is Google Ads?</h1>
        <p className="lead">
           Google Ads is an online advertising platform developed by Google that allows businesses to reach potential customers at the exact moment they are searching for products or services. It works on a pay-per-click (PPC) model, meaning advertisers only pay when someone clicks on their ad. With Google Ads, businesses can create highly targeted campaigns based on keywords, location, demographics, and user behavior, ensuring maximum visibility and ROI. Whether you want to drive traffic to your website, generate leads, or boost sales, Google Ads provides a powerful and measurable way to grow your business online.
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
  <div className="container-fluid px-5">
    <div className="row align-items-center">

      <div className="col-lg-5 text-center mb-4 mb-lg-0">
        <img src={YouSeo} alt="YouTube SEO" className="img-fluid rounded shadow-lg feature-img" />
      </div>

      <div className="col-lg-7">
        <h2 className="fw-bold mb-3">Why Google Ads is Important?</h2>
        <p className="text-muted">
          Google Ads is a powerful digital marketing platform that helps your business reach the right audience online. It not only drives traffic to your website but also significantly boosts sales and lead generation. With Google Ads, businesses can achieve fast and measurable results, as it displays your products or services precisely when people are actively searching for them.
          Moreover, Google Ads allows budget control, ROI tracking, and creating customized campaigns based on market trends.
          In short, Google Ads is an essential tool for growing your business, increasing visibility, and maximizing revenue.
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




{/* service  */}

<section className="py-5 service">
  <div className="container-fluid px-5">

    {/* Service Container */}
    <div className="serviceCont mb-5">
      <h1 className="mb-3">Google Ads Services</h1>
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
  <div className="container-fluid px-5">

    {/* Title */}
    <div className="text-center mb-5">
      <h1 className="fw-bold wow-title">What You Will Get (Deliverables)</h1>
      <div className="underline mx-auto"></div>

      <p className="wow-subtitle text-muted mt-3 fs-5">
        When your Google Ads setup & optimization work is fully completed, you will receive a full package of documents, reports, and assets so you clearly understand everything that has been done and what results you are getting.      </p>
    </div>

    {/* Box */}
    <div className="row justify-content-center">
      <div className="col-12">
        <div className="wow-box p-4 p-md-5">

          <h4 className='fw-bold pb-4'>My deliverables include:</h4>

          <div className="row">
            {items.map((item, i) => (
              <div key={i} className="col-md-6 mb-4">
                <div className="wow-item d-flex">
                  <div className="icon-wrap me-3">
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

export default Google;