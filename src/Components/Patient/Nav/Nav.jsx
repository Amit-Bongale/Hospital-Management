import React, { useState } from "react";
import { Link } from "react-router-dom";

import AppointmentForm from "../AppointmentForm/AppointmentForm";

function Nav() {
  let [appointment, setappointment] = useState(false)
  return (
    <nav>
      <div className="flex items-center justify-around bg-blue-400 text-white text-xl font-semibold">
        <div>
          <Link to="/">
            <div>
              <h1>Hospital Management System</h1>
              {/* <img className="logo" src={logo} alt="" /> */}
            </div>
          </Link>
        </div>
      <div class="flex">
        <div class="my-6 flex">
            <Link to="/">
              <h1 className="mr-10 ml-32  text-xl font-semibold">Home</h1>
            </Link>

            <Link to="/contactusform">
              <h1 className=" mr-10 text-xl font-semibold"> Contact Us </h1>
            </Link>

            <Link to="/chooserole">
              <h1 className="mr-10 text-xl font-semibold"> Roles </h1>
            </Link>
        

        <Link to="/loginform">
            <h1 className="mr-10 text-xl font-semibold"> Login </h1>
        </Link>

        </div>
        <div>
              <button onClick={() => setappointment(true)} className="px-6 py-2 mt-5 rounded-full bg-white text-black mr-20">Book Appointment</button>
        </div>

        {appointment ?<AppointmentForm setappointment={setappointment}/>
        :<></>}   
        </div>    
      </div>
    </nav>
  );
}
export default Nav;
