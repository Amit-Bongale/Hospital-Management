import React from 'react'

import { Gauge } from '@mui/x-charts/Gauge';


function ActivePatients() {
  return (
    <div className='border-2 p-6 rounded-3xl  max-h-fit'>
        <h1 className='font-bold text-2xl text-center'>Patients Active</h1>
        <Gauge
        value={20}
        width={200} height={150}
        startAngle={-90} endAngle={90}
        valueMin={0}
        valueMax={100}
        innerRadius="75%" outerRadius="100%" />
    </div>
  )
}

export default ActivePatients