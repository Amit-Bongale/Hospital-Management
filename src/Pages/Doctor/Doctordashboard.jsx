import React from 'react'

import Doctornav from '../../Components/Doctor/Nav/Doctornav'
import Appointments from '../../Components/Doctor/Dashboard/Appointments'

function Doctordashboard() {

  return (
    <div class="flex">
      <Doctornav/>
      <div>
        <Appointments/>
      </div>
      
    </div>
  )
}

export default Doctordashboard