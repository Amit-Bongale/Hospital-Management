import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet , Navigate } from 'react-router-dom'

function Staffroute() {

  const IsStaff = useSelector((state) => state.staff.loggedin)

  return (
    <div>
        { IsStaff ?  <Outlet></Outlet> : <Navigate to="/stafflogin" /> }
    </div>
  )
}

export default Staffroute