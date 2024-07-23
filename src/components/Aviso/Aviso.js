import React, { useState, useEffect } from 'react';
import '../Aviso/Aviso.css'; 

function Aviso() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setVisible(true);
    }, 5000); // Muestra el aviso 

    const hideTimeout = setTimeout(() => {
      setVisible(false);
    }, 10000); // Oculta el aviso 

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div className={`aviso ${visible ? 'visible' : 'hidden'}`}>
      Selecciona la opción "Entrada" o "Salida" en el menú lateral 
    </div>
  );
}

export default Aviso;
