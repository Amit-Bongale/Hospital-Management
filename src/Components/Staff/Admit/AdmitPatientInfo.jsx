import React from 'react'
import { useState } from 'react'

import PatientAdmitForm from './AdmitPatientForm/PatientAdmitForm'

// import { Link } from "react-router-dom";

function AdmitPatientInfo() {
  let [admitpatient,setadmitpatient] = useState(false)
  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead class="text-sm text-gray-700 uppercase bg-gray-50 text-center">
            <tr>
              <th scope="col" class="px-6 py-3"> PATIENT NAME </th>
              <th scope="col" class="px-6 py-3"> GENDER </th>
              <th scope="col" class="px-6 py-3"> PHONE NUMBER </th>
              <th scope="col" class="px-6 py-3"> AGE </th>
              <th scope="col" class="px-6 py-3"> DOCTOR NAME </th>
              <th scope="col" class="px-6 py-3"> STAFF ID </th>
              <th scope="col" class="px-6 py-3"> WARD NUMBER </th>
              <th scope="col" class="px-6 py-3"> BED NUMBER </th>
            </tr>
          </thead>
        </table>
      </div>
        <div className="flex">
            <span className="grid items-start px-2 text-xl font-medium lg:px-4">
                <button
                onClick={() => setadmitpatient(true)}
                className="bg-black text-white py-3 px-6 rounded-3xl my-4"> Admit Patient  </button>
            </span>
        </div>
        {admitpatient ?  <PatientAdmitForm setisopen={setadmitpatient}/> : <></>}
       
    </div>
  )
}

export default AdmitPatientInfo