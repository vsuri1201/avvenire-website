import template_logo from '../assets/images/templatemo_logo.png';
import './NavbarComponent.css';
import React, { useState } from 'react';
import { tabInfo } from '../assets/constants/constants';

const NavbarComponent = ({ onTabSelect }) => {
  const [isMobile, setIsMobile] = useState(false); // State for toggling mobile menu

  const handleToggle = () => {
    setIsMobile(!isMobile); // Toggle the menu on click
  };

  const handleLinkClick = () => {
    setIsMobile(false); // Close the menu when a link is clicked
  };

  return (
    <nav className={`navbar ${isMobile ? 'active' : ''}`}>
      <img src={template_logo} alt="Logo" className="logo" />

      {/* Hamburger Icon for small screens */}
      <button className="hamburger" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navbar links (will be toggled) */}
      <ul className={`navbar-links ${isMobile ? 'active' : ''}`}>
        {Object.entries(tabInfo).map(([key]) => {
          return (
            <li key={key}>
              <a onClick={() => { onTabSelect(key); handleLinkClick(); }}>
                {key}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavbarComponent;
