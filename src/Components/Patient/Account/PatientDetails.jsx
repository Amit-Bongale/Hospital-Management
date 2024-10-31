import React, { useState } from 'react'
import { useEffect } from "react"

import { useSelector } from 'react-redux'

import EditPatientDetails from './EditPatientDetails'

function PatientDetails() {

  const id = useSelector((state) => state.patient.patientId)

  let [patientinfo , setpatientinfo] = useState([])

  let [edit , setedit ] = useState(false)


  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/patient/findpatient/${id}`, {
        method: "POST",
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          console.log(data.message);
          alert(data.message);
        }
        const patients = Array.isArray(data) ? data : [data];
        setpatientinfo(patients)
        console.log(data);
      })
      .catch((error) => console.log("Fetching Error:" , error));
    } catch (error) {
      console.log("error :", error);
    }
  },[id])

  return (
    <div> 

      { edit ? <EditPatientDetails setisopen={setedit} patientid={id}/> : <></>}

      <div className=" mx-auto p-8 bg-white  rounded-md">
        <h2 className="text-xl font-semibold mb-6">MY Details</h2>
        <table className="w-full text-left border-collapse">
          { patientinfo.map((patient) => (
            <tbody>
              <tr className="border-b">
                <td className="py-2 px-4 text-gray-600 font-medium">Patient ID</td>
                <td className="py-2 px-4 text-gray-900">{patient.id}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 text-gray-600 font-medium">Name</td>
                <td className="py-2 px-4 text-gray-900">{patient.name}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 text-gray-600 font-medium">Gender</td>
                <td className="py-2 px-4 text-gray-900">{patient.gender}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 text-gray-600 font-medium">Email</td>
                <td className="py-2 px-4 text-gray-900">{patient.email}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 text-gray-600 font-medium">Phone</td>
                <td className="py-2 px-4 text-gray-900">{patient.phone}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 text-gray-600 font-medium">Date of Birth</td>
                <td className="py-2 px-4 text-gray-900">{(patient.dob).split('T')[0]}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 text-gray-600 font-medium">Age</td>
                <td className="py-2 px-4 text-gray-900">{patient.age}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 text-gray-600 font-medium">Address</td>
                <td className="py-2 px-4 text-gray-900">{patient.address}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 text-gray-600 font-medium">Emergency Contact</td>
                <td className="py-2 px-4 text-gray-900">{patient.emergencycontact}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 text-gray-600 font-medium">Blood Group</td>
                <td className="py-2 px-4 text-gray-900">{patient.bloodgroup}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 text-gray-600 font-medium">Aadhar Number</td>
                <td className="py-2 px-4 text-gray-900">{patient.aadharno}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-4 text-gray-600 font-medium">Medical History</td>
                <td className="py-2 px-4 text-gray-900">{patient.medicalhistory}</td>
              </tr>
            </tbody>
          ))}
        </table>

        <button className='font-semibold mt-6 bg-blue-600 text-white py-3 px-7 rounded-lg hover:bg-blue-700'
        onClick={() => {setedit(true)}} >Edit</button>
      </div>
    </div>
  )
}

export default PatientDetails