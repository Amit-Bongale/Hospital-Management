import React from 'react'
import AccountNav from '../../../Components/Patient/Nav/AccountNav'
import PatientMedicalHistory from '../../../Components/Patient/Account/PatientMedicalHistory'


function MedicalHistory() {
  return (
    <div className='flex gap-4'>
        <AccountNav/>
       <div >
        <PatientMedicalHistory></PatientMedicalHistory>
       </div>
    </div>
  )
}

export default MedicalHistory