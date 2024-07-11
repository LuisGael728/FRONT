import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/menu_icono.svg';
import logoCFE from '../../assets/CFE.svg';
import menuIcon from '../../assets/menu_icono.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" onClick={toggleMenu} />
      </div>
      <div className="title">
        <a href="#">Sistema de seguimiento de asistencia en vivo.</a>
      </div>
      <div className="logo-container">
        <img src={logoCFE} alt="logoCFE" className="logo" />
      </div>
      <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
      <div className="nav-container">
        <div className="hamburger-lines" onClick={toggleMenu}>
          <span className={`line line1 ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line line2 ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line line3 ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
        <div className="title">
          <a href="/">Sistema de seguimiento de asistencia en vivo.</a>
        </div>
        <div className="logo-container">
          <img src={logoCFE} alt="logo CFE" className="logo" />
        </div>
        <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="/">Entrada</a></li>
          <li><a href="/">Salida</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;