import React from 'react'

import { useDispatch } from 'react-redux'
import { doctorlogout } from '../../Redux/Doctor/Doctor'

function Doctordashboard() {

  const dispatch = useDispatch()

  return (
    <div>
      
      <h1> Doctordashboard </h1>

      <button onClick={() => dispatch(doctorlogout())} className='bg-black text-white py-3 px-6 rounded-3xl m-4'> logout </button>
      
    </div>
  )
}

export default Doctordashboard