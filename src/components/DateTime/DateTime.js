// DateTime.js
import React from 'react';
import './DateTime.css';
import { ConfigProvider } from 'antd';
import esES from 'antd/es/locale/es_ES'; // Importa el idioma español de Ant Design
import moment from 'moment';
import 'moment/locale/es'; // Importa las configuraciones de idioma de moment para español
import { useState, useEffect } from 'react';

// Establece el idioma de moment en español
moment.locale('es');

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ConfigProvider locale={esES}>
      <div className="date-time">
        <span>{moment(currentDateTime).format('HH:mm:ss')}</span>
        <p>{moment(currentDateTime).format('dddd D [de] MMMM [del] YYYY')}</p>
      </div>
    </ConfigProvider>
  );
};

export default DateTime;
