import React from 'react'
import { Button } from '@mui/material'


import { Link } from 'react-router-dom'

function Home() {

  return (
    <div className='text-3xl font-bold'>
      
      Home

      <div>
        login : <Link to={'/login'}> <Button  variant="contained"> Login page </Button> </Link> 
      </div>

    </div>
  )
}

export default Home