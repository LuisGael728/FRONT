import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import Layout from './components/Layout/Layout';
import './index.css'
function App() {
  useEffect(() => {
    Swal.fire({
      title: 'Sin tablas',
      width: 600,
      text: 'Seleccione una tabla en el menu lateral',
      icon:'warning',
      confirmButtonText: 'Entiendo',
    });
  },); 

  return (
      <Layout />
  );
}

export default App;
