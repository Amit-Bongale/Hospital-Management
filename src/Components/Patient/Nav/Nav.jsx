import React , { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import { useSelector } from "react-redux";

// import { useDispatch } from "react-redux";
// import { patientlogout } from '../../../Redux/Patient/Patient';


function Nav() {

  const [isOpen, setIsOpen] = useState(false);
  const IsLoggedin = useSelector((state) => state.patient.patientId);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative z-50 text-white">
      <div className="flex items-center justify-between bg-blue-500 text-white font-semibold px-4 py-2 lg:py-0 lg:justify-around">
        {/* Logo */}
        <div>
          <Link to="/" className="block py-2">
            <h1>City General Hospital</h1>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 hover:bg-blue-600 rounded-lg"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center">
          <Link to="/">
            <button className="px-4 py-6 hover:scale-105 transition-all ease-in-out duration-200">Home</button>
          </Link>
          <Link to="/contactusform">
            <button className="px-4 py-6 hover:scale-105 transition-all ease-in-out duration-200">Contact Us</button>
          </Link>
          <Link to="/chooserole">
            <button className="px-4 py-6 hover:scale-105 transition-all ease-in-out duration-200">Roles</button>
          </Link>
          {IsLoggedin ? (
            <Link to="/user/details">
              <button className="px-4 py-6 hover:scale-105 transition-all ease-in-out duration-200">Account</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="px-4 py-6 hover:scale-105 transition-all ease-in-out duration-200">Login</button>
            </Link>
          )}
        </div>

        {/* Book Appointment Button - Desktop */}
        <div className="hidden lg:block">
          <Link to="/user/appointmentbooking">
            <button className="px-6 py-2 rounded-full bg-white text-black hover:bg-gray-100">
              Book Appointment
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile/Tablet Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-blue-500 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="flex flex-col p-4">
          <button
            onClick={toggleMenu}
            className="self-end p-2 hover:bg-blue-600 rounded-lg mb-4"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col space-y-4 ">
            <Link to="/" onClick={toggleMenu}>
              <button className="w-full text-left py-2 px-4 hover:bg-blue-600 rounded">
                Home
              </button>
            </Link>
            <Link to="/contactusform" onClick={toggleMenu}>
              <button className="w-full text-left py-2 px-4 hover:bg-blue-600 rounded">
                Contact Us
              </button>
            </Link>
            <Link to="/chooserole" onClick={toggleMenu}>
              <button className="w-full text-left py-2 px-4 hover:bg-blue-600 rounded">
                Roles
              </button>
            </Link>
            {IsLoggedin ? (
              <Link to="/user/details" onClick={toggleMenu}>
                <button className="w-full text-left py-2 px-4 hover:bg-blue-600 rounded">
                  Account
                </button>
              </Link>
            ) : (
              <Link to="/login" onClick={toggleMenu}>
                <button className="w-full text-left py-2 px-4 hover:bg-blue-600 rounded">
                  Login
                </button>
              </Link>
            )}
            <Link to="/user/appointmentbooking" onClick={toggleMenu}>
              <button className="w-full py-2 px-6 rounded-full bg-white text-black hover:bg-gray-100">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
