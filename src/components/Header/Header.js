import React, { useState } from 'react';
import './Header.css';
import menu from '../../assets/menu_icono.svg';
import logoCFE from '../../assets/CFE.svg';
import Sidebar from '../SideBar/Sidebar.js';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={menu} alt="Logo" className="menu" onClick={toggleMenu} />
      </div>
      <div className="title">
        <a href="#">Sistema de seguimiento de asistencia en vivo</a>
      </div>
      <div className="logo-container">
        <img src={logoCFE} alt="Logo CFE" className="logo" />
      </div>
      <Sidebar isOpen={isMenuOpen} />
    </nav>
  );
};

export default Header;
