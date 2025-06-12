import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../widgets/header'
import { Footer } from '../../widgets/footer'

export const Layout = () => {
  useScrollTop()

  return (
    <>
      <Header />
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      <Footer/>
    </>
  )
}
