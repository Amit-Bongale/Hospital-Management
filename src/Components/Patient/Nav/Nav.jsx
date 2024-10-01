import React from 'react'

import { Link } from 'react-router-dom'

function Nav() {
    return(
        <div>
            <div>
            <Link to='/'> <div >
                <h1>Hospital Management System</h1>
                {/* <img className="logo" src={logo} alt="" /> */}
            </div> </Link>
        </div>

        <div>

            <div >
                <Link to='/'>  <button className="mx-8 my-5 ">Home</button> </Link>
                
                <Link to='/appointmentbooking'> <button className="mx-8 my-5 ">Appointment</button>  </Link>

                <Link to='/loginform'> <button className="mx-8 my-5"> Login </button> </Link>

                <Link to='/contactus'> <button className="mx-8 my-5 "> Contact us </button> </Link>

                <Link to='/chooserole'> <button className="mx-8 my-5 "> Roles </button> </Link>


            </div>
            
        </div>
        </div>
    )
}
export default Nav