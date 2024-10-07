import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { adminlogout } from "../../../Redux/Admin/Admin";

import { Link } from "react-router-dom";

import arrow from '../../../Assets/Icons/trianglearrow.png'

function Adminnav() {

  const dispatch = useDispatch();

  const [showusers , setusers] = useState(true)

  return (
    <nav className="bg-gray-50 w-2/12 z-50 mr-4">
      <div className="fixed w-2/12 bg-gray-50 h-[100vh] border-r-2">

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"
          >
            <button> Dashboard </button>
          </Link>
        </span>

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link 
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" onClick={() => setusers(!showusers)} >
            <button> Manage Users </button>
            <img src={arrow} alt="arrow" className="h-3 rotate-180" />
          </Link>
        </span>

        { showusers ?
        <div className="bg-gray-100">
          <span className="grid items-start px-2 text-xl font-medium lg:px-4">
            <Link
              to="/admin/managedoctors"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" >
              <button> Doctors </button>
            </Link>
          </span>

          <span className="grid items-start px-2 text-xl font-medium lg:px-4">
            <Link
              to="/admin/managestaff"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" >
              <button> Staff </button>
            </Link>
          </span>
          
          <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link
            to="/admin/managepatient"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" >
            <button> Patients </button>
          </Link>
        </span>

        </div> : <></>}

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link
            to="/admin/salarydetails"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"
          >
            <button> Salary </button>
          </Link>
        </span>

        <button
          onClick={() => dispatch(adminlogout())}
          className="bg-black text-white py-3 px-6 rounded-3xl m-4"
        >
          logout
        </button>
      </div>
    </nav>
  );
}

export default Adminnav;
