import React from 'react'
import { Header } from './components/Header'

import './App.css'
import { Carousel } from './components/Carousel'
import { About } from './components/About'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Contact } from './components/Contact'

export default function App() {
  return (
    <div class='App'>
      <Header />
      <Carousel />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </div>
  )
}
