import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Viewpatient from "../Patientdetails/Viewpatient";

import {io} from "socket.io-client";

import {User, Activity,NotepadText,UserSearch} from 'lucide-react';


function Appointments() {

  // const socket = io(process.env.REACT_APP_API_URL)
  const socket = io(process.env.REACT_APP_API_URL, {
    withCredentials: true,
    transports: ["websocket"], // prevents polling fallback
  });
  
  let docid = useSelector((state) => state.doctor.doctorid)

  let [view, setview] = useState(false);
  let [queueinfo, setqueueinfo] = useState([]);

  let [id, setid] = useState('')
  let [appontmenttype , setappointmettype] = useState('')

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/queue/allpatient/${docid}`, {
        method: "POST",
        credentials: "include",
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
  }, [view, docid]);

  useEffect(() => {

    // Join doctor-specific room
    socket.emit("joinRoom", { role: "doctor", id: docid });

    // Listen for new patient event
    const handleNewPatient = (newPatient) => {
      console.log("New patient in queue:", newPatient);
      setqueueinfo((prev) => {
        // Check if the patient already exists in the queue
        const exists = prev.some((patient) => patient.id === newPatient.id);
        if (!exists) {
          return [...prev, newPatient];
        }
        return prev;
      });
    };

    socket.on("newPatientInQueue", handleNewPatient);

    // Cleanup listener on component unmount
    return () => {
      socket.off("newPatientInQueue", handleNewPatient);
    };
  }, [docid, socket]);


  const getStatusColor = (status) => {
    switch (status) {
      case "Followup":
        return "bg-yellow-200 text-black";
      case "Casual":
        return "bg-gray-100 text-gray-600";
      case "Emergency":
        return "bg-red-100 text-white";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };


  if (queueinfo.length === 0){
    return(
      <div className="flex items-center justify-center text-center w-[80vw] h-[100vh]">
        <h1>No Patients in Queue</h1>
      </div>
    )
  }

  return (
    <div className=" w-[80vw] mt-6 ml-2">
      {queueinfo.map((queue) => (
        <div>
          <div className="w-full m-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border-2 border-gray-200">
            <div className="p-4 flex items-center justify-between space-x-4">
              {/* Patient Info Section */}
              <div className="flex items-center space-x-4 flex-grow">
                {/* User Icon */}
                <div className="bg-blue-100 p-3 rounded-full">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-4">
                    <h3 className="font-semibold text-lg text-gray-900">
                      {queue.name}
                    </h3>

                    <span className={`px-2 py-1 text-sm rounded-full ${getStatusColor(queue.type)} border border-gray-200`} >
                      <div className={`flex items-center text-gray-500 text-sm`}>
                        <NotepadText className="w-4 h-4 mr-1" />
                        <span>{queue.type}</span>
                      </div> 
                    </span>
                  </div>

                  <div className="flex items-center space-x-8 mt-3">
                    <div className='flex items-center text-gray-500 text-sm'>
                      <Activity className="w-4 h-4 mr-1" />
                      <span>{queue.disease}</span>
                    </div>

                    <div className="flex items-center text-gray-500 text-sm">
                      <UserSearch className="w-4 h-4 mr-1" />
                      <span>{queue.gender}</span>
                    </div>

                    <div className="flex items-center">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                        Waiting
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons div */}
              <div className="flex space-x-2">
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={() => {setview(true); setid(queue.id); setappointmettype(queue.type)} }>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {view ? <Viewpatient setview={setview} id={id} appointmenttype={appontmenttype}/> : <></>}
      
    </div>
  );
}

export default Appointments;
