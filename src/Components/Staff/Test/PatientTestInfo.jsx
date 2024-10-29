import React from 'react'
import { useState } from 'react'

import PatientTestForm from './TestPatientForm/PatientTestForm'

function PatientTestInfo() {
  let [testpatient,settestpatient] = useState(false)
  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead class="text-sm text-gray-700 uppercase bg-gray-50 text-center">
            <tr>
              <th scope="col" class="px-6 py-3"> AADHAR NUMBER  </th>
              <th scope="col" class="px-6 py-3"> DOCTOR ID </th>
              <th scope="col" class="px-6 py-3"> STAFF ID </th>
              <th scope="col" class="px-6 py-3"> TEST NAME </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="col" class="px-6 py-3"> 587458966325 </td>
              <td scope="col" class="px-6 py-3"> Appu </td>
              <td scope="col" class="px-6 py-3"> 65 </td>
              <td scope="col" class="px-6 py-3"> blood test </td> 
              <td scope="col" class="px-6 py-3"> 
                <button scope="col" class="px-6 py-3"  onClick={() => settestpatient(true)} className="text-blue-600 hover:cursor-pointer"> Edit </button>
              </td>
              <td scope="col" class="px-6 py-3">  
                <button scope="col" class="px-6 py-3"  className="text-red-600 hover:cursor-pointer"> Delete </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        {testpatient ?  <PatientTestForm setisopen={settestpatient}/> : <></>}
       
    </div>
  )
}

export default PatientTestInfo