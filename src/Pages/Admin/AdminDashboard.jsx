import React from 'react'

import Adminnav from '../../Components/Admin/Adminnav'

import ActiveDoctors from '../../Components/Admin/Dashboard/ActiveDoctors'
import ActivePatients from '../../Components/Admin/Dashboard/ActivePatients'
import ActiveStaff from '../../Components/Admin/Dashboard/ActiveStaff'

function AdminDashboard() {

  return (
    <div className='flex'>
      <Adminnav/>
      <div className='ml-4 flex flex-wrap gap-4'>
        <ActiveDoctors/>
        <ActiveStaff/>
        <ActivePatients/>
      </div>
    </div>
  )
}

export default AdminDashboard