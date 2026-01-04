import React from 'react';
import Navbar from '../Navbar/Navbar';
import SocialIcon from '../SocialIcon/SocialIcon';
import Footer from '../Footer/Footer';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { Button, Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>           
            <Navbar />
                <div className="review-header">
                    <h1 className="text-white fw-bold ls">CONTACT ME</h1>
                </div>

    <div className="contact-section py-5" style={{ background: "#f1f3f5" }}>
      <Container>
        <h3 className="fw-bold text-center mb-5 text-primary">Contact For Any Information</h3>
        <Row className="justify-content-center g-4">
          <Col xs={12} md={5}>
            <div className="d-flex align-items-center p-4 rounded shadow-sm bg-white">
              <FaPhoneAlt className="text-success fs-3 me-3" />
              <div>
                {/* <h5 className="mb-1">Phone</h5> */}
                <p className="mb-0">+880 1947349917</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <div className="d-flex align-items-center p-4 rounded shadow-sm bg-white">
              <FaEnvelope className="text-warning fs-3 me-3" />
              <div>
                {/* <h5 className="mb-1">Email</h5> */}
                <p className="mb-0">khdreamit@gmail.com</p>
              </div>
            </div>
          </Col>
        </Row>


          <Row className="justify-content-center g-3 mt-5">
          <Col xs="auto">
            <Button
              href="https://www.facebook.com/AdulHalim.net/"
              target="_blank"
              className="d-flex align-items-center px-4 py-2"
              style={{ backgroundColor: "#3b5998", borderColor: "#3b5998" }}
            >
              <FaFacebook className="me-2" /> Facebook
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              href="#"
              target="_blank"
              className="d-flex align-items-center px-4 py-2"
              style={{ backgroundColor: "#25D366", borderColor: "#25D366" }}
            >
              <FaWhatsapp className="me-2" /> WhatsApp
            </Button>
          </Col>
        </Row>
      </Container>
    </div>


            <SocialIcon />
            <Footer />
        </div>
    );
};

export default Contact;