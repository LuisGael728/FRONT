import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/menu_icono.svg';  // Asegúrate de esta importación
import logoCFE from '../../assets/CFE.svg';
import Sidebar from '../SideBar/Sidebar.js';
import menuIcon from '../../assets/menu_icono.svg';  // Asegúrate de esta importación

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
      <Sidebar isOpen={isMenuOpen} />
      <img src={menuIcon} alt="Menu Icon" className="menu-icon" /> {/* Asegúrate de esta línea */}
    </nav>
  );
};

export default Header;
