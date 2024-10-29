import React from 'react'
import { useState } from 'react'

import NewPatientForm from './AddPatientForm/NewPatientForm'
import OldPatientForm from './AddPatientForm/OldPatientForm'

// import { Link } from "react-router-dom";

function StaffDashboardInfo() {
  let [newpatient,setnewpatient] = useState(false)
  let [oldpatient,setoldpatient] = useState(false)
  return (
    <div>
        <div className="flex">
          <span className="grid items-start px-2 text-xl font-medium lg:px-4">
            <button
            onClick={() => setnewpatient(true)}
            className="bg-black text-white py-3 px-6 rounded-3xl my-4"> New Patient  </button>
          </span>

          <span className="grid items-start px-2 text-xl font-medium lg:px-4">
            <button 
            onClick={() => setoldpatient(true)}
            className="bg-black text-white py-3 px-6 rounded-3xl my-4"> Old Patient  </button>
          </span>

          {/* <form class="form relative">
            <button class="absolute left-2 -translate-y-1/2 top-1/2 p-1">
              <svg
                width="17"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="search"
                class="w-5 h-5 text-gray-700"
              >
                <path
                  d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                  stroke="currentColor"
                  stroke-width="1.333"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                </path>
              </svg>
            </button>
            <input
              class="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
              placeholder="Search..."
              required=""
              type="text"
            />
            <button type="reset" class="absolute right-3 -translate-y-1/2 top-1/2 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </form> */}

      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg justify-center">
        <table class="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead class="text-sm text-gray-700 uppercase bg-gray-50 text-center">
            <tr>
              <th scope="col" class="px-6 py-3"> AADHAAR NUMBER </th>
              <th scope="col" class="px-6 py-3"> PATIENT NAME </th>
              <th scope="col" class="px-6 py-3"> PHONE NUMBER </th>
              <th scope="col" class="px-6 py-3"> AGE </th>
              <th scope="col" class="px-6 py-3"> EMERGENCY NUMBER </th>
            </tr>
          </thead>

          <tbody class="text-center">
            <tr>
              <td scope="col" class="px-6 py-3"> 458789652365 </td>
              <td scope="col" class="px-6 py-3"> Anu </td>
              <td scope="col" class="px-6 py-3"> 9452015896 </td>
              <td scope="col" class="px-6 py-3"> 20 </td>
              <td scope="col" class="px-6 py-3"> 8547962586 </td>
            </tr>
          </tbody>
        </table>
      </div>
      {newpatient ?  <NewPatientForm setisopen={setnewpatient}/> : <></>}
      {oldpatient ?  <OldPatientForm setisopen={setoldpatient}/> : <></>}
       
    </div>
  )
}

export default StaffDashboardInfo