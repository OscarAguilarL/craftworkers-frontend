import React from 'react'
import { Button } from '../components'

export const RegisterPage = () => {
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
        />
        <input
          type="email"
          className="w-full h-12 rounded-lg px-4 text-lg bg-gray-100 focus:ring-blue-600 mb-4"
          placeholder="Email"
        />
        <input
          type="password"
          className="w-full h-12 rounded-lg px-4 text-lg bg-gray-100 focus:ring-blue-600 mb-4"
          placeholder="Contraseña"
        />
        <input
          type="password"
          className="w-full h-12 rounded-lg px-4 text-lg bg-gray-100 focus:ring-blue-600 mb-4"
          placeholder="Repite tu contraseña"
        />
        <Button className="mb-4">Registrarme</Button>


        <label className="text-gray-800 mb-4">Ó registrate con</label>

        <div className='w-full flex gap-4'>
          <button className="w-full h-12 rounded-lg bg-red-600 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4">
            Google
          </button>
          <button className="w-full h-12 rounded-lg bg-blue-600 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4">
            Facebook
          </button>
        </div>
      </div>
    </div>
  )
}
