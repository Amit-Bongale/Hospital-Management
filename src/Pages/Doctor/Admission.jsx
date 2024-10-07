import React from 'react'

import Doctornav from '../../Components/Doctor/Nav/Doctornav'
import Admission from '../../Components/Doctor/Dashboard/Admission'


function Doctordashboard() {

  return (
    <div class="flex">
      <Doctornav/>
      <div>
        <Admission/>
      </div>
      
    </div>
  )
}

export default Doctordashboard