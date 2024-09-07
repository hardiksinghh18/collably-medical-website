import React from 'react';
import headUp from '../Images/headUp.png';

const CardSection = () => {
  return (
    <div className='flex flex-col lg:flex-row relative w-screen justify-evenly px-4 sm:px-6 md:px-12 items-center'>
      <div className='absolute bg-gradient-to-tr from-[#A2D29D] via-[#4E93DF4D] to-[#101010] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] blur-3xl opacity-60 rounded-full -z-20 h-60 sm:h-80 w-[90%] sm:w-[60rem]'></div>
      
      {/* Left Section */}
      <div className='flex flex-col gap-8 lg:gap-12 lg:order-1 my-8 lg:my-0'>
        <div className="flip-card w-64 sm:w-80 h-64 sm:h-80 bg-transparent">
          <div className="flip-card-inner relative w-full h-full border-[1px] border-[#6adb68] rounded-lg">
            <div className="flip-card-front bg-[#202020] rounded-lg shadow-lg flex items-center justify-center">
              <h1 className="text-lg sm:text-2xl text-[#6adb68] font-bold">AI Protocol Health Portal</h1>
            </div>
            <div className="flip-card-back px-4 sm:px-8 text-white bg-gradient-to-b from-green-500 via-cyan-500 to-blue-500 rounded-lg shadow-lg flex items-center justify-center">
              <p className="text-sm sm:text-lg">A blockchain-based health portal decentralized database that can be accessed by individuals, clinics, pharma companies. Users are the true owners of their data and can incentivize themselves by exchanging it.</p>
            </div>
          </div>
        </div>

        <div className="flip-card w-64 sm:w-80 h-64 sm:h-80 bg-transparent">
          <div className="flip-card-inner relative w-full h-full border-[1px] border-[#6adb68] rounded-lg">
            <div className="flip-card-front bg-[#202020] rounded-lg shadow-lg flex items-center justify-center">
              <h1 className="text-lg sm:text-2xl text-[#6adb68] font-bold">Data Marketplace</h1>
            </div>
            <div className="flip-card-back px-4 sm:px-8 text-white bg-gradient-to-b from-green-500 via-cyan-500 to-blue-500 rounded-lg shadow-lg flex items-center justify-center">
              <p className="text-sm sm:text-lg">AIP is a marketplace where patients can exchange their data with pharma companies, clinical research institutes, or marketing firms in exchange for Veda tokens.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className='order-2 lg:order-2 my-8 lg:my-0'>
        <img className='h-80 sm:h-[35rem] md:h-[40rem] lg:h-[45rem]' src={headUp} alt="HeadUp" />
      </div>

      {/* Right Section */}
      <div className='flex flex-col gap-8 lg:gap-12 lg:order-3'>
        <div className="flip-card w-64 sm:w-80 h-64 sm:h-80 bg-transparent">
          <div className="flip-card-inner relative w-full h-full border-[1px] border-[#6adb68] rounded-lg">
            <div className="flip-card-front bg-[#202020] rounded-lg shadow-lg flex items-center justify-center">
              <h1 className="text-lg sm:text-2xl text-[#6adb68] font-bold">AIP Token</h1>
            </div>
            <div className="flip-card-back px-4 sm:px-8 text-white bg-gradient-to-b from-green-500 via-cyan-500 to-blue-500 rounded-lg shadow-lg flex items-center justify-center">
              <p className="text-sm sm:text-lg">An ERC-20 compliant token deployed on Ethereum. It allows peer-to-peer payment, value storage, and exchange, designed for large volumes of transactions within the AI Protocol Ecosystem.</p>
            </div>
          </div>
        </div>

        <div className="flip-card w-64 sm:w-80 h-64 sm:h-80 bg-transparent">
          <div className="flip-card-inner relative w-full h-full border-[1px] border-[#6adb68] rounded-lg">
            <div className="flip-card-front bg-[#202020] rounded-lg shadow-lg flex items-center justify-center">
              <h1 className="text-lg sm:text-2xl text-[#6adb68] font-bold">AI Protocol</h1>
            </div>
            <div className="flip-card-back px-4 sm:px-8 text-white bg-gradient-to-b from-green-500 via-cyan-500 to-blue-500 rounded-lg shadow-lg flex items-center justify-center">
              <p className="text-sm sm:text-lg">Integrate AI and machine learning for enhanced diagnostics, personalized treatment, and predictive analytics. Use NLP to extract insights from unstructured data like doctor's notes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
