import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css";
import './index.css';
import App from './App';
import { AppProvider } from './context/action';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider
    <App />
  </React.StrictMode>
);