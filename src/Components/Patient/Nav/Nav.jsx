import React, { useState } from "react";
import { Link } from "react-router-dom";

import AppointmentForm from "../AppointmentForm/AppointmentForm";

function Nav() {
  let [appointment, setappointment] = useState(false)
  return (
    <nav>
      <div className="flex items-center justify-around bg-blue-500 text-white font-semibold">
        <div>
          <Link to="/">
            <div>
              <h1>Hospital Management System</h1>
              {/* <img className="logo" src={logo} alt="" /> */}
            </div>
          </Link>
        </div>

        <div class="my-5">
            <Link to="/">
              <button className="mr-10">Home</button>
            </Link>

            <Link to="/contactusform">
              <button className=" mr-10"> Contact Us </button>
            </Link>

            <Link to="/chooserole">
              <button className="mr-10"> Roles </button>
            </Link>
        

        <Link to="/loginform">
            <button className="mr-10"> Login </button>
        </Link>

        </div>
        <div>
              <button onClick={() => setappointment(true)} className="px-6 py-2 rounded-full bg-white text-black ">Book Appointment</button>
        </div>

        {appointment ?<AppointmentForm setappointment={setappointment}/>
        :<></>}       
      </div>
    </nav>
  );
}
export default Nav;
