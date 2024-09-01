import React from 'react'
import OurblogImg1 from '../Images/OurBlog1.png'
import OurblogImg2 from '../Images/OurBlog2.png'
import OurblogImg3 from '../Images/OurBlog3.png'

const OurBlog = () => {
    return (
        <div className='relative flex flex-col items-center justify-center my-12 lg:my-32 gap-12 lg:gap-24'>
               <div className='absolute bg-gradient-to-tr from-[#A2D29D] via-[#4E93DF4D] to-[#101010] top-0 left-0 -z-20 blur-3xl opacity-60 rounded-full   h-96 w-48 lg:w-[50rem] '></div>
               {/* <div className='absolute bg-gradient-to-tr from-[#A2D29D] via-[#4E93DF4D] to-[#101010] bottom-16 right-0 blur-3xl -z-20 opacity-60 rounded-full   h-96 w-[150rem] '></div> */}
      
            <h2 className='text-3xl lg:text-3xl font-[900] text-[#6adb68] '>Our Blog</h2>
            <div className='flex flex-col lg:flex-row justify-around w-full px-6 lg:px-24 gap-4 lg:gap-8'>
                <div ><img  className='w-[120rem]  lg:h-full'src={OurblogImg1} alt="" /></div>
                <div className='flex flex-col gap-2 lg:gap-4'>
                    <h3 className='text-md lg:text-2xl font-semibold'>  Exploring Different Products Offered by Medical Veda </h3>
                    <p className='text-gray-400 text-xs'>June 16, 2023</p>
                    <p className='text-xs lg:text-xl'>Medical Veda transforms the Canadian healthcare niche by providing relevant services to each of the end-users in the industry, including doctors, patients, hospitals, clinics, research organizations, and pharmacies. Veda Health Portal While blockchain happens…</p>
                    <button className=" flex w-fit justify-center items-center gap-2 bg-gradient-to-r from-[#7AFF75] to-[#2A89F4] text-white bg-opacity-10 px-8 py-2 text-xs lg:text-md rounded-full font-bold hover:cursor-pointer z-50 hover:text-black  transition duration-300">
                        Read More
                    </button>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-around w-full px-6 lg:px-24 gap-4 lg:gap-8'>
                <div ><img  className='w-[120rem] h-full'src={OurblogImg2} alt="" /></div>
                <div className='flex flex-col gap-2 lg:gap-4'>
                    <h3 className='text-sm lg:text-2xl font-semibold'> How Does Medical Veda Get Rid of Drug Prescription Fraud? </h3>
                    <p className='text-gray-400 text-xs'>June 16, 2023</p>
                    <p className='text-xs lg:text-xl'> If you look at it carefully, a drug prescription is a foremost thing that initiates a formal treatment. Therefore, its cruciality in any healthcare system is significantly high. Unfortunately, in recent years, there has been a surge in prescription fraud from a variety of actors...</p>
                    <button className=" flex w-fit justify-center items-center gap-2 bg-gradient-to-r from-[#7AFF75] to-[#2A89F4] text-white bg-opacity-10 px-8 py-2 text-xs lg:text-md rounded-full font-bold hover:cursor-pointer z-50 hover:text-black  transition duration-300">
                        Read More
                    </button>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-around w-full px-6 lg:px-24 gap-4 lg:gap-8'>
                <div ><img  className='w-[120rem] h-full'src={OurblogImg3} alt="" /></div>
                <div className='flex flex-col gap-2 lg:gap-4'>
                    <h3 className='text-sm lg:text-2xl font-semibold'>How Does Medical Veda Provide Efficient and Better Diagnosis in Canada?</h3>
                    <p className='text-gray-400 text-xs'>June 16, 2023</p>
                    <p className='text-xs lg:text-xl'>Medical Veda transforms the Canadian healthcare niche by providing relevant services to each of the end-users in the industry, including doctors, patients, hospitals, clinics, research organizations, and pharmacies. Veda Health Portal While blockchain happens…</p>
                    <button className=" flex w-fit justify-center items-center gap-2 bg-gradient-to-r from-[#7AFF75] to-[#2A89F4] text-white bg-opacity-10 px-8 py-2 text-xs lg:text-md rounded-full font-bold hover:cursor-pointer z-50 hover:text-black  transition duration-300">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OurBlog
