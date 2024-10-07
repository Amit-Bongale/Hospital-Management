import React from "react";

function Schedule(){
    return(
        <div>
        <h1 className="font-bold text-xl p-4">Doctors Details</h1>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

          <thead class="text-xs text-gray-700 uppercase bg-gray-50 text-center">
            <tr>
              <th scope="col" class="px-6 py-3"> Doctor id </th>
              <th scope="col" class="px-6 py-3"> Image </th>
              <th scope="col" class="px-6 py-3"> name </th>
              <th scope="col" class="px-6 py-3"> Specialization </th>
              <th scope="col" class="px-6 py-3"> mail id </th>
              <th scope="col" class="px-6 py-3"> Mobile </th>
              <th scope="col" class="px-6 py-3"> Gender </th>
              <th scope="col" class="px-6 py-3"> Status </th>
              <th scope="col" class="px-6 py-3"> <span class="sr-only"> Edit </span> </th>
              <th scope="col" class="px-6 py-3"> <span class="sr-only"> Delete </span> </th>
            </tr>
          </thead>

          {doctorsinfo.map((doctor) => (
            <tbody>
              <tr class="bg-white border-b font-medium text-gray-700  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {doctor.id} </td>
                <td class="px-6 py-4"> <img class="w-8 h-8 rounded-full" src={doctor.image} alt="profile"/> </td>
                <td class="px-6 py-4"> {doctor.name} </td>
                <td class="px-6 py-4"> {doctor.specialization} </td>
                <td class="px-6 py-4"> {doctor.email} </td>
                <td class="px-6 py-4"> {doctor.phone} </td>
                <td class="px-6 py-4"> {doctor.gender} </td>

                <td class="px-6 py-4">
                  {
                    doctor.status ?  <span className="bg-green-700 py-2 px-6 text-white rounded-2xl"> Active </span> : <span className="bg-red-700 py-2 px-6 text-white rounded-2xl"> Inactive </span>
                  }
                </td>

                <td class="px-6 py-4 text-right">
                  <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  onClick={() => {setedit(true); setdoctorid(doctor.id)}} > Edit </button >
                </td>

                <td class="px-6 py-4 text-right">
                  <button class="font-medium text-red-600 dark:text-blue-500 hover:underline" onClick={() => {setdelete(true); setdoctorid(doctor.id)}}> Delete </button>
                </td>

              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>

    )
}

export default Schedule