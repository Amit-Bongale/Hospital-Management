import React from 'react'
import { useState , useEffect } from 'react'

import PatientTestForm from './TestPatientForm/PatientTestForm'

function PatientTestInfo({setisopen , _id}) {
  let [testpatient , settestpatient] = useState(false)
  let [testinfo , settestinfo] = useState([])
  let [patientid , setpatientid] = useState()

  useEffect(()=>{

    try {
      fetch(`${process.env.REACT_APP_API_URL}/test/testdetails`, {
        method: "POST",
      })
      .then((res) => res.json())
      .then((data) => {
        settestinfo(data);
        console.log(data);
      })
      .catch((error) => console.log("Fetching Error:" , error));
    } catch (error) {
      console.log("error :", error);
    }

  },[])


  function deletetest(){
    console.log(patientid)
    try {
      fetch(`${process.env.REACT_APP_API_URL}/test/deletetest`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'id' : _id }),
      })
      .then((res) => res.json())
      .then((data) => alert(data.message))
      .catch((err) => console.error("Error fetching api:", err));
    
    } catch (error) {
      console.log("Error:", error)
    }
  }

  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead class="text-sm text-gray-700 uppercase bg-gray-50 text-center">
            <tr>
              <th scope="col" class="px-6 py-3"> PATIENT ID </th>
              <th scope="col" class="px-6 py-3"> NAME </th>
              <th scope="col" class="px-6 py-3"> DOCTOR ID </th>
              <th scope="col" class="px-6 py-3"> STAFF ID </th>
              <th scope="col" class="px-6 py-3"> TEST NAME </th>
            </tr>
          </thead>

          {testinfo.map((test)=>(
          <tbody class="text-center">
            <tr>
              <td  class="px-6 py-3"> {test.patientid} </td>
              <td  class="px-6 py-3"> {test.patientname} </td>
              <td  class="px-6 py-3"> {test.doctorid} </td>
              <td  class="px-6 py-3"> {test.staffid} </td> 
              <td  class="px-6 py-3"> {test.testname} </td> 
              <td  class="px-6 py-3"> 
                <button class="px-6 py-3"  onClick={() =>{ settestpatient(true); setpatientid(test.patientid)}} className="text-blue-600 hover:cursor-pointer"> Edit </button>
              </td>
              <td class="px-6 py-3">  
                  <button class="px-6 py-3" onClick={() => {deletetest();}} className="text-red-600 hover:cursor-pointer"> Delete </button>
              </td>
            </tr>
          </tbody>
          ))}
        </table>
      </div>
        {testpatient ?  <PatientTestForm setisopen={settestpatient} patientid={patientid}/> : <></>}
       
    </div>
  )
}

export default PatientTestInfo