import React from 'react'

import { useDispatch } from 'react-redux'
import { adminlogout } from '../../Redux/Admin/Admin'

function AdminDashboard() {

  const dispatch = useDispatch()

  return (
    <div>
      <h1> AdminDashboard</h1>

      <button onClick={() => dispatch(adminlogout())} className='bg-black text-white py-3 px-6 rounded-3xl m-4'> logout </button>
    </div>
  )
}

export default AdminDashboard