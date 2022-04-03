import { useEffect } from 'react'
import Aos from 'aos'

import 'aos/dist/aos.css'

import { Navigation, Hero, Ratings } from './components'

function App() {
  useEffect(() => {
    Aos.init()
  })

  return (
    <div className="bg-gradient-to-bl from-orange-200 w-screen h-screen overflow-x-hidden">
      <Navigation />

      <Hero />

      <Ratings />
    </div>
  )
}

export default App
