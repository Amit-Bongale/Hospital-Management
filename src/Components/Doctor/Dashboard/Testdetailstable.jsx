import React from "react";
import { useEffect , useState } from "react";
import { useSelector } from "react-redux";
import {io} from "socket.io-client";

function Testdetails() {
  
  let [testinfo , settestinfo] = useState([]);

  const socket = io(process.env.REACT_APP_API_URL, {
    withCredentials: true,
    transports: ["websocket"], // prevents polling fallback
  });
  
  let docid = useSelector((state) => state.doctor.doctorid)

  useEffect(()=>{
    try {
      fetch(`${process.env.REACT_APP_API_URL}/test/testdetails`, {
        method: "POST",
        credentials: "include",
      })
      .then((res) => res.json())
      .then((data) => {
        settestinfo(data);
        console.log(data);
      })
      .catch((error) => console.log("Fetching Error:" , error));
    } catch (error) {
      console.log("error :", error);
    }
  },[docid])

  useEffect(() => {
      // Join doctor-specific room
      socket.emit("joinRoom",  { role: "doctor", id: docid });
  
      const handleNewPatient = (newPatient) => {
        console.log("New patient in Appointment:", newPatient);
        settestinfo((prev) => {
          const exists = prev.some((patient) => patient.id === newPatient.id);
          if (!exists) {
            return [...prev, newPatient];
          }
          return prev;
        });
      };
  
      // Listen for new patient event
      socket.on("Testupdates", handleNewPatient);
  
      // Cleanup listener on component unmount
      return () => {
        socket.off("Testupdates", handleNewPatient);
      };
    }, [socket, docid]);

  return(
    <div class="ml-4 ">
      <h1 className="font-bold text-xl p-4 text-center mt-10">Test Details</h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-auto table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-sm text-gray-700 uppercase bg-gray-50 text-center">
            <tr>
              <th scope="col" class="px-6 py-3"> Patient Id </th>
              <th scope="col" class="px-6 py-3"> Patient Name </th>
              <th scope="col" class="px-6 py-3"> Staff Id </th>
              <th scope="col" class="px-6 py-3"> Doctor Id </th>
              <th scope="col" class="px-6 py-3"> Test Name </th>
              <th scope="col" class="px-6 py-3"> Status </th>
              <th scope="col" class="px-6 py-3"> Result </th>
            </tr>
          </thead>

          <tbody>
            {testinfo.map((test)=>(
              <tr class="bg-white border-b font-medium text-sm text-gray-700  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4"> {test.patientid} </td>
                <td class="px-6 py-4"> {test.patientname} </td>
                <td class="px-6 py-4"> {test.staffid} </td>
                <td class="px-6 py-4"> {test.doctorid} </td>
                <td class="px-6 py-4"> {test.testname} </td>
                <td class="px-6 py-4"> {test.status ? test.status : "Assigned"} </td>
                <td class="px-6 py-4"> {test.result ? test.result : "Awaiting"} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Testdetails