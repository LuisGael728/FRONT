import React, { useState } from 'react';
import Header from '../Header/Header';  
import Footer from '../Footer/Footer'; 
import AttendanceTable from '../AttendaceTable/AttendanceTable'; 
import DateTime from '../DateTime/DateTime'; 
import './Layout.css'; 

const Layout = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(''); 

  const handleMenuItemClick = (option) => {
    setSelectedMenuItem(option); 
  };

  return (
    <div className="layout">
      <Header onMenuItemClick={handleMenuItemClick} />
      <main>
        <DateTime /> 
        {selectedMenuItem === 'entrada' && <AttendanceTable />} 
        {selectedMenuItem === 'salida' && <AttendanceTable/>} 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
