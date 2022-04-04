import { FC } from 'react'
import { SearchIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import { Button } from './Button'
import { useNavigate } from 'react-router'

interface Props {
  className?: string
}

export const Searchbar: FC<Props> = ({ className = '' }) => {
  const navigate = useNavigate()

  const goToSearch = () => {
    navigate('/busca')
  }

  return (
    <div
      className={`flex gap-4 justify-between bg-white p-4 shadow-2xl rounded-3xl items-center ${className}`}
    >
      <div className="border-r-2 flex items-center">
        <SearchIcon className="h-5" />
        <input type="search" placeholder="Busca" className="p-2" />
      </div>

      <button className="flex items-center">
        <LocationMarkerIcon className="h-5 mr-2" />
        <span className="font-bold">Ciudad de México, México</span>
      </button>

      <Button isPrimary onClickFn={goToSearch}>
        Buscar
      </Button>
    </div>
  )
}
