import React, { useState } from 'react';
import Header from '../Header/Header'; // Ajusta la ruta según tu estructura de archivos
import Footer from '../Footer/Footer'; // Ajusta la ruta según tu estructura de archivos
import AttendanceTable from '../AttendaceTable/AttendanceTable'; // Ajusta la ruta según tu estructura de archivos
import DateTime from '../DateTime/DateTime'; // Asegúrate de importar DateTime
import './Layout.css'; // Ajusta la ruta y contenido según tus necesidades

const Layout = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(''); // Estado para la opción seleccionada

  const handleMenuItemClick = (option) => {
    setSelectedMenuItem(option); // Actualiza el estado con la opción seleccionada
  };

  return (
    <div className="layout">
      <Header onMenuItemClick={handleMenuItemClick} />
      <main>
        <DateTime /> {/* Muestra DateTime siempre */}
        {selectedMenuItem === 'entrada' && <AttendanceTable />} {/* Muestra AttendanceTable si 'entrada' está seleccionado */}
        {selectedMenuItem === 'salida' && <AttendanceTable/>} {/* Aquí puedes agregar otro contenido si es necesario */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
