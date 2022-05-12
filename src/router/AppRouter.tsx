import { Routes, Route, Navigate } from 'react-router-dom'
import {
  ContratoPage,
  HomePage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  SearchPage,
} from '../pages'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/busca" element={<SearchPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/perfil/:profileId" element={<ProfilePage />} />
      <Route path="/contrato/:profileId" element={<ContratoPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
