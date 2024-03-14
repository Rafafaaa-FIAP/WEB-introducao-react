import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'

import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Products from './routes/Products.jsx'

// CRIANDO A FUNÇÃO DO CREATEBROWSER
const router = createBrowserRouter([
  // CHAMANDO O ELEMENTO PAI
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      { path: '/Home', element: <Home/> },
      { path: '/Products', element: <Products/> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
