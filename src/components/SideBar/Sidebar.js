import React from 'react';
import './Sidebar.css'

const SideBar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <ul>
        <li><a href="#">Opción 1</a></li>
        <li><a href="#">Opción 2</a></li>
        <li><a href="#">Opción 3</a></li>
      </ul>
    </div>
  );
};

export default SideBar;
