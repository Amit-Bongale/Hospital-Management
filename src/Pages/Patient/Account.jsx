import React from'react'

import AccountNav from '../../Components/Patient/Nav/AccountNav'
import PatientDetails from '../../Components/Patient/Account/PatientDetails'

function Account(){
    return(
        <div className='flex gap-4'>
            <AccountNav/>
            <PatientDetails/>
        </div>
    )

}

export default Account