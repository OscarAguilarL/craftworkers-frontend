import { useEffect } from 'react'
import Aos from 'aos'

import 'aos/dist/aos.css'

import { Navigation, Hero, Ratings, Tutorial } from './components'

function App() {
  useEffect(() => {
    Aos.init()
  })

  return (
    <div className="bg-gradient-to-b from-[#FFEFEF] to-transparent w-screen h-screen pb-24 overflow-x-hidden">
      <Navigation />

      <Hero />

      <Ratings />

      <Tutorial />
    </div>
  )
}

export default App
