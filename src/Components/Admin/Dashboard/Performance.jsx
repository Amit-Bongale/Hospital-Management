import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

function Performance() {
  return (
    <div className='border-2 p-2 rounded-3xl max-h-fit mt-4' >
      <h3 className='font-bold text-2xl ml-4 mt-4'>Total Visitors</h3>
      <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
          color: 'blue',
        },
      ]}
      width={1100}
      height={360}
    />
    </div>
    
  )
}

export default Performance