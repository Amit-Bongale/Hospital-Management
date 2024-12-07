import React from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { adminlogout } from "../../../Redux/Admin/Admin";

import { ChevronDown, LayoutDashboard , Headset , Users ,  BedSingle } from 'lucide-react';

import { useSelector } from 'react-redux'
import {openusers , hideusers} from '../../../Redux/Admin/Admin'

function Adminnav() {

  const dispatch = useDispatch();

  const showuser = useSelector((state) => state.admin.showuser)

  function handletoggle(){
    if(showuser){
      dispatch(hideusers())
    } else {
      dispatch(openusers())
    }
  }

  return (
    <nav className="bg-gray-50 w-[265px] z-50 mr-4">
      <div className="fixed w-[265px] bg-gray-50 h-[100vh] border-r-2">
        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"
          >
            <LayoutDashboard className="w-5 h-5"/>
            <button>  Dashboard </button>
          </Link>
        </span>

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link 
            className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" onClick={() => handletoggle()} >
              <Users className="w-5 h-5"/>
            <button> Manage Users </button>
            <ChevronDown 
                className={`w-5 h-5 transition-transform duration-200 ${showuser ? 'transform rotate-180' : ''}`}
              />
          </Link>
        </span>

        { showuser ?
        <div className="bg-gray-100">
          <span className="grid items-start px-2 text-xl font-medium lg:px-4">
            <Link
              to="/admin/managedoctors"
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" >
                
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

        {/* <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link
            to="/admin/salarydetails"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"
          >
            <button> Salary </button>
          </Link>
        </span> */}

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link
            to="/admin/wards"
            className="flex items-center gap-1 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"
          >
            <BedSingle className="w-5 h-5"/>
            <button> Manage Ward </button>
          </Link>
        </span> 

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link
            to="/admin/contactrequest"
            className="flex items-center gap-1 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"
          >
            <Headset className="w-5 h-5"/>
            <button> Contact Request </button>
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
