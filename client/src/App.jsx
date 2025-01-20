
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import House from './components/House'
import Enquire from './components/Enquire'
import Form from './components/Form'
import Carousel from './components/Carousel'
import Clients from './components/Clients'
import DreamHome from './components/DreamHome'
import DreamHome2 from './components/DreamHome2'
import Footer from './components/Footer'
import Formpopup from './components/Formpopup'
import { useState } from 'react'
function App() {

  const [showForm, setShowForm] = useState(false)

  return (
    <>
    {showForm?<Formpopup></Formpopup>:<></>}
   <main className='bg-white'>
      <Hero setShowForm={setShowForm}></Hero>
      <About setShowForm={setShowForm}></About>
      <House></House>
      <Enquire setShowForm={setShowForm}></Enquire>
      <Clients></Clients>
      <DreamHome></DreamHome>
      <Carousel></Carousel>
      <DreamHome2></DreamHome2>
      <Form></Form>
      <Footer></Footer>

   </main></>
  )
}

export default App
