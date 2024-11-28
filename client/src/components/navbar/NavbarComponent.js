import template_logo from '../assets/images/templatemo_logo.png'
import './NavbarComponent.css';
import React, { useState } from 'react';
import './NavbarComponent.css'; // Import the CSS for styling

const NavbarComponent = () => {
  const [isMobile, setIsMobile] = useState(false); // State for toggling mobile menu

  const handleToggle = () => {
    setIsMobile(!isMobile); // Toggle the menu on click
  };

  return (
    <nav className="navbar">
      <img src={template_logo} alt="Logo" className="logo" />

      {/* Hamburger Icon for small screens */}
      <button className="hamburger" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navbar links (will be toggled) */}
      <ul className={`navbar-links ${isMobile ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#training">Training</a></li>
        <li><a href="#solutions">Solutions</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#careers">Careers</a></li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;

