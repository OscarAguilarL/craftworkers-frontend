import { FC } from 'react'

import heroImage from '../assets/img/hero-image.png'
import { Searchbar } from './Searchbar'

export const Hero: FC = () => {
  return (
    <div className="container mx-auto mb-20 px-32 pr-12 flex items-center">
      <div className="flex flex-col gap-12 items-start">
        <h1 className="text-6xl font-bold" data-aos="flip-left">
          Encuentra al profesional del oficio que necesitas
        </h1>

        <p className="text-xl font-bold">
          En línea, elige entre{' '}
          <span className="text-red-600">18 millones de trabajadores</span>
        </p>

        <Searchbar />
      </div>

      <div className="w-full" data-aos="fade-up">
        <img src={heroImage} alt="Hero Image" width="600" />
      </div>
    </div>
  )
}
