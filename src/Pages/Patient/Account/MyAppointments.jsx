import React from 'react'
import { Link } from 'react-router-dom'

import AccountNav from '../../../Components/Patient/Nav/AccountNav'
// import AppointmentDetails from '../../../Components/Patient/Account/AppointmentDetails'
import AppointmentDetails from '../../../Components/Patient/Account/AppointmentDetails'

function MyAppointments() {
  return (
    <div className='flex gap-4'>
        <AccountNav/>
        <div>
          <AppointmentDetails/>
        </div>
    </div>
  )
}


export default MyAppointments