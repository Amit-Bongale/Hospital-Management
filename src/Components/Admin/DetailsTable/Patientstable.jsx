import React from 'react'
import { useState, useEffect } from 'react'

import DeletePatient from '../DeleteUser/DeletePatient'
import EditPatient from '../EditUsers/EditPatient'

function Patientstable() {

  let [edit , setedit ] = useState(false)
  let [deleteitem , setdelete] = useState(false)

  let [patientinfo , setpatientinfo] = useState([])
  let [patientid , setpatientid] = useState('')

  

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/patient/allpatients` , { method: "POST" })
      .then((res) => res.json())
      .then((data) => setpatientinfo(data))
      .catch((err) => console.log("Error Fetching Data :" , err))
    } catch (error) {
      console.log("Error :" , error)
    }
  },[edit , deleteitem , patientid ])

  return (
    <div className="w-full mt-1">
      
      { deleteitem ? <DeletePatient setisopen={setdelete} patientid={patientid}/> : <></>}
      { edit ? <EditPatient setisopen={setedit} patientid={patientid}/> : <></>}

      <h1 className="font-bold text-2xl p-4">Patient Details</h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 text-center">
            <tr>
              <th scope="col" class="px-6 py-3">
                Patient id
              </th>
              <th scope="col" class="px-6 py-3">
                name
              </th>
              <th scope="col" class="px-6 py-3">
                gender
              </th>
              <th scope="col" class="px-6 py-3">
                mail id
              </th>
              <th scope="col" class="px-6 py-3">
                Mobile
              </th>
              <th scope="col" class="px-6 py-3">
                address
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            { patientinfo.map((patient) => (
              <tr class="bg-white border-b font-medium text-gray-700  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4">{patient.id} </td>
                <td class="px-6 py-4">{patient.name}</td>
                <td class="px-6 py-4">{patient.gender}</td>
                <td class="px-6 py-4">{patient.email}</td>
                <td class="px-6 py-4">{patient.phone}</td>
                <td class="px-6 py-4">{patient.address}</td>
                
                <td class="px-6 py-4">
                  <span className="bg-yellow-400 py-2 px-6 text-black rounded-2xl"> Treating </span>
                </td>
                <td class="px-6 py-4 text-right">
                  <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  onClick={() => {setedit(true); setpatientid(patient.id); }}>
                    Edit
                  </button>
                </td>
                <td class="px-6 py-4 text-right">
                  <button class="font-medium text-red-600 dark:text-blue-500 hover:underline"
                  onClick={() =>{setdelete(true); setpatientid(patient.id); }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Patientstable