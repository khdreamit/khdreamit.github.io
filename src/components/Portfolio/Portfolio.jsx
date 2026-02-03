import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import SocialIcon from "../SocialIcon/SocialIcon";
import Footer from "../Footer/Footer";
import "../../App.css";
import { FaEye  } from "react-icons/fa";
import { useLocation } from "react-router-dom";




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

// Facebook & instagram ads

import in1 from '../../assets/Facebook ads/1.jpeg'
import in2 from '../../assets/Facebook ads/2.png'
import in3 from '../../assets/Facebook ads/3.png'
import in4 from '../../assets/Facebook ads/4.png'
import in5 from '../../assets/Facebook ads/5.png'
import in6 from '../../assets/Facebook ads/6.png'
import in7 from '../../assets/Facebook ads/7.png'
import in8 from '../../assets/Facebook ads/8.png'
import in9 from '../../assets/Facebook ads/9.png'
import in10 from '../../assets/Facebook ads/10.png'
import in11 from '../../assets/Facebook ads/11.png'
import in12 from '../../assets/Facebook ads/12.png'
import in13 from '../../assets/Facebook ads/13.png'
import in14 from '../../assets/Facebook ads/14.png'
import in15 from '../../assets/Facebook ads/15.png'
import in16 from '../../assets/Facebook ads/16.png'
import in17 from '../../assets/Facebook ads/17.png'
import in18 from '../../assets/Facebook ads/18.png'



// Amazon book promotion image 
import Am1 from '../../assets/Amazon book promotion/1.webp'
import Am2 from '../../assets/Amazon book promotion/2.webp'
import Am3 from '../../assets/Amazon book promotion/3.webp'
import Am4 from '../../assets/Amazon book promotion/4.png'
import Am5 from '../../assets/Amazon book promotion/5.png'
import Am6 from '../../assets/Amazon book promotion/6.png'
import Am7 from '../../assets/Amazon book promotion/7.png'
import Am8 from '../../assets/Amazon book promotion/8.png'
import Am9 from '../../assets/Amazon book promotion/9.png'
import Am10 from '../../assets/Amazon book promotion/10.png'
import Am11 from '../../assets/Amazon book promotion/11.png'
import Am12 from '../../assets/Amazon book promotion/12.png'
import Am13 from '../../assets/Amazon book promotion/13.png'
import Am14 from '../../assets/Amazon book promotion/14.png'
import Am15 from '../../assets/Amazon book promotion/15.png'
import Am16 from '../../assets/Amazon book promotion/16.png'
import Am17 from '../../assets/Amazon book promotion/17.jpg'
import Am18 from '../../assets/Amazon book promotion/18.png'
import Am19 from '../../assets/Amazon book promotion/19.png'
import Am20 from '../../assets/Amazon book promotion/20.jpg'

// google Ads image 
import Go1 from '../../assets/Google ads/1.jpg'
import Go2 from '../../assets/Google ads/2.jpg'
import Go3 from '../../assets/Google ads/3.png'
import Go4 from '../../assets/Google ads/4.png'
import Go5 from '../../assets/Google ads/5.png'
import Go6 from '../../assets/Google ads/6.png'
import Go7 from '../../assets/Google ads/7.png'
import Go8 from '../../assets/Google ads/8.png'
import Go9 from '../../assets/Google ads/9.png'
import Go10 from '../../assets/Google ads/10.png'
import Go11 from '../../assets/Google ads/11.png'
import Go12 from '../../assets/Google ads/12.png'
import Go13 from '../../assets/Google ads/13.png'
import Go14 from '../../assets/Google ads/14.png'
import Go15 from '../../assets/Google ads/15.png'
import Go16 from '../../assets/Google ads/16.png'
import Go17 from '../../assets/Google ads/17.png'
import Go18 from '../../assets/Google ads/18.png'
import Go19 from '../../assets/Google ads/19.png'
import Go20 from '../../assets/Google ads/20.png'
import Go21 from '../../assets/Google ads/21.png'
import Go22 from '../../assets/Google ads/22.png'
import Go23 from '../../assets/Google ads/23.png'
import Go24 from '../../assets/Google ads/24.png'
import Go25 from '../../assets/Google ads/25.png'
import Go26 from '../../assets/Google ads/26.png'
import Go27 from '../../assets/Google ads/27.png'
import Go28 from '../../assets/Google ads/28.png'
import Go29 from '../../assets/Google ads/29.png'
import Go30 from '../../assets/Google ads/30.png'
import Go31 from '../../assets/Google ads/31.png'
import Go32 from '../../assets/Google ads/32.png'
import Go33 from '../../assets/Google ads/33.png'
import Go34 from '../../assets/Google ads/34.png'
import Go35 from '../../assets/Google ads/35.png'
import Go36 from '../../assets/Google ads/36.png'
import Go37 from '../../assets/Google ads/37.png'
import Go38 from '../../assets/Google ads/38.png'
import Go39 from '../../assets/Google ads/39.png'
import Go40 from '../../assets/Google ads/40.png'

// Tiktok Ads 
import t1 from '../../assets/tiktok ads/1.png'
import t2 from '../../assets/tiktok ads/2.png'
import t3 from '../../assets/tiktok ads/3.png'
import t4 from '../../assets/tiktok ads/4.png'
import t5 from '../../assets/tiktok ads/5.png'
import t6 from '../../assets/tiktok ads/6.png'
import t7 from '../../assets/tiktok ads/7.png'
import t8 from '../../assets/tiktok ads/8.png'
import t9 from '../../assets/tiktok ads/9.png'
import t10 from '../../assets/tiktok ads/10.webp'
import t11 from '../../assets/tiktok ads/11.png'
import t12 from '../../assets/tiktok ads/12.png'
import t13 from '../../assets/tiktok ads/13.png'
import t14 from '../../assets/tiktok ads/14.png'
import t15 from '../../assets/tiktok ads/15.png'
import t16 from '../../assets/tiktok ads/16.png'
import t17 from '../../assets/tiktok ads/17.png'
import t18 from '../../assets/tiktok ads/18.webp'
import t19 from '../../assets/tiktok ads/19.png'
import t20 from '../../assets/tiktok ads/20.png'
import t21 from '../../assets/tiktok ads/21.webp'
import t22 from '../../assets/tiktok ads/22.png'
import t23 from '../../assets/tiktok ads/23.png'



const Portfolio = () => {
  const portfolioBTN = [
    { id: 1, title: "All" },
    { id: 2, title: "YouTube SEO & Promotion" },
    { id: 3, title: "Facebook & Instagram Ads" },
    { id: 4, title: "Google Ads" },
    { id: 5, title: "TikTok Ads" },
    { id: 6, title: "Facebook Marketing" },
    { id: 7, title: "Social Media Management" },
    { id: 8, title: "Amazon Book Promotion" },
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
    { id: 17, title: "Social Media Management", category: "Social Media Management", image: SMM6, icon: "bi bi-chat-dots" },
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


    // YouTube SEO & Promotion
    { id: 33, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y1, icon: "bi bi-youtube" },
    { id: 34, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y2, icon: "bi bi-upload" },
    { id: 35, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y3, icon: "bi bi-search" },
    { id: 36, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y4, icon: "bi bi-image" },
    { id: 38, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y5, icon: "bi bi-aspect-ratio" },
    { id: 39, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y6, icon: "bi bi-collection-play" },
    { id: 40, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y7, icon: "bi bi-graph-up" },
    { id: 41, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y8, icon: "bi bi-bar-chart" },
    { id: 42, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y9, icon: "bi bi-bullseye" },
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
    { id: 82, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y49, icon: "bi bi-lightning-charge" },
    { id: 83, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y50, icon: "bi bi-lightning-charge" },
    { id: 84, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y51, icon: "bi bi-lightning-charge" },
    { id: 85, title: "YouTube SEO & Promotion", category: "YouTube SEO & Promotion", image: Y52, icon: "bi bi-lightning-charge" },
    

    // Facebook & Instagram Ads
    { id: 285, title: "Facebook & Instagram Ads ", category: "Facebook & Instagram Ads", image: in1, icon: "bi bi-bullseye" },
    { id: 86, title: "Facebook & Instagram Ads", category: "Facebook & Instagram Ads", image: in2, icon: "bi bi-bullseye" },
    { id: 87, title: "Facebook & Instagram Ads", category: "Facebook & Instagram Ads", image: in3, icon: "bi bi-bullseye" },
    { id: 88, title: "Facebook & Instagram Ads", category: "Facebook & Instagram Ads", image: in4, icon: "bi bi-bullseye" },
    { id: 89, title: "Facebook & Instagram Ads", category: "Facebook & Instagram Ads", image: in5, icon: "bi bi-bullseye" },
    { id: 90, title: "Facebook & Instagram Ads", category: "Facebook & Instagram Ads", image: in6, icon: "bi bi-bullseye" },
    { id: 91, title: "Facebook & Instagram Ads", category: "Facebook & Instagram Ads", image: in7, icon: "bi bi-bullseye" },
    { id: 92, title: "Facebook & Instagram Ads", category: "Facebook & Instagram Ads", image: in8, icon: "bi bi-bullseye" },
    { id: 93, title: "Facebook & Instagram Ads", category: "Facebook & Instagram Ads", image: in9, icon: "bi bi-bullseye" },
    { id: 94, title: "Facebook & Instagram Ads", category: "Facebook & Instagram Ads", image: in10, icon: "bi bi-bullseye" },
    { id: 95, title: "Facebook & Instagram Ads", category: "Facebook & Instagram Ads", image: in11, icon: "bi bi-bullseye" },
    { id: 96, title: "Facebook & Instagram Ads", category: "Facebook & Instagram Ads", image: in12, icon: "bi bi-bullseye" },
    { id: 97, title: "Facebook & Instagram Ads", category: "Facebook & Instagram Ads", image: in13, icon: "bi bi-bullseye" },
    { id: 98, title: "Facebook & Instagram Ads", category: "Facebook & Instagram Ads", image: in14, icon: "bi bi-bullseye" },
    { id: 99, title: "Facebook & Instagram Ads", category: "Facebook & Instagram Ads", image: in15, icon: "bi bi-bullseye" },
    { id: 100, title: "Facebook & Instagram Ads", category: "Facebook & Instagram Ads", image: in16, icon: "bi bi-bullseye" },
    { id: 101, title: "Facebook & Instagram Ads", category: "Facebook & Instagram Ads", image: in17, icon: "bi bi-bullseye" },
    { id: 102, title: "Facebook & Instagram Ads", category: "Facebook & Instagram Ads", image: in18, icon: "bi bi-bullseye" },
    
    // Amazon Book Promotion
    { id: 103, title: "Amazon Book Promotion", category: "Amazon Book Promotion", image: Am1, icon: "bi bi-book" },
    { id: 104, title: "Amazon Book Promotion", category: "Amazon Book Promotion", image: Am2, icon: "bi bi-bar-chart-steps" },
    { id: 105, title: "Amazon Book Promotion", category: "Amazon Book Promotion", image: Am3, icon: "bi bi-brush" },
    { id: 106, title: "Amazon Book Promotion", category: "Amazon Book Promotion", image: Am4, icon: "bi bi-tags" },
    { id: 107, title: "Amazon Book Promotion", category: "Amazon Book Promotion", image: Am5, icon: "bi bi-envelope-paper" },
    { id: 108, title: "Amazon Book Promotion", category: "Amazon Book Promotion", image: Am6, icon: "bi bi-shield-check" },
    { id: 109, title: "Amazon Book Promotion", category: "Amazon Book Promotion", image: Am7, icon: "bi bi-stars" },
    { id: 110, title: "Amazon Book Promotion", category: "Amazon Book Promotion", image: Am8, icon: "bi bi-megaphone" },
    { id: 111, title: "Amazon Book Promotion", category: "Amazon Book Promotion", image: Am9, icon: "bi bi-shop-window" },
    { id: 112, title: "Amazon Book Promotion", category: "Amazon Book Promotion", image: Am10, icon: "bi bi-award" },
    { id: 113, title: "Amazon Book Promotion", category: "Amazon Book Promotion", image: Am11, icon: "bi bi-award" },
    { id: 114, title: "Amazon Book Promotion", category: "Amazon Book Promotion", image: Am12, icon: "bi bi-award" },
    { id: 215, title: "Amazon Book Promotion", category: "Amazon Book Promotion", image: Am13, icon: "bi bi-award" },
    { id: 115, title: "Amazon Book Promotion", category: "Amazon Book Promotion", image: Am14, icon: "bi bi-award" },
    { id: 116, title: "Amazon Book Promotion", category: "Amazon Book Promotion", image: Am15, icon: "bi bi-award" },
    { id: 117, title: "Amazon Book Promotion", category: "Amazon Book Promotion", image: Am16, icon: "bi bi-award" },
    { id: 118, title: "Amazon Book Promotion", category: "Amazon Book Promotion", image: Am17, icon: "bi bi-award" },
    { id: 119, title: "Amazon Book Promotion", category: "Amazon Book Promotion", image: Am18, icon: "bi bi-award" },
    { id: 120, title: "Amazon Book Promotion", category: "Amazon Book Promotion", image: Am19, icon: "bi bi-award" },
    { id: 121, title: "Amazon Book Promotion", category: "Amazon Book Promotion", image: Am20, icon: "bi bi-award" },
    
    
    // Google Ads
    { id: 122, title: "Google Search Ads Campaign", category: "Google Ads", image: Go1, icon: "bi bi-google" },
    { id: 123, title: "Google Search Ads Campaign", category: "Google Ads", image: Go2, icon: "bi bi-image" },
    { id: 124, title: "Google Search Ads Campaign", category: "Google Ads", image: Go3, icon: "bi bi-youtube" },
    { id: 125, title: "Google Search Ads Campaign", category: "Google Ads", image: Go4, icon: "bi bi-search" },
    { id: 126, title: "Google Search Ads Campaign", category: "Google Ads", image: Go5, icon: "bi bi-diagram-3" },
    { id: 127, title: "Google Search Ads Campaign", category: "Google Ads", image: Go6, icon: "bi bi-layers" },
    { id: 227, title: "Google Search Ads Campaign", category: "Google Ads", image: Go7, icon: "bi bi-layers" },
    { id: 128, title: "Google Search Ads Campaign", category: "Google Ads", image: Go8, icon: "bi bi-cash-stack" },
    { id: 129, title: "Google Search Ads Campaign", category: "Google Ads", image: Go9, icon: "bi bi-arrow-repeat" },
    { id: 230, title: "Google Search Ads Campaign", category: "Google Ads", image: Go10, icon: "bi bi-bar-chart-line" },
    { id: 130, title: "Google Search Ads Campaign", category: "Google Ads", image: Go11, icon: "bi bi-bar-chart-line" },
    { id: 131, title: "Google Search Ads Campaign", category: "Google Ads", image: Go12, icon: "bi bi-bar-chart-line" },
    { id: 132, title: "Google Search Ads Campaign", category: "Google Ads", image: Go13, icon: "bi bi-bar-chart-line" },
    { id: 133, title: "Google Search Ads Campaign", category: "Google Ads", image: Go14, icon: "bi bi-bar-chart-line" },
    { id: 134, title: "Google Search Ads Campaign", category: "Google Ads", image: Go15, icon: "bi bi-bar-chart-line" },
    { id: 135, title: "Google Search Ads Campaign", category: "Google Ads", image: Go16, icon: "bi bi-bar-chart-line" },
    { id: 136, title: "Google Search Ads Campaign", category: "Google Ads", image: Go17, icon: "bi bi-bar-chart-line" },
    { id: 138, title: "Google Search Ads Campaign", category: "Google Ads", image: Go18, icon: "bi bi-bar-chart-line" },
    { id: 139, title: "Google Search Ads Campaign", category: "Google Ads", image: Go19, icon: "bi bi-bar-chart-line" },
    { id: 140, title: "Google Search Ads Campaign", category: "Google Ads", image: Go20, icon: "bi bi-bar-chart-line" },
    { id: 141, title: "Google Search Ads Campaign", category: "Google Ads", image: Go21, icon: "bi bi-bar-chart-line" },
    { id: 142, title: "Google Search Ads Campaign", category: "Google Ads", image: Go22, icon: "bi bi-bar-chart-line" },
    { id: 143, title: "Google Search Ads Campaign", category: "Google Ads", image: Go23, icon: "bi bi-bar-chart-line" },
    { id: 144, title: "Google Search Ads Campaign", category: "Google Ads", image: Go24, icon: "bi bi-bar-chart-line" },
    { id: 145, title: "Google Search Ads Campaign", category: "Google Ads", image: Go25, icon: "bi bi-bar-chart-line" },
    { id: 146, title: "Google Search Ads Campaign", category: "Google Ads", image: Go26, icon: "bi bi-bar-chart-line" },
    { id: 147, title: "Google Search Ads Campaign", category: "Google Ads", image: Go27, icon: "bi bi-bar-chart-line" },
    { id: 148, title: "Google Search Ads Campaign", category: "Google Ads", image: Go28, icon: "bi bi-bar-chart-line" },
    { id: 149, title: "Google Search Ads Campaign", category: "Google Ads", image: Go29, icon: "bi bi-bar-chart-line" },
    { id: 150, title: "Google Search Ads Campaign", category: "Google Ads", image: Go30, icon: "bi bi-bar-chart-line" },
    { id: 151, title: "Google Search Ads Campaign", category: "Google Ads", image: Go31, icon: "bi bi-bar-chart-line" },
    { id: 152, title: "Google Search Ads Campaign", category: "Google Ads", image: Go32, icon: "bi bi-bar-chart-line" },
    { id: 153, title: "Google Search Ads Campaign", category: "Google Ads", image: Go33, icon: "bi bi-bar-chart-line" },
    { id: 154, title: "Google Search Ads Campaign", category: "Google Ads", image: Go34, icon: "bi bi-bar-chart-line" },
    { id: 156, title: "Google Search Ads Campaign", category: "Google Ads", image: Go35, icon: "bi bi-bar-chart-line" },
    { id: 157, title: "Google Search Ads Campaign", category: "Google Ads", image: Go36, icon: "bi bi-bar-chart-line" },
    { id: 158, title: "Google Search Ads Campaign", category: "Google Ads", image: Go37, icon: "bi bi-bar-chart-line" },
    { id: 159, title: "Google Search Ads Campaign", category: "Google Ads", image: Go38, icon: "bi bi-bar-chart-line" },
    { id: 160, title: "Google Search Ads Campaign", category: "Google Ads", image: Go39, icon: "bi bi-bar-chart-line" },
    { id: 161, title: "Google Search Ads Campaign", category: "Google Ads", image: Go40, icon: "bi bi-bar-chart-line" },
    
    // TikTok Ads
    { id: 162, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t1, icon: "bi bi-sliders" },
    { id: 163, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t2, icon: "bi bi-sliders" },
    { id: 164, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t3, icon: "bi bi-sliders" },
    { id: 165, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t4, icon: "bi bi-sliders" },
    { id: 166, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t5, icon: "bi bi-sliders" },
    { id: 167, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t6, icon: "bi bi-sliders" },
    { id: 168, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t7, icon: "bi bi-sliders" },
    { id: 169, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t8, icon: "bi bi-sliders" },
    { id: 170, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t9, icon: "bi bi-sliders" },
    { id: 171, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t10, icon: "bi bi-sliders" },
    { id: 172, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t11, icon: "bi bi-sliders" },
    { id: 173, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t12, icon: "bi bi-sliders" },
    { id: 174, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t13, icon: "bi bi-sliders" },
    { id: 175, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t14, icon: "bi bi-sliders" },
    { id: 176, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t15, icon: "bi bi-sliders" },
    { id: 177, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t16, icon: "bi bi-sliders" },
    { id: 178, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t17, icon: "bi bi-sliders" },
    { id: 179, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t18, icon: "bi bi-sliders" },
    { id: 180, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t19, icon: "bi bi-sliders" },
    { id: 181, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t20, icon: "bi bi-sliders" },
    { id: 182, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t21, icon: "bi bi-sliders" },
    { id: 183, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t22, icon: "bi bi-sliders" },
    { id: 184, title: "TikTok Ads Campaign", category: "TikTok Ads", image: t23, icon: "bi bi-sliders" },
  ];

  const [filteredItems, setFilteredItems] = useState([]);
  const [activeBtn, setActiveBtn] = useState("All");
  const location = useLocation();


  // New states
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
  if (location.state?.category) {
    const category = location.state.category;
    setActiveBtn(category);
    const filtered = portfolioItems.filter(
      (item) => item.category === category
    );
    setFilteredItems(filtered);
  } else {
    const shuffled = [...portfolioItems].sort(() => 0.5 - Math.random());
    setFilteredItems(shuffled.slice(0, 9));
  }
}, [location.state]);


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
      <div className="portfolio-header">
        <h1 className="text-white fw-bold ls">PORTFOLIO</h1>

        <div className="breadcrumb">
          <a href="/" className="breadcrumb-link">Home</a>
           <span className="breadcrumb-separator"> &lt; </span>
          <span className="breadcrumb-current">Portfolio</span>
      </div>
      </div>


      <div className="container-fluid px-3 px-sm-5 py-5">

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
                  className={`btn px-4 py-2 portfolio-btn ${
                    activeBtn === btn.title ? "btn-primary" : "btn-outline-primary"
                  }`}
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
