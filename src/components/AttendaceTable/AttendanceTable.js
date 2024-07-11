import React, { useState, useEffect } from 'react';
import './AttendanceTable.css';
import { List } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const initialLogsState = [
  [
    { id: 1, name: 'John Doe', registered: { date: '2023-06-14T09:30:00Z' } },
    { id: 2, name: 'Jane Smith', registered: { date: '2023-06-14T10:15:00Z' } },
    { id: 3, name: 'Michael Johnson', registered: { date: '2023-06-14T11:00:00Z' } },
    { id: 4, name: 'Emily Brown', registered: { date: '2023-06-14T11:45:00Z' } },
    { id: 5, name: 'William Lee', registered: { date: '2023-06-14T12:30:00Z' } },
    { id: 6, name: 'Emily Brown', registered: { date: '2023-06-14T11:45:00Z' } },
    { id: 7, name: 'William Lee', registered: { date: '2023-06-14T12:30:00Z' } },
  ],
  [
    { id: 8, name: 'Olivia Wilson', registered: { date: '2023-06-14T13:00:00Z' } },
    { id: 9, name: 'James Anderson', registered: { date: '2023-06-14T13:45:00Z' } },
    { id: 10, name: 'Sophia Martinez', registered: { date: '2023-06-14T14:30:00Z' } },
    { id: 11, name: 'Daniel Davis', registered: { date: '2023-06-14T15:15:00Z' } },
    { id: 12, name: 'Isabella Rodriguez', registered: { date: '2023-06-14T16:00:00Z' } },
    { id: 13, name: 'Emily Brown', registered: { date: '2023-06-14T11:45:00Z' } },
    { id: 14, name: 'William Lee', registered: { date: '2023-06-14T12:30:00Z' } },
  ],
  [
    { id: 14, name: 'Ethan Garcia', registered: { date: '2023-06-14T16:45:00Z' } },
    { id: 15, name: 'Ava Lopez', registered: { date: '2023-06-14T17:30:00Z' } },
    { id: 16, name: 'Alexander Moore', registered: { date: '2023-06-14T18:15:00Z' } },
    { id: 17, name: 'Mia Taylor', registered: { date: '2023-06-14T19:00:00Z' } },
    { id: 18, name: 'William Brown', registered: { date: '2023-06-14T19:45:00Z' } },
    { id: 19, name: 'Emily Brown', registered: { date: '2023-06-14T11:45:00Z' } },
    { id: 20, name: 'William Lee', registered: { date: '2023-06-14T12:30:00Z' } },
  ],
  [
    
    { id: 21, name: 'Charlotte Martinez', registered: { date: '2023-06-14T20:30:00Z' } },
    { id: 22, name: 'Jacob Rodriguez', registered: { date: '2023-06-14T21:15:00Z' } },
    { id: 23, name: 'Amelia Lee', registered: { date: '2023-06-14T22:00:00Z' } },
    { id: 24, name: 'Liam Wilson', registered: { date: '2023-06-14T22:45:00Z' } },
    { id: 25, name: 'Emma Anderson', registered: { date: '2023-06-14T23:30:00Z' } },
    { id: 26, name: 'Emily Brown', registered: { date: '2023-06-14T20:45:00Z' } },
    { id: 27, name: 'William Lee', registered: { date: '2023-06-14T19:30:00Z' } }, 
   ]
];

const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const monthsOfYear = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${daysOfWeek[date.getDay()]} ${date.getDate()} de ${monthsOfYear[date.getMonth()]} del ${date.getFullYear()}`;
};

const formatTime = (dateString) => {
  const date = new Date(dateString);
  return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
};

const AttendanceTable = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date().toISOString());

  useEffect(() => {
    const interval = setInterval(() => setCurrentDateTime(new Date().toISOString()), 1000);
    return () => clearInterval(interval);
  }, []);

  const logsState = initialLogsState.map((logs, index) => {
    if (logs.length === 0) {
      return [{ id: `Fuera de servicio ${index + 1}`, name: 'Fuera de servicio', registered: {} }];
    } else if (logs.length > 0 && logs.every(log => !log.name)) {
      return [{ id: `No data ${index + 1}`, name: 'No data', registered: {} }];
    } else {
      return logs;
    }
  });

  return (
    <div className="attendance-container">
      <div className="date-time">
        <span>{formatTime(currentDateTime)}</span>
        <p>{formatDate(currentDateTime)}</p>
      </div>
      {logsState.map((logs, index) => (
        <div className="checadores" key={index}>
          <h2>ET {index + 1}</h2>
          {logs.length === 1 && logs[0].name === 'Fuera de servicio' ? (
            <div className="fuera-de-servicio">
              <ExclamationCircleOutlined className="fuera-de-servicio-icon" />
              <p className="fuera-de-servicio-text">Fuera de servicio</p>
            </div>
          ) : (
            <List
              dataSource={logs}
              renderItem={(item) => (
                <List.Item key={item.id}>
                  <List.Item.Meta
                    title={
                      <div className="user-info">
                        <span className="name">{item.name}</span>
                        {item.registered && item.registered.date && (
                          <span className="date">{formatTime(item.registered.date)}</span>
                        )}
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default AttendanceTable;
