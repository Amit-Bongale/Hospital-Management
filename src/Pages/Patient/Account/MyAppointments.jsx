import React from 'react'
import { Link } from 'react-router-dom'

import AccountNav from '../../../Components/Patient/Nav/AccountNav'

function MyAppointments() {
  return (
    <div className='flex gap-4'>
        <AccountNav/>
        <div>

          <Link to="/user/appointmentbooking">
            <button className="px-6 py-3 m-2 mt-6 rounded-3xl bg-blue-600 text-white font-medium ">Book Appointment</button>
          </Link>

          <div className='m-6'>
            MyAppointments
          </div>

        </div>
    </div>
  )
}


export default MyAppointments