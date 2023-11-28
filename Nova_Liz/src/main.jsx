import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './main.css';
import App from './App';
import Context from './Context/Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Context>
          <App/>
      </Context>
      
  </BrowserRouter>
);


