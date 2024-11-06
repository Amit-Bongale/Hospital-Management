import React from "react";

function PatientAdmitForm({ setisopen }) {
  return (
    <div className="w-[100vw] h-full  absolute top-0 left-0 flex justify-center items-center  ">
      <div className=" bg-white w-[55%] h-[90%] py-6 px-8 z-20 border-2 shadow-xl  overflow-y-auto rounded-md scrollbar">
        <h2 className="text-2xl font-bold py-2 mb-5 "> ADMISSION FORM</h2>
        <form>
          <div class="grid gap-6 mb-4 md:grid-cols-2">        
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <div class="flex">
                  Patient Name : <h6 class="ml-2">Appu</h6>
                </div>
              </label>
            </div>

            <div>
              <label
                for="gender"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <div class="flex">
                  Gender : <h6 class="ml-2">male</h6>
                </div>
              </label>
            </div>

            <div>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <div class="flex">
                  Phone number : <h3 class="ml-2">1236547892</h3>
                </div>
              </label>
            </div>

            
            <div>
              <label
                for="age"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <div class="flex">
                  Age : <h3 class="ml-2">15</h3>
                </div>
              </label>
            </div>

            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <div class="flex">
                  Doctor Name : <h3 class="ml-2">Amit</h3>
                </div>
              </label>
            </div>

            <div>
              <label
                for="id"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <div class="flex">
                  Staff Id : <h3 class="ml-2">25</h3>
                </div>
              </label>
            </div>

            <div>
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ward Type
              </label>
              <select
                type="text"
                id="type"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              >
                <option value="" key=""></option>
                <option value="General" key="">
                  General
                </option>
                <option value="ICU" key="">
                  ICU
                </option>
                <option value="Emergency" key="">
                  Emergency
                </option>
                <option value="Special" key="">
                  Special 
                </option>
              </select>
            </div>

            <div>
              <label
                for="specification"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ward Number
              </label>
              <input
                type="text"
                id="specification"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>

            <div>
              <label
                for="specification"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Bed Number
              </label>
              <input
                type="text"
                id="apecification"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>

            <div>
              <label
                for="entry"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Admission Date
              </label>
              <input
                type="date"
                id="entry"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>

            <div>
              <label
                for="entry"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                In Time
              </label>
              <input
                type="time"
                id="entry"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <button 
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>

            <button
              onClick={() => setisopen(false)}
              class="ml-4 text-white bg-black hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Close
            </button>
          </div>
          
        </form>
      </div>

      <div
        className="w-[100vw] h-[100vh] bg-slate-400 opacity-90  top-0 left-0 flex justify-center items-center z-10 fixed"
        onClick={() => setisopen(false)}>
      </div>

    </div>
  );
}

export default PatientAdmitForm;
