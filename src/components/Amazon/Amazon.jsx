import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import SocialIcon from '../SocialIcon/SocialIcon';
import Footer from '../Footer/Footer';
import { FaCheck, FaTimes } from "react-icons/fa";
import YoutubeHero from '../../assets/w.jpg'
import YouSeo from '../../assets/youSeo.png'
import '../Youtube/youtube.css'
import "aos/dist/aos.css";
import YouMan from '../../assets/youMan2.png'
import { Link } from "react-router-dom";
import { FaSearch, FaHockeyPuck, FaTags, FaImage , FaChartBar , FaPeopleArrows , FaPuzzlePiece, FaCheckCircle, FaChevronDown} from "react-icons/fa";;




const Amazon = () => {

const services = [
  {
    title: "Amazon PPC Advertising",
    icon: <FaSearch />,
    items: [
      "Keyword-targeted Amazon ads",
      "Sponsored Product campaigns",
      "Budget-friendly ad setup",
      "Daily performance monitoring",
      "Sales-focused optimization",
    ],
  },
  {
    title: "Book Listing Optimization",
    icon: <FaHockeyPuck />,
    items: [
      "SEO-friendly book description",
      "Keyword research & placement",
      "Improved title & subtitle structure",
      "Category optimization",
      "Better discoverability on Amazon",
    ],
  },
  {
    title: "Reader Targeting",
    icon: <FaTags  />,
    items: [
      "Reach the right readers by genre",
      "Interest-based audience targeting",
      "Reader-friendly marketing approach",
      "No spam or fake traffic",
      "Real reader engagement",
    ],
  },
  {
    title: "Book Launch Promotion",
    icon: <FaImage />,
    items: [
      "New book launch strategy",
      "Early visibility boost",
      "Launch-day traffic support",
      "Ranking-focused promotion",
      "Smooth & stress-free launch",
    ],
  },
  {
    title: "Review Growth Support",
    icon: <FaChartBar />,
    items: [
      "Ethical review growth methods",
      "Reader engagement campaigns",
      "Review visibility improvement",
      "Trust-building strategies",
      "Long-term credibility support",
    ],
  },
  {
    title: "Social Media Promotion",
    icon: <FaPeopleArrows  />,
    items: [
      "Facebook book promotion",
      "Instagram reader targeting",
      "Genre-based audience reach",
      "Soft & natural promotion",
      "Increased book awareness",
    ],
  },
  {
    title: "Kindle & eBook Promotion",
    icon: <FaPuzzlePiece  />,
    items: [
      "Kindle-focused marketing",
      "eBook visibility boost",
      "Price-based promotion strategy",
      "Kindle reader targeting",
      "Increased downloads & reads",
    ],
  },
  {
  title: "Discount & Deal Promotion",
  icon: <FaChartBar />,
  items: [
    "Limited-time discount campaigns",
    "Deal-based traffic boost",
    "Reader attraction strategy",
    "Sales spike support",
    "Smart pricing promotion",
  ],
},
{
  title: "Author Brand Building",
  icon: <FaCheckCircle />,
  items: [
    "Author visibility growth",
    "Brand trust development",
    "Consistent promotion strategy",
    "Long-term audience building",
    "Professional author presence",
  ],
},

]; 



const items = [
  {
    title: "Campaign Overview",
    desc: "Summary of all promotion activities."
  },
  {
    title: "Target Audience",
    desc: "Readers and demographics targeted."
  },
  {
    title: "Ad Performance",
    desc: "How your Amazon ads performed."
  },
  {
    title: "Visibility Report",
    desc: "How often your book appeared in search results."
  },
  {
    title: "Click-Through Rate (CTR)",
    desc: "Percentage of ad views that resulted in clicks."
  },
  {
    title: "Conversion Rate",
    desc: "Percentage of clicks that resulted in book purchases."
  },
  {
    title: "Reviews & Feedback",
    desc: "Summary of new reviews and reader feedback received."
  },
  {
    title: "Keyword Performance",
    desc: "Performance of the selected keywords for your book promotion."
  },
  {
    title: "Category Ranking",
    desc: "Your book’s rank in relevant Amazon categories."
  },
  {
    title: "Promotional Activities",
    desc: "Posts and campaigns run for book visibility."
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

{/* youtube hero  */}

      <div className="youtube-hero d-flex align-items-center text-center">
        <div className="container">
          <h1 className="fw-bold text-white mb-3">
              We Help the Right Readers Discover Your Book
           </h1>
                <p className="text-white-80 fw-bold mx-auto" style={{ maxWidth: "600px" }}>
                   Gentle, Honest Amazon Book Promotion — No Pressure, Just Results
                </p>
      <div className="mt-4 d-flex justify-content-center gap-3">
                  <Link
                    to="/portfolio"
                    state={{ category: "Amazon Book Promotion" }}
                    className="btn btn-warning fw-semibold px-2 px-sm-4 py-2 rounded-pill shadow"
                    >
                    View My Portfolio
                  </Link>

          
                      <a 
                          href="#" 
                          onClick={(e) => {
                          e.preventDefault();
                          scrollToSection('seePrice');
                          }} 
                          className="btn btn-outline-light fw-semibold px-2 px-sm-4py-2 rounded-pill shadow"
                      >
                        See Packages
                      </a>
            </div>
         </div>
      </div>


{/* Youtuber intro  */}

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




        {/* youtube intro  */}

<div className="herobg py-5">
  <div className="container-fluid px-5">
    <div className="row align-items-center youtube-bg">

      {/* Text Content */}
      <div className="col-lg-6 mb-4 mb-lg-0" >
        <h1 className="fw-bold">What is Amazon Book Promotion?</h1>
        <p className="lead">
          Amazon Book Promotion helps your book reach the readers who will truly enjoy it. With millions of books on Amazon, even the best stories can get lost—but with the right promotion, your book can gain visibility, attract honest reviews, and connect with readers naturally, without pushy ads or hype.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=8801947349917&text=%22Hello%2C%20how%20to%20are%20you?%20%22"
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
        <h2 className="fw-bold mb-3">Why Amazon Book Promotion is Important?</h2>
        <p className="text-muted">
          Promoting your book on Amazon is the key to reaching the right readers, gaining visibility, and growing your audience. With the right promotion, your story gets noticed, readers find it easily, and your book can truly shine.
        </p>

        <div className="benefit-box p-4 rounded shadow-sm">
          <ul className="list-unstyled">
            <li><span className="check-icon">✔</span> Reach the readers who will love your book.</li>
            <li><span className="check-icon">✔</span> Get your book noticed in a crowded marketplace.</li>
            <li><span className="check-icon">✔</span> Increase your book sales naturally.</li>
            <li><span className="check-icon">✔</span> Build credibility with honest reviews.</li>
            <li><span className="check-icon">✔</span> Connect with your ideal audience easily.</li>
            <li><span className="check-icon">✔</span> Make your book visible to people searching for it.</li>
            <li><span className="check-icon">✔</span> Turn a good book into a bestseller opportunity.</li>
            <li><span className="check-icon">✔</span> Promote without being pushy or spammy.</li>
            <li><span className="check-icon">✔</span> Save time and focus on writing, not marketing.</li>
            <li><span className="check-icon">✔</span> Give your story the attention it deserves.</li>
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
      <h1 className="mb-3">Amazon book promotion service</h1>
      <p className="text-muted fs-5">
       Your book is promoted to the right audience who will genuinely enjoy reading it.
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
   {/* ---- LAST SERVICES (AUTO) ---- */}
<div className="row g-5 mt-3">
  {services.slice(6).map((service, idx) => (
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

export default Amazon;