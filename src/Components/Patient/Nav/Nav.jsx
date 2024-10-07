import React from "react";

import { Link } from "react-router-dom";

function Nav() {
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

        <div>
            <Link to="/">
              <button className="mx-8 my-5 ">Home</button>{" "}
            </Link>

            <Link to="/appointmentbooking">
              <button className="mx-8 my-5 ">Appointment</button>{" "}
            </Link>


            <Link to="/contactusform">
              <button className="mx-8 my-5 "> Contact Us </button>{" "}
            </Link>

            <Link to="/chooserole">
              <button className="mx-8 my-5 "> Roles </button>{" "}
            </Link>
        </div>

        <Link to="/loginform">
            <button className="px-6 py-2 rounded-full bg-white text-black "> Login </button>{" "}
        </Link>

      </div>
    </nav>
  );
}
export default Nav;
