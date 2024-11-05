import React from 'react'

import { useSelector } from 'react-redux'
import { Outlet , Navigate } from 'react-router-dom'

import { useDispatch } from "react-redux";
import { patientlogout } from '../../Redux/Patient/Patient';


function Patientroute() {

  const dispatch = useDispatch()


  const IsLoggedin = useSelector((state) => state.patient.loggedin)

  if(!IsLoggedin){
    dispatch(patientlogout())
  }

  return (
    <div>
      { IsLoggedin ?  <Outlet></Outlet> : <Navigate to="/login" /> }
    </div>
  )
}

export default Patientroute