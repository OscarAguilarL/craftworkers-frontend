import { FC } from 'react'

interface Props {
  isPrimary: boolean
}

export const Button: FC<Props> = ({ children, isPrimary = true }) => {
  return isPrimary ? (
    <button className="border-2 border-red-500 bg-red-500 text-white px-6 py-2 rounded-md text-1xl font-medium hover:bg-red-600 transition duration-300">
      {children}
    </button>
  ) : (
    <button className=" border-2 border-red-600 text-red-600 px-6 py-2 rounded-md text-1xl font-medium hover:bg-red-400 hover:text-black transition duration-300">
      {children}
    </button>
  )
}
