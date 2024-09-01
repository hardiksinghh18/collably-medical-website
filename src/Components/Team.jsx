import React from 'react'
import SarahImg from '../Images/Sarah.png'
import AliImg from '../Images/Ali.png'
import NeghabianImg from '../Images/Neghabian.png'
import NiloofarImg from '../Images/Niloofar.png'

const Team = () => {
    return (
        <div className='relative'>
            <div className='absolute bg-gradient-to-tr from-[#A2D29D] via-[#4E93DF4D] to-[#101010] bottom-32 blur-3xl opacity-60 rounded-full   h-96 w-24 lg:w-[50rem] '></div>

            <div className='flex flex-col justify-center items-center px-4 lg:px-24 gap-8'>
                <h2 className=' text-3xl lg:text-4xl font-[900] text-[#6adb68]'>Our Motivated Team</h2>
                <p className='lg:text-3xl text-center'>Our team combines the best of both world, industry veteransfrom banking and financial institutions and experts from blockchain and fintech.</p>

            </div>

            <div className='relative bg-[#6adb68] w-full h-20 lg:h-60 mt-16 lg:mt-40'>
                <div className='absolute bottom-[10%] left-0 w-full flex justify-around items-center '>
                    <div className='flex flex-col items-center flex-1 gap-2 lg:gap-4'>
                        <img className='h-20 w-20 lg:w-60 lg:h-60 object-cover' src={SarahImg} alt="" />
                        <p className='text-black text-[7px]  lg:text-xl font-semibold text-center lg:px-8'>Senior Software Development Engineer</p>
                    </div>
                    <div className='flex flex-col items-center flex-1 gap-2 lg:gap-4'>
                        <img className='h-20 w-20 lg:w-60 lg:h-60 object-cover' src={AliImg} alt=""  />
                        <p className='text-black text-[7px] lg:text-xl font-semibold text-center lg:px-8'>COO, Project & Program Manager</p>
                    </div>
                    <div className='flex flex-col items-center  flex-1 gap-2 lg:gap-4'>
                        <img className='h-20 w-20 lg:w-60 lg:h-60 object-cover' src={NeghabianImg} alt="" />
                        <p className='text-black text-[7px] lg:text-xl font-semibold text-center lg:px-8'>Medical and Healthcare Specialist, MD PhD</p>
                    </div>
                    <div className='flex flex-col items-center j flex-1 gap-2 lg:gap-4'>
                        <img className='h-20 w-20 lg:w-60 lg:h-60 object-cover' src={NiloofarImg} alt="" />
                        <p className='text-black text-[7px] lg:text-xl font-semibold text-center lg:px-8'>Business Data Analyst</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Team
