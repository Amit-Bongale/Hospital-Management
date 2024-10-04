import React from 'react'

import Staffnav from '../../Components/Staff/Nav/Staffnav'
import PatientTestInfo from '../../Components/Staff/Test/PatientTestInfo'

function StaffTest() {
  return (
    <div>
      <div className='flex'>
        <Staffnav/>
        <div>
          <PatientTestInfo/>
        </div>
      </div>

    </div>
  )
}

export default StaffTest