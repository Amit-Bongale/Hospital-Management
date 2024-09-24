import React from 'react'
import { Button } from '@mui/material'

import { useSelector , useDispatch } from 'react-redux'
import { doctorlogin , doctorlogout } from '../Redux/Doctor/Doctor'

function Home() {
  // function hi(){
  //   alert("Hello")
  // }

  const dispatch = useDispatch()

  const isdoctor = useSelector((state) => state.doctor.loggedin)

  return (
    <div className='text-3xl font-bold underline'>
      Home

      { isdoctor ? <span>IS doctor</span> : <span>Not doctor</span>}
      <Button variant="contained" onClick={() => dispatch(doctorlogin())}>login</Button>
      <Button variant="contained" onClick={() => dispatch(doctorlogout())}>logout</Button>

    </div>
  )
}

export default Home