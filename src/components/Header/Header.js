import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.svg';
import logoCFE from '../../assets/CFE.svg';
import Sidebar from '../SideBar/Sidebar.js';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container-left">
        <img src={logo} alt="Logo" className="logo" onClick={toggleMenu} />
      </div>
      <div className="title">
        <a href="#">Sistema de seguimiento de asistencia en vivo.</a>
      </div>
      <div className="logo-container-right">
        <img src={logoCFE} alt="Logo CFE" className="logo" />
      </div>
      <Sidebar isOpen={isMenuOpen} />
    </nav>
  );
};

export default Header;
