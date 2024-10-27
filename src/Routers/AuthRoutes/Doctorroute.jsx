import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet , Navigate } from 'react-router-dom'

function Doctorroute() {
    
  const IsDoctor = useSelector((state) => state.doctor.loggedin)

  return (
    <div>
      { IsDoctor ?  <Outlet></Outlet> : <Navigate to="/doctorlogin"/> }
    </div>
  )
}

export default Doctorroute