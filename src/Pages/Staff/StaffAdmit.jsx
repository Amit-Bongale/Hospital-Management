import React from 'react'

import Staffnav from '../../Components/Staff/Nav/Staffnav'
import AdmitPatientInfo from '../../Components/Staff/Admit/AdmitPatientInfo'

function StaffAdmit() {
  return (
    <div>
      <div className='flex'>
        <Staffnav/>
        <div>
          <AdmitPatientInfo/>
        </div>
      </div>

    </div>
  )
}

export default StaffAdmit