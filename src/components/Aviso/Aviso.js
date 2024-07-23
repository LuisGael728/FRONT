import React, { useState, useEffect } from 'react';
import './Aviso.css'; // Asegúrate de que la ruta sea correcta

function Aviso() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimeout = setTimeout(() => {
      setVisible(true);
    }, 5000); // Muestra el aviso después de 5 segundos

    const hideTimeout = setTimeout(() => {
      setVisible(false);
    }, 10000); // Oculta el aviso después de 10 segundos (5s de espera + 5s visible)

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div className={`aviso ${visible ? 'visible' : 'hidden'}`}>
      <p>Para ver las tablas, selecciona la opción <strong>"Entrada"</strong> o <strong>"Salida"</strong> en el menú lateral.</p>
    </div>
  );
}

export default Aviso;
