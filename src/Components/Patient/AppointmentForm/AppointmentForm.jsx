import React from 'react'
import { Link } from 'react-router-dom'

function AppointmentForm() {
  return (
    <div className="w-[100vw] h-full mt-4 left-0 flex justify-center items-center  ">
    <div className=" bg-white w-[55%] h-[90%] py-6 px-8 z-20  rounded-3xl">
      <h2 className="text-2xl font-bold py-2 mb-5 ">Appointment Booking</h2>
      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div>
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label for="gendere" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              gender
            </label>
            <select name="gender" id="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="gender"
              required>
              <option value="" key=""></option>
              <option value="Male" key="">Male</option>
              <option value="Female" key="">Female</option>
              <option value="Others" key="">Others</option>
            </select>
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your age"
              required
            />
          </div>
          <div>
            <label
              for="website"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Specialization
            </label>
            <input
              type="text"
              id="specialization"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Specialization"
              required
            />
          </div>
          <div>
            <label
              for="disease_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Disease
            </label>
            <input
              type="text"
              id="disease_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          
          <div>
            <label
              for="visitors"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date
            </label>
            <input
              type="date"
              id="visitors"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Time
            </label>
            <input
              type="time"
              id="time"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>

        <Link to="/">
          <button
            class="my-4 ml-4 text-white bg-black hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            close
          </button>
        </Link>
        

        
      </form>
      
    </div>
   
  </div>
  )
}

export default AppointmentForm