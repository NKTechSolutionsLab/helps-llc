import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Founder from './components/Founder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Founder />
    </>
  )
}

export default App
