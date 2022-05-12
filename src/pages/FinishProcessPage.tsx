import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components'

export const FinishProcessPage = () => {
  const navigate = useNavigate()

  return (
    <div className="container max-w-6xl mx-auto mt-28 px-3 pb-24 flex flex-col items-center gap-12">
      <h1 className="text-6xl font-bold text-center">
        Espera a que nuestro trabajador se ponga en contacto contigo
      </h1>

      <p className="text-4xl font-bold">
        Nuestro trabajador tiene que revisar la solicitud y aceptarla. <br />{' '}
        <span className="text-red-600">
          posteriormente se pondrá en contácto contigo para arreglar la fecha de
          la chamba.
        </span>
      </p>

      <Button onClickFn={() => navigate('/')}>
        Volver a la página principal
      </Button>
    </div>
  )
}
