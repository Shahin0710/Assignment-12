import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import SidebarContext from './contexts/SidebarContext';
import UserContext from './contexts/UserContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext>
      <SidebarContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SidebarContext>
    </UserContext>
  </React.StrictMode>
);

reportWebVitals();
