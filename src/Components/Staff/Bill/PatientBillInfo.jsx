import React from 'react'
import { useState } from 'react'

import PatientBillForm from './BillPatientForm/PatientBillForm'

function PatientBillInfo() {
  let [billpatient,setbillpatient] = useState(false)
  return (
    <div>
        <div className="flex">
            <span className="grid items-start px-2 text-xl font-medium lg:px-4">
                <button
                onClick={() => setbillpatient(true)}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"> Bill  </button>
            </span>
        </div>
        {billpatient ?  <PatientBillForm setisopen={setbillpatient}/> : <></>}
       
    </div>
  )
}

export default PatientBillInfo