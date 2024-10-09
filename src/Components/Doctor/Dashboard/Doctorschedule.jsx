import React from "react";

function Schedule(){
    return(
        <div class="ml-72 mr-12">
        <h1 className="font-bold text-xl p-4">Schedule Available</h1>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

          <thead class="text-sm text-gray-700 uppercase bg-gray-50 text-center">
            <tr>
              <th scope="col" class="px-6 py-3"> 07:00AM - 09:00AM </th>
              <th scope="col" class="px-6 py-3"> 09:00AM - 09:30AM </th>
              <th scope="col" class="px-6 py-3"> 09:30AM - 11:00AM </th>
              <th scope="col" class="px-6 py-3"> 11:00AM - 11:30AM </th>
              <th scope="col" class="px-6 py-3"> 11:30AM - 12:30PM </th>
              <th scope="col" class="px-6 py-3"> 12:30PM - 03:00PM </th>
              <th scope="col" class="px-6 py-3"> 03:00PM - 04:00PM </th>
              <th scope="col" class="px-6 py-3"> 04:00PM - 05:30PM </th>
              <th scope="col" class="px-6 py-3"> 05:30PM - 06:00PM </th>
              <th scope="col" class="px-6 py-3"> 06:00PM - 08:00PM </th>
              <th scope="col" class="px-6 py-3"> 08:00PM - 08:30PM </th>
              <th scope="col" class="px-6 py-3"> 08:30PM - 09:30PM </th>
              <th scope="col" class="px-6 py-3"> 09:30PM - 10:00PM </th>


            </tr>
          </thead>

            <tbody>
              <tr class="bg-white border-b font-medium text-sm text-gray-700  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                {/* <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> */}
                 {/* </td> */}
                <td class="px-6 py-4"> OT </td>
                <td class="px-6 py-4"> Break </td>
                <td class="px-6 py-4"> Checkup </td>
                <td class="px-6 py-4"> Break </td>
                <td class="px-6 py-4"> Rounds </td>
                <td class="px-6 py-4"> Break </td>
                <td class="px-6 py-4"> Rounds </td>
                <td class="px-6 py-4"> Checkup </td>
                <td class="px-6 py-4"> Break </td>
                <td class="px-6 py-4"> OT </td>
                <td class="px-6 py-4"> Break </td>
                <td class="px-6 py-4"> Checkup </td>
                <td class="px-6 py-4"> Rounds </td>
                

                

              </tr>
            </tbody>
        </table>
      </div>
    </div>

    )
}

export default Schedule