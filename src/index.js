import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './components/ErrorPage'
import App from './App'
import Homepage from './routes/Homepage'
import Login from './routes/Login'
import Register from './routes/Register'
import { AuthProviderComponent } from './shared/context/AuthContext'
import { BestCatergories } from './components/home/BestCatergories'
import { ProductsList } from './components/products/ProductsList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'products/filterBy/name/:name',
        element: <ProductsList />,
      },
      {
        path: 'products/filterBy/category/:category',
        element: <ProductsList />,
      },
      {
        path: 'products/filterBy/search/:search',
        element: <ProductsList />,
      },
      {
        path: 'products',
        element: <ProductsList />,
      },
      {
        path: 'likes/filterBy/loverId/:lover_id',
        element: <ProductsList />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthProviderComponent>
      <RouterProvider router={router} />
    </AuthProviderComponent>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
