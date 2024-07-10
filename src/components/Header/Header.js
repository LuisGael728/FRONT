import React, { useState } from 'react';
import './Header.css';
<<<<<<< HEAD
import logo from '../../assets/menu_icono.svg';  // Asegúrate de esta importación
import logoCFE from '../../assets/CFE.svg';
import Sidebar from '../SideBar/Sidebar.js';
import menuIcon from '../../assets/menu_icono.svg';  // Asegúrate de esta importación
=======
import logoCFE from '../../assets/CFE.svg';
>>>>>>> c6d111725d8c9c7599906a80aa3b80a691d68e30

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
<<<<<<< HEAD
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" onClick={toggleMenu} />
      </div>
      <div className="title">
        <a href="#">Sistema de seguimiento de asistencia en vivo.</a>
      </div>
      <div className="logo-container">
        <img src={logoCFE} alt="logoCFE" className="logo" />
      </div>
      <Sidebar isOpen={isMenuOpen} />
      <img src={menuIcon} alt="Menu Icon" className="menu-icon" /> {/* Asegúrate de esta línea */}
=======
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
        <div className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="/">Entrada</a></li>
          <li><a href="/">Salida</a></li>
        </div>
      </div>
>>>>>>> c6d111725d8c9c7599906a80aa3b80a691d68e30
    </nav>
  );
};

export default Header;
