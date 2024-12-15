import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Search,
  FileText,
  User,
  Calendar,
  CheckCircle,
  ClipboardPlus,
  BookCheck
} from "lucide-react";

function PatientTestReport() {
  const [testinfo, setTestInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
      {
        method: "POST",
      }
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
        <div className="flex gap-4 mb-6 p-6">
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
              <User className="text-blue-600" />
              <div>
                <p className="text-gray-600">Doctor ID</p>
                <p className="font-semibold">{test.doctorid}</p>
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

            <div className="flex items-center space-x-4">
              <CheckCircle className="text-green-600" />
              <div>
                <p className="text-gray-600">Status</p>
                <p
                  className={`font-bold ${
                    test.status === "Normal" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {test.status}
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="flex items-center space-x-4">
              <ClipboardPlus className="text-blue-600" />
              <div>
                <p className="text-gray-600"> Test Result</p>
                <p className="font-semibold">{test.result}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PatientTestReport;
