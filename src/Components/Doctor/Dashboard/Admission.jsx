import React from 'react'
//import { Link } from 'react-router-dom'

function Admission() {
  return (
    <div className="w-full mt-10">
      <div class=" w-full flex text-lg font-bold ml-10 text-gray-700 uppercase bg-gray-50 text-center border-spacing-5 shadow-md">

          <div class = "mr-5 ml-5" >
            <p>Patient Name</p>
          </div>
          <div class = "mr-5 ml-5" >
            <p>Gender</p>
          </div>
          <div class = "mr-5 ml-5 " >
            <p>Age</p>
          </div>
          <div class = "mr-5 ml-5 " >
            <p>Admission Date & Time</p>
          </div>
          <div class = "mr-5 ml-5 " >
            <p>Ward No</p>
          </div>
          <div class = "mr-5 ml-5 " >
            <p>Bed No</p>
          </div>
          <div class = "mr-5 ml-5 " >
            <p>Staff Id</p>
          </div>
          <div class = "mr-5 ml-5 " >
            <p>Disharge Date & Time</p>
          </div>
      </div>
    </div>
  )
}

export default Admission