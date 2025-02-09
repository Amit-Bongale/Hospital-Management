import React from 'react'
import { Routes , Route } from 'react-router-dom'

import Home from '../Pages/Home'

import ChooseRole from '../Pages/Role/ChooseRole'

import Doctorroute from './AuthRoutes/Doctorroute'
import Adminroute from './AuthRoutes/Adminroute'
import Staffroute from './AuthRoutes/Staffroute'
import Patientroute from './AuthRoutes/Patientroute'


import Adminlogin from '../Pages/Admin/Adminlogin'
import AdminDashboard from '../Pages/Admin/AdminDashboard'
import Mangedoctors from '../Pages/Admin/Manageusers/Mangedoctors'
import ManageStaff from '../Pages/Admin/Manageusers/ManageStaff'
import ManagePatients from '../Pages/Admin/Manageusers/ManagePatients'
import SalaryDetails from '../Pages/Admin/SalaryDetails'
import ContactRequest from '../Pages/Admin/ContactRequest'
import ManageWards from '../Pages/Admin/ManageWards'


import Doctorlogin from '../Pages/Doctor/Doctorlogin'
import Doctordashboard from '../Pages/Doctor/Doctordashboard'
import Admission from '../Pages/Doctor/Admission'
import Schedule from '../Pages/Doctor/Schedule'
import Testdetails from '../Pages/Doctor/Testdetails'


import Stafflogin from '../Pages/Staff/Stafflogin'
import StaffDashboard from '../Pages/Staff/StaffDashboard'
import StaffAdmit from '../Pages/Staff/StaffAdmit'
import StaffTest from '../Pages/Staff/StaffTest'
import StaffBill from '../Pages/Staff/StaffBill'
import StaffDoctorStatus from '../Pages/Staff/StaffDoctorStatus'
import PrintBill from '../Pages/Staff/PrintBill'


import AppointmentBooking from '../Pages/Patient/AppointmentBooking'
import LoginForm from '../Pages/Patient/LoginForm'
import Register from '../Pages/Patient/Register'
import ContactUsForm from '../Pages/Patient/ContactUsForm'
import Account from '../Pages/Patient/Account/Account'
import MyAppointments from '../Pages/Patient/Account/MyAppointments'
import MedicalHistory from '../Pages/Patient/Account/MedicalHistory'
import TestReports from '../Pages/Patient/Account/TestReports'



function Router() {


  return (
    <Routes>

      {/* Patient Routers */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/contactusform" element={<ContactUsForm/>}/>


      {/* Patient must login to use these routes */}
   
      <Route path="/user" element={<Patientroute/>}>
        <Route path="appointmentbooking" element={<AppointmentBooking/>}/>

        <Route path="details" element={<Account/>}/>
        <Route path="appointment" element={<MyAppointments/>}/>
        <Route path='mediacalhistory' element={<MedicalHistory/>} />
        <Route path='testreport' element={<TestReports/>} />

      </Route>

      {/* Admin/doc/staff login */}
      <Route path="/chooserole" element={<ChooseRole/>}> </Route>

      {/* Doctor Routes */}
      <Route path='/doctorlogin' element={<Doctorlogin/>} />

      <Route path="/doctor" element={ <Doctorroute/> }>
        <Route path='dashboard' element={ <Doctordashboard/> } />
        <Route path='admission' element={ <Admission/> } />
        <Route path='schedule' element={ <Schedule/> } />
        <Route path='testdetails' element={ <Testdetails/> } />
        
      </Route>



      {/* Staff Routes */}
      <Route path='/stafflogin' element={<Stafflogin/>} />

      <Route path="/staff" element={<Staffroute />}>
        <Route path='dashboard' element={ <StaffDashboard/> } />
        <Route path='admit' element={<StaffAdmit/>}/>
        <Route path='test' element={<StaffTest/>}/>
        <Route path='bill' element={<StaffBill/>}/>
        <Route path='status' element={<StaffDoctorStatus/>} />
        <Route path='printbill/:billno/:patientid' element={<PrintBill/>}/>

      </Route>


      
      {/* Admin Routes */}
      <Route path='/adminlogin' element={<Adminlogin/> }/>
      
      <Route path="/admin" element={<Adminroute />}>
        <Route path ='dashboard' element={ <AdminDashboard/> } />
        <Route path ='managedoctors' element ={<Mangedoctors/> } />
        <Route path ='managestaff' element ={<ManageStaff/> } />
        <Route path ='managepatient' element ={<ManagePatients/> } />
        <Route path ='salarydetails' element ={<SalaryDetails/> } />
        <Route path ='contactrequest' element={<ContactRequest/>} />
        <Route path ='wards' element={<ManageWards/>} />

      </Route>

    </Routes>
  )
}

export default Router