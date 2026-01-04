import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Img1 from '../../assets/face11.png'
import Navbar from '../Navbar/Navbar';
import SocialIcon from '../SocialIcon/SocialIcon';
import Footer from '../Footer/Footer';
const allImages = [
  Img1,
  Img1,
  Img1,
  Img1,
  Img1,
  Img1,
  Img1,
  Img1,
  Img1,
];

const ClientMeeting = () => {

      const [visibleImages, setVisibleImages] = useState(6);
      const [show, setShow] = useState(false);
      const [modalImg, setModalImg] = useState("");
    
      const handleShow = (img) => {
        setModalImg(img);
        setShow(true);
      };


    return (
        <div>
            <Navbar />

     {/* ---------- Top Banner Section ---------- */}
      <div className="review-header">
        <h1 className="text-white fw-bold ls">Client Meeting</h1>
      </div>

      {/* ---------- Image Grid Section ---------- */}
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

        {/* ---------- See More Button ---------- */}
        {visibleImages < allImages.length && (
          <div className="text-center mt-4">
            <button
              className="btn btn-primary px-4 "
              onClick={() => setVisibleImages(visibleImages + 6)}
            >
              See More
            </button>
          </div>
        )}
      </div>

      {/* ---------- Modal ---------- */}
      <Modal show={show} centered size="lg" onHide={() => setShow(false)}>
        <Modal.Body className="text-center p-0">
          <img src={modalImg} alt="" className="modal-img" />
        </Modal.Body>
        <Button
          
          className="modal-close-btn"
          onClick={() => setShow(false)}
        >
          ×
        </Button>
      </Modal>



            <SocialIcon />
            <Footer />
        </div>
    );
};

export default ClientMeeting;