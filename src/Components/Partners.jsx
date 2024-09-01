import React from 'react'
import Bitmart from '../Images/BitMart.png'
import ChainLink from '../Images/ChainLink.png'
import Gempad from '../Images/Gempad.png'
import VitalVeda from '../Images/VitalVeda.png'
import Whitebit from '../Images/Whitebit.png'

const Partners = () => {
  return (
    <div className='bg-[#6adb68] w-screen lg:px-24 py-4 lg:py-8 flex justify-around items-center my-8 lg:my-32' >
         <div><img className='h-4 lg:px-4 lg:h-[2rem]' src={Bitmart} alt="" /></div>
         <div><img className='h-4 lg:px-4 lg:h-[2rem]' src={ChainLink} alt="" /></div>
         <div><img className='h-4 lg:px-4 lg:h-[2rem]' src={Gempad} alt="" /></div>
         <div><img className='h-4 lg:px-4 lg:h-[2rem]' src={VitalVeda} alt="" /></div>
         <div><img className='h-4 lg:px-4 lg:h-[2rem]' src={Whitebit} alt="" /></div>
    </div>
  )
}

export default Partners
