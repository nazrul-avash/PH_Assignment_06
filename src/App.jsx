
import { ToastContainer } from 'react-toastify'
import './App.css'
import Banner from './Banner'
import Hero from './Hero'
import Products from './Products'
import Testimonials from './Testimonials'
import { useState } from 'react'
import Steps from './Steps'
import Pricing from './Pricing'
import Workflow from './Workflow'
import Footer from './Footer'


function App() {
const [cart,setCart] = useState([]);

  return (
    <>
     <Banner cart={cart}></Banner>
     <Hero/>
     <Testimonials></Testimonials>
     <Products cart={cart} setCart={setCart}></Products>
     <ToastContainer />
     <Steps></Steps>
     <Pricing></Pricing>
     <Workflow></Workflow>
    <Footer></Footer>
    </>
  )
}

export default App
