import React from "react";
import { useState } from "react";

function OldPatientForm({ setisopen }) {

  let [id, setid] = useState()
  let [aadharno , setaadharno] = useState()
  let [name , setname ] = useState()
  let [gender , setgender] = useState()
  let [age , setage] = useState()
  let [email , setemail] = useState()
  let [phone , setphone] = useState()
  let [dob , setdob ] = useState()
  let [address , setaddress] = useState()
  let [bloodgroup , setbloodgroup] = useState()
  let [emergencycontact , setemergencycontact] = useState()
  let [history , sethistory] = useState()
  let [disease , setdisease] = useState()
  let [type , settype] = useState()

  let [patientinfo , setpatientinfo] = useState([])

  
  function Send(){
    
    let queue = {
      "id": id,
      "name": name,
      "gender": gender,
      "mobileno" : phone,
      "disease" : disease,
      "type" : type,
      "status" : "queue"
    }

    try {
      fetch(`${process.env.REACT_APP_API_URL}/queue/createqueue`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(queue),
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


  function Search(){
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
        const patient = Array.isArray(data) ? data : [data];

        setpatientinfo(patient)
        
        setname(data.name)
        setgender(data.gender)
        setdisease(data.disease)
        settype(data.type)
        setphone(data.phone)

        console.log(data);
      })
      .catch((error) => console.log("Fetching Error:" , error));
    } catch (error) {
      console.log("error :", error);
    }
  }


  return (
    <div className="w-[100vw] h-full  absolute top-0 left-0 flex justify-center items-center  ">
      <div className=" bg-white w-[55%] h-[90%] py-6 px-8 z-20 border-2 shadow-xl  overflow-y-auto rounded-md scrollbar">
        <h2 className="text-2xl font-bold py-2 mb-5 "> Add Old Patient</h2>

        <div>
          details : {name} {gender} {phone} {disease} {type}
        </div>
     

          <div class="flex">
            <div class="grid mb-4">
              <label
                for="id"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Aadhar No
              </label>
              <input
                type="number"
                id="id"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[700px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Aadhar Number"
                required
                onChange={(e) => {setaadharno(e.target.value); setid(e.target.value)}}
              />
            </div>
            <button
            onClick={() => Search()} 
            type="search"
            class="text-sm ml-8 hover:bg-blue-100"
            >
              Search
            </button>
          </div>
          
          <div class="grid gap-6 mb-4 ">
          {patientinfo.map((patient)=>(
            <div>   
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <div class="flex">
                  Name : <h6 class="ml-2">{patient.name}</h6>
                </div>
              </label>
            </div>

            <div>
              <label
                for="gender"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <div class="flex">
                  Gender : <h6 class="ml-2">{patient.gender}</h6>
                </div>
              </label>
            </div>

            <div>
              <label
                for="age"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <div class="flex">
                  Age : <h3 class="ml-2">{patient.age}</h3>
                </div>
              </label>
            </div>

            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <div class="flex">
                  Email : <h3 class="ml-2">{patient.email}</h3>
                </div>
              </label>
            </div>

            <div>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <div class="flex">
                  Phone number : <h3 class="ml-2">{patient.phone}</h3>
                </div>
              </label>
            </div>

            <div>
              <label
                for="visitors"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <div class="flex">
                  Date of Birth : <h3 class="ml-2">{patient.dob}</h3>
                </div>
              </label>
            </div>

            <div>
              <label
                for="location"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <div class="flex">
                  Address : <h3 class="ml-2">{patient.address}</h3>
                </div>
              </label>
            </div>

            <div>
              <label
                for="blood"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <div class="flex">
                  Blood Group : <h3 class="ml-2">{patient.bloodgroup}</h3>
                </div>
              </label>
            </div>

            <div>
              <label
                for="emergency"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <div class="flex">
                  Emergency Contact : <h3 class="ml-2">{patient.emergencycontact}</h3>
                </div>
              </label>
            </div>
          
            <div>
              <label
                for="medical history"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                <div class="flex">
                  Medical History : <h3 class="ml-2">{patient.medicalhistory}</h3>
                </div>
              </label>
            </div>
            </div>
          ))}
            <div>
              <label
                for="select"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Doctor
              </label>
              <select
                type="text"
                id="select"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
              >
              <option value="" key=""></option>
                <option value="ortho" key="">
                  ortho
                </option>
                <option value="neuro" key="">
                  neuro
                </option>
              </select>
            </div>

            <div>
              <label
                for="timing"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Slots
              </label>
              <select
                type="text"
                id="timing"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
              >
               <option value="" key=""></option>
                <option value="10am-11am" key="">
                  10am-11am
                </option>
                <option value="11am-12pm" key="">
                  11am-12pm
                </option>
                <option value="4pm-5pm" key="">
                  4pm-5pm
                </option>
              </select>
            </div>
          </div>

          <div>
            <label
              for="reason"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Disease
            </label>
            <input
              type="text"
              id="reason"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => setdisease(e.target.value)}
            />
          </div>

          <div>
              <label
                for="type"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Appointment Type
              </label>
              <select
                type="text"
                id="type"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                
                onChange={(e) => settype(e.target.value)}
              >
                <option value="" key=""></option>
                <option value="Consultation" key="">
                Consultation
                </option>
                <option value="Follow up" key="">
                Follow up
                </option>
                <option value="Emergency" key="">
                Emergency
                </option>
              </select>
            </div>
         

          <div className="mt-6">
            <button 
             onClick={()=>Send()}
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
      </div>

      <div
        className="w-[100vw] h-[100vh] bg-slate-400 opacity-90  top-0 left-0 flex justify-center items-center z-10 fixed"
        onClick={() => setisopen(false)}>
      </div>

    </div>
  );
}

export default OldPatientForm;
