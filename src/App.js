import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import './index.css';

function App() {
  const [showAttendance, setShowAttendance] = useState(false);

  const handleMenuClick = (option) => {
    if (option === 'entrada') {
      setShowAttendance(true);
    } else {
      setShowAttendance(false);
    }
  };

  return (
    <Layout handleMenuClick={handleMenuClick}>
      {!showAttendance && (
        <div>
          {/* Aquí puedes mostrar la hora y la fecha */}
          <h2>Fecha y hora: {new Date().toLocaleString()}</h2>
        </div>
      )}
    </Layout>
  );
}

export default App;
