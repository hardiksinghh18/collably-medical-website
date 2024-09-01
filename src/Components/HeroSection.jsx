import React from 'react';

import HeadLeft from '../Images/HeadLeft.png';
import HeadRight from '../Images/HeadRight.png';
import { FaPlayCircle } from 'react-icons/fa';
import solutionsImg from '../Images/solutions.png'

const Hero = () => {
  return (
    <div className="relative mt-16 py-16">
      <div className='absolute bg-gradient-to-tr from-[#A2D29D] via-[#4E93DF4D] to-[#101010] bottom-32 blur-3xl opacity-90 rounded-full h-96 w-24 lg:w-96'></div>
      <div className='absolute bg-gradient-to-tr from-[#A2D29D] via-[#4E93DF4D] to-[#101010] -top-4 right-0 blur-3xl opacity-90 rounded-full h-96  w-24 lg:w-96'></div>

      {/* Container for main content */}
      <div className="container mx-auto text-center flex flex-col lg:flex-row justify-center w-screen gap-0 items-center z-50">
        {/* Adjusted width and height for the images */}
        <div className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 hidden lg:block animate-float">
          <img src={HeadLeft} alt="Head Left" className="h-full object-contain" />
        </div>

        <div className='animate-float lg:hidden' >
                <img className='w-48 ' src={solutionsImg} alt="" />
            </div>
        <div className="flex flex-col items-center justify-center text-center px-4 sm:px-0">
          <h1 className="text-xl sm:text-2xl text-[#6adb68] font-bold mb-2 sm:mb-4">
            Your Wellness, Our Innovation   
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#2e8fed] font-extrabold mb-4 sm:mb-8">
            Empowering Health Through
            <br />
            <span className='text-white'>Blockchain</span> Precision &{' '}
            <span className='text-white'>AI Insight</span>
          </h2>

          <button className="flex justify-center items-center gap-2 bg-gradient-to-r from-[#7AFF75] to-[#2A89F4] text-black bg-opacity-10 px-6 sm:px-8 py-3 rounded-full font-bold hover:cursor-pointer z-50 hover:text-gray-700 transition duration-300">
            <FaPlayCircle /> Watch Video
          </button>
        </div>

        <div className="w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72  hidden lg:block animate-float">
          <img src={HeadRight} alt="Head Right" className="h-full object-contain" />
        </div>
      </div>

      {/* Button Section */}
      <div className="container mx-auto mt-6 flex flex-wrap justify-center gap-4 sm:gap-8">
        <button className="bg-transparent px-6 sm:px-8 py-2 sm:py-3 rounded-full border-[1px] border-white font-bold hover:bg-gradient-to-r from-[#7AFF75] to-[#2A89F4] text-white transition duration-300 hover:text-black">
          White paper
        </button>
        <button className="bg-transparent px-6 sm:px-8 py-2 sm:py-3 rounded-full border-[1px] border-white font-bold hover:bg-gradient-to-r from-[#7AFF75] to-[#2A89F4] text-white transition duration-300 hover:text-black">
          Portal Demo
        </button>
        <button className="bg-transparent px-6 sm:px-8 py-2 sm:py-3 rounded-full border-[1px] border-white font-bold hover:bg-gradient-to-r from-[#7AFF75] to-[#2A89F4] text-white transition duration-300 hover:text-black">
          Linktree
        </button>
        <button className="bg-transparent px-6 sm:px-8 py-2 sm:py-3 rounded-full border-[1px] border-white font-bold hover:bg-gradient-to-r from-[#7AFF75] to-[#2A89F4] text-white transition duration-300 hover:text-black">
          Pitch Black
        </button>
      </div>
    </div>
  );
};

export default Hero;
