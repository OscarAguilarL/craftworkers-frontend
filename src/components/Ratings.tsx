import { FC } from 'react'
import { Button, RatingCard } from './'
import { CardGrid } from './CardGrid'

export const Ratings: FC = () => {
  return (
    <section className="flex items-start pt-16 px-32 pr-12">
      <div className="max-w-lg mt-72 z-50 flex flex-col items-start gap-6">
        <h2 className="text-4xl font-bold">Especialistas súper preparados</h2>
        <p className="text-xl font-bold">
          <span className="text-red-600">Más de un millón de personas</span> han
          calificado hasta con <span className="text-red-600">5 estrellas</span>{' '}
          a alguno de nuestros trabajadores
        </p>

        <Button isPrimary>Buscar a tu especialista</Button>
      </div>

      <CardGrid className="-rotate-12">
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
      </CardGrid>
    </section>
  )
}
