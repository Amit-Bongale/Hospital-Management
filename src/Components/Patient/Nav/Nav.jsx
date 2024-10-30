import React  from "react";
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

          <Link to="/user/details">
            <button className="mr-10"> Account </button>
          </Link>
        </div>

        <div>
          <Link to="/appointmentbooking">
            <button className="px-6 py-2 rounded-full bg-white text-black ">Book Appointment</button>
          </Link>
        </div>
    
      </div>
    </nav>
  );
}
export default Nav;
