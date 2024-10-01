import React from 'react'
import Doctornav from '../../Components/Doctor/Nav/Doctornav'
import Appointments from '../../Components/Doctor/Dashboard/Appointments'


import { useDispatch } from 'react-redux'
import { doctorlogout } from '../../Redux/Doctor/Doctor'

function Doctordashboard() {

  const dispatch = useDispatch()

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