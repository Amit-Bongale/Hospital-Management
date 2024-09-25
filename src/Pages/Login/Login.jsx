import React from 'react'

import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

function Login() {

  return (
    <div>

        welcome! Please Login 

        <div className='m-8'>
            Admin :
            <Link to={'/adminlogin'} >
                <Button variant="contained"  className='m-8'>admin login</Button>
            </Link>
        </div>

        <div className='m-8'>
            Doctor : 
            <Link to={'/doctorlogin'} >
                <Button variant="contained" >Doctor login</Button>
            </Link>
        </div>

        <div className='m-8'>
            Staff :
            <Link to={'/stafflogin'} >
                <Button variant="contained" > Staff login</Button>
            </Link>
        </div>

        <div className='m-8'>
            <Link to={'/'} >
                <Button  variant="contained" > home </Button>
            </Link>
        </div>

    </div>
  )
}

export default Login