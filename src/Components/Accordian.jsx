import React, { useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='mt-24 relative  flex flex-col justify-center items-center px-4'>
             <div className='absolute bg-gradient-to-tr from-[#A2D29D] via-[#4E93DF4D] to-[#101010] top-[50%] left-[50%]  -translate-x-[50%] -translate-y-[50%] blur-3xl opacity-60 rounded-full -z-20   h-80 w-48 lg:w-[60rem] '></div>
      

      <h2 className=' text-3xl lg:text-5xl font-[900] text-[#6adb68] w-full text-center my-12'>Problems in the Industry</h2>
      {/* Accordion Wrapper */}
      <div id="accordion" className="w-full max-w-3xl space-y-3">

        {/* Accordion Item 1 */}
        <div className="bg-[#1d1d1d]  rounded-lg">
          <button
            type="button"
            className="flex items-center justify-between w-full py-4 px-6 text-white font-bold focus:outline-none"
            onClick={() => toggleAccordion(1)}
          >
            <span>Health records and data</span>
            <svg className={`w-5 h-5 transform transition-transform ${openIndex === 1 ? 'rotate-180' : ''}`} fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-500 ${openIndex === 1 ? 'max-h-96' : 'max-h-0'}`}>
            <div className="py-4 px-6 text-gray-300">
              {/* Content for Item 1 */}
              <p>Detailed information about health records and data issues goes here.</p>
            </div>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="bg-[#1d1d1d]  rounded-lg">
          <button
            type="button"
            className="flex items-center justify-between w-full py-4 px-6 text-white font-bold focus:outline-none"
            onClick={() => toggleAccordion(2)}
          >
            <span>Medical and Health Care Service Issues</span>
            <svg className={`w-5 h-5 transform transition-transform ${openIndex === 2 ? 'rotate-180' : ''}`} fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-500 ${openIndex === 2 ? 'max-h-96' : 'max-h-0'}`}>
            <div className="py-4 px-6 text-gray-300">
              {/* Content for Item 2 */}
              <p>Details about medical and healthcare service issues go here.</p>
            </div>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="bg-[#1d1d1d]  rounded-lg">
          <button
            type="button"
            className="flex items-center justify-between w-full py-4 px-6 text-white font-bold focus:outline-none"
            onClick={() => toggleAccordion(3)}
          >
            <span>Security Issues</span>
            <svg className={`w-5 h-5 transform transition-transform ${openIndex === 3 ? 'rotate-180' : ''}`} fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-500 ${openIndex === 3 ? 'max-h-96' : 'max-h-0'}`}>
            <div className="py-4 px-6 text-gray-300">
              {/* Content for Item 3 */}
              <p>Information about security issues goes here.</p>
            </div>
          </div>
        </div>

        {/* Accordion Item 4 */}
        <div className="bg-[#1d1d1d]  rounded-lg">
          <button
            type="button"
            className="flex items-center justify-between w-full py-4 px-6 text-white font-bold focus:outline-none"
            onClick={() => toggleAccordion(4)}
          >
            <span>Health Issues</span>
            <svg className={`w-5 h-5 transform transition-transform ${openIndex === 4 ? 'rotate-180' : ''}`} fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-500 ${openIndex === 4 ? 'max-h-96' : 'max-h-0'}`}>
            <div className="py-4 px-6 text-gray-300">
              {/* Content for Item 4 */}
              <p>Details about health issues go here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
