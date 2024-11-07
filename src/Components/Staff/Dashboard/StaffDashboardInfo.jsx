import React, { useEffect } from 'react'
import { useState } from 'react'

import NewPatientForm from './AddPatientForm/NewPatientForm'
import OldPatientForm from './AddPatientForm/OldPatientForm'

function StaffDashboardInfo() {
  let [newpatient,setnewpatient] = useState(false)
  let [oldpatient,setoldpatient] = useState(false)

  let [queueinfo , setqueueinfo] = useState([]) 

  useEffect(()=>{

    try {
      fetch(`${process.env.REACT_APP_API_URL}/queue/allpatient`, {
        method: "POST",
      })
      .then((res) => res.json())
      .then((data) => {
        setqueueinfo(data);
        console.log(data);
      })
      .catch((error) => console.log("Fetching Error:" , error));
    } catch (error) {
      console.log("error :", error);
    }

  },[newpatient,oldpatient])

    
  return (
    <div>
      <div className="flex">
        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <button
          onClick={() => setnewpatient(true)}
          className="bg-black text-white py-3 px-6 rounded-3xl my-4"> New Patient  </button>
        </span>

        <span className="grid items-start px-2 text-xl font-medium lg:px-4">
          <button 
          onClick={() => setoldpatient(true)}
          className="bg-black text-white py-3 px-6 rounded-3xl my-4"> Old Patient  </button>
        </span>
      </div>

     
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg justify-center">
          <table class="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead class="text-sm text-gray-700 uppercase bg-gray-50 text-center">
              <tr>
                <th scope="col" class="px-6 py-3"> PATIENT ID </th>
                <th scope="col" class="px-6 py-3"> PATIENT NAME </th>
                <th scope="col" class="px-6 py-3"> GENDER </th>
                <th scope="col" class="px-6 py-3"> DISEASE </th>
                <th scope="col" class="px-6 py-3"> MOBILENO </th>
                {/* <th scope="col" class="px-6 py-3"> TYPE </th> */}
                <th scope="col" class="px-6 py-3"> STATUS </th>
              </tr>
            </thead>
            
            {queueinfo.map((queue)=>(
              <tbody class="text-center">
                <tr>
                  <td  class="px-6 py-3"> {queue.id} </td>
                  <td  class="px-6 py-3"> {queue.name} </td>
                  <td  class="px-6 py-3"> {queue.gender} </td>
                  <td  class="px-6 py-3"> {queue.disease} </td>
                  <td  class="px-6 py-3"> {queue.mobileno} </td>
                  {/* <td  class="px-6 py-3"> {queue.type} </td> */}
                  <td class="px-6 py-3"> {queue.status} </td>
                </tr>
              </tbody>
            ))}
            
          </table>
        </div>
    
      {newpatient ?  <NewPatientForm setisopen={setnewpatient}/> : <></>}
      {oldpatient ?  <OldPatientForm setisopen={setoldpatient}/> : <></>}
       
    </div>
  )
}

export default StaffDashboardInfo