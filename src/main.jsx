import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import AboutPage from './components/AboutPage.jsx'
import ContactPage from './components/ContactPage.jsx'
import ProjectsPage from './components/ProjectsPage.jsx'
import HomePage from './components/HomePage.jsx'
import Error from './components/Error.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)