import React from 'react';
import './Header.css'; // Create a corresponding CSS file

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <span className="header-logo-text">Soren Sonstein</span>
      </div>
      <nav className="header-navigation">
        <ul className="header-nav-list">
          <li className="header-nav-item"><a href="#about">About Me</a></li>
          <li className="header-nav-item"><a href="#projects">Projects</a></li>
          <li className="header-nav-item"><a href="#resume">Resume</a></li>
          <li className="header-nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
