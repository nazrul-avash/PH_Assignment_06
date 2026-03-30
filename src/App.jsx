
import { ToastContainer } from 'react-toastify'
import './App.css'
import Banner from './Banner'
import Hero from './Hero'
import Products from './Products'
import Testimonials from './Testimonials'

function App() {


  return (
    <>
     <Banner/>
     <Hero/>
     <Testimonials></Testimonials>
     <Products/>
     <ToastContainer />
    </>
  )
}

export default App
