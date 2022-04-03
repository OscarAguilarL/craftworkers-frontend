import { Routes, Route, Link } from 'react-router-dom'
import { HomePage, LoginPage } from '../pages'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}
