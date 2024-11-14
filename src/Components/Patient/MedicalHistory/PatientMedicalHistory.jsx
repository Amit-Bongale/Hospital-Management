import React from 'react'
import { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

function PatientMedicalHistory() {
  let[medicalhistoryinfo , setmedicalhistoryinfo] = useState([])

  const patientid = useSelector((state) => state.patient.patientId)

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/medicalhistory/patientmedicalhistory/${patientid}`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            console.log(data.message);
            alert(data.message);
          }
          const medicalhistory = Array.isArray(data) ? data : [data];
          setmedicalhistoryinfo(medicalhistory);
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
                    <th className="pb-2"> PATIENT ID </th>
                    <th className="pb-2"> DOCTOR ID </th>
                    <th className="pb-2"> DISEASE </th>
                    <th className="pb-2"> PRESCRIPTION </th>
                  </tr>
                </thead>
      
                {medicalhistoryinfo.map((medicalhistory)=>(
                <tbody class="text-center">
                  <tr className="border-b last:border-0">
                  <td  class="px-6 py-3 font-medium"> {medicalhistory.patientid} </td> 
                    <td  class="px-6 py-3"> {medicalhistory.doctorid} </td>
                    <td  class="px-6 py-3 text-gray-600"> {medicalhistory.disease} </td> 
                    <td  class="px-6 py-3 text-gray-600"> {medicalhistory.prescription} </td>
                  </tr>
                </tbody>
                ))}
              </table>
            </div>
             
          </div>
        )
    
}

export default PatientMedicalHistory