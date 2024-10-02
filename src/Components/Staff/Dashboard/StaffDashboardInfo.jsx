import React from 'react'
import { useState } from 'react'

import NewPatientForm from './AddPatientForm/NewPatientForm'
import OldPatientForm from './AddPatientForm/OldPatientForm'

// import { Link } from "react-router-dom";

function StaffDashboardInfo() {
  let [newpatient,setnewpatient] = useState(false)
  let [oldpatient,setoldpatient] = useState(false)
  return (
    <div>
        <div className="flex">
            <span className="grid items-start px-2 text-xl font-medium lg:px-4">
                <button
                onClick={() => setnewpatient(true)}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"> New Patient  </button>
            </span>

            <span className="grid items-start px-2 text-xl font-medium lg:px-4">
                <button 
                onClick={() => setoldpatient(true)}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"> Old Patient  </button>
            </span>
        </div>
        {newpatient ?  <NewPatientForm setisopen={setnewpatient}/> : <></>}
        {oldpatient ?  <OldPatientForm setisopen={setoldpatient}/> : <></>}
       
    </div>
  )
}

export default StaffDashboardInfo