import React from 'react'

import { useDispatch } from 'react-redux'
import { stafflogout } from '../../../Redux/Staff/Staff'

import { Link } from "react-router-dom";

import { LayoutDashboard, BedSingle, NotepadText , CalendarFold, Book , LogOut } from 'lucide-react';

function Staffnav() {

  const dispatch = useDispatch()

  return (
    <nav className="bg-gray-50 w-2/12 z-50">
      <div className="fixed w-2/12 bg-gray-50 h-[100vh] border-r-2">

        <div className='mt-4'>
          <span className="grid items-start px-2 text-xl font-medium lg:px-4">
            <Link
              to="/staff/dashboard"
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"
            >
              <LayoutDashboard className="w-5 h-5" />
              <button> Dashboard </button>
            </Link>
          </span>
        </div>

        <div>
          <span className="grid items-start px-2 text-xl font-medium lg:px-4">
            <Link
              to="/staff/status"
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"
            >
              <CalendarFold className="w-5 h-5" />
              <button> Doctor Status </button>
            </Link>
          </span>
        </div>

        <div>
          <span className="grid items-start px-2 text-xl font-medium lg:px-4">
            <Link
              to="/staff/admit"
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"
            >
              <BedSingle className="w-5 h-5" />
              <button> Admit </button>
            </Link>
          </span>
        </div>

        <div>
          <span className="grid items-start px-2 text-xl font-medium lg:px-4">
            <Link
              to="/staff/test"
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"
            >
              <NotepadText  className="w-5 h-5" />
              <button> Test </button>
            </Link>
          </span>
        </div>

        <div>
          <span className="grid items-start px-2 text-xl font-medium lg:px-4">
            <Link
              to="/staff/bill"
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"
            >
              <Book className="w-5 h-5" />
              <button> Bill </button>
            </Link>
          </span>
        </div>

        <button onClick={() => dispatch(stafflogout())} 
        className='bg-black text-white py-3 px-6 rounded-3xl m-4 flex gap-2'>
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Staffnav