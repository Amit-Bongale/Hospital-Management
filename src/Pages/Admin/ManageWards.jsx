import React from 'react'
import Adminnav from '../../Components/Admin/Nav/Adminnav'
import AddWard from '../../Components/Admin/Ward/AddWard'
import { useState } from 'react'
import { Plus } from 'lucide-react';
import WardDetails from '../../Components/Admin/Ward/WardDetails';


function ManageWards() {

    let [addward , setaddward] = useState(false)

  return (
    <div className='flex'>
        <Adminnav />
        <div>
            <button className='bg-black text-white py-3 px-5 rounded-3xl my-4 flex gap-1 items-center' onClick={() => setaddward(true)} >
                <Plus className="w-5 h-5" />
                Add Ward
            </button>
            { addward ? <AddWard setisopen={setaddward}/> : <></>}

            <div>
                <WardDetails/>
            </div>
        </div>
    </div>
  )
}


export default ManageWards