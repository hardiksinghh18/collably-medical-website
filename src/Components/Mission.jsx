import React from 'react';
import missonImage from '../Images/mission.png';

const Mission = () => {
  return (
    <div className="relative w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:h-screen">
      {/* Background Gradients */}
      <div className='absolute bg-gradient-to-tr from-[#A2D29D] via-[#4E93DF4D] to-[#101010] top-[10%] right-[0%] blur-3xl opacity-90 rounded-full h-full lg:w-96'></div>
      <div className='absolute bg-gradient-to-tr from-[#A2D29D] via-[#4E93DF4D] to-[#101010] bottom-[10%] left-[0%] blur-3xl opacity-90 rounded-full h-96 lg:w-96'></div>
      
      {/* Image Section */}
      <div className='z-50 mb-12 lg:mb-0 lg:mr-0 lg:left-0'>
        <img className='h-[15rem] lg:h-[30rem] mx-auto' src={missonImage} alt="Mission" />
      </div>

      {/* Mission Section */}
      <div className='w-[90%] lg:w-[70%] mt-8 lg:mt-0 lg:ml-0 lg:right-0'>
        <h2 className='text-3xl lg:text-5xl font-bold text-[#6adb68] w-full text-center my-8'>Our Mission</h2>
        
        <div className="relative h-auto lg:h-72 rounded-xl lg:rounded-l-full bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 shadow-2xl p-4 lg:p-0">
          <div className="relative p-4 lg:p-16 flex justify-center text-center text-black lg:text-2xl">
            <p className='text-center'>
              Medical Veda is an innovative platform set to revolutionize healthcare by creating a leading open-source health ecosystem. It decentralizes patient data ownership, giving patients full control and secure access for authorized personnel. This ensures healthcare providers can access the necessary data, paving the way for a transformative future in healthcare.
            </p>
          </div>

          {/* Unified Borders */}
          

          <div className="absolute top-0 left-0 w-full h-full rounded-xl lg:rounded-l-full border-2 lg:border-4 border-[#feffff] shadow-md"></div>
          <div className="absolute top-0 left-0 w-full h-full rounded-xl lg:rounded-l-full border-2 lg:border-8 border-[#1bd8e8] shadow-xl blur-sm"></div>
          <div className="absolute top-0 left-0 w-full h-full rounded-xl lg:rounded-l-full border-2 lg:border-8 border-[#1bd8e8] shadow-xl blur-sm opacity-30"></div>
          <div className="absolute top-0 left-0 w-full h-full rounded-xl lg:rounded-l-full border-2 lg:border-8 border-r-0 border-[#6adb68] shadow-xl blur-sm opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
