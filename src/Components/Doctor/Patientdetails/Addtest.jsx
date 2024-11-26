import React, { useEffect } from "react";
import { useState } from "react";

import { useSelector } from "react-redux";

function Addtest({settest ,id, name}){

  let [staffid, setstaffid] = useState()
  // let [doctorid , setdoctorid ] = useState()
  let [testname , settestname] = useState()

  let [staffinfo , setstaffinfo] = useState([])

  const doctorid = useSelector((state) => state.doctor.doctorid);
  
  function Send(e){

    e.preventDefault()
    let data = {
      "staffid": staffid,
      "patientid": id,
      "patientname" : name,
      "doctorid": doctorid,
      "testname": testname,
    }

    try {
      fetch(`${process.env.REACT_APP_API_URL}/test/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          console.log(data.message);
          alert(data.message);
        }
        console.log(data);
      })
      .catch((error) => console.log("Fetching Error:" , error));
    } catch (error) {
      console.log("error :", error);
    }
  }

  useEffect(()=>{
    
    try {
      fetch(`${process.env.REACT_APP_API_URL}/staff/allstaff`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
          })
        .then((res) => res.json())
        .then((data) => {
          setstaffinfo(data);

          console.log('staff dataa:', data);
        })
        .catch((err) => console.log("Error Fetching Data :", err));
    } catch (error) {
      console.log("Error :", error);
    }
  
  },[]
  )

  // setpatientid(data.patientid)

    
    return(
      <div className="w-[100vw] h-full  absolute top-0 left-0 flex justify-center items-center  ">
        <div className=" bg-white w-[55%] h-[90%] py-6 px-8 z-20  border-2 shadow-xl rounded-3xl">
        <h2 className="text-2xl font-bold py-2 mb-5 ">Add Test</h2>
        <form onSubmit={Send}>
          <div className="grid gap-6 mb-5  md:grid-cols-2">
            <div class="flex">
              <label
                className="block mb-1 mr-4 text-lg font-medium text-gray-900 dark:text-white">
                Patient Id :
              </label>
              <div class="text-lg font-normal">
                <h5>{id}</h5>
              </div>
            </div>

            <div class="flex">
              <label
                className="block mb-1 mr-4 text-lg font-medium text-gray-900 dark:text-white">
                Patient Name :
              </label>
              <div class="text-lg font-normal">
                <h5>{name}</h5>
              </div>
            </div>

            <div class="flex">
              <label
                className="block mb-2 mr-4 text-lg font-medium text-gray-900 dark:text-white">
                Doctor Id :  
              </label>
              <div class="text-lg font-normal">
                <h5>{doctorid}</h5>
              </div>
              
            </div>

            <br></br>

            <div>
              <label
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Staff Id
              </label>
              <select
              id="Staff"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={(e) => {setstaffid(e.target.value)}}
            >
              <option value="">Choose Staffid</option>
              {staffinfo.map((staff) => (
                <option key={staff.id} value={staff.id}>  {staff.name} </option>
              ))}

            </select>

            </div>

            <br></br>
            
            <div>
              <label
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Test Name
              </label>
              <input
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Test Name"
                type="text"
                required
                onChange={(e) => {settestname(e.target.value)}}

              />
            </div>
          </div>
          
          <button
            type="submit"
            className="text-white mt-40 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>

          <button
            onClick={() => settest(false)}
            className="ml-4 text-white bg-black hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Close
          </button>

        </form>
      </div>
      <div
        className="w-[100vw] h-[100vh] bg-slate-400 opacity-90  top-0 left-0 flex justify-center items-center z-10 fixed"
        onClick={() => settest(false)}
      ></div>
    </div>

  )
}

export default Addtest