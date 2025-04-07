// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link to use for navigation

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo-container">
        <div className="logo-text">
          <img src="assets/gwc_logo.png" alt="Girls Who Code Logo" className="logo-img" />
        </div>
        <div className="subtext">AT THE OHIO STATE UNIVERSITY</div>
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/showcase">Showcase</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/resources">Resources</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
