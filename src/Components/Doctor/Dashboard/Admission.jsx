import React from 'react'
//import { Link } from 'react-router-dom'

function Admission() {
  return (
<div class="ml-4 ">
        <h1 className="font-bold text-xl p-4 text-center mt-10">Admission Details</h1>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-auto table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

          <thead class="text-sm text-gray-700 uppercase bg-gray-50 text-center">
            <tr>
              <th scope="col" class="px-6 py-3"> Patient Name </th>
              <th scope="col" class="px-6 py-3"> Gender </th>
              <th scope="col" class="px-6 py-3"> Age </th>
              <th scope="col" class="px-6 py-3"> Admission Date & Time </th>
              <th scope="col" class="px-6 py-3"> Ward No </th>
              <th scope="col" class="px-6 py-3"> Bed No </th>
              <th scope="col" class="px-6 py-3"> Staff Id </th>
              <th scope="col" class="px-6 py-3"> Discharge Date & Time </th>
              
            </tr>
          </thead>

            <tbody>
              <tr class="bg-white border-b font-medium text-sm text-gray-700  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                {/* <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> */}
                 {/* </td> */}
                <td class="px-6 py-4"> anusha </td>
                <td class="px-6 py-4"> female </td>
                <td class="px-6 py-4"> 20 </td>
                <td class="px-6 py-4"> 1234 </td>
                <td class="px-6 py-4"> 12 </td>
                <td class="px-6 py-4"> 4 </td>
                <td class="px-6 py-4"> 4432 </td>
                <td class="px-6 py-4"> 2344 </td>
                
              </tr>
            </tbody>
        </table>
      </div>

      
      

    </div>
  )
}

export default Admission