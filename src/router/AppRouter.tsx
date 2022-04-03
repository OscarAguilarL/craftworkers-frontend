import { Routes, Route, Link } from 'react-router-dom'
import { HomePage } from '../pages'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}
