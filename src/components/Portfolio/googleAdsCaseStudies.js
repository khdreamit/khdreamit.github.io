// src/components/Portfolio/googleAdsCaseStudies.js

// ✅ প্রতিটা case study-র ছবি এখানে import করুন
// (আপনার আগের Portfolio.jsx ফাইলে যেভাবে Go1, Go2... import করা ছিল, ঠিক সেভাবেই)

import Go1 from '../../assets/Google ads p/1.jpg';
import Go2 from '../../assets/Google ads p/2.jpg';
import Go3 from '../../assets/Google ads p/3.jpg';
import Go4 from '../../assets/Google ads p/4.jpg';
import Go5 from '../../assets/Google ads p/5.png';
import Go6 from '../../assets/Google ads p/6.png';

// ============================================================
// ✅ এখানে একটা করে object মানে একটা Case Study
// যতগুলো case study লাগবে, নিচে ততগুলো object array-তে যোগ করবেন
// ============================================================
const googleAdsCaseStudies = [
  {
  id: "google-ads-1",

  category: "Google Ads",

  title: "Performance Max + Search Ads: 350x ROAS for Kenyan Retailer",

  description:
    "Managed Google Ads (Performance Max + Search) for an electronics retailer selling TVs, washing machines, and refrigerators.",

  myRole: " Google Ads Specialist (Performance Max + Search)",

  goal:
    "Grow qualified traffic and sales while keeping cost per conversion low across product categories.",

  whatIDid:
    "Restructured Performance Max into category-specific asset groups, built tightly themed Search ad groups with strong ad copy, and refined audience signals and negative keywords weekly.",

  client: "USA-based Law Firm",

  duration: "1 Months",

  published: "July 30, 2026",

  tools: [
    "Google Ads",
    "Google Analytics",
    "Keyword Planner",
    "Google Tag Manager",
    "Local Search Ads",
    "Conversion Rate Optimization",
  ],

  results: [
    
    { label: "Conv. Value", value: "$213,141.07" },
    { label: "ROAS", value: "349x" },
    { label: "Conversions", value: "1.84K" },
  ],

  images: [
    Go1,Go2,Go3,Go4,Go5,Go6
   
  ],
}
  

  // ============================================================
  // ✅ নতুন case study যোগ করতে চাইলে নিচে এভাবে একটা object বসিয়ে দিন:
  //
  // {
  //   id: "google-ads-4",
  //   category: "Google Ads",
  //   title: "",
  //   description: "",
  //   client: "",
  //   duration: "",
  //   tools: [],
  //   results: [],
  //   images: [],
  // },
  // ============================================================
];

export default googleAdsCaseStudies;