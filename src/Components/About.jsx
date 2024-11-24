import React from 'react'
import brand from '../assets/brand_img.png'
const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container  mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>About <span className='underline underline-offset-4 decoration-1 under font-light'>
                 Our Brand
            </span>
        </h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicates to Your Vision</p>
            <div className='flex flex-col md:flex-row item-center md:items-start md:gap-20'>

                    <img src={brand} alt=""className='w-full sm:w-1/2 max-w-lg' />
                    <div className=' flex flex-col items-center md:items-start mt-10 text-gray-600'>
                        <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                            <div>
                                <p className='text-4xl font-medium text-gray-800'> 10+</p>
                                <p>Year of Excellence</p>
                            </div>
                            <div>
                                <p className='text-4xl font-medium text-gray-800'> 12+</p>
                                <p>Projects Completed</p>
                            </div>
                            <div>
                                <p className='text-4xl font-medium text-gray-800'> 20+</p>
                                <p>Mn. Sq. Ft. Delivered</p>
                            </div>
                            <div>
                                <p className='text-4xl font-medium text-gray-800'> 25+</p>
                                <p>Ongoing Projects</p>
                            </div>

                        </div>
                        <p className='my-10 max-w-lg'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    
                            <button className='bg-blue-600  text-white rounded px-8 py-2'>Learn More</button>
                    </div>
            </div>

    </div>
  )
}

export default About