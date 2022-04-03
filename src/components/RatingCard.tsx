import { FC } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import noPicture from '../assets/img/no-picture.png'

export const RatingCard: FC = () => {
  return (
    <article className="max-w-sm flex flex-col gap-6 bg-white rounded-3xl p-6">
      <div className="flex items-center gap-2">
        <img
          src={noPicture}
          alt="Nancy, Pintora profesional"
          className="h-16 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <h4 className="text-xl font-bold">
            Nancy <br />
            Pintora Profesional
          </h4>
          <div className="flex gap-1">
            <StarIcon className="h-5 text-yellow-300" />
            <StarIcon className="h-5 text-yellow-300" />
            <StarIcon className="h-5 text-yellow-300" />
            <StarIcon className="h-5 text-yellow-300" />
            <StarIcon className="h-5 text-yellow-300" />
          </div>
        </div>
      </div>

      <p className="text-base">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>

      <p className="text-base font-bold">Palacios Zamora hace 4 días</p>
    </article>
  )
}
