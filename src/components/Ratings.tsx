import { FC } from 'react'
import { useNavigate } from 'react-router'
import { Button, RatingCard } from './'
import { CardGrid } from './CardGrid'

export const Ratings: FC = () => {
  const navigate = useNavigate()

  const goToSearch = () => {
    navigate('/busca')
  }

  return (
    <section className="flex items-start pt-16 px-32 pr-12 mb-32">
      <div className="max-w-lg mt-72 ml-18 z-50 flex flex-col items-start gap-6">
        <h2 className="text-4xl font-bold">Especialistas súper preparados</h2>
        <p className="text-xl font-bold">
          <span className="text-red-600">Más de un millón de personas</span> han
          calificado hasta con <span className="text-red-600">5 estrellas</span>{' '}
          a alguno de nuestros trabajadores
        </p>

        <Button isPrimary onClickFn={goToSearch}>
          Buscar a tu especialista
        </Button>
      </div>

      <CardGrid className="-rotate-12 translate-x-80">
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
