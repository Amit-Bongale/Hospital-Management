import React, { useEffect } from "react";
import { useState } from "react";
//import { Link } from 'react-router-dom'

import Viewpatient from "../Patientdetails/Viewpatient";

function Appointments() {
  let [view, setview] = useState(false);

  let [queueinfo, setqueueinfo] = useState([]);

  useEffect(()=> {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/queue/allpatient`, {
        method: "POST",
      })
      .then((res) => res.json())
      .then((data) => {
        setqueueinfo(data);
        console.log(data);
      })
      .catch((error) => console.log("Fetching Error:", error));
    } catch (error) {
      console.log("error :", error);
    }
  },[view])


  return (
    <div className=" w-full mt-10">
      {queueinfo.map((queue) => (
        <div class="flex text-lg font-semibold ml-20 text-gray-700 border-black border-2 rounded-lg h-20 mt-4">
          <div class="mr-20 ml-20 mt-4">
            <p>NAME</p>
            <p class="text-base font-medium">{queue.name} </p>
          </div>

          <div class="mr-20 ml-20 mt-4">
            <p>GENDER</p>
            <p class="text-base font-medium ">{queue.gender} </p>
          </div>

          <div class="mr-20 ml-20 mt-4">
            <p>DISEASE</p>
            <p class="text-base font-medium">{queue.disease} </p>
          </div>

          <div class="mr-10 ml-20 mt-7">
            <button onClick={() => setview(true)} class="text-blue-600 hover:cursor-pointer">VIEW</button>
          </div>
      {view ? <Viewpatient setview={setview} id={queue.id} /> : <></>}

        </div>
        
      ))}
    </div>
  );
}

export default Appointments;
