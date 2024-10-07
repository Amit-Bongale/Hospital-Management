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
                className="bg-black text-white py-3 px-6 rounded-3xl my-4"> Bill </button>
            </span>
        </div>
        {billpatient ?  <PatientBillForm setisopen={setbillpatient}/> : <></>}
       
    </div>
  )
}

export default PatientBillInfo