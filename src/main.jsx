import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './Index/Index';
import Backup from './Backup/Backup';
import Criacao from './Criacao/Criacao';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />
  },
  {
    path: "/backup-em-nuvem",
    element: <Backup />
  },
  {
    path: "/criacao-de-aplicativos",
    element: <Criacao />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
