import { useEffect } from 'react'
import Aos from 'aos'

import 'aos/dist/aos.css'

import { Navigation, Hero, Ratings, Tutorial } from './components'
import { AppRouter } from './router'

function App() {
  useEffect(() => {
    Aos.init()
  })

  return (
    <div className="bg-gradient-to-b from-[#FFEFEF] to-transparent w-screen h-screen pb-24 overflow-x-hidden">
      <Navigation />

      <main>
        <AppRouter />
      </main>
    </div>
  )
}

export default App
