import { useEffect, useState } from 'react'
import Aos from 'aos'

import 'aos/dist/aos.css'

import { Navigation } from './components'
import { AppRouter } from './router'
import { SessionContext } from './context/sessionContext'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    Aos.init()
  })

  return (
    <SessionContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div className="bg-gradient-to-b from-[#FFEFEF] to-transparent w-auto h-screen overflow-x-hidden">
        <Navigation />

        <main className="h-auto">
          <AppRouter />
        </main>
      </div>
    </SessionContext.Provider>
  )
}

export default App
