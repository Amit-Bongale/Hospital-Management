import React from 'react'
import { Button } from '@mui/material'

function Home() {
  function hi(){
    alert("Hello")
  }
  return (
    <div className='text-3xl font-bold underline'>
      Home
      <Button variant="contained">UI</Button>
    </div>
  )
}

export default Home