import { FC } from 'react'

import one from '../assets/img/1.png'
import two from '../assets/img/2.png'
import three from '../assets/img/3.png'

export const Tutorial: FC = () => {
  return (
    <section className="container mx-auto px-32 mt-64 pb-24">
      <h2 className="text-4xl font-bold mb-20">
        Buscar alguien para reparar tu hogar <br />
        Nunca fue así de facil.
      </h2>

      <div className="px-48 flex flex-col gap-16">
        <article className="flex justify-between items-center">
          <div className="flex flex-col gap-4 max-w-xs">
            <h4 className="text-3xl font-bold">1. Busca</h4>
            <p className="text-base">
              Busca con toda libertad entre varios perfiles y contacta al
              trabajador que más se acerque a tus necesidades (tarifas,
              opiniones, el más cercano o en línea)
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden w-84 h-80">
            <img src={one} alt="" />
          </div>
        </article>

        <article className="flex justify-between flex-row-reverse items-center">
          <div className="flex flex-col gap-4 max-w-xs">
            <h4 className="text-3xl font-bold">2. Contáctalo</h4>
            <p className="text-base">
              Rápidamente, nuestros trabajadores te responderán en unas cuantas
              horas. Y si no encuentras al indicado, nos encargamos de ayudarte.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden w-84 h-80">
            <img src={two} alt="" />
          </div>
        </article>

        <article className="flex justify-between items-center">
          <div className="flex flex-col gap-4 max-w-xs">
            <h4 className="text-3xl font-bold">3. Pónganse de acuerdo</h4>
            <p className="text-base">
              Intercambien algún mensaje sobre la chamba en nuestra mensajería y
              acuerden el día juntos.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden w-84 h-80">
            <img src={three} alt="" />
          </div>
        </article>
      </div>
    </section>
  )
}
