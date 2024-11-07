import React from "react";
import { useState } from "react";

function PatientTestForm({ setisopen }) {
  return (
    <div className="w-[100vw] h-full  absolute top-0 left-0 flex justify-center items-center  ">
      <div className=" bg-white w-[55%] h-[90%] py-6 px-8 z-20 border-2 shadow-xl  overflow-y-auto rounded-md scrollbar">
        <h2 className="text-2xl font-bold py-2 mb-5 "> Test Form</h2>
        <form>
          <div class="grid gap-6 mb-4 md:grid-cols-2">
          <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <div class="flex">
                      Name : <h6 class="ml-2">appu</h6>
                    </div>
                  </label>
                </div>

                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <div class="flex">
                      Doctor Id : <h6 class="ml-2">56</h6>
                    </div>
                  </label>
                </div>

                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <div class="flex">
                      Staff Id : <h6 class="ml-2">98</h6>
                    </div>
                  </label>
                </div>

                <div>
                  <label
                    for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <div class="flex">
                      Test Name : <h6 class="ml-2">blood test</h6>
                    </div>
                  </label>
                </div>

                <div>
                  <label
                    for="result"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                  Test Result
                  </label>
                  <input
                    type="text"
                    id="result"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                  />
                </div>

                <div>
                    <label
                      for="status"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Status
                    </label>
                    <select
                      type="text"
                      id="status"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    >
                      <option value="" key=""></option>
                      <option value="Test Pending" key="">Test Pending</option>
                      <option value="Testing" key="">Testing</option>
                      <option value="Result Pending" key="">Result Pending</option>
                      <option value="Test Result" key="">Test Result</option>
                    </select>
                </div>

              </div>
              
              <button
              //  onSubmit={() => Send()}
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
              
            </form>
            <button
            onClick={() => setisopen(false)}
            class="my-4 text-white bg-black hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            Close
            </button>
          </div>
          <div
            className="w-[100vw] h-[100vh] bg-slate-400 opacity-90  top-0 left-0 flex justify-center items-center z-10 fixed"
            onClick={() => setisopen(false)}>
          </div>
        </div>
  )
}

export default PatientTestForm

