import React from 'react';
import visionImage from '../Images/vision.png';

const Vision = () => {
  return (
    <div className="relative w-full flex flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-0 items-center justify-center ">
      {/* Background Gradients */}
      <div className='absolute bg-gradient-to-tr from-[#A2D29D] via-[#4E93DF4D] to-[#101010] top-[10%] right-[0%] blur-3xl opacity-80 rounded-full h-96 w-96'></div>
      <div className='absolute bg-gradient-to-tr from-[#A2D29D] via-[#4E93DF4D] to-[#101010] bottom-[10%] left-[0%] blur-3xl opacity-80 rounded-full h-96 w-96'></div>

      {/* Image Section (Right for large devices) */}
      <div className='z-50 mb-12 lg:mb-0 lg:ml-0 lg:right-0'>
        <img className='h-[10rem] md:h-[15rem] lg:h-[30rem] mx-auto' src={visionImage} alt="Vision" />
      </div>

      {/* Vision Section (Left for large devices) */}
      <div className='w-[90%] lg:w-[70%] mt-8 lg:mt-0 lg:mr-0 lg:left-0'>
        <h2 className='text-3xl lg:text-5xl font-bold text-[#6adb68] w-full text-center my-8'>Our Vision</h2>

        <div className="relative h-auto lg:h-72 rounded-xl lg:rounded-r-full bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 shadow-2xl p-4 lg:p-0">
          <div className="relative p-4 lg:p-16 flex justify-center text-center text-black lg:text-2xl">
            <p className='text-center'>
              We aim to create an ecosystem where patients truly own their clinical records, accessible anytime, anywhere. By leveraging decentralized blockchain technology, we envision a system where patients can easily access their health data without bureaucratic barriers, contributing to a more efficient and patient-centered healthcare industry.
            </p>
          </div>

          {/* Unified Borders */}
          

          <div className="absolute top-0 left-0 w-full h-full rounded-xl lg:rounded-r-full border-2 lg:border-4 border-[#feffff] shadow-md"></div>
          <div className="absolute top-0 left-0 w-full h-full rounded-xl lg:rounded-r-full border-2 lg:border-8 border-[#1bd8e8] shadow-xl blur-sm"></div>
          <div className="absolute top-0 left-0 w-full h-full rounded-xl lg:rounded-r-full border-2 lg:border-8 border-[#1bd8e8] shadow-xl blur-sm opacity-30"></div>
          <div className="absolute top-0 left-0 w-full h-full rounded-xl lg:rounded-r-full border-2 lg:border-8 border-r-0 border-[#6adb68] shadow-xl blur-sm opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
