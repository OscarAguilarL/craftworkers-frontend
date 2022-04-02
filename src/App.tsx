import { useEffect } from 'react'
import Aos from 'aos'

import 'aos/dist/aos.css'

import { Navigation } from './components'

function App() {
  useEffect(() => {
    Aos.init()
  })

  return (
    <div className="bg-gray-200 w-screen h-screen">
      <Navigation />
    </div>
  )
}

export default App
