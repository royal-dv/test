import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage/MainPage'
import ComingSoonPage from '../pages/ComingSoonPage/ComingSoonPage'
import NotFound from './NotFound/NotFound'
import { content } from '../settings/content'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />} path="/" />
        {content.routerMenu.map((route) => {
          return <Route element={<ComingSoonPage title={route.title} />} path={route.path} />
        })}
        <Route element={<NotFound />} path="*" />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
