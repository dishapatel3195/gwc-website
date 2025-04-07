// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="social-links">
        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>
        <a href="https://www.instagram.com/gwc.ohiostate/?hl=en" target="_blank" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
          <span>Instagram</span>
        </a>
        <a href="mailto:example@email.com" target="_blank" aria-label="Email">
          <i className="fas fa-envelope"></i>
          <span>Email</span>
        </a>
        <a href="https://groupme.com/join_group/71564608/D4priYut?..." target="_blank" aria-label="GroupMe">
          <i className="fas fa-comments"></i>
          <span>GroupMe</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
