import React, { useState } from 'react'

import Adminnav from '../../Components/Admin/Adminnav'

import Doctorstable from '../../Components/Admin/Doctorstable'
import Stafftable from '../../Components/Admin/Stafftable'
import Patientstable from '../../Components/Admin/Patientstable'

import Adddoctor from '../../Components/Admin/Adddoctor'
import Addstaff from '../../Components/Admin/Addstaff'

function Users() {

  let [adddoc , setadddoc ] = useState(false)
  let [addstaff , setaddstaff ] = useState(false)
  
  return (
    <div className='flex'>
        <Adminnav />
        <section className='ml-5 mt-5'>

          <button className='bg-black text-white py-3 px-6 rounded-3xl my-4' onClick={() => setadddoc(!adddoc)} > Add Doctor </button>
          { adddoc ? <Adddoctor setisopen={setadddoc}/> : <span></span>}

          <button className='bg-black text-white py-3 px-6 rounded-3xl my-4 mx-4' onClick={() => setaddstaff(true)} > Add Staff </button>
          { addstaff  ? <Addstaff setisopen={setaddstaff}/> : <span></span>}

          <Doctorstable/>
          <div className='w-full mt-16 border-2'></div>
          <Stafftable/>
          <div className='w-full mt-16 border-2'></div>
          <Patientstable/>

        </section>
    </div>
  )
}

export default Users