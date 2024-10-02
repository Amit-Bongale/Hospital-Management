import React from 'react'

import { useDispatch } from 'react-redux'
import { stafflogout } from '../../../Redux/Staff/Staff'

import { Link } from "react-router-dom";

function Staffnav() {

  const dispatch = useDispatch()

  return (
    <nav className="bg-gray-50 w-2/12 z-50">
      <div>

        <div>
        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link
            to="/staff/dashboard"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"
          >
            <button> Dashboard </button>
          </Link>
        </span>
        </div>

        <div>
          <button>Doctor Status</button>
        </div>

        <div>
          <button>Appointment</button>
        </div>

        <div>
        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link
            to="/staff/admit"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"
          >
            <button> Admit </button>
          </Link>
        </span>
        </div>

        <div>
          <button>Test</button>
        </div>

        <div>
          <button>Billing</button>
        </div>

      </div>
      <button onClick={() => dispatch(stafflogout())} className='bg-black text-white py-3 px-6 rounded-3xl m-4'> logout </button>
    </nav>
  )
}

export default Staffnav