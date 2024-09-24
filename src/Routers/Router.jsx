import React from 'react'
import { Routes , Route } from 'react-router-dom'

import Home from '../Pages/Home'

import Doctorroute from './Doctorroute'
import Adminroute from './Adminroute'
import Staffroute from './Staffroute'

function Router() {


  return (
    <Routes>

      {/* Patient Routers */}
      <Route path="/" element={<Home />} />

      {/* Patient must login to use these routes */}
      <Route path="/user" element={" "}>

      </Route>



      {/* Doctor Routes */}
      <Route path="/doctor" element={<Doctorroute />}>
        
      </Route>



      {/* Staff Routes */}
      <Route path="/staff" element={<Staffroute />}>
        
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<Adminroute />}>
        
      </Route>

    </Routes>
  )
}

export default Router