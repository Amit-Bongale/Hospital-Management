import React from 'react'

import Doctornav from '../../Components/Doctor/Nav/Doctornav'
import Testdetailstable from '../../Components/Doctor/Dashboard/Testdetailstable'


function Testdetails() {

    return (
      <div class="flex">
        <Doctornav/>
        <div>
            <Testdetailstable/>
        </div>
        
      </div>
    )
  }
  
  export default Testdetails
