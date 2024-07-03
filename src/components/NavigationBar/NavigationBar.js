// NavigationBar.js
import React, { useState } from 'react';
import './NavigationBar.css';
import logo from '../../assets/logo.svg';
import anotherLogo from '../../assets/CFE3.svg';
import SidebarMenu from '../SideBar/SidebarMenu.js';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation-bar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" onClick={toggleMenu} />
      </div>
      <div className="title-container">
        <a href="#">Sistema de seguimiento de asistencia en vivo.</a>
      </div>
      <div className="logo-container">
        <img src={anotherLogo} alt="Another Logo" className="logo" />
      </div>
      <SidebarMenu isOpen={isMenuOpen} />
    </nav>
  );
};

export default NavigationBar;
