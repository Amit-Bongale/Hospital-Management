import React from 'react'

import Adminnav from '../../Components/Admin/Nav/Adminnav'

import ActiveDoctors from '../../Components/Admin/Dashboard/ActiveDoctors'
import ActivePatients from '../../Components/Admin/Dashboard/ActivePatients'
import ActiveStaff from '../../Components/Admin/Dashboard/ActiveStaff'
import ActiveRooms from '../../Components/Admin/Dashboard/ActiveRooms'
import TotalIncome from '../../Components/Admin/Dashboard/TotalIncome'
// import Performance from '../../Components/Admin/Dashboard/Performance'

function AdminDashboard() {

  return (
    <div className='flex gap-2'>
      <Adminnav/>

      <div className='ml-4'>
        <div className=' flex flex-wrap gap-6 m-2'>
          <ActiveDoctors/>
          <ActiveStaff/>
          <ActivePatients/>
          <ActiveRooms/>
        </div>
        <TotalIncome/>
        {/* <Performance/>  */}
      </div>

    </div>
  )
}

export default AdminDashboard