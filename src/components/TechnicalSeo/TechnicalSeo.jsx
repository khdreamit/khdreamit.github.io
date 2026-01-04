import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import YoutubeHero from '../../assets/youtubeHero.jpg'


const services = [
  {
    id: 1,
    title: "Structured Data & Knowledge Graph",
    desc: "Enhance search appearance with rich results and improved visibility."
  },
  {
    id: 2,
    title: "Advanced SEO Audit & Reporting",
    desc: "Identify technical and on-page SEO issues with detailed insights."
  },
  {
    id: 3,
    title: "Google Top Ranking SEO Plan",
    desc: "Create a strategic roadmap to achieve higher Google rankings."
  },
  {
    id: 4,
    title: "XML Sitemap Generation & Submission",
    desc: "Help search engines discover and index all important pages."
  },
  {
    id: 5,
    title: "Robots.txt Setup & Submission",
    desc: "Control how search engines crawl and access your website."
  },
  {
    id: 6,
    title: "SSL Certificate (HTTPS) Enforcement",
    desc: "Secure your website and build trust with HTTPS implementation."
  },
  {
    id: 7,
    title: "Canonical Tag Setup",
    desc: "Prevent duplicate content issues using proper canonical tags."
  },
  {
    id: 8,
    title: "Schema Markup Setup",
    desc: "Improve search visibility with rich snippets and schema data."
  },
  {
    id: 9,
    title: "Website Speed Optimization",
    desc: "Boost loading speed for better user experience and rankings."
  },
  {
    id: 10,
    title: "Search Console & Analytics Setup",
    desc: "Track website performance, traffic, and user behavior accurately."
  },
  {
    id: 11,
    title: "Crawling & Indexing Optimization",
    desc: "Ensure search engines can properly crawl and index your site."
  },
  {
    id: 12,
    title: "301 & 302 Redirections",
    desc: "Manage URL changes correctly without losing SEO value."
  },
  {
    id: 13,
    title: "404 Error & Redirection Fix",
    desc: "Detect and fix broken pages with proper redirections."
  },
  {
    id: 14,
    title: "500 & 5XX Error Fix",
    desc: "Resolve server-side errors to keep your site stable."
  },
  {
    id: 15,
    title: "Image Compression",
    desc: "Reduce image size without compromising quality for faster load time."
  },
  {
    id: 16,
    title: "Indexing Issue Solutions",
    desc: "Fix pages that are not indexed or blocked by Google."
  },
  {
    id: 17,
    title: "Duplicate URL Fixation",
    desc: "Eliminate URL duplication problems to protect SEO strength."
  },
  {
    id: 18,
    title: "Crawlability & Indexability",
    desc: "Improve search engine accessibility across your website."
  },
  {
    id: 19,
    title: "Core Web Vitals Fix",
    desc: "Optimize LCP, CLS, and INP for better performance scores."
  },
  {
    id: 20,
    title: "Duplicate Content Issues Fix",
    desc: "Resolve content duplication errors to avoid ranking loss."
  },
  {
    id: 21,
    title: "Backlink Indexing",
    desc: "Ensure valuable backlinks are indexed by search engines."
  },
  {
    id: 22,
    title: "Broken Link Find & Fix",
    desc: "Identify and repair broken internal and external links."
  },
  {
    id: 23,
    title: "Toxic Link Checking & Removal",
    desc: "Protect your site by detecting and removing harmful backlinks."
  }
];



  const tools = [
    { name: "Yoast SEO", type: "Plugin", color: "#8e44ad" },
    { name: "Rank Math", type: "Plugin", color: "#1abc9c" },
    { name: "SEMRush", type: "SEO Tools", color: "#f5b535" },
    { name: "Ahrefs", type: "SEO Tools", color: "#0d6efd" },
    { name: "Google Search Console", type: "Google Tool", color: "#198754" },
    { name: "Google Keyword Planner", type: "Google Tool", color: "#20c997" },
    { name: "SEO Press, Quake, Site Checkup", type: "SEO Utilities", color: "#fd7e14" },
    { name: "All in One Schema Rich Snippets", type: "Schema Plugin", color: "#dc3545" },
    { name: "Broken Links Checker & More", type: "Maintenance Tools", color: "#6f42c1" }
  ];



const TechnicalSeo = () => {
    return (
        <div>
            <Navbar />
                   
                        {/* on page intro  */}                                                   
                        <div className="herobg py-5">
                          <div className="container-fluid px-5">
                            <div className="row align-items-center youtube-bg">
                        
                              {/* Text Content */}
                              <div className="col-lg-6 mb-4 mb-lg-0" >
                                <h1 className="fw-bold">Need a Technical SEO Expert?</h1>
                                <div >
                                  <p>I’m a Certified SEO Professional specializing in Technical & On-Page SEO. I identify and fix all technical SEO issues reported by Google Search Console, SEMrush, Ahrefs, Moz Pro, and more. Fixing technical errors improves crawling, indexing, rankings, and keeps your website Google-penalty safe—helping you grow consistently in search results.</p>
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

                   

                    {/* Google technical SEO Services  */}
                    <div className="container-fluid py-5"  style={{ background: "antiquewhite" }}>
                        <div className="text-center mb-5 px-md-5">                           
                                <h1 className="fw-bold">I will fix All Technical-SEO Error and improve Website Ranking with SEO:</h1>
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


                    {/* Tools  */}
                    <div style={{background: "#faf9f6"}}>                  
                       <div className="container py-5">
                        <div className="text-center mb-5">
                            <h2 className="fw-bold">What tools do I use?</h2>
                            <p className="text-muted">
                            Tools professionals use to analyze and improve search performance
                            </p>
                        </div>

                        <div className="row g-4">
                            {tools.map((tool, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="p-4 bg-white shadow-sm rounded-2 h-100"
                                 style={{borderLeft: '6px solid #f5b535'}} 
                                >
                                <div className="d-flex justify-content-between align-items-start">
                                    <h5 className="fw-semibold mb-2">{tool.name}</h5>               
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

export default TechnicalSeo;