import React from 'react'

import { Gauge } from '@mui/x-charts/Gauge';
import { useState, useEffect } from 'react';

function ActiveDoctors() {

  let [totaldoctor , settotaldoctor ] = useState()
  let [activeDoctor , setactiveDoctor] = useState()

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/doctor/doctorstats`)
      .then((res) => res.json())
      .then((data) => {
        settotaldoctor(data.totalDoctors)
        setactiveDoctor(data.activeDoctors)
      })
      .catch((err) => console.log("Error fetching data" , err))
    } catch (error) {
      console.log("Error:" , error)
    }
    
  },[ totaldoctor , activeDoctor])

  return (
    <div className='border-2 p-8 rounded-3xl max-h-fit'>
        <h1 className='font-bold text-2xl text-center'> Doctors Active</h1>
        <Gauge
        value={activeDoctor}
        width={200} height={150}
        startAngle={-90} endAngle={90}
        valueMin={0}
        valueMax={totaldoctor}
        innerRadius="75%" outerRadius="100%" />
    </div>
  )
}

export default ActiveDoctors