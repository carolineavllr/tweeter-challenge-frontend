import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import '../node_modules/tachyons/css/tachyons.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Perfil } from './routes/Perfil';

const perfil = createBrowserRouter([
  {
    path: '/perfil',
    element: <Perfil/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={perfil} />
  </React.StrictMode>
);

reportWebVitals();
