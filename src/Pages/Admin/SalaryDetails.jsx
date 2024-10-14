import React from 'react'

import { useState } from 'react'

import Adminnav from '../../Components/Admin/Nav/Adminnav'
import DoctorSalary from '../../Components/Admin/SalaryDetails/DoctorSalary'
import StaffSalary from '../../Components/Admin/SalaryDetails/StaffSalary'
import AddSalary from '../../Components/Admin/SalaryDetails/AddSalary'

function SalaryDetails() {

  let [addsalary , setsalary] = useState(false)

  return (
    <div className='flex'>
        <Adminnav/>
        <div className='ml-4'>

          {addsalary ? <AddSalary setisopen={setsalary}/> : <></> }

          <button className='bg-black text-white py-3 px-6 rounded-3xl my-4 mx-4 hover:bg-gray-700' onClick={() => setsalary(true)}> Add Salary Details</button>

          <DoctorSalary/>
          <div className='h-1 mt-10 bg-gray-200'></div>
          <StaffSalary/>
        </div>

    </div>
  )
}

export default SalaryDetails