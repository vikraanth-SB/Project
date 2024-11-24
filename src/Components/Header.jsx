import React from 'react'
import Navbar from './Navbar';


const Header = () => {
  return (
    <div>
    <section id='Home'>
    
    <div className='min-h-screen mb-4 bg-cover flex items-center w-full overflow-hidden ' style={{backgroundImage:"URL('/header_img.png')"}}>


        <Navbar/>
        <div className='container text-center  mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className=' text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
            <div className='space-x-6 mt-16'>
                <a href="#Project" className=' border border-white  px-8 py-3 rounded'>Project</a>
                <a href="#Contact" className=' border border-white  px-8 py-3 rounded bg-blue-500'>Contact</a>
            </div>
        </div>
    </div>
    </section >
    </div>
  )
}

export default Header