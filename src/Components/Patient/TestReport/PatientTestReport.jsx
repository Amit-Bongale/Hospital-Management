import React from 'react'
import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

function PatientTestReport() {
  let[testinfo , settestinfo] = useState([])

  const patientid = useSelector((state) => state.patient.patientId)

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/test/patienttestdetail/${patientid}`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            console.log(data.message);
            alert(data.message);
          }
          const tests = Array.isArray(data) ? data : [data];
          settestinfo(tests);
          console.log(data);
        })
        .catch((error) => console.log("Fetching Error:", error));
    } catch (error) {
      console.log("error :", error);
    }
  }, [patientid]);
  
        return (
          <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                <thead class="text-sm text-gray-700 uppercase bg-gray-50 text-center">
                {/* <div className="overflow-x-auto max-h-[200px]">
                <table className="w-full">
                <thead> */}
                  <tr>
                    {/* <tr className="text-left border-b"> */}
                    <th className="pb-2"> DOCTOR ID </th>
                    <th className="pb-2"> STAFF ID </th>
                    <th className="pb-2"> TEST NAME </th>
                    <th className="pb-2"> RESULT </th>
                    <th className="pb-2"> STATUS</th>
                  </tr>
                </thead>
      
                {testinfo.map((test)=>(
                <tbody class="text-center">
                  <tr className="border-b last:border-0">
                    <td  class="px-6 py-3"> {test.doctorid} </td>
                    <td  class="px-6 py-3 font-medium"> {test.staffid} </td> 
                    <td  class="px-6 py-3 text-gray-600"> {test.testname} </td> 
                    <td  class="px-6 py-3 text-gray-600"> {test.result} </td>
                    <td  class="px-6 py-3"> {test.status} </td>
                  </tr>
                </tbody>
                ))}
              </table>
            </div>
              {/* {testpatient ?  <PatientTestForm setisopen={settestpatient} patientid={patientid}/> : <></>} */}
             
          </div>
        )
    
}

export default PatientTestReport