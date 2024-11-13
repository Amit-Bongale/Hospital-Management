import React from 'react'

import AccountNav from '../../../Components/Patient/Nav/AccountNav'
import PatientTestReport from '../../../Components/Patient/TestReport/PatientTestReport'

function TestReports() {
  return (
    <div className='flex gap-4'>
        <AccountNav/>
        <div>
          <PatientTestReport/>
        </div>
    </div>
  )
}


export default TestReports