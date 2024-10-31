import React from "react";
import { useState, useEffect } from "react";

import Addtest from "./Addtest";
import Admit from "./Admit";

function Viewpatient({ setview, id }) {
  let [test, settest] = useState(false);
  let [admit, setadmit] = useState(false);
  let [patientinfo, setpatientinfo] = useState([]);

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/patient/findpatient/${id}`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            console.log(data.message);
            alert(data.message);
          }
          const patients = Array.isArray(data) ? data : [data];
          setpatientinfo(patients);
          console.log(data);
        })
        .catch((error) => console.log("Fetching Error:", error));
    } catch (error) {
      console.log("error :", error);
    }
  }, [setview, id]);

  return (
    <div className="w-[100vw] h-full  absolute top-0 left-0 flex justify-center items-center  ">
      <div className=" bg-white w-[55%] h-[90%] py-6 px-8 z-20 border-2 shadow-xl  overflow-y-auto rounded-md scrollbar">
        <h2 className="text-2xl font-bold py-2 mb-5 "> View Patient</h2>
        <div class="grid gap-6 mb-4 md:grid-cols-2 mt-5">
          {patientinfo.map((patient)=>(
          <div>
            <div class="flex">
              <label
                for="id"
                class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Aadhar No :
              </label>
              <h1 class="ml-5"> {patient.id} </h1>
            </div>

            <div class="flex">
              <label
                for="first_name"
                class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Name :
              </label>
              <h1 class="ml-5">{patient.name}</h1>
            </div>

            <div class="flex">
              <label
                for="gender"
                class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Gender :
              </label>
              <h1 class="ml-5"> {patient.gender} </h1>
            </div>

            <div class="flex">
              <label
                for="visitors"
                class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Date of Birth :
              </label>
              <h1 class="ml-5"> {patient.dob} </h1>
            </div>

            <div class="flex">
              <label
                for="age"
                class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Age :
              </label>
              <h1 class="ml-5"> {patient.age} </h1>
            </div>

            <div class="flex">
              <label
                for="email"
                class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Email :
              </label>
              <h1 class="ml-5"> {patient.email} </h1>
            </div>

            <div class="flex">
              <label
                for="phone"
                class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Phone number :
              </label>
              <h1 class="ml-5"> {patient.phone} </h1>
            </div>

            <div class="flex">
              <label
                for="location"
                class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Address :
              </label>
              <h1 class="ml-5"> {patient.address} </h1>
            </div>

            <div class="flex">
              <label
                for="blood"
                class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Blood Group :
              </label>
              <h1 class="ml-5"> {patient.bloodgroup} </h1>
            </div>

            <div class="flex">
              <label
                for="emergency"
                class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Emergency Contact :
              </label>
              <h1 class="ml-5"> {patient.emergencycontact} </h1>
            </div>

            <div class="flex">
              <label
                for="medical history"
                class="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Medical History :
              </label>
              <h1 class="ml-5"> {patient.medicalhistory} </h1>
            </div>
          </div>
          ))}
        </div>

        <div class="flex mt-10">
          <div>
            <label
              for="adding prescription"
              class="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
            >
              Prescription
            </label>
            <input
              type="text"
              id="prescription"
              class="bg-gray-50 border border-gray-300 text-gray-900 mr-96 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add prescription"
            />
          </div>
        </div>

        <div class="flex mt-5">
          <div>Test Result : </div>
          <div class="ml-3">Positive</div>
        </div>

        <div className="mt-6 flex">
          <div>
            <button
              onClick={() => settest(true)}
              type="Add test"
              class="text-white bg-blue-700 hover:bg-blue-800 mr-14 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add test
            </button>
          </div>
          {test ? <Addtest settest={settest} /> : <></>}

          <div>
            <button
              onClick={() => setadmit(true)}
              type="Admit"
              class="text-white bg-blue-700 hover:bg-blue-800 mr-14 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Admit
            </button>
          </div>
          {admit ? <Admit setadmit={setadmit} /> : <></>}

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 mr-14 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>

          <button
            onClick={() => setview(false)}
            class="ml-4 text-white bg-black hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Close
          </button>
        </div>
      </div>

      {/* <div
            className="w-[100vw] h-[100vh] bg-slate-400 opacity-90  top-0 left-0 flex justify-center items-center z-10 fixed"
            onClick={() => setisopen(false)}>
          </div>
     */}
    </div>
  );
}

export default Viewpatient;
