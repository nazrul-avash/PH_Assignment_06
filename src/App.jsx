
import { ToastContainer } from 'react-toastify'
import './App.css'
import Banner from './Banner'
import Hero from './Hero'
import Products from './Products'
import Testimonials from './Testimonials'
import { useState } from 'react'

function App() {
const [cart,setCart] = useState([]);

  return (
    <>
     <Banner cart={cart}></Banner>
     <Hero/>
     <Testimonials></Testimonials>
     <Products cart={cart} setCart={setCart}></Products>
     <ToastContainer />
    </>
  )
}

export default App
