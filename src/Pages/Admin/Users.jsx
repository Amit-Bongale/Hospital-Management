import React from 'react'

import Adminnav from '../../Components/Admin/Adminnav'
import Doctorstable from '../../Components/Admin/Doctorstable'

function Users() {
  return (
    <div className='flex'>
        <Adminnav />
        <section className='ml-5'>
            add users
            <Doctorstable/>
        </section>
    </div>
  )
}

export default Users