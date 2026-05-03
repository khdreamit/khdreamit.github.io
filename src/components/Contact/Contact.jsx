import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import SocialIcon from '../SocialIcon/SocialIcon';
import Footer from '../Footer/Footer';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import leadImg from '../../assets/lead.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    website_url: '',
    goal: '',
    business_type: '',
    other_business: '',
    message: '',
  });

  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // Validation rules
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^[+]?[0-9\s\-()]{7,20}$/.test(phone);

  const errors = {
    full_name: !formData.full_name ? 'Name is required' : '',
    email: !formData.email ? 'Email is required' : !isValidEmail(formData.email) ? 'Please enter a valid email (e.g. example@gmail.com)' : '',
    phone: !formData.phone ? 'Phone is required' : !isValidPhone(formData.phone) ? 'Only numbers allowed (+ sign permitted)' : '',
    goal: !formData.goal ? 'Please select your goal' : '',
    business_type: !formData.business_type ? 'Please select business type' : '',
    other_business: formData.business_type === 'Other' && !formData.other_business ? 'Please specify your business' : '',
  };

  const isFormValid = Object.values(errors).every(e => e === '');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      await axios.post('http://127.0.0.1:8000/leads/submit', {
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        website_url: formData.website_url,
        company_name: formData.business_type === 'Other' ? formData.other_business : formData.business_type,
        company_email: '',
        source: `Goal: ${formData.goal} | Business: ${formData.business_type} | Message: ${formData.message}`,
      });
      setSuccess('✅ Thank you! We will contact you soon.');
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        website_url: '',
        goal: '',
        business_type: '',
        other_business: '',
        message: '',
      });
      setTouched({});
    } catch {
      setError('❌ Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  const getFieldClass = (field) => {
    if (!touched[field]) return 'form-control';
    return errors[field] ? 'form-control is-invalid' : 'form-control is-valid';
  };

  const getSelectClass = (field) => {
    if (!touched[field]) return 'form-select';
    return errors[field] ? 'form-select is-invalid' : 'form-select is-valid';
  };

  return (
    <div>
      <Navbar />

      <div className="review-header">
        <h1 className="text-white fw-bold ls">CONTACT ME</h1>
        <div className="breadcrumb">
          <a href="/" className="breadcrumb-link">Home</a>
          <span className="breadcrumb-separator">&lt;</span>
          <span className="breadcrumb-current">Contact Me</span>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="contact-section py-5" style={{ background: "#f1f3f5" }}>
        <Container>
          <h3 className="fw-bold text-center mb-5 text-primary">Contact For Any Information</h3>
          <Row className="justify-content-center g-4">
            <Col xs={12} md={5}>
              <div className="d-flex align-items-center p-4 rounded shadow-sm bg-white">
                <FaPhoneAlt className="text-success fs-3 me-3" />
                <div>
                  <p className="mb-0">+880 1947349917</p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={5}>
              <div className="d-flex align-items-center p-4 rounded shadow-sm bg-white">
                <FaEnvelope className="text-warning fs-3 me-3" />
                <div>
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

      {/* Lead Generation Form */}
      <div className="py-5" style={{ background: "#fdf6e3" }}>
        <Container>
          <h3 className="fw-bold text-center mb-2 text-primary">Get In Touch</h3>
          <p className="text-center text-muted mb-5">Fill out the form below and we'll get back to you shortly.</p>

          <Row className="align-items-center g-5">

            {/* Left - Image */}
            <Col xs={12} md={5} className="text-center">
              <img
                src={leadImg}
                alt="contact"
                className="img-fluid rounded shadow"
                style={{ maxHeight: '600px', width: '100%', objectFit: 'cover' }}
              />
            </Col>

            {/* Right - Form */}
            <Col xs={12} md={7}>
              <div className="bg-white p-4 rounded shadow-sm">

                {success && <div className="alert alert-success">{success}</div>}
                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit}>
                  <Row className="g-3">

                    {/* Full Name */}
                    <Col xs={12} md={6}>
                      <label className="form-label fw-semibold">Full Name <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getFieldClass('full_name')}
                        placeholder="Your full name"
                      />
                      {touched.full_name && errors.full_name && (
                        <div className="invalid-feedback">{errors.full_name}</div>
                      )}
                    </Col>

                    {/* Email */}
                    <Col xs={12} md={6}>
                      <label className="form-label fw-semibold">Email Address <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getFieldClass('email')}
                        placeholder="your@email.com"
                      />
                      {touched.email && errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </Col>

                    {/* Phone */}
                    <Col xs={12} md={6}>
                      <label className="form-label fw-semibold">WhatsApp / Phone Number <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getFieldClass('phone')}
                        placeholder="+880 1XXXXXXXXX"
                      />
                      {touched.phone && errors.phone && (
                        <div className="invalid-feedback">{errors.phone}</div>
                      )}
                    </Col>

                    {/* Website URL */}
                    <Col xs={12} md={6}>
                      <label className="form-label fw-semibold">Website URL</label>
                      <input
                        type="text"
                        name="website_url"
                        value={formData.website_url}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="https://yourwebsite.com"
                      />
                    </Col>

                    {/* Goal Dropdown */}
                    <Col xs={12}>
                      <label className="form-label fw-semibold">What is your goal? <span className="text-danger">*</span></label>
                      <select
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getSelectClass('goal')}
                      >
                        <option value="">Select your goal</option>
                        <option value="Leads">Leads</option>
                        <option value="Sales">Sales</option>
                        <option value="Traffic">Traffic</option>
                      </select>
                      {touched.goal && errors.goal && (
                        <div className="invalid-feedback">{errors.goal}</div>
                      )}
                    </Col>

                    {/* Business Type Dropdown */}
                    <Col xs={12}>
                      <label className="form-label fw-semibold">Business / Service Type <span className="text-danger">*</span></label>
                      <select
                        name="business_type"
                        value={formData.business_type}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getSelectClass('business_type')}
                      >
                        <option value=""> Select business type</option>
                        <option value="E-commerce / Online Shop">E-commerce / Online Shop</option>
                        <option value="Local Business (Restaurant, Salon, etc.)">Local Business (Restaurant, Salon, etc.)</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Education / Coaching">Education / Coaching</option>
                        <option value="Healthcare / Clinic">Healthcare / Clinic</option>
                        <option value="Travel & Tourism">Travel & Tourism</option>
                        <option value="Fashion & Clothing">Fashion & Clothing</option>
                        <option value="SaaS / Tech Product">SaaS / Tech Product</option>
                        <option value="Other">Other (specify)</option>
                      </select>
                      {touched.business_type && errors.business_type && (
                        <div className="invalid-feedback">{errors.business_type}</div>
                      )}
                    </Col>

                    {/* Other Business Specify */}
                    {formData.business_type === 'Other' && (
                      <Col xs={12}>
                        <label className="form-label fw-semibold">Please specify <span className="text-danger">*</span></label>
                        <input
                          type="text"
                          name="other_business"
                          value={formData.other_business}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={getFieldClass('other_business')}
                          placeholder="Your business type"
                        />
                        {touched.other_business && errors.other_business && (
                          <div className="invalid-feedback">{errors.other_business}</div>
                        )}
                      </Col>
                    )}

                    {/* Message */}
                    <Col xs={12}>
                      <label className="form-label fw-semibold">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control"
                        rows={4}
                        placeholder="Write your message here..."
                      />
                    </Col>

                    {/* Submit Button */}
                    <Col xs={12} className="text-center mt-2">
                      <button
                        type="submit"
                        disabled={!isFormValid || loading}
                        className="btn btn-primary px-5 py-2 fw-bold"
                        style={{
                          fontSize: '16px',
                          borderRadius: '8px',
                          opacity: isFormValid ? 1 : 0.4,
                          cursor: isFormValid ? 'pointer' : 'not-allowed',
                          transition: 'opacity 0.3s',
                        }}
                      >
                        {loading ? 'Submitting...' : 'Submit Form '}
                      </button>
                      {!isFormValid && (
                        <p className="text-muted mt-2" style={{ fontSize: '13px' }}>
                          Please fill all required fields to enable submit
                        </p>
                      )}
                    </Col>

                  </Row>
                </form>
              </div>
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