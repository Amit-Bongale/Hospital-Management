import React from 'react'

import { useDispatch } from 'react-redux'
import { stafflogout } from '../../../Redux/Staff/Staff'

import { Link } from "react-router-dom";

function Staffnav() {

  const dispatch = useDispatch()

  return (
    <nav className="bg-gray-50 w-2/12 z-50">
      <div className="fixed w-2/12 bg-gray-50 h-[100vh] border-r-2">

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
          <span className="grid items-start px-2 text-xl font-medium lg:px-4">
            <Link
              to=""
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"
            >
              <button> Doctor Status </button>
            </Link>
          </span>
        </div>

        <div>
          <span className="grid items-start px-2 text-xl font-medium lg:px-4">
            <Link
              to=""
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"
            >
              <button> Admission </button>
            </Link>
          </span>
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
          <span className="grid items-start px-2 text-xl font-medium lg:px-4">
            <Link
              to="/staff/test"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"
            >
              <button> Test </button>
            </Link>
          </span>
        </div>

        <div>
          <span className="grid items-start px-2 text-xl font-medium lg:px-4">
            <Link
              to="/staff/bill"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"
            >
              <button> Bill </button>
            </Link>
          </span>
        </div>

        <button onClick={() => dispatch(stafflogout())} 
        className='bg-black text-white py-3 px-6 rounded-3xl m-4'> logout </button>
      </div>
    </nav>
  )
}

export default Staffnav