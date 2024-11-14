// import React from 'react'
// import { useState, useEffect } from 'react';

// import { useSelector } from 'react-redux';

// function PatientMedicalHistory() {
//   let[medicalhistoryinfo , setmedicalhistoryinfo] = useState([])

//   const patientid = useSelector((state) => state.patient.patientId)

//   useEffect(() => {
//     try {
//       fetch(`${process.env.REACT_APP_API_URL}/medicalhistory/patientmedicalhistory/${patientid}`, {
//         method: "POST",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.message) {
//             console.log(data.message);
//             alert(data.message);
//           }
//           const medicalhistory = Array.isArray(data) ? data : [data];
//           setmedicalhistoryinfo(medicalhistory);
//           console.log(data);
//         })
//         .catch((error) => console.log("Fetching Error:", error));
//     } catch (error) {
//       console.log("error :", error);
//     }
//   }, [patientid]);
  
//         return (
//           <div>
//             <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
//               <table class="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
//                 <thead class="text-sm text-gray-700 uppercase bg-gray-50 text-center">
//                 {/* <div className="overflow-x-auto max-h-[200px]">
//                 <table className="w-full">
//                 <thead> */}
//                   <tr>
//                     {/* <tr className="text-left border-b"> */}
//                     <th className="pb-2"> PATIENT ID </th>
//                     <th className="pb-2"> DOCTOR ID </th>
//                     <th className="pb-2"> DISEASE </th>
//                     <th className="pb-2"> PRESCRIPTION </th>
//                   </tr>
//                 </thead>
      
//                 {medicalhistoryinfo.map((medicalhistory)=>(
//                 <tbody class="text-center">
//                   <tr className="border-b last:border-0">
//                   <td  class="px-6 py-3 font-medium"> {medicalhistory.patientid} </td> 
//                     <td  class="px-6 py-3"> {medicalhistory.doctorid} </td>
//                     <td  class="px-6 py-3 text-gray-600"> {medicalhistory.disease} </td> 
//                     <td  class="px-6 py-3 text-gray-600"> {medicalhistory.prescription} </td>
//                   </tr>
//                 </tbody>
//                 ))}
//               </table>
//             </div>
             
//           </div>
//         )
    
// }

// export default PatientMedicalHistory

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Calendar, User, ClipboardList } from 'lucide-react';

function PatientMedicalHistory() {
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const patientId = useSelector((state) => state.patient.patientId);

  const appointmentTypes = ['all', 'Regular Checkup', 'Emergency', 'Routine Physical'];

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/medicalhistory/patientmedicalhistory/${patientId}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        const historyData = Array.isArray(data) ? data : [data];
        setMedicalHistory(historyData);
      })
      .catch((error) => console.log("Fetching Error:", error));
  }, [patientId]);

  const filteredHistory = activeTab === 'all' 
    ? medicalHistory 
    : medicalHistory.filter(record => record.appointmentType === activeTab);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-gray-50">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <ClipboardList className="h-6 w-6 text-blue-600" />
          Medical History
        </h1>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {appointmentTypes.map(type => (
          <button
            key={type}
            onClick={() => setActiveTab(type)}
            className={`px-4 py-2 rounded-full whitespace-nowrap ${
              activeTab === type
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            } transition-colors duration-200`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Medical Records */}
      <div className="space-y-4">
        {filteredHistory.map((record, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{record.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <User className="h-4 w-4" />
                  <span>{record.doctorName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    record.appointmentType === 'Emergency' 
                      ? 'bg-red-100 text-red-800'
                      : record.appointmentType === 'Regular Checkup'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {record.appointmentType}
                  </span>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-500">Disease/Condition</label>
                  <p className="text-gray-800">{record.disease}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Prescription</label>
                  <p className="text-gray-800 whitespace-pre-line">{record.prescription}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredHistory.length === 0 && (
        <div className="text-center py-8 bg-white rounded-lg">
          <p className="text-gray-500">No medical records found for this category.</p>
        </div>
      )}
    </div>
  );
}

export default PatientMedicalHistory;
