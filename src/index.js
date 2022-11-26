import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import SidebarContext from './contexts/SidebarContext';
import UserContext from './contexts/UserContext';
import './index.css';
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContext>
        <SidebarContext>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SidebarContext>
      </UserContext>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
