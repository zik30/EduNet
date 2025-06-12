import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/router'
import './app/styles/global.scss'
import { AppProviders } from './providers'

createRoot(document.getElementById('root')).render(
  <AppProviders>
    <RouterProvider router={router} />
  </AppProviders>
)