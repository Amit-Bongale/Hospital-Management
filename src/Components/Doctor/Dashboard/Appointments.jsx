import React from 'react'
import { useState } from 'react'
//import { Link } from 'react-router-dom'

import Viewpatient from '../Patientdetails/Viewpatient'


function Appointments() {

  let [view,setview] = useState(false)

  return (
    <div className=" w-full mt-10">
      <div class=" w-full flex text-lg font-bold ml-20 text-gray-700 border-cyan-400 border-2 rounded-lg text-center h-20 ">

          <div class = "mr-20 ml-20 mt-4" >
            <p>NAME</p>
            <p class="text-base font-medium">Anusha</p>
          </div>

          <div class = "mr-20 ml-20 mt-4" >
            <p>GENDER</p>
            <p class="text-base font-medium ">Male</p>
          </div>
         
          <div class = "mr-20 ml-20 mt-4" >
            <p>DISEASE</p>
            <p class="text-base font-medium">Cough</p>
          </div>

          <div class = "mr-10 ml-20 mt-7" >
            <button
            onClick={() => setview(true)}>
            VIEW
            </button>
            
          </div>
          {view ?<Viewpatient setview={setview}/>
            :<></>}

      </div>
    </div>
  )
}

export default Appointments