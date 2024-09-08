import React from 'react'
import Vision from '../Components/Vision'
import Mission from '../Components/Mission'

const About = () => {
  return (
    <div className='mb-12'>
      <h2 className='text-2xl lg:text-4xl font-bold text-white w-full text-center mt-20'>About Us</h2>  
      <Vision/>
      <Mission/>
    </div>
  )
}

export default About
