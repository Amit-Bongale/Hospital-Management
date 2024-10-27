import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet , Navigate } from 'react-router-dom'

function Adminroute() {

  const IsAdmin = useSelector((state) => state.admin.loggedin)

  return (
    <div>
        { IsAdmin ?  <Outlet></Outlet> : <Navigate to="/adminlogin" /> }
    </div>
  )
}

export default Adminroute