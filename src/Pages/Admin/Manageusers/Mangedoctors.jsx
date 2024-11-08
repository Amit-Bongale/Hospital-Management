import React from 'react'

import { useState } from 'react'

import { Plus } from 'lucide-react';

import Adminnav from '../../../Components/Admin/Nav/Adminnav'
import Doctorstable from '../../../Components/Admin/DetailsTable/Doctorstable'

import Adddoctor from '../../../Components/Admin/Addusers/Adddoctor'

function Mangedoctors() {

  let [adddoc , setadddoc ] = useState(false)


  return (
    <div className='flex'>
        <Adminnav />
        <div className='ml-6'>
            
          <button className='bg-black text-white py-3 px-5 rounded-3xl my-4 flex gap-1 items-center' onClick={() => setadddoc(true)} >
            <Plus className="w-5 h-5" />
            Add Doctor
          </button>
          { adddoc ? <Adddoctor setisopen={setadddoc}/> : <></>}

          <Doctorstable />
        </div>
    </div>
  )
}

export default Mangedoctors