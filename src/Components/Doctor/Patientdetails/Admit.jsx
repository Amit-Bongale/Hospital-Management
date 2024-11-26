import React from "react";
import {useState,useEffect} from "react";

import { useSelector } from "react-redux";

function Admit({setadmit, id , name}){
  let [staffid, setstaffid] = useState()
  // let [doctorid , setdoctorid ] = useState()
  let [reason , setreason ] = useState()

  let [staffinfo , setstaffinfo] = useState([])

  const doctorid = useSelector((state) => state.doctor.doctorid);
  
  function Send(e){

    e.preventDefault()
    let data = {
      "patientid": id,
      "patientname" : name,
      "doctorid": doctorid,
      "staffid": staffid,
      "reason": reason
    }

    try {
      fetch(`${process.env.REACT_APP_API_URL}/admission/createadmission`, {
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

    return(
        <div className="w-[100vw] h-full  absolute top-0 left-0 flex justify-center items-center  ">
        <div className=" bg-white w-[55%] h-[90%] py-6 px-8 z-20  border-2 shadow-xl rounded-3xl">
        <h2 className="text-2xl font-bold py-2 mb-5 ">Admission</h2>
        <form onSubmit={Send}>
          <div className="grid gap-6 mb-5  md:grid-cols-2">

            <div class='flex '>
              <label
                className="block mb-1 mr-4 text-lg font-medium text-gray-900 dark:text-white">
                Patient Id :
              </label>
              <div class="text-lg font-medium">
                <h5>{id}</h5>
              </div>
            </div>

            
            <div class='flex'>
              <label
                className="block mb-1 mr-4 text-lg font-medium text-gray-900 dark:text-white">
                Patient Name :
              </label>
              <div class="text-lg font-medium">
                <h5>{name}</h5>
              </div>
              
            </div>

            <div class="flex">
              <label
                className="block mb-1 mr-4 text-lg font-medium text-gray-900 dark:text-white">
                Doctor Id :
              </label>
              <div class="text-lg font-medium">
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

            
          </div>

          <div>
              <label
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Reason
              </label>
              <input
                type="text"
                className="bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                onChange={(e) => {setreason(e.target.value)}}
              />
            </div>
          
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>

          <button
            onClick={() => setadmit(false)}
            className="ml-4 text-white bg-black hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Close
          </button>

        </form>
      </div>
      <div
        className="w-[100vw] h-[100vh] bg-slate-400 opacity-90  top-0 left-0 flex justify-center items-center z-10 fixed"
        onClick={() => setadmit(false)}
      ></div>
    </div>
    )
}

export default Admit