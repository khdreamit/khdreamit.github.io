import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "./clientReview.css";
import Img1 from '../../assets/face11.png'
import Navbar from "../Navbar/Navbar";
import SocialIcon from "../SocialIcon/SocialIcon";
import Footer from "../Footer/Footer";
import axios from 'axios';

const API_BASE = window.location.hostname === 'localhost'
  ? 'http://127.0.0.1:8000'
  : 'https://khdreamit-github-io.onrender.com';

const staticImages = [Img1];

const ClientReview = () => {
  const [visibleImages, setVisibleImages] = useState(6);
  const [show, setShow] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [apiImages, setApiImages] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE}/portfolio/category/Client Review`)
      .then(res => {
        const imgs = res.data.map(img => `${API_BASE}/${img.filepath}`);
        setApiImages(imgs);
      })
      .catch(() => {});
  }, []);

  const allImages = [...staticImages, ...apiImages];

  const handleShow = (img) => {
    setModalImg(img);
    setShow(true);
  };

  return (
    <div>
      <Navbar />
      <div className="review-header">
        <h1 className="text-white fw-bold ls">Client Reviews</h1>
        <div className="breadcrumb">
          <a href="/" className="breadcrumb-link">Home</a>
          <span className="breadcrumb-separator">&lt;</span>
          <span className="breadcrumb-current">Client Reviews</span>
        </div>
      </div>
      <div className="container-fluid px-5 py-5">
        <div className="row g-4">
          {allImages.slice(0, visibleImages).map((img, index) => (
            <div className="col-md-4" key={index}>
              <div className="review-box" onClick={() => handleShow(img)}>
                <img src={img} alt="client review" className="img-fluid" />
              </div>
            </div>
          ))}
        </div>
        {visibleImages < allImages.length && (
          <div className="text-center mt-4">
            <button className="btn btn-primary px-4"
              onClick={() => setVisibleImages(visibleImages + 6)}>
              See More
            </button>
          </div>
        )}
      </div>
      <Modal show={show} centered size="lg" onHide={() => setShow(false)}>
        <Modal.Body className="text-center p-0">
          <img src={modalImg} alt="" className="modal-img" />
        </Modal.Body>
        <Button className="modal-close-btn" onClick={() => setShow(false)}>×</Button>
      </Modal>
      <SocialIcon />
      <Footer />
    </div>
  );
};

export default ClientReview;