import React from 'react'

import { Gauge } from '@mui/x-charts/Gauge';
import { useState, useEffect } from 'react';


function ActiveStaff() {

  let [totalstaff , settotalstaff ] = useState()
  let [activestaff , setactivestaff] = useState()

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/staff/staffstats`)
      .then((res) => res.json())
      .then((data) => {
        settotalstaff(data.totalstaff)
        setactivestaff(data.activestaff)
      })
      .catch((err) => console.log("Error fetching data" , err))
    } catch (error) {
      console.log("Error:" , error)
    }
  },[ totalstaff , activestaff])

  return (
    <div className='border-2 p-8 rounded-3xl  max-h-fit'>
        <h1 className='font-bold text-2xl text-center'>Staff Active</h1>
        <Gauge
        value={activestaff}
        width={200} height={150}
        startAngle={-90} endAngle={90}
        valueMin={0}
        valueMax={totalstaff}
        innerRadius="75%" outerRadius="100%" />
    </div>
  )
}

export default ActiveStaff