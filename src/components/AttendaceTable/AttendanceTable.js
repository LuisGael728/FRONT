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
  [],
  [
    { id: 15, name: 'Ethan Garcia', registered: { date: '2023-06-14T16:45:00Z' } },
    { id: 16, name: 'Ava Lopez', registered: { date: '2023-06-14T17:30:00Z' } },
    { id: 17, name: 'Alexander Moore', registered: { date: '2023-06-14T18:15:00Z' } },
  ]
];

const formatTime = (dateString) => new Date(dateString).toTimeString().slice(0, 8);

const AttendanceTable = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logsState = initialLogsState.map((logs, index) =>
    logs.length === 0 ? [{ id: `Fuera de servicio ${index + 1}`, name: 'Fuera de servicio', registered: {} }] : logs
  );


  const getLogsToDisplay = (logs) => windowWidth < 1920 ? logs.slice(-5) : logs;

  return (
    <div className="attendance-container">
      {logsState.map((logs, index) => (
        <div
          className={`checadores ${logs.length === 1 && logs[0].name === 'Fuera de servicio' ? 'fuera-de-servicio' : ''}`}
          key={index}
        >
          <h2>ET {index + 1}</h2>
          {logs.length === 1 && logs[0].name === 'Fuera de servicio' ? (
            <div className="fuera-de-servicio-content">
              <ExclamationCircleOutlined className="fuera-de-servicio-icon" />
              <p className="fuera-de-servicio-text">Fuera de servicio</p>
            </div>
          ) : (
            <List
              dataSource={getLogsToDisplay(logs)}
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
