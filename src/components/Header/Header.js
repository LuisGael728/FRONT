import React, { useState } from 'react';
import './Header.css';
import logoCFE from '../../assets/CFE.svg';

const Header = ({ onMenuItemClick }) => { // Asegúrate de recibir la función como prop
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="hamburger-lines" onClick={toggleMenu}>
          <span className={`line line1 ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line line2 ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line line3 ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
        <div className="title">
          <a href="/">LATS</a>
        </div>
        <div className="logo-container">
          <img src={logoCFE} alt="logo CFE" className="logo" />
        </div>
        <div className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#!" onClick={() => onMenuItemClick('entrada')}>Entrada</a></li>
          <li><a href="#!" onClick={() => onMenuItemClick('salida')}>Salida</a></li>
        </div>
      </div>
    </nav>
  );
};

export default Header;
