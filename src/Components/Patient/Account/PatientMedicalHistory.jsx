import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Calendar,Search,  Stethoscope, ClipboardList } from 'lucide-react';

function PatientMedicalHistory() {

  const [medicalHistory, setMedicalHistory] = useState([]);

  const patientId = useSelector((state) => state.patient.patientId);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/medicalhistory/patientmedicalhistory/${patientId}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        const historyData = Array.isArray(data) ? data : [data];
        setMedicalHistory(historyData);
        console.log(historyData)
      })
      .catch((error) => console.log("Fetching Error:", error));
  }, [patientId]);

  return (
    <div className="w-[80vw] mx-auto p-4">
      <div className="flex">
      <div className="bg-white rounded-lg p-6 mb-2">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <ClipboardList className="h-6 w-6 text-blue-600" />
          Medical History
        </h1>
      </div>
      
      <div className="relative flex-1 " >
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500 " />
          <input
            type="text"
            placeholder="Search tests..."
            className="w-100 pl-10 pr-4 py-2 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
      </div>
      </div>
      

      {/* Medical Records */}
      <div className="space-y-4">
        {medicalHistory.map((record, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{(record.date).slice(0,10)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  < Stethoscope className="h-4 w-4" />
                  <span>{record.doctorname}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    record.appointmenttype === 'Emergency' 
                      ? 'bg-red-100 text-red-800'
                      : record.appointmenttype === 'FollowUp'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {record.appointmenttype}
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
    </div>
  );
}

export default PatientMedicalHistory;
