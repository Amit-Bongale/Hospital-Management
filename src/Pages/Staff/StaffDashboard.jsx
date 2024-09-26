import React from 'react'

import { useDispatch } from 'react-redux'
import { stafflogout } from '../../Redux/Staff/Staff'

function StaffDashboard() {

  const dispatch = useDispatch()

  return (
    <div>

      <h1> StaffDashboard </h1>

      <button onClick={() => dispatch(stafflogout())} className='bg-black text-white py-3 px-6 rounded-3xl m-4'> logout </button>

    </div>
  )
}

export default StaffDashboard