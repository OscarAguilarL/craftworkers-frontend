import { StarIcon } from '@heroicons/react/solid'
import trabajador from '../assets/img/trabajador.jpg'
import { Button } from '../components'

export const ContratoPage = () => {
  return (
    <div className="container max-w-6xl mx-auto mt-12 px-3 pb-24">
      <div className="grid gap-6 grid-cols-3">
        <div className="bg-white h-fit w-fit rounded-2xl shadow-lg px-14 py-9 flex flex-col gap-6">
          <div className="w-full flex flex-col items-center gap-2">
            <div className="h-40 w-40 overflow-hidden rounded-2xl">
              <img
                src={trabajador}
                alt="Jon Doe"
                className="aspect-square object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold">Jon Doe</h3>
            <div className="flex flex-col items-center gap-2 mt-4 text-red-600">
              <p className="text-base font-bold">Primer hora al 50%</p>
              <p className="text-3xl font-black">$225/h</p>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <form className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold">Contáctalo</h2>
            <p>Completa la solicitud para Oscar</p>

            <div className="pt-4 flex flex-col gap-6">
              <p className="text-xl">
                <span className="font-bold">
                  Preséntate con Pepe y dile qué deseas aprender
                </span>{' '}
                (da detalles precisos, por favor)
              </p>
              <textarea
                cols={30}
                rows={10}
                defaultValue={''}
                className="w-full h-32 bg-gray-200 p-6 rounded-lg resize-none"
                placeholder="Hola Pepe, me gustaría que pudieses darle mantenimiento a mi instalación eléctrica, así como cambiar unos focos inteligentes, estoy al pendiente saludos."
              />
            </div>

            <div className="pt-4 flex flex-col gap-6">
              <h2 className="text-2xl font-bold">
                Tu información de contacto (la confianza es importante:
                asegúrate que esta información es real y correcta)
              </h2>
              <p className="text-gray-500">
                Estos datos sólo son visibles para el prof. en su Panel de
                Control cuando acepta tu solicitud.
              </p>

              <div>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col gap-3 w-full">
                    <label htmlFor="name">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Oscar"
                      className="bg-gray-200 block p-3 rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <label htmlFor="lastname">Apellido</label>
                    <input
                      type="text"
                      id="lastname"
                      placeholder="Aguilar"
                      className="bg-gray-200 block p-3 rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-6 mt-4">
                  <div className="flex flex-col gap-3 w-full">
                    <label htmlFor="address">Dirección</label>
                    <input
                      type="text"
                      id="address"
                      placeholder="Molino del Rey No. 100, Actopan Hidalgo"
                      className="bg-gray-200 block p-3 rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    <label htmlFor="phonenumber">Teléfono</label>
                    <input
                      type="tel"
                      id="phonenumber"
                      placeholder="1234567890"
                      className="bg-gray-200 block p-3 rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <Button isPrimary className="w-fit">
                Enviar Información
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
