import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StoreContextProvider from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreContextProvider>
    <App />
  </StoreContextProvider>
);


