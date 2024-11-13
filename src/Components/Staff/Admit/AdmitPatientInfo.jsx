import React from 'react'
import { useState , useEffect } from 'react'

import PatientAdmitForm from './AdmitPatientForm/PatientAdmitForm'

// import { Link } from "react-router-dom";

function AdmitPatientInfo() {

  let [admitinfo , setadmitinfo] = useState([])
  let [patientid , setpatientid] = useState()

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


  let [admitpatient,setadmitpatient] = useState(false)

  function deleteadmission(){
    console.log(patientid)
    try {
      fetch(`${process.env.REACT_APP_API_URL}/admission/deleteadmission`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'id' : patientid }),
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
              <th scope="col" class="px-6 py-3"> PATIENT NAME </th>
              <th scope="col" class="px-6 py-3"> STAFF ID </th>
              <th scope="col" class="px-6 py-3"> DOCTOR ID </th>
              <th scope="col" class="px-6 py-3"> WARD NO </th>
              <th scope="col" class="px-6 py-3"> WARD TYPE </th>
              <th scope="col" class="px-6 py-3"> BED NO </th>
              <th scope="col" class="px-6 py-3"> ADMISSION DATE & TIME </th>
              <th scope="col" class="px-6 py-3"> DISCHARGE DATE & TIME </th>
            </tr>
          </thead>
 
          {admitinfo.map((admission)=>(
          <tbody>
            <tr class="text-center">
              <td class="px-6 py-3"> {admission.patientid} </td>
              <td class="px-6 py-3"> {admission.patientname} </td>
              <td class="px-6 py-3"> {admission.staffid} </td>
              <td class="px-6 py-3"> {admission.doctorid} </td>
              <td class="px-6 py-3"> {admission.wardno} </td>
              <td class="px-6 py-3"> {admission.wardtype} </td>
              <td class="px-6 py-3"> {admission.bedno} </td>
              <td class="px-6 py-3"> {admission.admissiondateandtime} </td>
              <td class="px-6 py-3"> {admission.dischargedateandtime} </td>
              <td  class="px-6 py-3"> 
                <button  class="px-6 py-3"  onClick={() => {setadmitpatient(true); setpatientid(admission.patientid)}} className="text-blue-600 hover:cursor-pointer"> Edit </button>
              </td>
              <td class="px-6 py-3">  
                <button class="px-6 py-3"  onClick={() => {deleteadmission();}} className="text-red-600 hover:cursor-pointer"> Delete </button>
              </td>
            </tr>
          </tbody>
        ))}
        </table>
      </div>
      {admitpatient ?  <PatientAdmitForm setisopen={setadmitpatient} patientid={patientid} /> : <></>}
       
    </div>
  )
}

export default AdmitPatientInfo