import React from 'react';
import Layout from './components/Layout/Layout';
import Aviso from './components/Aviso/Aviso'; // Asegúrate de ajustar la ruta según la ubicación de tu componente

function App() {
  return (
    <div>
      <Aviso />
      <Layout/>
    </div>
  );
}

export default App;
