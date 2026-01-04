import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeroImg from '../../assets/HeroImg.jpg';
import YouMan from '../../assets/youMan2.png';
import SocialIcon from '../SocialIcon/SocialIcon';
import Footer from '../Footer/Footer';



const About = () => {
    return (
        <div>
            <Navbar />

            {/* Abut Hero  */}
            <div className="youtube-hero d-flex align-items-center text-center">
                <div className="container">
                    <h1 className="fw-bold text-white mb-3 ">
                    I Help Brands Grow Faster with Data-Driven Digital Marketing.
                    </h1>
                    <p className="text-white-80 fw-bold mx-auto" style={{ maxWidth: "600px" }}>
                    Specialized in SEO, YouTube Growth, Social Media Strategy & Paid Campaign Optimization.
                    </p>

                    <div className="mt-4 d-flex justify-content-center gap-3">
                    <a href="https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22" className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow">
                        Get a Free Channel Audit
                    </a>

                    </div>
                </div>
            </div>

            {/* About me part 1  */}
            <section className="py-5 hero-bg">
                  <div className="container-fluid px-5">
                    <div className="row align-items-center">
            
                      {/* Text Content */}
                      <div className="col-lg-6 mb-4 mb-lg-0">
                        <h4 className="text-secondary fw-semibold mb-2">Hello, I'm</h4>
                        <h1 className="fw-bold display-4">MD. ABDUL HALIM</h1>
                        <p className="mt-3 text-dark fs-5">
                          Hi, I’m Abdul Halim, a Digital Marketing Specialist with strong experience in SEO, YouTube Growth, and data-driven marketing campaigns.I help businesses, content creators, and brands grow with optimized strategies that actually deliver results.
                        </p>
            
                        <div className="mt-4 d-flex gap-3">
                          <a href = "https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22" className="btn btn-dark px-4 py-2">Hire Me</a>
                        </div>
                      </div>
            
                      {/* Image */}
                      <div className="col-lg-6 text-center ">
                        <img 
                          src={HeroImg} 
                          alt="Hero" 
                          className="img-fluid rounded-3 hero-img-style h-img" style={{height: "400px"}} 
                        />
                      </div>
                    </div>
                  </div>
            </section>


            {/* About me part 2  */}
            <div className="py-5 yourIntro">
              <div className="container-fluid px-5">
                <div className="row align-items-center">
            
                  {/* Left Image */}
                  <div className="col-lg-6 mb-4 mb-lg-0 text-center youImg">
                    <img src={YouMan} alt="Profile" className="img-fluid rounded-3 shadow" style={{ maxWidth: "70%" }}/>
                  </div>
            
                  {/* Right Content */}
                  <div className="col-lg-6">
                    <h3 className="fw-bold">DETAILED ABOUT ME</h3>
                    
                    <p className="mt-3 text-dark fs-5">
                        I focus on helping clients grow organically and build a long-term digital presence. My approach is simple: analyze, optimize, and scale. I use proven strategies—SEO, content marketing, YouTube algorithm understanding, and high-converting funnels—to increase visibility, ranking, engagement, and sales. Over the years, I’ve worked with different types of clients, including startups, creators, e-commerce stores, and local service businesses.
                        My goal is always the same: <span className='fw-bold'>deliver measurable results and long-term growth.</span>                    </p>
                                    
                    <div className="mt-4 d-flex gap-3">
                      <a href="https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22" 
                         className="btn btn-dark px-4 py-2">
                        Get Free Consultation
                      </a>
                      
                    </div>
                  </div>
            
                </div>
              </div>
            </div>


            {/* Expertise  */}
            <div className='py-5' style={{background: "#fffaf1"}}>
            <div className="container-fluid px-5 py-4">
            <div className="d-flex justify-content-between gap-4 flex-wrap">

                {/* Box 1 */}
                <div className="benefit-box p-4 rounded shadow-sm flex-grow-1">
                    <h4 className='fw-bold'>MY EXPERTISE:</h4>
                    <ul className="list-unstyled">
                    <li><span className="check-icon">✔</span> Search Engine Optimization (SEO)</li>
                    <li><span className="check-icon">✔</span> YouTube SEO & Channel Growth</li>
                    <li><span className="check-icon">✔</span> Social Media Strategy</li>
                    <li><span className="check-icon">✔</span> Keyword Research & Content Planning</li>
                    <li><span className="check-icon">✔</span> Website Audit & Optimization</li>
                    <li><span className="check-icon">✔</span> Paid Campaign Planning (FB/Google Ads)</li>
                    <li><span className="check-icon">✔</span> Analytics & Performance Reporting</li>
                    
                    </ul>
                </div>

                {/* Box 2 */}
                <div className="benefit-box p-4 rounded shadow-sm flex-grow-1">
                    <h4 className='fw-bold'>WHY CLIENTS TRUST ME:</h4>
                    <ul className="list-unstyled">
                    <li><span className="check-icon">✔</span> Data-driven decision making</li>
                    <li><span className="check-icon">✔</span> Transparent communication</li>
                    <li><span className="check-icon">✔</span> Fast delivery & consistent updates</li>
                    <li><span className="check-icon">✔</span> Focus on long-term growth</li>
                    <li><span className="check-icon">✔</span> 100% customized strategy</li>
                    <li><span className="check-icon">✔</span> Clear reporting & insights</li>
                    
                    </ul>
                </div>
                </div>
                        <div className='text-center mt-5'>
                            <h3 className='fw-bold'>Ready to grow your brand? Let’s work together</h3>
                            <a href ="https://api.whatsapp.com/send?phone=8801947349917&text=%22Hey%2C%20Welcome%20to%20my%20whatsapp%20account%22" className="btn btn-primary px-4 py-2 mt-4">Get Free Consultation</a>
                        </div>
            </div>

    
            </div>

            <SocialIcon />
            <Footer />

        </div>
    );
};

export default About;