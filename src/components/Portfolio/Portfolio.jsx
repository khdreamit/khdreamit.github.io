import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import SocialIcon from "../SocialIcon/SocialIcon";
import Footer from "../Footer/Footer";
import "../../App.css";
import { FaEye  } from "react-icons/fa";




// facebook marketing picture
import Fb1 from '../../assets/fACEBOOK Marketing/1.png'
import Fb2 from '../../assets/fACEBOOK Marketing/2.png'
import Fb3 from '../../assets/fACEBOOK Marketing/3.png'
import Fb4 from '../../assets/fACEBOOK Marketing/4.png'
import Fb5 from '../../assets/fACEBOOK Marketing/5.png'
import Fb6 from '../../assets/fACEBOOK Marketing/6.png'
import Fb7 from '../../assets/fACEBOOK Marketing/7.png'
import Fb8 from '../../assets/fACEBOOK Marketing/8.png'
import Fb9 from '../../assets/fACEBOOK Marketing/9.png'
import Fb10 from '../../assets/fACEBOOK Marketing/10.png'

// social media manegment picture
import SMM1 from '../../assets/SMM/0.png'
import SMM2 from '../../assets/SMM/1.png'
import SMM3 from '../../assets/SMM/2.png'
import SMM4 from '../../assets/SMM/3.png'
import SMM5 from '../../assets/SMM/4.png'
import SMM6 from '../../assets/SMM/5.png'
import SMM7 from '../../assets/SMM/6.png'
import SMM8 from '../../assets/SMM/7.png'
import SMM9 from '../../assets/SMM/8.png'
import SMM10 from '../../assets/SMM/9.png'
import SMM11 from '../../assets/SMM/10.png'
import SMM12 from '../../assets/SMM/11.png'
import SMM13 from '../../assets/SMM/12.png'
import SMM14 from '../../assets/SMM/13.png'
import SMM15 from '../../assets/SMM/14.png'
import SMM16 from '../../assets/SMM/15.png'
import SMM17 from '../../assets/SMM/16.png'
import SMM18 from '../../assets/SMM/17.png'
import SMM19 from '../../assets/SMM/18.png'
import SMM20 from '../../assets/SMM/19.png'
import SMM21 from '../../assets/SMM/20.png'

// youtube SEO iamge 
import Y1 from '../../assets/youtube SEO/y00.png'
import Y2 from '../../assets/youtube SEO/y0.png'
import Y3 from '../../assets/youtube SEO/y1.png'
import Y4 from '../../assets/youtube SEO/y2.png'
import Y5 from '../../assets/youtube SEO/y3.png'
import Y6 from '../../assets/youtube SEO/y4.png'
import Y7 from '../../assets/youtube SEO/y5.png'
import Y8 from '../../assets/youtube SEO/y6.png'
import Y9 from '../../assets/youtube SEO/y7.png'
import Y10 from '../../assets/youtube SEO/y8.png'
import Y11 from '../../assets/youtube SEO/y9.png'
import Y12 from '../../assets/youtube SEO/y10.png'
import Y13 from '../../assets/youtube SEO/y11.png'
import Y14 from '../../assets/youtube SEO/y12.png'
import Y15 from '../../assets/youtube SEO/y13.png'
import Y16 from '../../assets/youtube SEO/y14.png'
import Y17 from '../../assets/youtube SEO/y15.png'
import Y18 from '../../assets/youtube SEO/y16.png'
import Y19 from '../../assets/youtube SEO/y17.png'
import Y20 from '../../assets/youtube SEO/y18.png'
import Y21 from '../../assets/youtube SEO/y19.png'
import Y22 from '../../assets/youtube SEO/y20.png'
import Y23 from '../../assets/youtube SEO/y21.png'
import Y24 from '../../assets/youtube SEO/y22.png'
import Y25 from '../../assets/youtube SEO/y23.png'
import Y26 from '../../assets/youtube SEO/y24.png'
import Y27 from '../../assets/youtube SEO/y25.png'
import Y28 from '../../assets/youtube SEO/y26.png'
import Y29 from '../../assets/youtube SEO/y27.png'
import Y30 from '../../assets/youtube SEO/y28.png'
import Y31 from '../../assets/youtube SEO/y29.png'
import Y32 from '../../assets/youtube SEO/y30.png'
import Y33 from '../../assets/youtube SEO/y31.png'
import Y34 from '../../assets/youtube SEO/y32.png'
import Y35 from '../../assets/youtube SEO/y33.png'
import Y36 from '../../assets/youtube SEO/y34.png'
import Y37 from '../../assets/youtube SEO/y35.png'
import Y38 from '../../assets/youtube SEO/y36.png'
import Y39 from '../../assets/youtube SEO/y37.png'
import Y40 from '../../assets/youtube SEO/y38.png'
import Y41 from '../../assets/youtube SEO/y39.png'
import Y42 from '../../assets/youtube SEO/y40.png'
import Y43 from '../../assets/youtube SEO/y41.png'
import Y44 from '../../assets/youtube SEO/y42.png'
import Y45 from '../../assets/youtube SEO/y43.png'
import Y46 from '../../assets/youtube SEO/y44.jpg'
import Y47 from '../../assets/youtube SEO/y45.jpg'
import Y48 from '../../assets/youtube SEO/y46.png'
import Y49 from '../../assets/youtube SEO/y47.png'
import Y50 from '../../assets/youtube SEO/y48.png'
import Y51 from '../../assets/youtube SEO/y49.png'
import Y52 from '../../assets/youtube SEO/y50.png'


// Amazon book promotion image 
import Am1 from '../../assets/New folder/Amazon 1.webp'
import Am2 from '../../assets/New folder/Amazon 2.webp'
import Am3 from '../../assets/New folder/Amazon 3.webp'
import Am4 from '../../assets/New folder/Amazon 4.webp'
import Am5 from '../../assets/New folder/Amazon 5.webp'
import Am6 from '../../assets/New folder/Amazon 6.webp'

// google Ads image 
import Go1 from '../../assets/New folder/G 1.webp'
import Go2 from '../../assets/New folder/G 2.webp'
import Go3 from '../../assets/New folder/G 3.webp'





const Portfolio = () => {
  const portfolioBTN = [
    { id: 1, title: "All" },
    { id: 2, title: "YouTube SEO & Promotion" },
    { id: 7, title: "Google Ads" },
    { id: 8, title: "TikTok Ads" },
    { id: 3, title: "Facebook Marketing" },
    { id: 4, title: "Social Media Management" },
    { id: 5, title: "Facebook & Instagram Ads" },
    { id: 6, title: "Amazon Book Promotion" },
  ];

  const portfolioItems = [
    // Facebook marketing
    { id: 1, title: "Facebook Marketing", category: "Facebook Marketing", image: Fb1, icon: "bi bi-facebook" },
    { id: 2, title: "Facebook Marketing", category: "Facebook Marketing", image: Fb2, icon: "bi bi-instagram" },
    { id: 3, title: "Facebook Marketing", category: "Facebook Marketing", image: Fb3, icon: "bi bi-camera-video" },
    { id: 4, title: "Facebook Marketing", category: "Facebook Marketing", image: Fb4, icon: "bi bi-linkedin" },
    { id: 5, title: "Facebook Marketing", category: "Facebook Marketing", image: Fb5, icon: "bi bi-pin-map" },
    { id: 6, title: "Facebook Marketing", category: "Facebook Marketing", image: Fb6, icon: "bi bi-twitter-x" },
    { id: 7, title: "Facebook Marketing", category: "Facebook Marketing", image: Fb7, icon: "bi bi-youtube" },
    { id: 8, title: "Facebook Marketing", category: "Facebook Marketing", image: Fb8, icon: "bi bi-whatsapp" },
    { id: 9, title: "Facebook Marketing", category: "Facebook Marketing", image: Fb9, icon: "bi bi-google" },
    { id: 10, title: "Facebook Marketing", category: "Facebook Marketing", image: Fb10, icon: "bi bi-shop" },

    // Social Media Management
    { id: 11, title: "Social Media Management", category: "Social Media Management", image: SMM1, icon: "bi bi-calendar-check" },
    { id: 12, title: "Social Media Management", category: "Social Media Management", image: SMM2, icon: "bi bi-journal-text" },
    { id: 13, title: "Social Media Management", category: "Social Media Management", image: SMM3, icon: "bi bi-card-image" },
    { id: 14, title: "Social Media Management", category: "Social Media Management", image: SMM4, icon: "bi bi-images" },
    { id: 15, title: "Social Media Management", category: "Social Media Management", image: SMM5, icon: "bi bi-hash" },
    { id: 16, title: "Social Media Management", category: "Social Media Management", image: SMM6, icon: "bi bi-chat-dots" },
    { id: 17, title: "Social Media Management", category: "Social Media Management", image: SMM1, icon: "bi bi-graph-up-arrow" },
    { id: 18, title: "Social Media Management", category: "Social Media Management", image: SMM7, icon: "bi bi-brush" },
    { id: 19, title: "Social Media Management", category: "Social Media Management", image: SMM8, icon: "bi bi-envelope-open" },
    { id: 20, title: "Social Media Management", category: "Social Media Management", image: SMM9, icon: "bi bi-people" },
    { id: 21, title: "Social Media Management", category: "Social Media Management", image: SMM10, icon: "bi bi-people" },
    { id: 22, title: "Social Media Management", category: "Social Media Management", image: SMM11, icon: "bi bi-people" },
    { id: 23, title: "Social Media Management", category: "Social Media Management", image: SMM12, icon: "bi bi-people" },
    { id: 24, title: "Social Media Management", category: "Social Media Management", image: SMM13, icon: "bi bi-people" },
    { id: 25, title: "Social Media Management", category: "Social Media Management", image: SMM14, icon: "bi bi-people" },
    { id: 26, title: "Social Media Management", category: "Social Media Management", image: SMM15, icon: "bi bi-people" },
    { id: 27, title: "Social Media Management", category: "Social Media Management", image: SMM16, icon: "bi bi-people" },
    { id: 28, title: "Social Media Management", category: "Social Media Management", image: SMM17, icon: "bi bi-people" },
    { id: 29, title: "Social Media Management", category: "Social Media Management", image: SMM18, icon: "bi bi-people" },
    { id: 30, title: "Social Media Management", category: "Social Media Management", image: SMM19, icon: "bi bi-people" },
    { id: 31, title: "Social Media Management", category: "Social Media Management", image: SMM20, icon: "bi bi-people" },
    { id: 32, title: "Social Media Management", category: "Social Media Management", image: SMM21, icon: "bi bi-people" },


    // YouTube SEO & Promotion picture
    { id: 33, title: "Organic YouTube Growth", category: "YouTube SEO & Promotion", image: Y1, icon: "bi bi-youtube" },
    { id: 34, title: "SEO Optimized Video Upload", category: "YouTube SEO & Promotion", image: Y2, icon: "bi bi-upload" },
    { id: 35, title: "Video Title & Tag Research", category: "YouTube SEO & Promotion", image: Y3, icon: "bi bi-search" },
    { id: 36, title: "Thumbnail Design", category: "YouTube SEO & Promotion", image: Y4, icon: "bi bi-image" },
    { id: 38, title: "Channel Branding", category: "YouTube SEO & Promotion", image: Y5, icon: "bi bi-aspect-ratio" },
    { id: 39, title: "Playlist & Category Setup", category: "YouTube SEO & Promotion", image: Y6, icon: "bi bi-collection-play" },
    { id: 40, title: "Audience Retention Strategy", category: "YouTube SEO & Promotion", image: Y7, icon: "bi bi-graph-up" },
    { id: 41, title: "Analytics Reporting", category: "YouTube SEO & Promotion", image: Y8, icon: "bi bi-bar-chart" },
    { id: 42, title: "Safe Organic Promotion", category: "YouTube SEO & Promotion", image: Y9, icon: "bi bi-bullseye" },
    { id: 43, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y10, icon: "bi bi-lightning-charge" },
    { id: 44, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y11, icon: "bi bi-lightning-charge" },
    { id: 45, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y12, icon: "bi bi-lightning-charge" },
    { id: 46, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y13, icon: "bi bi-lightning-charge" },
    { id: 47, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y14, icon: "bi bi-lightning-charge" },
    { id: 48, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y15, icon: "bi bi-lightning-charge" },
    { id: 49, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y16, icon: "bi bi-lightning-charge" },
    { id: 50, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y17, icon: "bi bi-lightning-charge" },
    { id: 51, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y18, icon: "bi bi-lightning-charge" },
    { id: 52, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y19, icon: "bi bi-lightning-charge" },
    { id: 53, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y20, icon: "bi bi-lightning-charge" },
    { id: 54, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y21, icon: "bi bi-lightning-charge" },
    { id: 55, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y22, icon: "bi bi-lightning-charge" },
    { id: 56, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y23, icon: "bi bi-lightning-charge" },
    { id: 57, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y24, icon: "bi bi-lightning-charge" },
    { id: 58, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y25, icon: "bi bi-lightning-charge" },
    { id: 59, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y26, icon: "bi bi-lightning-charge" },
    { id: 60, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y27, icon: "bi bi-lightning-charge" },
    { id: 61, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y28, icon: "bi bi-lightning-charge" },
    { id: 62, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y29, icon: "bi bi-lightning-charge" },
    { id: 63, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y30, icon: "bi bi-lightning-charge" },
    { id: 64, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y31, icon: "bi bi-lightning-charge" },
    { id: 65, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y32, icon: "bi bi-lightning-charge" },
    { id: 66, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y33, icon: "bi bi-lightning-charge" },
    { id: 67, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y34, icon: "bi bi-lightning-charge" },
    { id: 68, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y35, icon: "bi bi-lightning-charge" },
    { id: 69, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y36, icon: "bi bi-lightning-charge" },
    { id: 70, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y37, icon: "bi bi-lightning-charge" },
    { id: 71, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y38, icon: "bi bi-lightning-charge" },
    { id: 72, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y39, icon: "bi bi-lightning-charge" },
    { id: 73, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y40, icon: "bi bi-lightning-charge" },
    { id: 74, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y41, icon: "bi bi-lightning-charge" },
    { id: 75, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y42, icon: "bi bi-lightning-charge" },
    { id: 76, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y43, icon: "bi bi-lightning-charge" },
    { id: 77, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y44, icon: "bi bi-lightning-charge" },
    { id: 78, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y45, icon: "bi bi-lightning-charge" },
    { id: 79, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y46, icon: "bi bi-lightning-charge" },
    { id: 80, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y47, icon: "bi bi-lightning-charge" },
    { id: 81, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y48, icon: "bi bi-lightning-charge" },
    { id: 81, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y49, icon: "bi bi-lightning-charge" },
    { id: 82, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y50, icon: "bi bi-lightning-charge" },
    { id: 83, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y51, icon: "bi bi-lightning-charge" },
    { id: 84, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y52, icon: "bi bi-lightning-charge" },
    

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
    
    // TikTok Ads
    { id: 60, title: "A/B Split Testing & Scaling", category: "TikTok Ads", image: Go3, icon: "bi bi-sliders" },
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
