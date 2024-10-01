import React from 'react'

import Staffnav from '../../Components/Staff/Nav/Staffnav'

import { useDispatch } from 'react-redux'
import { stafflogout } from '../../Redux/Staff/Staff'

import StaffDashboardInfo from '../../Components/Staff/Dashboard/StaffDashboardInfo'

function StaffDashboard() {

  const dispatch = useDispatch()

  return (
    <div>
      <div className='flex'>
        <Staffnav/>
        <div>
          <StaffDashboardInfo/>
        </div>
      </div>
      <button onClick={() => dispatch(stafflogout())} className='bg-black text-white py-3 px-6 rounded-3xl m-4'> logout </button>

    </div>
  )
}

export default StaffDashboard