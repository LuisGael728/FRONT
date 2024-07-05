import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import AttendanceTable from '../AttendaceTable/AttendanceTable.js';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <AttendanceTable />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
