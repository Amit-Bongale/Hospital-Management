import React from 'react'
import { Link , useNavigate } from 'react-router-dom'

import { useDispatch  } from "react-redux";
import { patientlogout } from '../../../Redux/Patient/Patient';

import { useSelector } from 'react-redux'

import { House , UserPen, Calendar , FileClock , ClipboardPlus, CircleUserRound , LogOut  } from 'lucide-react';


function AccountNav() {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const name = useSelector((state) => state.patient.patientName)


  function logout() {
    try {
      fetch(
        `${process.env.REACT_APP_API_URL}/patient/logout`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(),
          credentials: "include",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            alert(data.message);
          }
          navigate("/");
        })
        .catch((error) => console.log("Fetching Error:", error));
    } catch (error) {
      console.log("error :", error);
    }

    dispatch(patientlogout())
  }


  return (
    <nav className="bg-gray-50 w-2/12 z-50">
      <div className="fixed w-2/12 bg-gray-50 h-[100vh] border-r-2">

        <div className='flex items-center justify-center gap-2'>
          <CircleUserRound className="w-5 h-5" />
          <h1 className='text-center text-xl font-medium my-4'> Hello, {name} </h1>
        </div>

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link to = "/"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" >
            <House className="w-5 h-5" />
            <button>Home</button>
          </Link>
        </span>

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link
            to="/user/details"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" >
            <UserPen className="w-5 h-5" />
            <button> Account </button>
          </Link>
        </span>

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link to = "/user/appointment"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" >
            <Calendar className="w-5 h-5" />
            <button> Appointments </button>
          </Link>
        </span>

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link to = "/user/mediacalhistory"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" >
            <FileClock className="w-5 h-5" />
            <button>Medical History </button>
          </Link>
        </span>

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link to = "/user/testreport"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black" >
            <ClipboardPlus className="w-5 h-5" />
            <button>Test Report</button>
          </Link>
        </span>

        <Link>
          <button
            onClick={() => logout()}
            className="bg-black text-white py-3 px-5 rounded-3xl m-4 flex gap-2 items-center"
          >
            <LogOut className="w-5 h-5" />
            logout
          </button>
        </Link>
        
      </div>
    </nav>
  )
}

export default AccountNav