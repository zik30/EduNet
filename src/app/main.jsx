import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './styles/global.scss'
import { AppProviders } from './providers/index'
import { router } from './router/router.jsx'

createRoot(document.getElementById('root')).render(
  <AppProviders>
    <RouterProvider router={router} />
  </AppProviders>
)