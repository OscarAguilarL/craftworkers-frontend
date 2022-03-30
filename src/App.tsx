import Aos from 'aos'

import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    Aos.init()
  })

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  )
}

export default App
