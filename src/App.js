import React, { useEffect, useState } from 'react';
import AttendanceTable from './components/AttendaceTable/AttendanceTable.js';
import Layout from './components/Layout/Layout.js';
import './components/Layout/Layout.css';
import NavigationBar from './components/NavigationBar/NavigationBar.js';

const App = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    // Función para formatear la hora en formato de 24 horas
    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    const footerContent = (
        <div className="footer-content">
            <p>Avisos legales y otra información relevante</p>
        </div>
    );

    return (
        <div className="app-container">
            <NavigationBar />
            <div className="date-time-container">
                <span>{formatTime(currentDateTime)}</span>
                {/* También puedes mantener el formato de fecha */}
                <p>{currentDateTime.toLocaleString('es-ES', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }).charAt(0).toUpperCase() + currentDateTime.toLocaleString('es-ES', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }).slice(1)}</p>
            </div>
            <Layout
                content={<AttendanceTable />}
                footer={footerContent}
            />
        </div>
    );
};

export default App;
