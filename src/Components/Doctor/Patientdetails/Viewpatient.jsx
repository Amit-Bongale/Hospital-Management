import React from 'react'
import { useState } from 'react'


import Addtest from './Addtest'
import Admit from './Admit'


function Viewpatient({setview} ) {
  let [test, settest] = useState(false)
  let [admit, setadmit] = useState(false)


        return(
            <div className="w-[100vw] h-full  absolute top-0 left-0 flex justify-center items-center  ">
            <div className=" bg-white w-[65%] h-[100%] py-6 px-8 z-20   shadow-xl rounded-3xl">
                <h2 className="text-2xl font-bold py-2 mb-5 ">View Patient</h2>
            < div className="grid gap-6 mb-6 md:grid-cols-2">

            <div class = "flex">
              <label
                class="block mb-2 text-s font-medium text-gray-900 dark:text-white mr-5">
                Patient Id
              </label>
              <div class="bg-gray-50 border border-gray-300 border-transparent text-gray-900 text-s rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
            </div>

            <div class = "flex">
              <label
                class="block mb-2 text-s font-medium text-gray-900 dark:text-white mr-5">
                Name
              </label>
              <div class="bg-gray-50 border border-gray-300 border-transparent text-gray-900 text-s rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
            </div>

            <div class = "flex">
              <label
                class="block mb-2 text-s font-medium text-gray-900 dark:text-white mr-5">
                Gender
              </label>
              <div class="bg-gray-50 border border-gray-300 border-transparent text-gray-900 text-s rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
            </div>

            <div class = "flex">
              <label
                class="block mb-2 text-s font-medium text-gray-900 dark:text-white mr-5">
                Email
              </label>
              <div class="bg-gray-50 border border-gray-300 border-transparent text-gray-900 text-s rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
            </div>

            <div class = "flex">
              <label
                class="block mb-2 text-s font-medium text-gray-900 dark:text-white mr-5">
                Phone No
              </label>
              <div class="bg-gray-50 border border-gray-300 border-transparent text-gray-900 text-s rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
            </div>

            <div class = "flex">
              <label
                class="block mb-2 text-s font-medium text-gray-900 dark:text-white mr-5">
                DOB
              </label>
              <div class="bg-gray-50 border border-gray-300 border-transparent text-gray-900 text-s rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
            </div>

            <div class = "flex">
              <label
                class="block mb-2 text-s font-medium text-gray-900 dark:text-white mr-5">
                Age
              </label>
              <div class="bg-gray-50 border border-gray-300 border-transparent text-gray-900 text-s rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
            </div>

            <div class = "flex">
              <label
                class="block mb-2 text-s font-medium text-gray-900 dark:text-white mr-5">
                Blood Group
              </label>
              <div class="bg-gray-50 border border-gray-300 border-transparent text-gray-900 text-s rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
            </div>

            <div class = "flex">
              <label
                class="block mb-2 text-s font-medium text-gray-900 dark:text-white mr-5">
                Address
              </label>
              <div class="bg-gray-50 border border-gray-300 border-transparent text-gray-900 text-s rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
            </div>

            <div class = "flex">
              <label
                class="block mb-2 text-s font-medium text-gray-900 dark:text-white mr-5">
                Medical History
              </label>
              <div class="bg-gray-50 border border-gray-300 border-transparent text-gray-900 text-s rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              </div>
            </div>

            </div>

            <div class = "mt-5">
                <h1 class = "text-bold text-2xl"> Prescription </h1>
                <div class = "mt-3">
                    <input class="w-[55%] h-[100%] shadow-md">

                    </input>
                </div>
            </div>

            <div class = "mt-5">
                <h1 class = "text-bold text-2xl"> Test Details </h1>
                <div class = "mt-3">
                    <input class = "w-[55%] h-[100%] shadow-md">

                    </input>
                </div>
            </div>

            <div class = "mt-10 ml-[23%] mr-20 flex ">
              <div>
                <button 
                  class=" text-2xl"
                  onClick={() => settest(true)}>
                  Add Test 
                </button>
              </div>
              {test ?<Addtest settest={settest}/>
              :<></>}

              <div>
                <button 
                  class="ml-[90%] mr-20 text-2xl"
                  onClick={() => setadmit(true)}>
                  Admit
                </button>
              </div>
              {admit ?<Admit setadmit={setadmit}/>
              :<></>}

              <div>
                <button  class="ml-[150%] mr-20 text-2xl"  onClick={() => setview(false)}>Close</button>
              </div>
            </div>


            </div>
            </div>
        )
    }

    export default Viewpatient
