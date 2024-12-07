import React from 'react'
import { useState , useEffect } from 'react'

import PatientAdmitForm from './AdmitPatientForm/PatientAdmitForm'

import { Search } from 'lucide-react';


function AdmitPatientInfo() {

  let [admitinfo , setadmitinfo] = useState([])
  let [patientid , setpatientid] = useState()

  const [searchTerm, setSearchTerm] = useState("");

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
      <div class="flex">
        <h1 class="ml-24 mt-7 text-2xl font-bold text-gray-800">Admission details</h1>
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
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg ml-8 mt-10">
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
                <button class="px-6 py-3"  onClick={() => deleteadmission()} className="text-red-600 hover:cursor-pointer"> Delete </button>
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