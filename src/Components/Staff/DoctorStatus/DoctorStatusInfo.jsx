import React from 'react'

function DoctorStatusInfo() {
  return (
    <div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead class="text-sm text-gray-700 uppercase bg-gray-50 text-center">
            <tr>
              <th scope="col" class="px-6 py-3"> DOCTOR ID </th>
              <th scope="col" class="px-6 py-3"> DOCTOR NAME </th>
              <th scope="col" class="px-6 py-3"> AVALIABLITY </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}

export default DoctorStatusInfo