import React from 'react'
import profile_img_1 from '../assets/Profile_img_1.png'
import profile_img_2 from '../assets/profile_img_2.png'
import profile_img_3 from '../assets/profile_img_3.png'
import star from '../assets/star_icon.svg'
 
const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "Richard Nelson",
        title: "UI/UX Designer",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "James Washington",
        title: "Co-Founder",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    }
];

const Testimonails = () => (
    
    <div className=' container mx-auto py-10 lg:px-32 w-full overflow-hidden   ' id='Testimonails'>

        <h1 className=' text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className=' underline underline-offset-4 decoration-1 under font-light'>Testimonails</span></h1>
        <p className=' text-center text-gray-500 mb-12 max-w-80 mx-auto'>
            Real Stories from Those Who Found Home with Us
        </p>
        

        

        <div className='flex flex-wrap justify-center gap-8 '>
            {testimonialsData.map((testimonials, index) => (
                <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                    <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonials.image} alt={testimonials.alt} />
                    <h2 className='text-xl text-gray-700 font-medium'>{testimonials.name}</h2>
                    <p className='text-gray-500 mb-4 text-sm'>{testimonials.title}</p>
                    <div className='flex justify-center gap-1 text-red-500 mb-4'>
                        {Array.from({ length: testimonials.rating }, (item, index) => (
                            <img key={index} src={star} alt="" />
                        ))}
                    </div>
                    <p className='text-gray-600'>{testimonials.text}</p>
                </div>
            )
            )}
        </div>
    </div>
)

export default Testimonails