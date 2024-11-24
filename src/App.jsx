import React from 'react'

import Header from './Components/Header.jsx'
import About from './Components/About';
import Project from './Components/Project';
import Testimonails from './Components/Testimonails';
import Contact from './Components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>

      <ToastContainer/>
      <Header/>
      <Navbar/>
      <About/>
      <Project/>
      <Testimonails/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App