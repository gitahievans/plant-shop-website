import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SideMenuBtnContextProvider } from './contexts/mobileSideMenuShow.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SideMenuBtnContextProvider>
          <App />
        </SideMenuBtnContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode >
);
