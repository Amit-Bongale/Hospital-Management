import React from 'react'

import Adminnav from '../../../Components/Admin/Nav/Adminnav'
import Patientstable from '../../../Components/Admin/DetailsTable/Patientstable'

function ManagePatients() {
  return (
    <div className='flex'>
        <Adminnav />
        <div className='ml-3'>
          <Patientstable/>
        </div>
    </div>
  )
}

export default ManagePatients