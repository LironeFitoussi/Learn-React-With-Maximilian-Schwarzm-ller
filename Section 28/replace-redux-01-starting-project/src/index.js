import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
// import ProductsProvider from './context/products-context.jsx';
import configureStore from './hooks-store/products-store';

configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <ProductsProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    // </ProductsProvider>
);
