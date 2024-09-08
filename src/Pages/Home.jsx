import React from 'react'
import Hero from '../Components/HeroSection'
import MedivedaSection from '../Components/MedivedaSection'
import Mission from '../Components/Mission'
import Vision from '../Components/Vision'
import CardSection from '../Components/CardSection'
import DropDown from '../Components/Accordian'
import Solutions from '../Components/Solutions'
import Partners from '../Components/Partners'
import Team from '../Components/Team'
import OurBlog from '../Components/OurBlog'


const Home = () => {
  return (
    <>
   
      <Hero/>
      <MedivedaSection/>
      <Vision/>
      <Mission/>
      <CardSection/>
      <DropDown/>
      <Solutions/>
      <Partners/>
      <Team/>
      <OurBlog/>
      
    </>
  )
}

export default Home
