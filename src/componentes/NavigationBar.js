import React from 'react';
import './css/NavigationBar.css';
import logo from './assets/logo.svg';
import anotherLogo from './assets/CFE.svg';

const NavigationBar = () => { 
  const redirectToPage = (url) => {
    window.location.href = url;
  };

  return (
    <nav className="navigation-bar">
      <div className="logo-container" onClick={() => redirectToPage('#')}>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="title-container" onClick={() => redirectToPage('#')}>
        <a href="#">Sistema de seguimiento de asistencia en vivo.</a>
      </div>
      <div className="logo-container">
        <img src={anotherLogo} alt="Another Logo" className="logo" />
      </div>
    </nav>
  );
};

export default NavigationBar;
