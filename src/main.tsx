import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SideMenuBtnContextProvider } from './contexts/mobileSideMenuShow.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SideMenuBtnContextProvider>
        <App />
      </SideMenuBtnContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
