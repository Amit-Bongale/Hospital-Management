import React from 'react'

import Adminnav from '../../Components/Admin/Nav/Adminnav'
import ContactRequestDetails from '../../Components/Admin/Contact/ContactRequestDetails'


function ContactRequest() {
  return (
    <div className='flex'>
        <Adminnav />
        <div class="ml-16">
            <ContactRequestDetails/>
        </div>
    </div>
  )
}

export default ContactRequest