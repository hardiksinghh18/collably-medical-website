import React from 'react'
import solutionsImg from '../Images/solutions.png'
const Solutions = () => {
    return (
        <div className=' relative my-16 lg:my-24 flex flex-col-reverse lg:flex-row justify-between gap-8 items-center px-4 lg:px-16'>
              <div className='absolute bg-gradient-to-tr from-[#A2D29D] via-[#4E93DF4D] to-[#101010] bottom-32 blur-3xl opacity-60 rounded-full -z-20   h-48 lg:w-[40rem] '></div>
      
            <div >
                <img className='w-[100rem]' src={solutionsImg} alt="" />
            </div>

            <div className='flex flex-col items-center '>
                <h2 className='text-3xl lg:text-4xl font-[900] text-[#6adb68] my-8'>MedicalVeda Solutions</h2>


                <p className='text-center lg:text-xl'>
                    Develop an accessible healthcare system with blockchain-based traceability, leveraging AI and machine learning for diagnostics, treatment plans, and predictive analytics. Create a secure interface for patients to access and control their health records, with smart contracts automating data permissions. Empower patients with decentralized identity control, allowing them to manage data access, and enable the sharing of anonymized patient data for medical research.
                </p>


            </div>
        </div>
    )
}

export default Solutions
