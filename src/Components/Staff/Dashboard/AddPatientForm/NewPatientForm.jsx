import React from "react";
import { useState } from "react";

function NewPatientForm({ setisopen }) {

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
  // let [disease , setdisease] = useState()

  
  function Send(){

    let data = {
      "id": id,
      "name": name,
      "gender": gender,
      "email": email,
      "phone" : phone,
      "dob" : dob,
      "age" :age,
      "address" : address,
      "emergencycontact" : emergencycontact,
      "bloodgroup" : bloodgroup,
      "adharno": aadharno,
      "medicalhistory" : history,
    }

    try {
      fetch(`${process.env.REACT_APP_API_URL}/patient/createnewpatient`, {
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


  return (
    <div className="w-[100vw] h-full  absolute top-0 left-0 flex justify-center items-center  ">
      <div className=" bg-white w-[55%] h-[90%] py-6 px-8 z-20 border-2 shadow-xl  overflow-y-auto rounded-md scrollbar">
        <h2 className="text-2xl font-bold py-2 mb-5 "> Add New Patient</h2>
        <form onSubmit={() => Send()}>
          <div class="grid gap-6 mb-4 md:grid-cols-2">
            <div>
              <label
                for="id"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Aadhar No
              </label>
              <input
                type="number"
                id="id"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Aadhar Number"
                required
                onChange={(e) => {setaadharno(e.target.value); setid(e.target.value)}}
              />
            </div>
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
                placeholder="Enter Patient name"
                required
                onChange={(e) => {setname(e.target.value)}}
              />
            </div>

            <div>
              <label
                for="gender"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="gender"
                required
                onChange={(e) => setgender(e.target.value)}
              >
                <option value="" key=""></option>
                <option value="Male" key="">  Male </option>
                <option value="Female" key=""> Female </option>
                <option value="Others" key=""> Others </option>
              </select>
            </div>

            <div>
              <label
                for="age"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="eg..15"
                required
                onChange={(e) => setage(e.target.value)}
              />
            </div>

            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="xyz@gmail.com"
                onChange={(e) => setemail(e.target.value)}
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
                pattern="[0-9]{10}"
                required
                onChange={(e) => setphone(e.target.value)}
              />
            </div>

            

            <div>
              <label
                for="visitors"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="visitors"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
                onChange={(e) => setdob(e.target.value)}
              />
            </div>

            <div>
              <label
                for="location"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <input
                type="text"
                id="location"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="location / street"
                required
                onChange={(e) => setaddress(e.target.value)}
              />
            </div>

            <div>
              <label
                for="blood"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Blood Group
              </label>
              <select
                name="blood"
                id="blood"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="blood group"
                required
                onChange={(e) => setbloodgroup(e.target.value)}
              >
                <option value="" key=""></option>
                <option value="A+" key="">
                  A+
                </option>
                <option value="A-" key="">
                  A-
                </option>
                <option value="B+" key="">
                  B+
                </option>
                <option value="B-" key="">
                  B-
                </option>
                <option value="O+" key="">
                  O+
                </option>
                <option value="O-" key="">
                  O-
                </option>
                <option value="AB+" key="">
                  AB+
                </option>
                <option value="AB-" key="">
                  AB-
                </option>
              </select>
            </div>

            <div>
              <label
                for="emergency"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Emergency Contact
              </label>
              <input
                type="tel"
                id="emergency"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-456-6789"
                pattern="[0-9]{10}"
                required
                onChange={(e) => setemergencycontact(e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <label
              for="medical history"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Medical History
            </label>
            <input
              type="text"
              id="medical history"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Allery / Mediacl conditions"
              onChange={(e) => sethistory(e.target.value)}
            />
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

export default NewPatientForm;
