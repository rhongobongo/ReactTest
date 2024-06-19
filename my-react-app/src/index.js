import React from 'react';
import { createRoot } from 'react-dom/client';
import { CartProvider } from './context/CartContext';
import App from './App';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
