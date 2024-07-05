import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import AttendanceTable from '../AttendaceTable/AttendanceTable.js';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
        <AttendanceTable />
      <Footer />
    </div>
  );
};

export default Layout;
