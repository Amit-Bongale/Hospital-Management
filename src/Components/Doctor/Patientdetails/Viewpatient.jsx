import React from 'react'
import { useState } from 'react'


import Addtest from './Addtest'
import Admit from './Admit'


function Viewpatient({setview} ) {
  let [test, settest] = useState(false)
  let [admit, setadmit] = useState(false)


        return(
          <div className="w-[100vw] h-full  absolute top-0 left-0 flex justify-center items-center  ">
          <div className=" bg-white w-[55%] h-[90%] py-6 px-8 z-20 border-2 shadow-xl  overflow-y-auto rounded-md scrollbar">
            <h2 className="text-2xl font-bold py-2 mb-5 "> View Patient</h2>
            <form>
              <div class="grid gap-6 mb-4 md:grid-cols-2">
                <div>
                  <label
                    for="id"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Patient Id
                  </label>
                  <h1></h1>
                </div>

                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <h1></h1>
                </div>
    
                <div>
                  <label
                    for="gender"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gender
                  </label>
                  <h1></h1>
                </div>

                <div>
                  <label
                    for="visitors"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Date of Birth
                  </label>
                  <h1></h1>
                </div>

                <div>
                  <label
                    for="age"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Age
                  </label>
                  <h1></h1>
                </div>
    
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <h1></h1>
                </div>
    
                <div>
                  <label
                    for="phone"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone number
                  </label>
                </div>
    
                <div>
                  <label
                    for="location"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Address
                  </label>
                  <h1></h1>
                </div>
    
                <div>
                  <label
                    for="blood"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Blood Group
                  </label>
                  <h1></h1>
                </div>
    
                <div>
                  <label
                    for="emergency"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Emergency Contact
                  </label>
                  <h1></h1>
                </div>
              </div>
              
              <div>
                <label
                  for="medical history"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Medical History
                </label>
                <h1></h1>
              </div>

              <div class="flex">
              <div>
                <label
                  for="medical history"
                  class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                >
                  Prescription
                </label>
                <input
                  type="text"
                  id="prescription"
                  class="bg-gray-50 border border-gray-300 text-gray-900 mr-44 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add prescription"
                />
              </div>

              <div className="mt-6">
                <button 
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 ml-10 mt-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
              </div>

              <div class="flex mt-5">
              <div >
                <label
                  for="test details"
                  class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                >
                  Test Details
                </label>
                <input
                  type="text"
                  id="test details"
                  class="bg-gray-50 border border-gray-300 text-gray-900 mr-44 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Add test details"
                />
              </div>

              <div className="mt-6">
                <button 
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 ml-10 mt-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
              </div>


              <div className="mt-6 flex">
                
                <button 
                onClick={() => settest(true)}
                type="Add test"
                class="text-white bg-blue-700 hover:bg-blue-800 mr-14 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add test
                </button>
                {test ?<Addtest settest={settest}/>
                :<></>}

                <button 
                onClick={() => setadmit(true)}
                type="Admit"
                class="text-white bg-blue-700 hover:bg-blue-800 mr-14 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Admit
                </button>
                {admit ?<Admit setadmit={setadmit}/>
                :<></>}
    
                <button
                  onClick={() => setview(false)}
                  class="ml-4 text-white bg-black hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Close
                </button>
              </div>
              
            </form>
          </div>
    
          {/* <div
            className="w-[100vw] h-[100vh] bg-slate-400 opacity-90  top-0 left-0 flex justify-center items-center z-10 fixed"
            onClick={() => setisopen(false)}>
          </div>
     */}
        </div>
        )
    }

    export default Viewpatient
