import React from 'react'
import { useState } from 'react'

import PatientTestForm from './TestPatientForm/PatientTestForm'

function PatientTestInfo() {
  let [testpatient,settestpatient] = useState(false)
  return (
    <div>
        <div className="flex">
            <span className="grid items-start px-2 text-xl font-medium lg:px-4">
                <button
                onClick={() => settestpatient(true)}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"> Test Result  </button>
            </span>
        </div>
        {testpatient ?  <PatientTestForm setisopen={settestpatient}/> : <></>}
       
    </div>
  )
}

export default PatientTestInfo