import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './store';

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        alignItems: 'center',
      }}
    >
    <h1>Dark or light</h1>
      <button onClick={handleToggle}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggle;
