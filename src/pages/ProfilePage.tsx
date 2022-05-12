import { StarIcon } from '@heroicons/react/solid'
import insignia from '../assets/img/insignia.svg'
import trabajador from '../assets/img/trabajador.jpg'
import { Button } from '../components'

export const ProfilePage = () => {
  return (
    <div className="container max-w-5xl mx-auto mt-12 px-3 pb-24">
      <div className="grid gap-6 grid-cols-3">
        <div className="col-span-2">
          <div className="bg-gray-200 p-12 rounded-3xl mb-12">
            <h2 className="text-4xl font-bold text-red-500">
              Contrata ahora; si tienes algún problema en tu instalación
              electrica de tu hogar yo puedo repararlo.
            </h2>
          </div>

          <div className="border-4 border-orange-400 rounded-2xl p-10 flex gap-9 items-start">
            <img src={insignia} alt="" />
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold text-blue-600">
                Super chambeador
              </h3>
              <p>
                Pepe es uno de los mejores chambeadores de su area. Es un perfil
                de calidad, está certificado, reliza con calidad sus trabajos,
                ¡sus clientes lo adoran!
              </p>
            </div>
          </div>
        </div>
        <div className="h-fit rounded-2xl shadow-lg px-6 py-9 flex flex-col gap-6">
          <div className="w-full flex flex-col items-center gap-2">
            <div className="h-40 w-40 overflow-hidden rounded-2xl">
              <img
                src={trabajador}
                alt="Jon Doe"
                className="aspect-square object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold">Jon Doe</h3>
            <div className="flex items-center gap-2">
              <StarIcon className="h-5 text-yellow-500" />
              <p className="font-bold text-sm">
                5 <span className="text-gray-600">(14 evaluaciones)</span>
              </p>
            </div>
          </div>
          <p className="flex justify-between font-bold">
            <span>Tarifa por hora</span>
            <span>$450</span>
          </p>
          <Button isPrimary className="w-full">
            Contáctalo
          </Button>
        </div>
      </div>
    </div>
  )
}
