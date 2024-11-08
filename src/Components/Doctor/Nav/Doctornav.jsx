import React from 'react'
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { doctorlogout } from "../../../Redux/Doctor/Doctor";

//import Admission from '../../Doctor/Dashboard/Admission'
import { LayoutDashboard, BedSingle, NotepadText , CalendarFold, LogOut } from 'lucide-react';


function Doctornav() {
    const dispatch = useDispatch();

  return (
    <nav className="bg-gray-50 w-2/12 z-50">
      <div className="fixed w-2/12 bg-gray-50 h-[100vh] border-r-2">

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link
            to="/doctor/dashboard"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" >
              <LayoutDashboard className="w-5 h-5" />
            <button> Dashboard </button>
          </Link>
        </span>

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link to = "/doctor/admission"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" >
              <BedSingle className="w-5 h-5" />
            <button> Admission </button>
          </Link>
        </span>

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link to = "/doctor/testdetails"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" >
                <NotepadText  className="w-5 h-5" />
            <button> Test </button>
          </Link>
        </span>

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link to = "/doctor/schedule"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" >
              <CalendarFold className="w-5 h-5" />
              <button> Schedule </button>
          </Link>
        </span>

        <button
          onClick={() => dispatch(doctorlogout())}
          className="bg-black text-white py-3 px-6 rounded-3xl m-4 flex gap-2"
        >
          <LogOut className="w-5 h-5"/>
          Logout
        </button>

        
      </div>
    </nav>
  )
}

export default Doctornav