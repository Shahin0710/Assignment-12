import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import SidebarContext from './contexts/SidebarContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SidebarContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SidebarContext>
  </React.StrictMode>
);

reportWebVitals();
