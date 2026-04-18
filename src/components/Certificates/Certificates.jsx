import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SocialIcon from "../SocialIcon/SocialIcon";
import "./certificates.css";

import cert1 from "../../assets/main.webp";
import cert2 from "../../assets/Certificate/C1.png";
import cert3 from "../../assets/Certificate/fb.png";
import cert4 from "../../assets/Certificate/Gc1.png"
import cert5 from "../../assets/Certificate/Ga.png"
import cert6 from "../../assets/Certificate/Gai.png"

const data = [
  {
    title: "Google Ads Creative Certification",
    company: "Google",
    issue: "Mar 2026",
    expire: "Mar 2027",
    desc: "Certified by Google in crafting high-performing ad creatives that drive results across Google's advertising platforms.",
    image: cert4,
    link: "https://skillshop.credential.net/b929083a-cb13-402b-bd37-faa2e87a3a7f#acc.Ymnukf8P",
  },
  {
    title: "Google Analytics Certification",
    company: "Google",
    issue: "Mar 2026",
    expire: "Mar 2027",
    desc: "Certified by Google in tracking, analyzing, and interpreting website data to make smarter marketing decisions.",
    image: cert5,
    link: "https://skillshop.credential.net/80382e34-d1f5-451e-8eff-bdce8eebe4b2#acc.SFzQgi38",
  },
  {
    title: "Microsoft Advertising Retail Certification",
    company: "Microsoft ",
    issue: "Mar 2026",
    expire: "Mar 2027",
    desc: "Certified in Microsoft Advertising Retail campaigns and retail-focused ad strategies.",
    image: cert2,
    link: "https://example.com/microsoft-cert",
  },
  {
    title: "AI-Powered Performance Ads Certification",
    company: "Google ",
    issue: "Mar 2026",
    expire: "Mar 2027",
    desc: "Certified by Google in leveraging AI-driven tools and Smart Bidding strategies to maximize ad performance and campaign ROI.",
    image: cert6,
    link: "https://skillshop.credential.net/d93983f9-80f5-4619-820a-e6a21c33cb2c#acc.9h8d1cFu",
  },

  {
    title: "YouTube SEO Mastery",
    company: "YouTube Academy",
    issue: "March 2024",
    expire: "No Expiry",
    desc: "Advanced YouTube SEO strategy, ranking & growth system.",
    image: cert1,
    link: "https://example.com/youtube-cert",
  },
  {
    title: "Digital Marketing Expert",
    company: "Meta",
    issue: "Feb 2024",
    expire: "Feb 2026",
    desc: "Complete Facebook & Instagram marketing strategy.",
    image: cert3,
    link: "https://example.com/meta-cert",
  },
];

const Certificates = () => {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <div className="cert-hero d-flex align-items-center text-center">
        <div className="container">
          <h1 className="fw-bold text-white hero-title">My Certificates</h1>
          <p className="text-white-80 hero-subtitle">
            My professional achievements & certifications
          </p>
        </div>
      </div>

      {/* CERT SECTION */}
      <div className="container py-5">

        {data.map((item, index) => (
          <div key={index} className="row align-items-center cert-row mb-5">

            {/* IMAGE */}
            <div className={`col-md-6 text-center ${index % 2 !== 0 ? "order-md-2" : ""}`}>
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid rounded cert-img"
              />
            </div>

            {/* DETAILS */}
            <div className={`col-md-6 ${index % 2 !== 0 ? "order-md-1" : ""}`}>

              <div className="cert-details-box">
                <h3 className="fw-bold">{item.title}</h3>

                <p><strong>Company:</strong> {item.company}</p>
                <p><strong>Issue:</strong> {item.issue}</p>
                <p><strong>Expire:</strong> {item.expire}</p>

                <p className="text-muted">{item.desc}</p>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn cert-btn mt-2"
                >
                  Verify Certificate
                </a>
              </div>

            </div>

          </div>
        ))}

      </div>

      <SocialIcon />
      <Footer />
    </div>
  );
};

export default Certificates;