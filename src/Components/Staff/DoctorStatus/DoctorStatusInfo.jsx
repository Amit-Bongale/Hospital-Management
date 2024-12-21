import React from 'react'
import { useState , useEffect } from 'react'

function DoctorStatusInfo() {

  let [doctorsinfo , setdoctsinfo] = useState([])

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/doctor/doctordetailsqueue` , { method: "POST" })
      .then((res) => res.json())
      .then((data) => {setdoctsinfo(data); console.log(data)})
      .catch((err) => console.log("Error Fetching Data :" , err))
    } catch (error) {
      console.log("Error :" , error)
    }
  },[])

  return (
    <div>
      <div className="w-full p-4">
        <h1 className="font-bold text-xl p-4 pl-8">Doctors Details</h1>
        <div class="relative overflow-x-auto  sm:rounded-lg p-6">
          <table class=" table-auto text-sm text-center shadow-md rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 text-center">
              <tr>
                <th scope="col" class="px-6 py-3"> Doctor id </th>
                <th scope="col" class="px-6 py-3"> Image </th>
                <th scope="col" class="px-6 py-3"> name </th>
                <th scope="col" class="px-6 py-3"> Specialization </th>
                <th scope="col" class="px-6 py-3"> Mobile </th>
                <th scope="col" class="px-6 py-3"> Status </th>
                <th scope="col" class="px-6 py-3"> Patient Waiting </th>

              </tr>
            </thead>

            {doctorsinfo.map((doctor) => (
              <tbody className='text-center'>
                <tr class="bg-white border-b font-medium text-gray-700  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                  <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {doctor.id} </td>
                  <td class="px-6 py-4"> <img class="w-8 h-8 rounded-full" src={doctor.image} alt="profile"/> </td>
                  <td class="px-6 py-4"> {doctor.name} </td>
                  <td class="px-6 py-4"> {doctor.specialization} </td>
                  <td class="px-6 py-4"> {doctor.phone} </td>
                  <td class="px-6 py-4">
                    {
                      doctor.status ?  <span className="bg-green-700 py-2 px-6 text-white rounded-2xl"> Active </span> : <span className="bg-red-700 py-2 px-6 text-white rounded-2xl"> Inactive </span>
                    }
                  </td>
                  <td class="px-6 py-4"> {doctor.queueCount} </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  )
}

export default DoctorStatusInfo