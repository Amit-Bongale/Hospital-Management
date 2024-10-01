import React from 'react'
import Nav from '../Components/Patient/Nav/Nav'
import Herosection from '../Components/Patient/Home/Herosection'
import Footersection from '../Components/Patient/Home/Footersection'
import Doctorcard from '../Components/Patient/Home/Doctor/Doctorcard'


function Home() {

  return (
  
    <div >
    
    <Nav></Nav>
    <Herosection></Herosection> 
    <Doctorcard></Doctorcard>
    <Footersection></Footersection>
    

    </div>
    

  )
}

export default Home

