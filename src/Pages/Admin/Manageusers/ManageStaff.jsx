import React from 'react'
import { useState } from 'react'

import Adminnav from '../../../Components/Admin/Nav/Adminnav'
import Stafftable from '../../../Components/Admin/DetailsTable/Stafftable'

import Addstaff from '../../../Components/Admin/Addusers/Addstaff'

function ManageStaff() {

  let [addstaff , setaddstaff ] = useState(false)

  return (
    <div className='flex'>
        <Adminnav />
        <div className='ml-8'>
            <button className='bg-black text-white py-3 px-6 rounded-3xl my-4 mx-4' onClick={() => setaddstaff(true)} > Add Staff </button>
            { addstaff  ? <Addstaff setisopen={setaddstaff}/> : <span></span>}
            
            <Stafftable/>
        </div>
    </div>
  )
}

export default ManageStaff