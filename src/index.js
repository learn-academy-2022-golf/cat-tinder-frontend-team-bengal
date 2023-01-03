
// Boilerplate
import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';


// I did this
import { BrowserRouter } from "react-router-dom"

// Add bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css'

// Begin root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <BrowserRouter>

      <App />

    </BrowserRouter>

  </React.StrictMode>

);