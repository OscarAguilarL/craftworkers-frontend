import { useEffect } from 'react'
import Aos from 'aos'

import 'aos/dist/aos.css'

import { Navigation, Hero } from './components'

function App() {
  useEffect(() => {
    Aos.init()
  })

  return (
    <div className="bg-gradient-to-b from-orange-100 w-screen h-screen overflow-x-hidden">
      <Navigation />

      <Hero />
    </div>
  )
}

export default App
