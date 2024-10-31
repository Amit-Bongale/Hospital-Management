import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch } from "react-redux";
import { patientlogout } from '../../../Redux/Patient/Patient';

import { useSelector } from 'react-redux'


function AccountNav() {

  const dispatch = useDispatch()

  const name = useSelector((state) => state.patient.patientName)


  return (
    <nav className="bg-gray-50 w-2/12 z-50">
      <div className="fixed w-2/12 bg-gray-50 h-[100vh] border-r-2">

        <h1 className='text-center text-xl font-medium my-4'> Hello, {name}</h1>

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link to = "/"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" >
            <button>Home</button>
          </Link>
        </span>

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
          <Link to = "/user/mediacalhistory"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" >
            <button>Medical History </button>
          </Link>
        </span>

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link to = "/user/testreport"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" >
            <button>Test Report</button>
          </Link>
        </span>

     

        <Link to='/'>
          <button
            onClick={() => dispatch(patientlogout())}
            className="bg-black text-white py-3 px-6 rounded-3xl m-4"
          >
            logout
          </button>
        </Link>
        

        
      </div>
    </nav>
  )
}

export default AccountNav