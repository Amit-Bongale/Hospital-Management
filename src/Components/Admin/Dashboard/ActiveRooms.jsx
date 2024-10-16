import React from 'react'

import { Gauge } from '@mui/x-charts/Gauge';

function ActiveRooms() {
  return (
    <div className='border-2 p-8 rounded-3xl  max-h-fit'>
      <h1 className='font-bold text-2xl text-center'>Rooms Available</h1>
      <Gauge
      value={40}
      width={200} height={150}
      startAngle={-90} endAngle={90}
      valueMin={0}
      valueMax={60}
      innerRadius="75%" outerRadius="100%" />
    </div>
  )
}

export default ActiveRooms