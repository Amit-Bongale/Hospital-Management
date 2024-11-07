import React from 'react'

import Adminnav from '../../Components/Admin/Nav/Adminnav'
import ContactRequestDetails from '../../Components/Admin/Contact/ContactRequestDetails'


function ContactRequest() {
  return (
    <div className='flex gap-4'>
        <Adminnav />
        <div className='ml-40'>
            <ContactRequestDetails/>
        </div>
    </div>
  )
}

export default ContactRequest