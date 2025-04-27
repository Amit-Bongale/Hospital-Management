import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Search, FileText, Calendar, CheckCircle, ClipboardPlus,
  BookCheck, Stethoscope , CircleDashed, AlertCircle, XCircle
} from "lucide-react";

function PatientTestReport() {
  const [testinfo, setTestInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [doctors, setDoctors] = useState([]);


  // const [selectedCategory, setSelectedCategory] = useState("all");
  // const [selectedStatus, setSelectedStatus] = useState("all");
  // const [openDropdowns, setOpenDropdowns] = useState({
  //   category: false,
  //   status: false
  // });

  const patientId = useSelector((state) => state.patient.patientId);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/test/patienttestdetail/${patientId}`,
      { method: "POST", credentials: "include" }
    )
      .then((res) => res.json())
      .then((data) => {
        setTestInfo(Array.isArray(data) ? data : [data]);
      })
      .catch((error) => console.log("Fetching Error:", error));
  }, [patientId]);

  // const categories = [...new Set(testinfo.map(test => test.category))];
  // const statuses = [...new Set(testinfo.map(test => test.status))];

  const filterTests = (
    tests,
    selectedCategory = "all",
    selectedStatus = "all"
  ) => {
    return tests.filter((test) => {
      const matchesSearch = test?.testname
        ?.toLowerCase()
        .includes(searchTerm?.toLowerCase() || "");
      const matchesCategory =
        selectedCategory === "all" || test?.category === selectedCategory;
      const matchesStatus =
        selectedStatus === "all" ||
        test?.status?.toLowerCase() === selectedStatus?.toLowerCase();
      return matchesSearch && matchesCategory && matchesStatus;
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-200 text-black";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Pending":
        return <CircleDashed className="w-5 h-5 text-yellow-500" />;
      case "Completed":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "upcoming":
        return <AlertCircle className="w-5 h-5 text-blue-500" />;
      case "rejected":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  
  // fetch doctors name
  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/doctor/alldoctors`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          setDoctors(data);
          console.log("doctors: ",data);
        })
        .catch((error) => console.log("Fetching Error:", error));
    } catch (error) {
      console.log("error :", error);
    }
  }, []);

  const getDoctorName = (doctorId) => {
    const doctor = doctors.find((doc) => doc.id === doctorId);
    return doctor ? doctor.name : "--";
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className=" w-[80vw] flex justify-between">

        <div className="bg-white rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <BookCheck className="h-7 w-7 text-blue-600" />
            Test Results
          </h1>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-2 p-6">
          <div className="relative flex-1 w-60 right-20">
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
          {/* <Dropdown
          label="Category"
          value={selectedCategory}
          options={categories}
          onChange={setSelectedCategory}
          isOpen={openDropdowns.category}
          setIsOpen={(value) => setOpenDropdowns(prev => ({ ...prev, category: value }))}
        /> */}

          {/* Status Dropdown */}
          {/* <Dropdown
          label="Status"
          value={selectedStatus}
          options={statuses}
          onChange={setSelectedStatus}
          isOpen={openDropdowns.status}
          setIsOpen={(value) => setOpenDropdowns(prev => ({ ...prev, status: value }))}
        /> */}
        </div>
      </div>

      {/* Test Details */}
      {filterTests(testinfo).map((test) => (
        <div key={test._id} className="bg-white rounded-lg shadow-md  mb-4">
          <div className="bg-blue-600 text-white p-6 flex items-center rounded-lg">
            <FileText className="mr-4" size={32} />
            <h1 className="text-2xl font-bold">{test.testname} Result</h1>
          </div>

          <div className="p-6 flex gap-32">
            <div className="flex items-center space-x-4">
              <Stethoscope className="text-blue-600" />
              <div>
                <p className="text-gray-600">Doctor name</p>
                <p className="font-semibold">Dr. {getDoctorName(test.doctorid)}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Calendar className="text-blue-600" />
              <div>
                <p className="text-gray-600">Test Date</p>
                <p className="font-semibold">
                  {new Date(test.date).toLocaleDateString("EN-IN")}
                </p>
              </div>
            </div>

            <div className="flex flex-col ">
              <p className="text-gray-600 mt-2 ml-9"> Status </p>
              <div className="flex flex-c items-center justify-center mt-1 space-x-2">
                <div>
                  {getStatusIcon(test.status)}
                </div>
                <div>
                  <p className={`px-3 py-1 rounded-full text-base font-bold ${getStatusColor(test.status)}`}> {test.status} </p>
                </div>
              </div>
            </div>
          </div>

          {
            test.result ? (
              <div className="px-6 py-4">
                <div className="flex items-center space-x-4">
                  <ClipboardPlus className="text-blue-600" />
                  <div>
                    <p className="text-gray-600"> Test Result</p>
                    <p className="font-semibold">{test.result}</p>
                  </div>
                </div>
              </div>
            ) : ( <></>)
          }
          
        </div>
      ))}
    </div>
  );
}

export default PatientTestReport;
