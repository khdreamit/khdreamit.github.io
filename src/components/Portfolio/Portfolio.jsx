import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import SocialIcon from "../SocialIcon/SocialIcon";
import Footer from "../Footer/Footer";
import "../../App.css";
import { FaEye  } from "react-icons/fa";

// facebook image
import Fb1 from '../../assets/New folder/fb 1.webp'
import Fb2 from '../../assets/New folder/FB 2.webp'
import Fb3 from '../../assets/New folder/FB 3.webp'
import Fb4 from '../../assets/New folder/FB 4.webp'
import Fb5 from '../../assets/New folder/FB 5.webp'

// social media image
import SMM1 from '../../assets/New folder/smm 1.webp'
import SMM2 from '../../assets/New folder/smm 2.webp'
import SMM3 from '../../assets/New folder/smm 3.webp'
import SMM4 from '../../assets/New folder/smm 4.webp'
import SMM5 from '../../assets/New folder/smm 5.webp'
import SMM6 from '../../assets/New folder/smm 6.webp'
import SMM7 from '../../assets/New folder/smm 7.webp'
import SMM8 from '../../assets/New folder/smm 8.webp'
import SMM9 from '../../assets/New folder/smm 9.webp'

// youtube iamge 
import Y1 from '../../assets/New folder/Y1 .webp'
import Y2 from '../../assets/New folder/Y2.webp'
import Y3 from '../../assets/New folder/Y-3.webp'
import Y4 from '../../assets/New folder/Y-4.webp'
import Y5 from '../../assets/New folder/Y-9.webp'
import Y6 from '../../assets/New folder/Y-5.webp'
import Y7 from '../../assets/New folder/Y-6.webp'
import Y8 from '../../assets/New folder/Y-7.webp'
import Y9 from '../../assets/New folder/Y-8.webp'
import Y10 from '../../assets/New folder/Y-10.webp'


// Amazon image 
import Am1 from '../../assets/New folder/Amazon 1.webp'
import Am2 from '../../assets/New folder/Amazon 2.webp'
import Am3 from '../../assets/New folder/Amazon 3.webp'
import Am4 from '../../assets/New folder/Amazon 4.webp'
import Am5 from '../../assets/New folder/Amazon 5.webp'
import Am6 from '../../assets/New folder/Amazon 6.webp'

// google image 
import Go1 from '../../assets/New folder/G 1.webp'
import Go2 from '../../assets/New folder/G 2.webp'
import Go3 from '../../assets/New folder/G 3.webp'





const Portfolio = () => {
  const portfolioBTN = [
    { id: 1, title: "All" },
    { id: 4, title: "YouTube SEO & Promotion" },
    { id: 2, title: "Social Media Account Create" },
    { id: 3, title: "Social Media Management" },
    { id: 5, title: "Facebook & Instagram Ads" },
    { id: 6, title: "Amazon Book Promotion" },
    { id: 7, title: "Google Ads" },
  ];

  const portfolioItems = [
    // Social Media Account Create
    { id: 1, title: "Business Facebook Page Setup", category: "Social Media Account Create", image: Fb1, icon: "bi bi-facebook" },
    { id: 2, title: "Instagram Business Profile Setup", category: "Social Media Account Create", image: Fb2, icon: "bi bi-instagram" },
    { id: 3, title: "TikTok Business Account", category: "Social Media Account Create", image: Fb3, icon: "bi bi-camera-video" },
    { id: 4, title: "LinkedIn Business Page", category: "Social Media Account Create", image: Fb4, icon: "bi bi-linkedin" },
    { id: 5, title: "Pinterest Business Setup", category: "Social Media Account Create", image: Fb5, icon: "bi bi-pin-map" },
    { id: 6, title: "Twitter/X Branding Setup", category: "Social Media Account Create", image: SMM1, icon: "bi bi-twitter-x" },
    { id: 7, title: "YouTube Channel Setup", category: "Social Media Account Create", image: SMM4, icon: "bi bi-youtube" },
    { id: 8, title: "WhatsApp Business Profile", category: "Social Media Account Create", image: SMM7, icon: "bi bi-whatsapp" },
    { id: 9, title: "Google Business Profile Setup", category: "Social Media Account Create", image: SMM8, icon: "bi bi-google" },
    { id: 10, title: "E-commerce Store Social Accounts", category: "Social Media Account Create", image: SMM2, icon: "bi bi-shop" },

    // Social Media Management
    { id: 11, title: "Monthly Social Media Management", category: "Social Media Management", image: SMM1, icon: "bi bi-calendar-check" },
    { id: 12, title: "Content Calendar Planning", category: "Social Media Management", image: SMM2, icon: "bi bi-journal-text" },
    { id: 13, title: "Creative Post Design & Publishing", category: "Social Media Management", image: SMM3, icon: "bi bi-card-image" },
    { id: 14, title: "Daily Story Posting", category: "Social Media Management", image: SMM4, icon: "bi bi-images" },
    { id: 15, title: "Hashtag & SEO Optimization", category: "Social Media Management", image: SMM5, icon: "bi bi-hash" },
    { id: 16, title: "Engagement & Community Handling", category: "Social Media Management", image: SMM6, icon: "bi bi-chat-dots" },
    { id: 17, title: "Social Media Reporting & Analytics", category: "Social Media Management", image: SMM1, icon: "bi bi-graph-up-arrow" },
    { id: 18, title: "Brand Styling & Identity", category: "Social Media Management", image: SMM7, icon: "bi bi-brush" },
    { id: 19, title: "DM & Customer Support", category: "Social Media Management", image: SMM8, icon: "bi bi-envelope-open" },
    { id: 20, title: "Client Feedback Monitoring", category: "Social Media Management", image: SMM9, icon: "bi bi-people" },

    // YouTube Promotion
    { id: 21, title: "Organic YouTube Growth", category: "YouTube SEO & Promotion", image: Y1, icon: "bi bi-youtube" },
    { id: 22, title: "SEO Optimized Video Upload", category: "YouTube SEO & Promotion", image: Y2, icon: "bi bi-upload" },
    { id: 23, title: "Video Title & Tag Research", category: "YouTube SEO & Promotion", image: Y3, icon: "bi bi-search" },
    { id: 24, title: "Thumbnail Design", category: "YouTube SEO & Promotion", image: Y4, icon: "bi bi-image" },
    { id: 25, title: "Channel Branding", category: "YouTube SEO & Promotion", image: Y5, icon: "bi bi-aspect-ratio" },
    { id: 26, title: "Playlist & Category Setup", category: "YouTube SEO & Promotion", image: Y6, icon: "bi bi-collection-play" },
    { id: 27, title: "Audience Retention Strategy", category: "YouTube SEO & Promotion", image: Y7, icon: "bi bi-graph-up" },
    { id: 28, title: "Analytics Reporting", category: "YouTube SEO & Promotion", image: Y8, icon: "bi bi-bar-chart" },
    { id: 29, title: "Safe Organic Promotion", category: "YouTube SEO & Promotion", image: Y9, icon: "bi bi-bullseye" },
    { id: 30, title: "CTR & SEO Optimization", category: "YouTube SEO & Promotion", image: Y10, icon: "bi bi-lightning-charge" },

    // Facebook & Instagram Ads
    { id: 31, title: "Conversion-Focused Campaign", category: "Facebook & Instagram Ads", image: Fb2, icon: "bi bi-bullseye" },
    { id: 32, title: "Pixel & Event Tracking", category: "Facebook & Instagram Ads", image: Fb4, icon: "bi bi-diagram-3" },
    { id: 33, title: "Audience Research", category: "Facebook & Instagram Ads", image: Fb1, icon: "bi bi-people" },
    { id: 34, title: "Ad Creative Design", category: "Facebook & Instagram Ads", image: Fb3, icon: "bi bi-image" },
    { id: 35, title: "A/B Testing", category: "Facebook & Instagram Ads", image: Fb5, icon: "bi bi-sliders" },
    { id: 36, title: "Lead Generation Ads", category: "Facebook & Instagram Ads", image: SMM6, icon: "bi bi-person-lines-fill" },
    { id: 37, title: "Retargeting Strategy", category: "Facebook & Instagram Ads", image: SMM4, icon: "bi bi-arrow-repeat" },
    { id: 38, title: "Sales Conversion Optimization", category: "Facebook & Instagram Ads", image: SMM2, icon: "bi bi-currency-dollar" },
    { id: 39, title: "Scaling & Monitoring", category: "Facebook & Instagram Ads", image: SMM7, icon: "bi bi-speedometer2" },
    { id: 40, title: "Monthly Ad Analytics Report", category: "Facebook & Instagram Ads", image: SMM2, icon: "bi bi-clipboard-data" },

    // Amazon Book Promotion
    { id: 41, title: "KDP SEO Optimization", category: "Amazon Book Promotion", image: Am1, icon: "bi bi-book" },
    { id: 42, title: "Book Ranking Strategy", category: "Amazon Book Promotion", image: Am2, icon: "bi bi-bar-chart-steps" },
    { id: 43, title: "A+ Content & Cover Design", category: "Amazon Book Promotion", image: Am3, icon: "bi bi-brush" },
    { id: 44, title: "Keyword & Category Setup", category: "Amazon Book Promotion", image: Am4, icon: "bi bi-tags" },
    { id: 45, title: "Marketing Funnel Strategy", category: "Amazon Book Promotion", image: Am1, icon: "bi bi-envelope-paper" },
    { id: 46, title: "Safe Promotion (No Fake Reviews)", category: "Amazon Book Promotion", image: Am2, icon: "bi bi-shield-check" },
    { id: 47, title: "Goodreads Promotion", category: "Amazon Book Promotion", image: Am6, icon: "bi bi-stars" },
    { id: 48, title: "Book Ads Campaign", category: "Amazon Book Promotion", image: Am5, icon: "bi bi-megaphone" },
    { id: 49, title: "Sales Funnel Enhancement", category: "Amazon Book Promotion", image: Am4, icon: "bi bi-shop-window" },
    { id: 50, title: "Author Branding Plan", category: "Amazon Book Promotion", image: Am6, icon: "bi bi-award" },

    // Google Ads
    { id: 51, title: "Google Search Ads Campaign", category: "Google Ads", image: Go1, icon: "bi bi-google" },
    { id: 52, title: "Display Banner Ads Setup", category: "Google Ads", image: Go2, icon: "bi bi-image" },
    { id: 53, title: "YouTube Video Ads Setup", category: "Google Ads", image: Go3, icon: "bi bi-youtube" },
    { id: 54, title: "Keyword Research & Planning", category: "Google Ads", image: Go1, icon: "bi bi-search" },
    { id: 55, title: "Conversion Tracking & Pixel Setup", category: "Google Ads", image: Go2, icon: "bi bi-diagram-3" },
    { id: 56, title: "Landing Page Audit & Optimization", category: "Google Ads", image: Go3, icon: "bi bi-layers" },
    { id: 57, title: "CPC & Budget Optimization", category: "Google Ads", image: Go1, icon: "bi bi-cash-stack" },
    { id: 58, title: "Retargeting & Remarketing Strategy", category: "Google Ads", image: Go2, icon: "bi bi-arrow-repeat" },
    { id: 59, title: "Monthly Performance Reporting", category: "Google Ads", image: Go1, icon: "bi bi-bar-chart-line" },
    { id: 60, title: "A/B Split Testing & Scaling", category: "Google Ads", image: Go3, icon: "bi bi-sliders" },
  ];

  const [filteredItems, setFilteredItems] = useState([]);
  const [activeBtn, setActiveBtn] = useState("All");

  // New states
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const shuffled = [...portfolioItems].sort(() => 0.5 - Math.random());
    setFilteredItems(shuffled.slice(0, 9));
  }, []);

  const handleFilter = (category) => {
    setActiveBtn(category);
    if (category === "All") {
      const shuffled = [...portfolioItems].sort(() => 0.5 - Math.random());
      setFilteredItems(shuffled.slice(0, 9));
    } else {
      const filtered = portfolioItems.filter((item) => item.category === category);
      setFilteredItems(filtered);
    }
  };

  // Modal control funcs
  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);
  const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  const nextImage = () => setCurrentIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));

  // Keyboard controls
  useEffect(() => {
    if (!showModal) return;

    const handleKey = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showModal]);


  return (
    <div>
      <Navbar />
      <div className="review-header">
        <h1 className="text-white fw-bold ls">PORTFOLIO</h1>
      </div>

      <div className="container-fluid px-5 py-5">

        <div className="text-center">
          <h4>Portfolio</h4>
          <p className="w-75 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="d-flex justify-content-center gap-3 my-4 flex-wrap">
          {portfolioBTN.map((btn) => (
            <button
              key={btn.id}
              onClick={() => handleFilter(btn.title)}
              className={`btn px-4 py-2 ${activeBtn === btn.title ? "btn-primary" : "btn-outline-primary"}`}
            >
              {btn.title}
            </button>
          ))}
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 custom-scroll p-2">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div key={item.id} className="col fade-anim">
                <div className="position-relative overflow-hidden rounded portfolio-box">
                  <img src={item.image} className="img-fluid w-100" alt="" />
                  <div className="portfolio-overlay d-flex flex-column justify-content-center align-items-center">
                    <h4 className="text-light">{item.title}</h4>
                    <button
                      className="btn btn-light d-flex gap-2 align-items-center rounded-circle"
                      onClick={() => openModal(index)}
                    >
                      <FaEye />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center py-5">No items found!</p>
          )}
        </div>
      </div>

      <SocialIcon />
      <Footer />

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredItems[currentIndex].image}
              alt=""
              className="modal-img"
            />

            <button className="nav-btn prev-btn" onClick={prevImage}>
              &#10094;
            </button>
            <button className="nav-btn next-btn" onClick={nextImage}>
              &#10095;
            </button>

            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
          </div>
        </div>
      )}

    </div>
  );
};

export default Portfolio;
