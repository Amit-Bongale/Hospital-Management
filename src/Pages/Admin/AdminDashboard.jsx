import React from 'react'

import Adminnav from '../../Components/Admin/Nav/Adminnav'

import ActiveDoctors from '../../Components/Admin/Dashboard/ActiveDoctors'
import ActivePatients from '../../Components/Admin/Dashboard/ActivePatients'
import ActiveStaff from '../../Components/Admin/Dashboard/ActiveStaff'
import ActiveRooms from '../../Components/Admin/Dashboard/ActiveRooms'

function AdminDashboard() {

  return (
    <div className='flex'>
      <Adminnav/>
      <div className=' ml-1 flex flex-wrap gap-6'>
        <ActiveDoctors/>
        <ActiveStaff/>
        <ActivePatients/>
        <ActiveRooms/>
      </div>
    </div>
  )
}

export default AdminDashboard