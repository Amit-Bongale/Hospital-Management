import React from 'react'

import { useSelector } from 'react-redux'
import { Outlet , Navigate } from 'react-router-dom'

function Patientroute() {

  const IsLoggedin = useSelector((state) => state.patient.loggedin)

  return (
    <div>
      { IsLoggedin ?  <Outlet></Outlet> : <Navigate to="/login" /> }
    </div>
  )
}

export default Patientroute