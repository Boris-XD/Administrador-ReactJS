import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import NewClient, { action as newClientAction } from './pages/NewClient'
import Layout from './components/Layout'
import Index, { loader as loaderIndex } from './pages/Index'
import { action as actionDeleteClient } from './components/ClientTable'
import ErrorBoundaries from './components/ErrorBoundaries'
import EditClient, { loader as loaderEditClient, action as actionEditClient } from './pages/EditClient'
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
        action: actionDeleteClient,
        errorElement: <ErrorBoundaries />
      },
      {
        path: '/client/new',
        element: <NewClient />,
        action: newClientAction
      },
      {
        path: 'client/:clientId/edit',
        element: <EditClient />,
        loader: loaderEditClient,
        action: actionEditClient
      },
      {
        path: 'client/:clientId/delete',
        action: actionDeleteClient
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
)
