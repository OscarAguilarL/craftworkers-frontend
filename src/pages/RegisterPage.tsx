import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components'
import { SessionContext } from '../context/sessionContext'

export const RegisterPage = () => {
  const { setIsLoggedIn } = useContext(SessionContext)
  const navigate = useNavigate()

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="bg-white w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center shadow-2xl">
        <h3 className="font-bold text-4xl mb-4">
          Únete a <span className="text-red-600">CraftWorkers</span>
        </h3>
        <input
          type="text"
          className="w-full h-12 rounded-lg px-4 text-lg bg-gray-100 focus:ring-blue-600 mb-4"
          placeholder="Nombre..."
          value={'Oscar Aguilar'}
        />
        <input
          type="email"
          className="w-full h-12 rounded-lg px-4 text-lg bg-gray-100 focus:ring-blue-600 mb-4"
          placeholder="Email"
          value={'oscar@mail.com'}
        />
        <input
          type="password"
          className="w-full h-12 rounded-lg px-4 text-lg bg-gray-100 focus:ring-blue-600 mb-4"
          placeholder="Contraseña"
          value={'12345678'}
        />
        <input
          type="password"
          className="w-full h-12 rounded-lg px-4 text-lg bg-gray-100 focus:ring-blue-600 mb-4"
          placeholder="Repite tu contraseña"
          value={'12345678'}
        />
        <Button
          className="mb-4"
          onClickFn={() => {
            setIsLoggedIn(true)
            navigate('/')
          }}
        >
          Registrarme
        </Button>

        <label className="text-gray-800 mb-4">Ó registrate con</label>

        <div className="w-full flex gap-4">
          <button
            onClick={() => {
              setIsLoggedIn(true)
              navigate('/')
            }}
            className="w-full h-12 rounded-lg bg-red-600 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4"
          >
            Google
          </button>
          <button
            onClick={() => {
              setIsLoggedIn(true)
              navigate('/')
            }}
            className="w-full h-12 rounded-lg bg-blue-600 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4"
          >
            Facebook
          </button>
        </div>
      </div>
    </div>
  )
}
