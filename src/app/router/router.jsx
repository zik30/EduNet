import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layout/Layout'

import { MainPage, ProfilePage } from '@pages'

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