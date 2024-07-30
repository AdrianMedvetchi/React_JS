// src/index.js (or src/main.js)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store'; // Import the default store export
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

