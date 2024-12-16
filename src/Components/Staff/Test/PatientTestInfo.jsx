import React from 'react'
import { useState , useEffect } from 'react'

import { Search } from 'lucide-react';

import PatientTestForm from './TestPatientForm/PatientTestForm'

function PatientTestInfo({ _id}) {
  const [testpatient , settestpatient] = useState(false)
  const [testinfo , settestinfo] = useState([])
  const [patientid , setpatientid] = useState()
  const [searchTerm, setSearchTerm] = useState("");

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

  },[testpatient , patientid])


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


  // Filter the test info based on searchTerm
  const filteredTestInfo = testinfo.filter((test) => {
    const term = searchTerm.trim(); // Remove leading/trailing spaces
    const isNumeric = !isNaN(term); // Check if the search term is numeric

    // Check conditions
    return isNumeric
      ? test.patientid.toString() === term // Exact match for numeric patientid
      : test.patientname.toLowerCase().includes(term.toLowerCase()); // Partial match for patientname
  });

  // Decide what to display: all data or filtered data
  const displayedTestInfo = searchTerm ? filteredTestInfo : testinfo;


  return (
    <div>
       <div class="flex">
        <h1 class="ml-24 mt-7 text-2xl font-bold text-gray-800">Test details</h1>
        <div className="relative ml-[650px] mr-16 mt-5">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:border-blue-500"
              />
              <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
            </div>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg  ml-20 mt-10">
        <table class="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
          <thead class="text-sm text-gray-700 uppercase bg-gray-50 text-center">
            <tr>
              <th scope="col" class="px-6 py-3"> PATIENT ID </th>
              <th scope="col" class="px-6 py-3"> NAME </th>
              <th scope="col" class="px-6 py-3"> DOCTOR ID </th>
              <th scope="col" class="px-6 py-3"> STAFF ID </th>
              <th scope="col" class="px-6 py-3"> TEST NAME </th>
              <th scope="col" class="px-6 py-3"> </th>
              <th scope="col" class="px-6 py-3"> </th>
            </tr>
          </thead>

          {displayedTestInfo.map((test)=>(
          <tbody class="text-center" key={test.patientid}>
            <tr>
              <td  class="px-6 py-3"> {test.patientid} </td>
              <td  class="px-6 py-3"> {test.patientname} </td>
              <td  class="px-6 py-3"> {test.doctorid} </td>
              <td  class="px-6 py-3"> {test.staffid} </td> 
              <td  class="px-6 py-3"> {test.testname} </td> 
              <td  class="px-6 py-3"> 
                <button class="px-6 py-3"  onClick={() =>{ settestpatient(true); setpatientid(test._id)}} className="text-blue-600 hover:cursor-pointer"> Edit </button>
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