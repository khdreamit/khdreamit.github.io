import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import YouSeo from '../../assets/youSeo.png'
import YoutubeHero from '../../assets/youtubeHero.jpg'


const services = [
  {
    id: 1,
    title: "Best Keyword Research",
    desc: "Find the most relevant and high-performing keywords to target the right audience."
  },
  {
    id: 2,
    title: "Optimized Content with Focus Keyword",
    desc: "Create SEO-friendly content that naturally includes target keywords for higher rankings."
  },
  {
    id: 3,
    title: "Competitor Analysis & Spy",
    desc: "Analyze competitors’ strategies to discover gaps and outrank them."
  },
  {
    id: 4,
    title: "Title & Meta Tags Optimization",
    desc: "Optimize page titles and meta tags to improve visibility in search results."
  },
  {
    id: 5,
    title: "Optimize Meta Descriptions",
    desc: "Write compelling meta descriptions to increase click-through rates."
  },
  {
    id: 6,
    title: "Internal & External Linking Setup",
    desc: "Build a strong linking structure to improve SEO value and navigation."
  },
  {
    id: 7,
    title: "Heading Tag Optimization (H1–H6)",
    desc: "Structure heading tags properly for better readability and SEO clarity."
  },
  {
    id: 8,
    title: "Image Optimization & Alt Tags",
    desc: "Compress images and add descriptive alt text for performance and accessibility."
  },
  {
    id: 9,
    title: "Search Engine Submissions",
    desc: "Submit your website to Google and other search engines for faster indexing."
  },
  {
    id: 10,
    title: "SEO-Friendly Permalinks",
    desc: "Create clean, readable, and keyword-rich URLs."
  },
  {
    id: 11,
    title: "XML Sitemap Configuration",
    desc: "Generate and submit XML sitemaps to help search engines crawl your site efficiently."
  },
  {
    id: 12,
    title: "Fix Code-to-Text Ratio",
    desc: "Optimize code and content balance for faster loading and better SEO."
  },
  {
    id: 13,
    title: "Robots.txt Setup",
    desc: "Control which pages search engines can or cannot crawl."
  },
  {
    id: 14,
    title: "Speed Optimization",
    desc: "Improve website loading speed for better user experience and rankings."
  },
  {
    id: 15,
    title: "Google Analytics Setup",
    desc: "Track visitors, traffic sources, and user behavior accurately."
  },
  {
    id: 16,
    title: "Google Search Console Setup",
    desc: "Monitor indexing status, errors, and search performance."
  },
  {
    id: 17,
    title: "Social Sharing Tags Optimized",
    desc: "Optimize Open Graph and social meta tags for better sharing visibility."
  },
  {
    id: 18,
    title: "Premium Yoast Plugin Settings",
    desc: "Configure Yoast SEO plugin for maximum on-page optimization."
  },
  {
    id: 19,
    title: "Site Kit Plugin Configuration",
    desc: "Set up Site Kit to integrate Google tools and enhance SEO insights."
  },
  {
    id: 20,
    title: "Final Work Report",
    desc: "Provide a detailed report of all SEO fixes, optimizations, and improvements."
  }
];




const OnPageSeo = () => {
    return (
        <div>
            <Navbar />
                   
                        {/* on page intro  */}                                                   
                        <div className="herobg py-5">
                          <div className="container-fluid px-5">
                            <div className="row align-items-center youtube-bg">
                        
                              {/* Text Content */}
                              <div className="col-lg-6 mb-4 mb-lg-0" >
                                <h1 className="fw-bold">What is On-Page SEO?</h1>
                                <div >
                                  <p>On-page SEO is the process of optimizing each page of your website so search engines can clearly understand your content and rank it for the right keywords. This includes improving title tags, meta descriptions, headings, content quality, images, URLs, and overall user experience. When done correctly, on-page SEO makes your site more relevant, user-friendly, and search-engine-friendly—helping you achieve better rankings and higher organic traffic. </p>
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


                    {/* Organic SEO vs Paid SEO */}                    
                    <div className="py-5 feature-section">
                      <div className="container-fluid px-5">
                        <div className="row align-items-center">
                    
                          <div className="col-lg-5 text-center mb-4 mb-lg-0">
                            <img src={YouSeo} alt="YouTube SEO" className="img-fluid rounded shadow-lg feature-img" />
                          </div>
                    
                          <div className="col-lg-7">
                            <h2 className="fw-bold mb-3">Organic SEO vs Paid SEO</h2>
                            <p className="text-muted">
                              Organic SEO helps your website rank naturally over time by improving content, structure, and authority. It drives steady, free traffic, builds brand visibility, and creates long-term growth. On the other hand, Paid SEO (PPC/SEM) delivers quick results by showing targeted ads to the right audience. You only pay for clicks, making it cost-effective and easy to measure. The best approach is to combine both strategies—organic SEO for lasting growth and paid SEO for instant visibility and traffic.
                            </p>
                                       
                          </div>
                    
                        </div>
                      </div>
                    </div>


                    {/* Google On-Page SEO Services  */}
                    <div className="container-fluid py-5"  style={{ background: "antiquewhite" }}>
                        <div className="text-center mb-5">                           
                                <h1 className="fw-bold">Google On-Page SEO Services</h1>
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



            <Footer />
        </div>
    );
};

export default OnPageSeo;