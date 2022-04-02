import { FC } from 'react'

import heroImage from '../assets/img/hero-image.png'

export const Hero: FC = () => {
  return (
    <div className="container mx-auto px-32 pr-12 flex items-center">
      <div>
        <h1 className="text-6xl font-bold">
          Encuentra al profesional del oficio que necesitas
        </h1>
        <p className="text-xl font-bold mt-10">
          En línea, elige entre{' '}
          <span className="text-red-600">18 millones de trabajadores</span>
        </p>
      </div>

      <div className="w-full">
        <img src={heroImage} alt="Hero Image" width="600" />
      </div>
    </div>
  )
}
