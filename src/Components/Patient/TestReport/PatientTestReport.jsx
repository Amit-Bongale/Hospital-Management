// import React from 'react'
// import { useState, useEffect } from 'react';

// import { useSelector } from 'react-redux';

// function PatientTestReport() {
//   let[testinfo , settestinfo] = useState([])

//   const patientid = useSelector((state) => state.patient.patientId)

//   useEffect(() => {
//     try {
//       fetch(`${process.env.REACT_APP_API_URL}/test/patienttestdetail/${patientid}`, {
//         method: "POST",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.message) {
//             console.log(data.message);
//             alert(data.message);
//           }
//           const tests = Array.isArray(data) ? data : [data];
//           settestinfo(tests);
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
//                     <th className="pb-2"> DOCTOR ID </th>
//                     <th className="pb-2"> STAFF ID </th>
//                     <th className="pb-2"> TEST NAME </th>
//                     <th className="pb-2"> RESULT </th>
//                     <th className="pb-2"> STATUS</th>
//                   </tr>
//                 </thead>
      
//                 {testinfo.map((test)=>(
//                 <tbody class="text-center">
//                   <tr className="border-b last:border-0">
//                     <td  class="px-6 py-3"> {test.doctorid} </td>
//                     <td  class="px-6 py-3 font-medium"> {test.staffid} </td> 
//                     <td  class="px-6 py-3 text-gray-600"> {test.testname} </td> 
//                     <td  class="px-6 py-3 text-gray-600"> {test.result} </td>
//                     <td  class="px-6 py-3"> {test.status} </td>
//                   </tr>
//                 </tbody>
//                 ))}
//               </table>
//             </div>
//               {/* {testpatient ?  <PatientTestForm setisopen={settestpatient} patientid={patientid}/> : <></>} */}
             
//           </div>
//         )
    
// }

// export default PatientTestReport

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Search, ChevronDown } from 'lucide-react';

function PatientTestReport() {
  const [testinfo, setTestInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [openDropdowns, setOpenDropdowns] = useState({
    category: false,
    status: false
  });

  const patientId = useSelector((state) => state.patient.patientId);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/test/patienttestdetail/${patientId}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        setTestInfo(Array.isArray(data) ? data : [data]);
      })
      .catch((error) => console.log("Fetching Error:", error));
  }, [patientId]);

  const categories = [...new Set(testinfo.map(test => test.category))];
  const statuses = [...new Set(testinfo.map(test => test.status))];

  const filterTests = (tests) => {
    return tests.filter(test => {
      const matchesSearch = test.testname.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || test.category === selectedCategory;
      const matchesStatus = selectedStatus === "all" || test.status.toLowerCase() === selectedStatus.toLowerCase();
      return matchesSearch && matchesCategory && matchesStatus;
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Filters */}
      <div className="flex gap-4 mb-6">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search tests..."
            className="w-full pl-10 pr-4 py-2 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Category Dropdown */}
        <Dropdown
          label="Category"
          value={selectedCategory}
          options={categories}
          onChange={setSelectedCategory}
          isOpen={openDropdowns.category}
          setIsOpen={(value) => setOpenDropdowns(prev => ({ ...prev, category: value }))}
        />

        {/* Status Dropdown */}
        <Dropdown
          label="Status"
          value={selectedStatus}
          options={statuses}
          onChange={setSelectedStatus}
          isOpen={openDropdowns.status}
          setIsOpen={(value) => setOpenDropdowns(prev => ({ ...prev, status: value }))}
        />
      </div>

      {/* Test Details */}
      {filterTests(testinfo).map(test => (
        <div key={test._id} className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h2 className="text-xl font-bold">{test.testname}</h2>
          <p>Doctor ID: {test.doctorid}</p>
          <p>Result: {test.result}</p>
          <p>Status: {test.status}</p>
        </div>
      ))}
    </div>
  );
}

const Dropdown = ({ label, value, options, onChange, isOpen, setIsOpen }) => (
  <div className="relative">
    <button
      onClick={() => setIsOpen(prev => !prev)}
      className="w-[180px] flex items-center justify-between px-3 py-2 border rounded-md bg-white hover:bg-gray-50"
    >
      <span className="text-gray-700">{value === 'all' ? label : value}</span>
      <ChevronDown className="w-4 h-4 text-gray-500" />
    </button>
    {isOpen && (
      <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
        <button
          onClick={() => {
            onChange('all');
            setIsOpen(false);
          }}
          className="w-full px-4 py-2 text-left hover:bg-gray-100"
        >
          All {label}s
        </button>
        {options.map(option => (
          <button
            key={option}
            onClick={() => {
              onChange(option);
              setIsOpen(false);
            }}
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
          >
            {option}
          </button>
        ))}
      </div>
    )}
  </div>
);

export default PatientTestReport;
