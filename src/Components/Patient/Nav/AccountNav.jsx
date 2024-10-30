import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch } from "react-redux";
import { patientlogout } from '../../../Redux/Patient/Patient';

function AccountNav() {

    const dispatch = useDispatch()

  return (
    <nav className="bg-gray-50 w-2/12 z-50">
      <div className="fixed w-2/12 bg-gray-50 h-[100vh] border-r-2">

        <h1 className='text-center text-xl font-medium my-4'> Hello, Username  </h1>

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link
            to="/user/details"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" >
            <button> Account </button>
          </Link>
        </span>

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link to = "/user/appointment"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" >
            <button> My Appointments </button>
          </Link>
        </span>

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link to = "/user/history"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" >
            <button> History </button>
          </Link>
        </span>

        <button
          onClick={() => dispatch(patientlogout())}
          className="bg-black text-white py-3 px-6 rounded-3xl m-4"
        >
          logout
        </button>

        
      </div>
    </nav>
  )
}

export default AccountNav