import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import NewClient, { action as newClientAction } from './pages/NewClient'
import Layout from './components/Layout'
import Index, { loader as loaderIndex } from './pages/Index'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path:'/',
        element: <Index />,
        loader: loaderIndex,
      },
      {
        path: '/client/new',
        element: <NewClient />,
        action: newClientAction
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
)
