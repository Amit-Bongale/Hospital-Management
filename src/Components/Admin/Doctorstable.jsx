import React from "react";

function Doctorstable() {
  return (
    <div className="w-f">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 text-center">
            <tr>
              <th scope="col" class="px-6 py-3">
                Doctor id
              </th>
              <th scope="col" class="px-6 py-3">
                name
              </th>
              <th scope="col" class="px-6 py-3">
                Specialization
              </th>
              <th scope="col" class="px-6 py-3">
                mail id
              </th>
              <th scope="col" class="px-6 py-3">
                Mobile
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b font-medium text-gray-700  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                d1
              </td>
              <td class="px-6 py-4">abcssdfhas</td>
              <td class="px-6 py-4">ortho adfsdf</td>
              <td class="px-6 py-4">abcdefghijklmnop sfahk@gmail</td>
              <td class="px-6 py-4">1234567890</td>
              <td class="px-6 py-4"> <span className="bg-green-700 py-2 px-6 text-white rounded-2xl"> active </span></td>
              <td class="px-6 py-4 text-right">
                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Edit
                </button>
              </td>
            </tr>
            <tr class="bg-white border-b font-medium text-gray-700 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
              </td>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Laptop PC</td>
              <td class="px-6 py-4">$1999</td>
              <td class="px-6 py-4 text-right">
                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Edit
                </button>
              </td>
            </tr>
            <tr class="bg-white font-medium text-gray-700 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Magic Mouse 2
              </td>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
              <td class="px-6 py-4 text-right">
                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Doctorstable;
