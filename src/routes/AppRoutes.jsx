import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import PageLoader from '../components/ui/PageLoader'

const Home        = lazy(() => import('../pages/Home'))
const About       = lazy(() => import('../pages/About'))
const Programs    = lazy(() => import('../pages/Programs'))
const News        = lazy(() => import('../pages/News'))
const GetInvolved = lazy(() => import('../pages/GetInvolved'))
const Contact     = lazy(() => import('../pages/Contact'))
const NotFound    = lazy(() => import('../pages/NotFound'))

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/about"        element={<About />} />
        <Route path="/programs"     element={<Programs />} />
        <Route path="/news"         element={<News />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact"      element={<Contact />} />
        <Route path="*"             element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}