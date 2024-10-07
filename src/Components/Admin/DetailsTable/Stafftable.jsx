import React from 'react'
import { useState , useEffect } from 'react'

import EditStaff from '../EditUsers/EditStaff'
import DeleteStaff from '../DeleteUser/DeleteStaff'

function Stafftable() {

  let [edit , setedit ] = useState(false)
  let [deleteitem , setdelete] = useState(false)

  let [staffinfo , setstaffinfo ] = useState([])
  let [staffid , setstaffid] = useState('')

  
  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/staff/allstaff` , { method: "POST" })
      .then((res) => res.json())
      .then((data) => setstaffinfo(data))
      .catch((err) => console.log("Error Fetching Data :" , err))
    } catch (error) {
      console.log("Error :" , error)
    }
  },[edit,deleteitem])


  return (
    <div className="w-full">

      { edit ? <EditStaff setisopen={setedit} staffid={staffid}/> : <></>}
      { deleteitem ? <DeleteStaff setisopen={setdelete} staffid={staffid} /> : <></> }

      <h1 className="font-bold text-xl p-4">Staff Details</h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 text-center">
            <tr>
              <th scope="col" class="px-6 py-3">
                Staff id
              </th>
              <th scope="col" class="px-6 py-3">
                name
              </th>
              <th scope="col" class="px-6 py-3">
                Role
              </th>
              <th scope="col" class="px-6 py-3">
                mail id
              </th>
              <th scope="col" class="px-6 py-3">
                Mobile
              </th>
              <th scope="col" class="px-6 py-3">
                Gender
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Delete</span>
              </th>
            </tr>
          </thead>

          {
            staffinfo.map((staff) => (
              <tbody>
                <tr class="bg-white border-b font-medium text-gray-700  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {staff.id}
                  </td>
                  <td class="px-6 py-4">{staff.name}</td>
                  <td class="px-6 py-4">{staff.role}</td>
                  <td class="px-6 py-4">{staff.email}</td>
                  <td class="px-6 py-4">{staff.phone}</td>
                  <td class="px-6 py-4">{staff.gender}</td>
                  <td class="px-6 py-4"> <span className="bg-red-700 py-2 px-6 text-white rounded-2xl"> Offline </span></td>
                  <td class="px-6 py-4 text-right">
                    <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => { setedit(true); setstaffid(staff.id)}}>
                      Edit
                    </button>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <button class="font-medium text-red-600 dark:text-blue-500 hover:underline" onClick={() => {setdelete(true); setstaffid(staff.id) }}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          }
          
        </table>
      </div>
    </div>
  )
}

export default Stafftable