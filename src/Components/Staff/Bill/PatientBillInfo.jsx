import React from "react";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";

import { Printer, Search } from 'lucide-react';
import {io} from "socket.io-client";



function PatientBillInfo() {

  let [queueinfo , setqueueinfo] = useState([]) 

  const [searchTerm, setSearchTerm] = useState("");

  const socket = io(process.env.REACT_APP_API_URL, {
    withCredentials: true,
    transports: ["websocket"], // prevents polling fallback
  });

  function calculatetotal(a,b,c){
    return a+b+c
  }

  useEffect(()=>{

    try {
      fetch(`${process.env.REACT_APP_API_URL}/bill/bills`, {
        method: "POST",
        credentials: "include",
      })
      .then((res) => res.json())
      .then((data) => {
        setqueueinfo(data);
        console.log(data);
      })
      .catch((error) => console.log("Fetching Error:" , error));
    } catch (error) {
      console.log("error :", error);
    }
  },[])

  useEffect(() => {
    // Join doctor-specific room
    socket.emit("joinRoom", { role: "staff"});

    const handleNewPatient = (newPatient) => {
      console.log("New patient in Appointment:", newPatient);
      setqueueinfo((prev) => {
        const exists = prev.some((patient) => patient.id === newPatient.id);
        if (!exists) {
          return [...prev, newPatient];
        }
        return prev;
      });
    };

    // Listen for new patient event
    socket.on("newBill", handleNewPatient);

    // Cleanup listener on component unmount
    return () => {
      socket.off("newBill", handleNewPatient);
    };

  }, [socket]);


  // Filter patients by patientid or patientname
  const filteredQueue = queueinfo.filter(
    (patient) =>
      patient.patientid.toString().includes(searchTerm) ||
      patient.patientname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
        <div className="p-6 max-w-full bg-white">
          {/* Header and Search */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 ml-4">
              Pending Patients
            </h2>
            <div className="relative ml-[650px]">
              <input
                type="text"
                placeholder="Search patients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:border-blue-500"
              />
              <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto  ml-12 mt-10">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Bill NO
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Patient ID
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-700">
                    Bill Amount
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-medium text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredQueue.map((patient) => (
                  <tr
                    key={patient.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    < td className="px-6 py-4 text-sm text-gray-900 text-center">
                      {patient.billno}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {patient.patientid}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {patient.patientname}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      { new Date (patient.date).toLocaleDateString('EN-IN')}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          patient.status === "Pending Payment"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {patient.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 text-right">
                      ₹{calculatetotal(patient.fees.consultationfee ,patient.fees.admissionfee , patient.fees.testfee)}
                    </td>
                    <td className="px-6 py-4 text-sm text-center">
                      <Link to={`/staff/printbill/${patient.billno}/${patient.patientid}`}>
                        <button
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                        >
                          <Printer className="w-4 h-4" />
                          Print Bill
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        </div>
      </div>

      {/*  */}

    </div>
  );
}

export default PatientBillInfo;
