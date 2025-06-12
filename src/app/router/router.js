import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@shared/layouts/Layout'

// Lazy-loaded pages
import { lazy } from 'react'
const MainPage = lazy(() => import('@pages/MainPage'))
const ProfilePage = lazy(() => import('@pages/ProfilePage'))

export const router = createBrowserRouter([
  {
    element: <Layout />, // Обёртка с общими элементами
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '*',
        element: <div>Not Found</div>, // Fallback for unmatched routes
      },
    ],
  },
])