import React from 'react'

import Doctornav from '../../Components/Doctor/Nav/Doctornav'
import Doctorschedule from '../../Components/Doctor/Dashboard/Doctorschedule' 


function Schedule() {

  return (
    <div class="flex">
      <Doctornav/>
      <div>
        <Doctorschedule/>
      </div>
      
    </div>
  )
}

export default Schedule