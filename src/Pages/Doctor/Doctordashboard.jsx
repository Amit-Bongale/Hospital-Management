import React from 'react'

import Doctornav from '../../Components/Doctor/Nav/Doctornav'
import Appointments from '../../Components/Doctor/Dashboard/Appointments'
import Viewpatient from '../../Components/Doctor/Patientdetails/Viewpatient'


function Doctordashboard() {

  return (
    <div class="flex">
      <Doctornav/>
      <div>
        <Appointments/>
      </div>

      <Viewpatient/>
    </div>
  )
}

export default Doctordashboard