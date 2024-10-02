import React from 'react'

import Staffnav from '../../Components/Staff/Nav/Staffnav'


import StaffDashboardInfo from '../../Components/Staff/Dashboard/StaffDashboardInfo'

function StaffDashboard() {

  return (
    <div>
      <div className='flex'>
        <Staffnav/>
        <div>
          <StaffDashboardInfo/>
        </div>
      </div>
 

    </div>
  )
}

export default StaffDashboard