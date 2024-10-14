import React from 'react'
import Nav from '../Components/Patient/Nav/Nav'
import Herosection from '../Components/Patient/Home/Herosection'
import AboutHospital from '../Components/Patient/AboutHospital/AboutHospital'
import Doctorcard from '../Components/Patient/Home/Doctor/Doctorcard'
import Footersection from '../Components/Patient/Home/Footersection'


function Home() {

  return (
  
    <div >
    
    <Nav></Nav>
    <Herosection></Herosection> 
    <AboutHospital></AboutHospital>
    <Doctorcard></Doctorcard>
    <Footersection></Footersection>
    

    </div>
    

  )
}

export default Home

