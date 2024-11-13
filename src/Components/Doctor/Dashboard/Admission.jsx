import React from 'react'
import { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom'

function Admission() {

  let [admitinfo , setadmitinfo] = useState([])

  useEffect(()=>{

    try {
      fetch(`${process.env.REACT_APP_API_URL}/admission/admissiondetails`, {
        method: "POST",
      })
      .then((res) => res.json())
      .then((data) => {
        setadmitinfo(data);
        console.log(data);
      })
      .catch((error) => console.log("Fetching Error:" , error));
    } catch (error) {
      console.log("error :", error);
    }

  },[])


  return (
<div class="ml-2 ">
        <h1 className="font-bold text-xl p-4 text-center mt-10">Admission Details</h1>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-auto table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

          <thead class="text-sm text-gray-700 uppercase bg-gray-50 text-center">
            <tr>
              <th scope="col" class="px-6 py-3"> Patient Id </th>
              <th scope="col" class="px-6 py-3"> Patient Name </th>
              <th scope="col" class="px-6 py-3"> Staff Id </th>
              <th scope="col" class="px-6 py-3"> Doctor Id </th>
              <th scope="col" class="px-6 py-3"> Ward No </th>
              <th scope="col" class="px-6 py-3"> Ward Type </th>
              <th scope="col" class="px-6 py-3"> Bed No </th>
              <th scope="col" class="px-6 py-3"> Admission Date & Time </th>
              <th scope="col" class="px-6 py-3"> Discharge Date & Time </th>

              
            </tr>
          </thead>

            <tbody>
            {admitinfo.map((admission)=>(
              <tr class="bg-white border-b font-medium text-sm text-gray-700  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4"> {admission.patientid} </td>
                <td class="px-6 py-4"> {admission.patientname} </td>
                <td class="px-6 py-4"> {admission.staffid}</td>
                <td class="px-6 py-4"> {admission.doctorid} </td>
                <td class="px-6 py-4"> {admission.wardno} </td>
                <td class="px-6 py-4"> {admission.wardtype}</td>
                <td class="px-6 py-4"> {admission.dedno} </td>
                <td class="px-6 py-4"> {admission.admissiondateandtime} </td>
                <td class="px-6 py-4"> {admission.dischargedateandtime} </td>

              </tr>
            ))}
            </tbody>
        </table>
      </div>

      
      

    </div>
  )
}

export default Admission