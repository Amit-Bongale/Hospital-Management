import React from 'react'
import { Link } from 'react-router-dom'

function Appointments() {
  return (
    <div className="w-full mt-6">
      <div class=" w-full flex text-xl ml-20 text-gray-700 uppercase bg-gray-50 text-center border-spacing-5 shadow-md">
          <div class = "mr-20 ml-20" >
            <p>Gender</p>
          </div>
          <div class = "mr-20 ml-20" >
            <p>Name</p>
          </div>
          <div class = "mr-20 ml-20" >
            <p>Disease</p>
          </div>
          <Link>
          <div class = "mr-10 ml-20 b" >
            <button>View</button>
          </div>
          </Link>
      </div>
    </div>
  )
}

export default Appointments