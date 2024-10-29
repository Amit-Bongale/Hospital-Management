import React from 'react'

import Nav from '../Components/Patient/Nav/Nav'
import Herosection from '../Components/Patient/Home/Herosection'
import AboutHospital from '../Components/Patient/Home/AboutHospital'
import Doctorcard from '../Components/Patient/Home/Doctorcard'
import Footersection from '../Components/Patient/Home/Footersection'
import FeaturedImages from '../Components/Patient/Home/FeaturedImages'
import HospitalLocation from '../Components/Patient/Home/HospitalLocation'

function Home() {

  return (
    <div >
      <Nav></Nav>
      <Herosection></Herosection> 
      <AboutHospital></AboutHospital>
      <Doctorcard></Doctorcard>
      <FeaturedImages></FeaturedImages>
      <HospitalLocation></HospitalLocation>
      <Footersection></Footersection>
    </div>
  )
}

export default Home

