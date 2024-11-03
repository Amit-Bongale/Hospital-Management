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
            </tr>
          </thead>

          <tbody>
            <tr class="text-center">
              <td class="px-6 py-3"> Amit </td>
              <td class="px-6 py-3"> male </td>
              <td class="px-6 py-3"> 9452015896 </td>
              <td class="px-6 py-3"> 20 </td>
              <td class="px-6 py-3"> Anu </td>
              <td class="px-6 py-3"> 86 </td>
              <td  class="px-6 py-3"> 
                <button  class="px-6 py-3"  onClick={() => setadmitpatient(true)} className="text-blue-600 hover:cursor-pointer"> Edit </button>
              </td>
              <td class="px-6 py-3">  
                <button scope="col" class="px-6 py-3"  className="text-red-600 hover:cursor-pointer"> Delete </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        {admitpatient ?  <PatientAdmitForm setisopen={setadmitpatient}/> : <></>}
       
    </div>
  )
}

export default AdmitPatientInfo