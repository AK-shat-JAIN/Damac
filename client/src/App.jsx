
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import House from './components/House'
import Enquire from './components/Enquire'
import Form from './components/Form'
// import Carousel from './components/Carousel'
import Grid from './components/Grid'
import Clients from './components/Clients'
import DreamHome from './components/DreamHome'
import DreamHome2 from './components/DreamHome2'
import Footer from './components/Footer'
import Formpopup from './components/Formpopup'
import WhatsappButton from './components/WhatsappButton'
import { useState } from 'react'
function App() {

  const [showForm, setShowForm] = useState(false)

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <>
    
    
   <main className='bg-white'>
   {showForm?<Formpopup onClose={toggleForm}></Formpopup>:<></>}


      <WhatsappButton />
      <Hero formVis={toggleForm}></Hero>
      <About formVis={toggleForm}></About>
      <House></House>
      <Enquire formVis={toggleForm}></Enquire>
      <Clients></Clients>
      <DreamHome></DreamHome>
      {/* <Carousel></Carousel> */}
      <Grid></Grid>
      <DreamHome2></DreamHome2>
      <Form></Form>
      <Footer></Footer>

   </main></>
  )
}

export default App
