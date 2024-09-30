import React from 'react'
import Herosection from './Herosection'


import { Link } from 'react-router-dom'

function Home() {

  return (
    // <div className='text-3xl font-bold'> 
    //   Home
    //   <div>
    //     Choose Role : <Link to={'/chooserole'}> <Button  variant="contained"> choose </Button> </Link> 
    //   </div>

    // </div>
    <div >
    <div className="bg-green text-xl font-semibold text-black flex items-center justify-around">

        <div>
            <Link to='/'> <div >
                <h1>Hospital Management System</h1>
                {/* <img className="logo" src={logo} alt="" /> */}
            </div> </Link>
        </div>

        <div>

            <div >
                <Link to='/'>  <button className="mx-8 my-5 ">Home</button> </Link>
                
                <Link to='/Appointment'> <button className="mx-8 my-5 ">Appointment</button>  </Link>

                <Link to='/login'> <button className="mx-8 my-5"> Login </button> </Link>

                <Link to='/contactus'> <button className="mx-8 my-5 "> Contact us </button> </Link>

                <Link to='/chooserole'> <button className="mx-8 my-5 "> Roles </button> </Link>


            </div>
            
        </div>

    <Herosection></Herosection>  
    

    </div>
    
</div>
  )
}

export default Home