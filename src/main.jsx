import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SideMenuBtnContextProvider } from './contexts/mobileSideMenuShow.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FilteredPlantsContextProvider } from './contexts/filteredPlantsContext.jsx';
import { CartContextProvider } from './contexts/CartContext.jsx';
import { PlantDetailsContextProvider } from './contexts/PlantDetailsContext.jsx';
import { FormErrorContextProvider } from './contexts/FormErrorContext.jsx';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SideMenuBtnContextProvider>
          <FilteredPlantsContextProvider>
            <CartContextProvider>
              <PlantDetailsContextProvider>
                <FormErrorContextProvider>
                  <App />
                </FormErrorContextProvider>
              </PlantDetailsContextProvider>
            </CartContextProvider>
          </FilteredPlantsContextProvider>
        </SideMenuBtnContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode >
);