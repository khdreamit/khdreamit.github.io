import React from 'react';

const WhatsApp = () => {

  const handleWhatsAppClick = () => {
    const phoneNumber = "8801947349917";
    const message = "Assalamu Alaikum";
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(url, "_blank"); 
  };

  return (
    <div>
      <button onClick={handleWhatsAppClick} className="btn btn-secondary">
        Click
      </button>
    </div>
  );
};

export default WhatsApp;
