import React from 'react'
import { useState } from 'react'

import PatientAdmitForm from './AdmitPatientForm/PatientAdmitForm'

// import { Link } from "react-router-dom";

function AdmitPatientInfo() {
  let [admitpatient,setadmitpatient] = useState(false)
  return (
    <div>
        <div className="flex">
            <span className="grid items-start px-2 text-xl font-medium lg:px-4">
                <button
                onClick={() => setadmitpatient(true)}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"> Admit Patient  </button>
            </span>
        </div>
        {admitpatient ?  <PatientAdmitForm setisopen={setadmitpatient}/> : <></>}
       
    </div>
  )
}

export default AdmitPatientInfo