import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import Whatsapp from './components/Whatsapp'
import Sobremi from './components/Sobremi'
import Questions from './components/Questions'

function App() {
  
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Sobremi />
        <Questions />
        <Whatsapp />
      </main>
      <Footer />
    </>
  )
}

export default App
