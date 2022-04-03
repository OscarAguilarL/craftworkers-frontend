import { FC } from 'react'
import { SearchIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import { Button } from './Button'

export const Searchbar: FC = () => {
  return (
    <div className="flex gap-4 bg-white p-4 shadow-2xl rounded-3xl items-center">
      <div className="border-r-2 flex items-center">
        <SearchIcon className="h-5" />
        <input type="search" placeholder="Busca" className="p-2" />
      </div>

      <button className="flex items-center">
        <LocationMarkerIcon className="h-5 mr-2" />
        <span className="font-bold">Ciudad de México, México</span>
      </button>

      <Button isPrimary>Buscar</Button>
    </div>
  )
}
