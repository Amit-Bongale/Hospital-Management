import React from 'react'
import { Routes , Route } from 'react-router-dom'

import Home from '../Pages/Home'

import Login from '../Pages/Login/Login'

import Doctorroute from './Doctorroute'
import Adminroute from './Adminroute'
import Staffroute from './Staffroute'

import Adminlogin from '../Pages/Admin/Adminlogin'
import AdminDashboard from '../Pages/Admin/AdminDashboard'
import Users from '../Pages/Admin/Users'

import Doctorlogin from '../Pages/Doctor/Doctorlogin'
import Doctordashboard from '../Pages/Doctor/Doctordashboard'

import Stafflogin from '../Pages/Staff/Stafflogin'
import StaffDashboard from '../Pages/Staff/StaffDashboard'

function Router() {


  return (
    <Routes>

      {/* Patient Routers */}
      <Route path="/" element={<Home />} />

      {/* Patient must login to use these routes */}
      <Route path="/user" element={" "}>

      </Route>

      {/* Admin/doc/staff login */}
      <Route path="/login" element={<Login></Login>}> </Route>

      {/* Doctor Routes */}
      <Route path='/doctorlogin' element={<Doctorlogin/>} />

      <Route path="/doctor" element={ <Doctorroute/> }>
        <Route path='dashboard' element={ <Doctordashboard/> } />
    
      </Route>



      {/* Staff Routes */}
      <Route path='/stafflogin' element={<Stafflogin/>} />

      <Route path="/staff" element={<Staffroute />}>
        <Route path='dashboard' element={ <StaffDashboard/> } />

      </Route>




      
      {/* Admin Routes */}
      <Route path='/adminlogin' element={<Adminlogin/> }/>
      
      <Route path="/admin" element={<Adminroute />}>
        <Route path='dashboard' element={ <AdminDashboard/> } />
        <Route path='manageusers' element={<Users/>} />
        
      </Route>

    </Routes>
  )
}

export default Router