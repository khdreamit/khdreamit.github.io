import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import YoutubeHero from '../../assets/youtubeHero.jpg'


const services = [
  {
    id: 1,
    title: "High-Quality Guest Post Backlinks",
    desc: "Authority guest posts from trusted and niche-relevant websites."
  },
  {
    id: 2,
    title: "Social Bookmarking",
    desc: "Boost faster indexing and increase online visibility."
  },
  {
    id: 3,
    title: "Public Blogs & Web 2.0 Backlinks",
    desc: "Build natural backlinks from trusted Web 2.0 platforms."
  },
  {
    id: 4,
    title: "High-Quality Profile Backlinks",
    desc: "Clean, verified, and authority profile backlinks."
  },
  {
    id: 5,
    title: "Directory & Article Submissions",
    desc: "Submit content to relevant SEO directories and article sites."
  },
  {
    id: 6,
    title: "Safe & Targeted Anchor Keywords",
    desc: "Use SEO-friendly and natural anchor text strategies."
  },
  {
    id: 7,
    title: "Website Keyword Ranking",
    desc: "Improve rankings for targeted and competitive keywords."
  },
  {
    id: 8,
    title: "Manual Link Building Strategy",
    desc: "100% manual white-hat link building techniques."
  },
  {
    id: 9,
    title: "Permanent Indexing",
    desc: "Ensure long-term indexed backlinks for lasting results."
  },
  {
    id: 10,
    title: "Niche-Related Optimized Content",
    desc: "Industry-specific, SEO-optimized backlink content."
  },
  {
    id: 11,
    title: "Google Update Safe",
    desc: "Fully compliant with the latest Google algorithm updates."
  },
  {
    id: 12,
    title: "Low Spam Score Backlinks",
    desc: "Acquire backlinks only from low-spam and trusted websites."
  },
  {
    id: 13,
    title: "Contextual Backlinks (DA 50–90)",
    desc: "Powerful contextual links from high-authority websites."
  },
  {
    id: 14,
    title: "Authority Link Juice",
    desc: "Boost website trust, authority, and overall SEO strength."
  }
];



const results = [
  {
    id: 1,
    title: "Boost Google Rankings",
    desc: "Achieve higher positions in Google search results."
  },
  {
    id: 2,
    title: "Increase Organic Traffic",
    desc: "Attract more targeted and high-quality visitors."
  },
  {
    id: 3,
    title: "100% White-Hat Backlinks",
    desc: "Safe, ethical, and Google-approved link building."
  },
  {
    id: 4,
    title: "High Authority & Powerful Links",
    desc: "Strong backlinks that deliver real SEO results."
  },
  {
    id: 5,
    title: "Improve DR & UR",
    desc: "Increase domain rating and URL authority effectively."
  },
  {
    id: 6,
    title: "Increase Brand Credibility",
    desc: "Build trust, reputation, and online authority."
  },
  {
    id: 7,
    title: "Improve Product Visibility",
    desc: "Gain better exposure for products in search results."
  },
  {
    id: 8,
    title: "Maintain Anchor Diversity",
    desc: "Use natural and balanced anchor text distribution."
  },
  {
    id: 9,
    title: "Google Penalty Safe",
    desc: "Fully compliant with Google guidelines and updates."
  },
  {
    id: 10,
    title: "Live & Indexed Links",
    desc: "Active backlinks indexed properly by Google."
  },
  {
    id: 11,
    title: "Detailed SEO Report",
    desc: "Clear, transparent, and easy-to-understand SEO reports."
  },
  {
    id: 12,
    title: "Improve Website Performance",
    desc: "Overall growth in SEO strength and website authority."
  }
];




const OffPageSeo = () => {
    return (
        <div>
            <Navbar />
                   
                        {/* off page intro  */}                                                   
                        <div className="herobg py-5">
                          <div className="container-fluid px-5">
                            <div className="row align-items-center youtube-bg">
                        
                              {/* Text Content */}
                              <div className="col-lg-6 mb-4 mb-lg-0" >
                                <h1 className="fw-bold">What Is Off-Page SEO?</h1>
                                <div >
                                  <p>Off-Page SEO refers to all the actions taken outside of your website to improve its search engine rankings, authority, and online reputation. Unlike On-Page SEO (which focuses on content and website structure), Off-Page SEO helps search engines understand how trustworthy, popular, and relevant your website is based on external signals.
                                    <br /> <br /> In simple words, Off-Page SEO builds your website’s credibility and authority across the internet.
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




                    {/* Google On-Page SEO Services  */}
                    <div className="container-fluid py-5"  style={{ background: "antiquewhite" }}>
                        <div className="text-center mb-5 px-md-5">                           
                                <h1 className="fw-bold">I will Do Monthly OFF-Page-SEO Service with High Authority Do-Follow Backlinks, Here is my Services:</h1>
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


                    {/* Result  */}
                    <div style={{background: "#faf9f6"}}>                  
                       <div className="container py-5">
                        <div className="text-center mb-5">
                            <h2 className="fw-bold">RESULT EXPECTATION of MY SEO Services:</h2>                           
                        </div>

                        <div className="row g-4">
                            {results.map((item) => (
                            <div className="col-lg-4 col-md-6" key={item.id}>
                                <div className="p-4 bg-white shadow-sm rounded-2 h-100"
                                 style={{borderLeft: '6px solid #f5b535'}} 
                                >
                                <div>
                                    <h5 className="fw-semibold mb-2">{item.title}</h5>               
                                    <p className="card-text text-muted">{item.desc}</p>              
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

export default OffPageSeo;