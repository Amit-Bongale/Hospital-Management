import React from 'react'

import Adminnav from '../../Components/Admin/Nav/Adminnav'
import DoctorSalary from '../../Components/Admin/SalaryDetails/DoctorSalary'
import StaffSalary from '../../Components/Admin/SalaryDetails/StaffSalary'

function SalaryDetails() {
  return (
    <div className='flex'>
        <Adminnav/>
        <div className='ml-4'>
            <DoctorSalary/>

            <div className='h-1 mt-10 bg-gray-200'></div>
            
            <StaffSalary/>
        </div>

    </div>
  )
}

export default SalaryDetails