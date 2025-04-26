import React from 'react'
import { useState , useEffect} from 'react';

import { Gauge } from '@mui/x-charts/Gauge';

function ActiveRooms() {

  let [totalbeds , settotalbed ] = useState()
  let [activebeds , setactivebed] = useState()

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/ward/wardstats`,   {
        method: "GET",
        credentials: "include",
      })
      .then((res) => res.json())
      .then((data) => {
        settotalbed(data.totalbeds)
        setactivebed(data.activebeds)
      })
      .catch((err) => console.log("Error fetching data" , err))
    } catch (error) {
      console.log("Error:" , error)
    }
  },[ totalbeds , activebeds])

  return (
    <div className='border-2 p-8 rounded-3xl  max-h-fit'>
      <h1 className='font-bold text-2xl text-center'>Beds Available</h1>
      <Gauge
      value={activebeds}
      width={200} height={150}
      startAngle={-90} endAngle={90}
      valueMin={0}
      valueMax={totalbeds}
      innerRadius="75%" outerRadius="100%" />
    </div>
  )
}

export default ActiveRooms