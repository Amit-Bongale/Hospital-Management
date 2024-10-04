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
              className="bg-black text-white py-3 px-6 rounded-3xl my-4"> Test Result  </button>
            </span>
        </div>
        {testpatient ?  <PatientTestForm setisopen={settestpatient}/> : <></>}
       
    </div>
  )
}

export default PatientTestInfo