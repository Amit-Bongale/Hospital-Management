import React from 'react'
import { useState , useEffect } from 'react';

import { Gauge } from '@mui/x-charts/Gauge';

function ActivePatients() {

  let [activepatients , setactivepatients] = useState()

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/queue/active`,
      {
        method: "GET",
        credentials: "include",
      }
      )
      .then((res) => res.json())
      .then((data) => {
        setactivepatients(data)
      })
      .catch((err) => console.log("Error fetching data" , err))
    } catch (error) {
      console.log("Error:" , error)
    }
  },[activepatients])

  return (
    <div className='border-2 p-8 rounded-3xl  max-h-fit'>
      <h1 className='font-bold text-2xl text-center'>Patients Queue</h1>
      <Gauge
      value={activepatients}
      width={200} height={150}
      startAngle={-90} endAngle={90}
      valueMin={0}
      valueMax={100}
      innerRadius="75%" outerRadius="100%" />
    </div>
  )
}

export default ActivePatients