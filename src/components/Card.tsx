import { StarIcon } from '@heroicons/react/solid'
import { FC } from 'react'

interface Props {
  image: string
  name: string
  location: string
  stars: string
  reviews: string
  desc: string
  fee: string
}

export const Card: FC<Props> = ({
  image,
  name,
  location,
  stars,
  reviews,
  desc,
  fee,
}) => {
  return (
    <div className="max-w-sm w-72 bg-white rounded-3xl shadow-2xl cursor-pointer hover:scale-105 transition-transform active:scale-100">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${image}')`,
        }}
        className="text-white w-72 h-72 overflow-hidden rounded-3xl bg-cover bg-center p-4 flex flex-col justify-end"
      >
        <p className="opacity-100 text-xl font-bold">{name}</p>
        <p className="opacity-100 text-sm">{location}</p>
      </div>

      <div className="p-4 flex flex-col gap-4">
        <p className="flex items-center gap-2 font-bold">
          <StarIcon className="h-5 text-yellow-500" />
          {stars}
          <span className="text-gray-600">({reviews} opiniones)</span>
        </p>

        <p className="text-base">{desc}</p>

        <p className="w-20 text-center font-bold rounded-full text-orange-400 bg-gray-200">
          {fee}
        </p>
      </div>
    </div>
  )
}
