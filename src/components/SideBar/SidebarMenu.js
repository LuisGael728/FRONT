// SidebarMenu.js
import React from 'react';
import './SidebarMenu.css';

const SidebarMenu = ({ isOpen }) => {
  return (
    <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><a href="#">Opción 1</a></li>
        <li><a href="#">Opción 2</a></li>
        <li><a href="#">Opción 3</a></li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
