import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="Footer">
      <small>Meeka Spivey - Copyright {currentYear} - ACS 1320 Project</small>
    </div>
  );
};

export default Footer;







