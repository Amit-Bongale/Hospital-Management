import React from 'react'

import { useState } from 'react'

import Adminnav from '../../../Components/Admin/Nav/Adminnav'
import Doctorstable from '../../../Components/Admin/DetailsTable/Doctorstable'

import Adddoctor from '../../../Components/Admin/Addusers/Adddoctor'

function Mangedoctors() {

  let [adddoc , setadddoc ] = useState(false)

  return (
    <div className='flex'>
        <Adminnav />
        <div className='ml-8'>
            
            <button className='bg-black text-white py-3 px-6 rounded-3xl my-4' onClick={() => setadddoc(!adddoc)} > Add Doctor </button>
            { adddoc ? <Adddoctor setisopen={setadddoc}/> : <></>}

            <Doctorstable />
        </div>
    </div>
  )
}

export default Mangedoctors