import React from 'react'

import { Link } from "react-router-dom";

function Staffnav() {
  return (
    <nav className="bg-gray-50 w-2/12 z-50">
      <div>

        <div>
        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <Link
            to="/staff/dashboard"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-black"
          >
            <button> Dashboard </button>
          </Link>
        </span>
        </div>

        <div>
          <button>Appointment</button>
        </div>

        <div>
          <button>Admit</button>
        </div>

        <div>
          <button>Test</button>
        </div>

        <div>
          <button>Billing</button>
        </div>

      </div>
    </nav>
  )
}

export default Staffnav