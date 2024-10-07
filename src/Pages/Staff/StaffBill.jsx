import React from 'react'

import Staffnav from '../../Components/Staff/Nav/Staffnav'
import PatientBillInfo from '../../Components/Staff/Bill/PatientBillInfo'

function StaffBill() {
  return (
    <div>
      <div className='flex'>
        <Staffnav/>
        <div>
          <PatientBillInfo/>
        </div>
      </div>

    </div>
  )
}

export default StaffBill