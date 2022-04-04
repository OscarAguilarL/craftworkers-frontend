import { Card, CardGrid, Searchbar } from '../components'
import { trabajadores } from '../data/trabajadores'

export const SearchPage = () => {
  return (
    <div className="container max-w-5xl mx-auto mt-12 px-3 pb-24">
      <Searchbar className="mb-20" />

      <h1 className="text-4xl font-bold mb-16" data-aos="flip-left">
        708 trabajadores <br />
        especialistas cerca de tu casa
      </h1>

      {/* Card Grid */}
      <CardGrid className="grid-cols-3 gap-8" data-aos="flip-left">
        {trabajadores.map((trabajador, index) => (
          <Card
            key={index}
            image={trabajador.image}
            name={trabajador.name}
            location={trabajador.location}
            stars={trabajador.stars}
            reviews={trabajador.reviews}
            desc={trabajador.desc}
            fee={trabajador.fee}
          />
        ))}
      </CardGrid>
    </div>
  )
}
