import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import YoutubeHero from '../../assets/youtubeHero.jpg'


const services = [
  {
    id: 1,
    title: "Local SEO Keyword Research",
    desc: "Find the best local keywords to attract nearby customers."
  },
  {
    id: 2,
    title: "Profitable (KGR) Keywords Research",
    desc: "Target low-competition keywords that bring fast results."
  },
  {
    id: 3,
    title: "Advanced Competitor Analysis",
    desc: "Analyze competitors’ strategies to outperform them."
  },
  {
    id: 4,
    title: "Website SEO Audit Report",
    desc: "Identify SEO issues, errors, and growth opportunities."
  },
  {
    id: 5,
    title: "On-Page SEO Optimization",
    desc: "Optimize content, titles, meta tags, and internal links."
  },
  {
    id: 6,
    title: "Technical SEO Optimization",
    desc: "Fix backend SEO issues for better crawling and indexing."
  },
  {
    id: 7,
    title: "Off-Page SEO with High-Quality Backlinks",
    desc: "Build authority using safe and trusted backlinks."
  },
  {
    id: 8,
    title: "Page Speed Optimization",
    desc: "Improve website loading speed for better user experience."
  },
  {
    id: 9,
    title: "GMB SEO Optimization",
    desc: "Optimize Google My Business for higher local visibility."
  },
  {
    id: 10,
    title: "Local Citations Backlinks",
    desc: "Boost local SEO credibility with consistent citations."
  },
  {
    id: 11,
    title: "Local Directory Listings",
    desc: "Submit business to trusted local directories."
  },
  {
    id: 12,
    title: "Google Maps Setup",
    desc: "Set up and verify your business on Google Maps."
  },
  {
    id: 13,
    title: "Google Maps Citations",
    desc: "Improve local map rankings with optimized citations."
  },
  {
    id: 14,
    title: "Guest Post Backlinks",
    desc: "Gain authority through niche-relevant guest posting."
  },
  {
    id: 15,
    title: "High-Quality Profile Backlinks",
    desc: "Build strong profile backlinks from trusted platforms."
  },
  {
    id: 16,
    title: "Authority Web 2.0 Backlinks",
    desc: "Create backlinks on high-authority Web 2.0 sites."
  },
  {
    id: 17,
    title: "Advanced Social Media Marketing",
    desc: "Drive traffic and engagement from social platforms."
  },
  {
    id: 18,
    title: "Website Backlink Analysis",
    desc: "Analyze backlink quality and SEO impact."
  },
  {
    id: 19,
    title: "Domain Authority (DA/PA) Increase",
    desc: "Improve website authority and trust score."
  },
  {
    id: 20,
    title: "Google Ads Setup & Management",
    desc: "Run and manage paid campaigns for instant visibility."
  }
];




const benifits = [
  {
    id: 1,
    title: "Website Boost Search Results"
  },
  {
    id: 2,
    title: "Bring Your Business Local Customer"
  },
  {
    id: 3,
    title: "Increase Your Phone Calls"
  },
  {
    id: 4,
    title: "Helps in GMB 3-Pack Ranking"
  },
  {
    id: 5,
    title: "Google Top Ranking"
  }
];




const LocalSeo = () => {
    return (
        <div>
            <Navbar />
                   
                        {/* local page intro  */}                                                   
                        <div className="herobg py-5">
                          <div className="container-fluid px-5">
                            <div className="row align-items-center youtube-bg">
                        
                              {/* Text Content */}
                              <div className="col-lg-6 mb-4 mb-lg-0" >
                                <h1 className="fw-bold">What is Local SEO?</h1>
                                <div >
                                  <p> <strong>Local SEO</strong> is the process of optimizing your online presence to attract customers in your local area. It helps your business appear in Google Search and Google Maps when people search for products or services near them. <br /> <br />

                                  <strong>Local SEO includes:</strong>
                                        <ul>
                                            <li>Google My Business optimization</li>
                                            <li>Local citations and directories</li>
                                            <li>On-page SEO for location-specific keywords</li>
                                            <li>Customer reviews and ratings</li>
                                        </ul>
                                     <strong>Why it matters:</strong> <br />  Local SEO increases your visibility, leads, and sales from people who are most likely to visit your store or hire your service.
                                  </p>
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




                    {/*  Local Business with Google My Business  */}
                    <div className="container-fluid py-5"  style={{ background: "antiquewhite" }}>
                        <div className="text-center mb-5 px-md-5">                           
                                <h1 className="fw-bold">Boost Your Local Business with Google My Business & Local SEO</h1>
                        </div>


                        <div className="row g-4">
                            {services.map((item) => (
                                <div key={item.id} className="col-lg-4 col-md-6">
                                    <div className="card h-100 shadow-sm border-0 rounded-2" style={{ background: "linear-gradient(135deg, #fff9f3 0%, #fef1e1 100%)" }}>
                                        <div className="card-body">                                          
                                            <h5 className="card-title fw-semibold mt-2">{item.title}</h5>
                                            <p className="card-text text-muted">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Benefits  */}
                    <div style={{background: "#faf9f6"}}>                  
                       <div className="container py-5">
                        <div className="text-center mb-5">
                            <h2 className="fw-bold">Benefits of this Local-SEO Service:</h2>                           
                        </div>

                        <div className="row g-4">
                            {benifits.map((item) => (
                            <div className="col-lg-4 col-md-6" key={item.id}>
                                <div className="p-4 bg-white shadow-sm rounded-2 h-100"
                                 style={{borderLeft: '6px solid #f5b535'}} 
                                >
                                <div>
                                    <h5 className="fw-semibold mb-2">{item.title}</h5>               
                                                  
                                </div>      
                                
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>

            <Footer />
        </div>
    );
};

export default LocalSeo;