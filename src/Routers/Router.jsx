import React from 'react'
import { Routes , Route } from 'react-router-dom'

import Home from '../Pages/Home'

import ChooseRole from '../Pages/Role/ChooseRole'

import Doctorroute from './Doctorroute'
import Adminroute from './Adminroute'
import Staffroute from './Staffroute'

import Adminlogin from '../Pages/Admin/Adminlogin'
import AdminDashboard from '../Pages/Admin/AdminDashboard'
import Mangedoctors from '../Pages/Admin/Manageusers/Mangedoctors'
import ManageStaff from '../Pages/Admin/Manageusers/ManageStaff'
import ManagePatients from '../Pages/Admin/Manageusers/ManagePatients'
import SalaryDetails from '../Pages/Admin/SalaryDetails'



import Doctorlogin from '../Pages/Doctor/Doctorlogin'
import Doctordashboard from '../Pages/Doctor/Doctordashboard'
import Admission from '../Pages/Doctor/Admission'


import Stafflogin from '../Pages/Staff/Stafflogin'
import StaffDashboard from '../Pages/Staff/StaffDashboard'
import StaffAdmit from '../Pages/Staff/StaffAdmit'
import StaffTest from '../Pages/Staff/StaffTest'
import StaffBill from '../Pages/Staff/StaffBill'


import Doctorcard from '../Components/Patient/Home/Doctor/Doctorcard'
import AppointmentBooking from '../Pages/Patient/AppointmentBooking'
import LoginForm from '../Pages/Patient/LoginForm'
import ContactUsForm from '../Pages/Patient/ContactUsForm'


function Router() {


  return (
    <Routes>

      {/* Patient Routers */}
      <Route path="/" element={<Home />} />

      <Route path="/doctorcard" element={<Doctorcard/>}/>
      <Route path="/appointmentbooking" element={<AppointmentBooking/>}/>
      <Route path="/loginform" element={<LoginForm/>}/>
      <Route path="/contactusform" element={<ContactUsForm/>}/>     

      {/* Patient must login to use these routes */}
      <Route path="/user" element={" "}>
      {/* <Route path="/doctorcard" element={<Doctorcard/>}/>
      <Route path="/appointmentbooking" element={<AppointmentBooking/>}/> */}
        {/* here */}

      </Route>

      {/* Admin/doc/staff login */}
      <Route path="/chooserole" element={<ChooseRole/>}> </Route>

      {/* Doctor Routes */}
      <Route path='/doctorlogin' element={<Doctorlogin/>} />

      <Route path="/doctor" element={ <Doctorroute/> }>
        <Route path='dashboard' element={ <Doctordashboard/> } />
        <Route path='admission' element={ <Admission/> } />
    
      </Route>



      {/* Staff Routes */}
      <Route path='/stafflogin' element={<Stafflogin/>} />

      <Route path="/staff" element={<Staffroute />}>
        <Route path='dashboard' element={ <StaffDashboard/> } />
        <Route path='admit' element={<StaffAdmit/>}/>
        <Route path='test' element={<StaffTest/>}/>
        <Route path='bill' element={<StaffBill/>}/>

      </Route>


      
      {/* Admin Routes */}
      <Route path='/adminlogin' element={<Adminlogin/> }/>
      
      <Route path="/admin" element={<Adminroute />}>
        <Route path='dashboard' element={ <AdminDashboard/> } />
        <Route path ='managedoctors' element ={<Mangedoctors/> } />
        <Route path ='managestaff' element ={<ManageStaff/> } />
        <Route path ='managepatient' element ={<ManagePatients/> } />
        <Route path ='salarydetails' element ={<SalaryDetails/> } />

        
      </Route>

    </Routes>
  )
}

export default Router