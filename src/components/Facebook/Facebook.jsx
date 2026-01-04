import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import SocialIcon from '../SocialIcon/SocialIcon';
import Footer from '../Footer/Footer';
import { FaPix  } from "react-icons/fa6";
import YoutubeHero from '../../assets/youtubeHero.jpg'
import YouSeo from '../../assets/youSeo.png'
import '../Youtube/youtube.css'
import "aos/dist/aos.css";
import YouMan from '../../assets/youMan2.png'
// import ServiceImg from '../../assets/Youtube.jpg'
import {FaCheck, FaTimes, FaSearch, FaHockeyPuck, FaTags, FaImage , FaChartBar , FaPeopleArrows , FaPuzzlePiece, FaCheckCircle, FaChevronDown} from "react-icons/fa";;




const Facebook = () => {

const services = [
  {
    title: "Facebook Ad Strategy Development",
    icon: <FaSearch />,
    items: [
      "I create a custom ad strategy tailored to your business goals, budget, and target audience. Every campaign starts with a solid plan to maximize conversions and ROI. With the right strategy, your ads reach the right people at the right time.",
    ],
  },
  {
    title: "Target Audience Research & Segmentation",
    icon: <FaHockeyPuck />,
    items: [
      "I conduct in-depth audience research to identify who is most likely to engage with your product or service. Using demographics, location, interests, and behavior, I segment your audience to ensure your ads are shown only to the people who matter most.",
    ],
  },
  {
    title: "Campaign Setup & Management",
    icon: <FaTags  />,
    items: [
      "I handle full campaign setup, including campaign objectives, budget allocation, bidding strategies, and ad placements. Continuous monitoring and optimization ensure your campaigns perform at their best and deliver measurable results.",
    ],
  },
  {
    title: "Ad Copywriting",
    icon: <FaImage />,
    items: [
      "I write professional and persuasive ad copy that highlights your product or service’s key benefits. Compelling copy engages users and encourages them to take action on your ads.",
    ],
  },
  {
    title: "Lead Generation Campaigns",
    icon: <FaChartBar />,
    items: [
      "I create campaigns specifically designed to collect high-quality leads. Optimized forms, CTAs, and landing pages help generate prospects who are genuinely interested in your business.",
    ],
  },
  {
    title: "Conversion & Sales Campaigns",
    icon: <FaPeopleArrows  />,
    items: [
      "I run conversion-focused campaigns aimed at increasing sales. From audience targeting to creative optimization, every aspect of the campaign is designed to drive measurable revenue growth",
    ],
  },
  {
    title: " Retargeting / Remarketing Ads",
    icon: <FaPuzzlePiece />,
    items: [
      "I retarget users who have already interacted with your website or social media profiles. Remarketing increases conversion rates by reminding interested users about your products or services.",
    ],
  },

  {
    title: "Facebook Pixel Setup & Tracking",
    icon: <FaPix />,
    items: [
      "I install and configure Facebook Pixel on your website to track user behavior. Pixel tracking allows you to measure ad effectiveness, monitor conversions, and optimize campaigns based on real data."
    ],
  },
]; 



const items = [
  {
    title: "Campaign Overview",
    desc: "A summary of all active and completed campaigns, including their objectives such as Traffic, Leads, Sales, or Engagement."
  },
  {
    title: "Budget & Spending Analysis",
    desc: "A breakdown of the total budget, actual spend, and daily spending patterns to ensure full transparency."
  },
  {
    title: "Reach & Impressions",
    desc: "Detailed data showing how many people saw the ads and how many times they were displayed."
  },
  {
    title: "Click & Engagement Metrics",
    desc: "Key performance indicators such as Total Clicks, CTR, and CPC to analyze ad engagement."
  },
  {
    title: "Lead & Sales Performance",
    desc: "Conversion metrics including total leads, cost per lead, purchases, conversions, and ROAS."
  },
  {
    title: "Audience Performance Insights",
    desc: "Insights on best-performing age groups, gender, location, and winning audience segments."
  },
  {
    title: "Creative Performance Review",
    desc: "Evaluation of top-performing images, videos, headlines, captions, and engagement scores."
  },
  {
    title: "Device Performance",
    desc: "Comparison of results between mobile and desktop to detect high-performing platforms."
  },
  {
    title: "Placement Performance",
    desc: "Performance across Facebook Feed, Instagram Feed, Reels, Stories, and other placements."
  },
  {
    title: "Conversion Tracking & Pixel Insights",
    desc: "Data including landing page activity, Add to Cart, Checkout, Purchases, and pixel event tracking."
  },
  {
    title: "Key Insights & Next-Step Recommendations",
    desc: "A concise summary of what worked, areas to improve, and strategic recommendations."
  }
];





  const faqData = [
    {
      q: "Do I need to give access to my Facebook Page?",
      a: "Yes. To run and manage your ads, I require Partner Access to your Facebook Page. You can grant only the necessary permissions (Advertiser/Analyst), ensuring your page remains completely secure and fully under your control."
    },
    {
      q: "What results can I expect from Facebook Ads?",
      a: "Facebook Ads can generate leads, sales, website traffic, and brand awareness. Results depend on strategy, audience targeting, creatives, and budget."
    },
    {
      q: "Do you provide monthly performance reports?",
      a: "Yes. Every client receives a detailed monthly report covering reach, clicks, leads, sales, ROAS, and all key performance metrics."
    },
    {
      q: "Do you guarantee specific results?",
      a: "I don’t offer guaranteed numbers, but I follow a data-driven approach focused on delivering strong, measurable performance with continuous optimization."
    },
    {
      q: "How long does it take to see results?",
      a: "Initial results typically appear within 7–14 days. For conversion-focused campaigns, it may take 2–4 weeks to fully optimize and scale."
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

        {/* facebook hero  */}

<div className="youtube-hero d-flex align-items-center text-center">
  <div className="container">
    <h1 className="fw-bold text-white mb-3">
      Facebook Ads service - Grow Your Business
    </h1>
    <p className="text-white-80 fw-bold mx-auto" style={{ maxWidth: "600px" }}>
      Targeted campaigns, optimized strategies & measurable growth — I help businesses reach the right audience at the right time
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


{/* Facebooker intro  */}

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
            I’m a Facebook Ads Specialist helping businesses reach the right audience with data-driven strategies. I create high-converting ad campaigns, optimize performance, reduce ad costs, and scale results effectively. My goal is simple — turn clicks into real customers.
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




 {/* facebook intro  */}

<div className="herobg py-5">
  <div className="container-fluid px-5">
    <div className="row align-items-center youtube-bg">

      {/* Text Content */}
      <div className="col-lg-6 mb-4 mb-lg-0" >
        <h1 className="fw-bold">What is Facebook Ads?</h1>
        <p className="lead">
           Facebook Ads are paid advertisements on Facebook and Instagram that allow businesses, brands, and individuals to reach their target audience effectively. With Facebook Ads, you can target people based on age, location, interests, and behavior, making your campaigns much more precise and impactful than organic posts. These ads can help you increase sales, generate leads, drive website traffic, boost brand awareness, and grow your social media following. The biggest advantage of Facebook Ads is its powerful targeting capabilities, flexible budget control, and the ability to measure results accurately. In short, it enables businesses to reach the right people at the right time, maximizing growth and ROI while optimizing ad spend.
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


{/* why Facebook ads need */}

<div className="py-5 feature-section">
  <div className="container-fluid px-5">
    <div className="row align-items-center">

      <div className="col-lg-5 text-center mb-4 mb-lg-0">
        <img src={YouSeo} alt="YouTube SEO" className="img-fluid rounded shadow-lg feature-img" />
      </div>

      <div className="col-lg-7">
        <h2 className="fw-bold mb-3">Why Facebook Ads Are Important?</h2>
        <p className="text-muted">
          Facebook Ads have become a powerful tool for businesses of all sizes. Here’s why they are essential for modern marketing:
        </p>

        <div className="benefit-box p-4 rounded shadow-sm">
          <ul className="list-unstyled">
            <li><span className="check-icon">✔</span> Reach a massive audience of billions on Facebook.</li>
            <li><span className="check-icon">✔</span> Target people by age, location, interests, and behavior.</li>
            <li><span className="check-icon">✔</span> Run ads on any budget and pay only for results.</li>
            <li><span className="check-icon">✔</span> Track all campaign performance in real time.</li>
            <li><span className="check-icon">✔</span> Increase brand visibility and awareness.</li>
            <li><span className="check-icon">✔</span> Drive more traffic to your website or landing page.</li>
            <li><span className="check-icon">✔</span> Convert users into leads and customers effectively.</li>
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
      <h1 className="mb-3">Professional Facebook Ads Services to Grow Your Business</h1>
      <p className="text-muted fs-5">
        From strategy and targeting to creative design and conversion optimization, I help businesses reach the right audience, generate leads, and maximize ROI with high-performing Facebook ad campaigns
      </p>
    </div>

    {/* ---- FIRST 6 BOXES  ---- */}
    <div className="row g-5">
      {services.map((service, idx) => (
        <div key={idx} className="col-lg-4 col-md-6">
          <div className="service-card card text-center border-0 pt-5 position-relative h-100">

            <div className="icon-circle position-absolute top-0 start-50 translate-middle shadow-sm">
              {service.icon}
            </div>

            <div className="card-body">
              <h4 className="card-title mb-3 fw-bold">{service.title}</h4>

                {service.items.map((item, i) => (
                  <div className=" text-start mb-2 d-flex align-items-center" key={i}>                           
                    {item}
                  </div>
                ))}
              

            </div>

          </div>
        </div>
      ))}
    </div>

    {/* ---- LAST ROW (1 BOX + IMAGE) ---- */}


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
        Every Facebook Ads project includes a clear, data-driven performance report designed to help clients understand results and make smarter marketing decisions. My reporting focuses on transparency, insights, and measurable growth.
      </p>
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
        <h2 className="text-center fw-bold mb-2">Facebook Ads Pricing Plans</h2>
       <p className="text-center text-muted mb-5">Choose a plan that fits your growth goal</p>
      </div>

      <div className="row g-4 justify-content-center">

        {/* Basic */}
        <div className="col-md-4">
          <div className="pricing-box text-center p-4 position-relative" data-aos="fade-left">
            <div className="plan-title">Basic</div>

            <h2 className="price">
              <span className="old-price">$250</span> $199 <span>/Month</span>
            </h2>

            <ul className="features list-unstyled text-start mt-3">
              <li><FaCheck /> 1 Facebook Ads Campaign</li>
              <li><FaCheck /> Audience Research & Targeting</li>
              <li><FaCheck /> Ad Setup & Creative Design (1-2 Ads)</li>
              <li><FaCheck /> Basic Performance Report</li>
              <li><FaCheck /> Weekly Performance Summary</li>
              <li><FaCheck /> Monthly Report & Insights</li>
              
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
              <span className="old-price">$400</span> $349 <span>/Month</span>
            </h2>

            <ul className="features list-unstyled text-start mt-3">
              <li><FaCheck /> Up to 3 Facebook Ads Campaigns</li>
              <li><FaCheck /> Advanced Audience Targeting & Segmentation</li>
              <li><FaCheck /> Ad Setup & Creative Design (3-5 Ads)</li>
              <li><FaCheck /> A/B Testing & Optimization</li>
              <li><FaCheck /> Weekly Performance Tracking & Adjustments</li>
              <li><FaCheck /> Detailed Monthly Performance Report</li>
              
            </ul>

            <a href='https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22' className="pricing-btn featured-btn mt-4 btn">Order Now On WhatsApp</a>
          </div>
        </div>

        {/* Premium */}
        <div className="col-md-4">
          <div className="pricing-box text-center p-4 position-relative" data-aos="fade-right">
            <div className="plan-title">Premium</div>

            <h2 className="price">
              <span className="old-price">$600</span> $500 <span>/Month</span>
            </h2>

            <ul className="features list-unstyled text-start mt-3">
              <li><FaCheck /> Unlimited Facebook Ads Campaigns</li>
              <li><FaCheck /> Full Audience Research & Segmentation</li>
              <li><FaCheck /> Ad Setup & Creative Design (5-10 Ads)</li>
              <li><FaCheck /> A/B Testing, Optimization & Scaling</li>
              <li><FaCheck /> Advanced Analytics & Performance Reporting</li>
              <li><FaCheck /> Strategy Consultation & Planning</li>
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

export default Facebook;