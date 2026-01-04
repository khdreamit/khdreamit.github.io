import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import YouSeo from '../../assets/youSeo.png'


const errors = [
{ id: 1, title: "Missing Title Tags & Meta Descriptions", desc: "Search engines can’t understand your page properly without them." },
{ id: 2, title: "Crawling Errors", desc: "Google’s bots fail to access your pages correctly." },
{ id: 3, title: "Indexing & Coverage Issues", desc: "Your pages exist, but Google isn’t adding them to the index." },
{ id: 4, title: "Sitemap.xml & Robots.txt Issues", desc: "Improper setup prevents Google from crawling important pages." },
{ id: 5, title: "Text Too Small", desc: "Poor readability harms user experience and ranking." },
{ id: 6, title: "Soft 404 & 404 Errors", desc: "Pages not found or incorrectly flagged as missing." },
{ id: 7, title: "Soft 500 & 5xx Errors", desc: "Server issues that block Google from accessing your site." },
{ id: 8, title: "Structured Data Conflicts", desc: "Incorrect schema markup confuses search engines." },
{ id: 9, title: "Slow Loading Pages", desc: "Slow speed increases bounce rate and lowers rankings." },
{ id: 10, title: "Duplicate Content", desc: "Identical content across pages confuses Google." },
{ id: 11, title: "Broken Images / Missing Alt Text", desc: "Images fail to load or lack SEO descriptions." },
{ id: 12, title: "Large Image File Size", desc: "Heavy images slow website performance." },
{ id: 13, title: "HTTPS/HTTP Mixed Content", desc: "Security issues caused by mixed content." },
{ id: 14, title: "No-index / No-follow Pages", desc: "Important pages accidentally blocked." },
{ id: 15, title: "Broken Internal & External Links", desc: "Dead links damage SEO and trust." },
{ id: 16, title: "Redirect Errors", desc: "Incorrect redirect chains slow down crawlers." },
{ id: 17, title: "Schema Testing Issues", desc: "Errors reduce visibility in rich results." },
{ id: 18, title: "Meta Tag & Heading Errors", desc: "Improper H1/H2 structure hurts clarity." },
{ id: 19, title: "Non-SEO-Friendly URLs", desc: "Unoptimized URLs make indexing harder." },
{ id: 20, title: "Mobile-Friendly Issues", desc: "Poor mobile UX reduces rankings." }
];


  const tools = [
    {
      name: "SEMrush",
      desc: "All-in-one SEO audit, keyword research & competitor analysis tool.",
      badge: ""
    },
    {
      name: "Ahrefs",
      desc: "Powerful backlink analysis, site audit & keyword tracking.",
      badge: ""
    },
    {
      name: "Moz",
      desc: "SEO metrics, site audits & rank tracking for beginners and pros.",
      badge: ""
    },
    {
      name: "Screaming Frog",
      desc: "Advanced technical SEO crawling and website audits.",
      badge: ""
    }
  ];



const AuditPlan = () => {
    return (
        <div>
            <Navbar />

                    {/* why Audit is need */}                    
                    <div className="py-5 feature-section">
                      <div className="container-fluid px-5">
                        <div className="row align-items-center">
                    
                          <div className="col-lg-5 text-center mb-4 mb-lg-0">
                            <img src={YouSeo} alt="YouTube SEO" className="img-fluid rounded shadow-lg feature-img" />
                          </div>
                    
                          <div className="col-lg-7">
                            <h2 className="fw-bold mb-3">Why Website Audit Is Important?</h2>
                            <p className="text-muted">
                              A website audit is essential because it helps you understand the true health and performance of your site. Over time, websites develop technical issues, SEO errors, speed problems, and content gaps that directly affect Google rankings and user experience. A proper website audit identifies these hidden issues and shows exactly what needs to be fixed to improve visibility, traffic, and overall performance. Without an audit, you may continue losing potential customers and remain behind your competitors without even realizing it. A complete website audit ensures your site is fully optimized, technically strong, and ready to rank higher on search engines.
                            </p>
                                       
                          </div>
                    
                        </div>
                      </div>
                    </div>


                    {/* Common Errors  */}
                    <div className="container-fluid py-5"  style={{ background: "antiquewhite" }}>
                        <div className="text-center mb-5">                           
                                <h1 className="fw-bold">Issues that can stop your website from ranking on Google</h1>
                        </div>


                        <div className="row g-4">
                            {errors.map((item) => (
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
                       <div className="container py-5">
                        <div className="text-center mb-5">
                            <h2 className="fw-bold">Best SEO Audit Tools</h2>
                            <p className="text-muted">
                            Tools professionals use to analyze and improve search performance
                            </p>
                        </div>

                        <div className="row g-4">
                            {tools.map((tool, index) => (
                            <div className="col-md-6" key={index}>
                                <div className="p-4 bg-white shadow-sm rounded-2 h-100"
                                 style={{borderLeft: '6px solid #f5b535'}} 
                                >
                                <div className="d-flex justify-content-between align-items-start">
                                    <h5 className="fw-semibold mb-2">{tool.name}</h5>               
                                </div>

                                <p className="text-muted mb-3">{tool.desc}</p>
                                
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>

            <Footer />
        </div>
    );
};

export default AuditPlan;


