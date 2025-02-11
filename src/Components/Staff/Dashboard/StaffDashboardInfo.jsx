import React, { useEffect, useState } from "react";
import NewPatientForm from "./AddPatientForm/NewPatientForm";
import OldPatientForm from "./AddPatientForm/OldPatientForm";
import { Plus, UserSearch, Search } from "lucide-react";

function StaffDashboardInfo() {
  const [newpatient, setnewpatient] = useState(false);
  const [oldpatient, setoldpatient] = useState(false);
  const [queueinfo, setqueueinfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [appointmentinfo, setappointmentinfo] = useState([]);
  const [update, setupdate] = useState();
  const [doctors, setDoctors] = useState([]);


  // fetch patients in queue
  useEffect(() => {
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
  }, [newpatient, oldpatient, searchTerm, update]);

  // fetch appointment info
  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/appointment/allappointment`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          setappointmentinfo(data);
          console.log(data);
        })
        .catch((error) => console.log("Fetching Error:", error));
    } catch (error) {
      console.log("error :", error);
    }
  }, [newpatient, oldpatient, update]);

  // Filter queue based on searchTerm
  const filteredQueue = queueinfo.filter(
    (queue) =>
      queue.id.toString().includes(searchTerm) ||
      queue.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleConfirm = (id) => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/appointment/approve/${id}`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message);
          console.log(data);
          setupdate(id);
        })
        .catch((error) => console.log("Fetching Error:", error));
    } catch (error) {
      console.log("error :", error);
    }
  };

  const handleReject = (id) => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/appointment/reject/${id}`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message);
          console.log(data);
          setupdate(id);
        })
        .catch((error) => console.log("Fetching Error:", error));
    } catch (error) {
      console.log("error :", error);
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
    <div>
      <div>
        <div className="flex justify-center">
          <span className="grid items-start px-2 text-xl font-medium lg:px-4">
            <button
              onClick={() => setnewpatient(true)}
              className="bg-black text-white py-3 px-6 rounded-3xl my-4 flex gap-2 items-center"
            >
              <Plus className="w-5 h-5" />
              New Patient
            </button>
          </span>

          <span className="grid items-start px-2 text-xl font-medium lg:px-4">
            <button
              onClick={() => setoldpatient(true)}
              className="bg-black text-white py-3 px-6 rounded-3xl my-4 flex gap-2 items-center"
            >
              <UserSearch className="w-5 h-5" />
              Old Patient
            </button>
          </span>
        </div>

        {/* Appointment Requests */}
        {appointmentinfo.length === 0 ? (
          <div className=" w-full text-center"> </div>
        ) : (

        <div className="mb-4 p-4">
          
          <div className="flex">
            <h1 className="ml-14  mb-2 text-2xl font-bold text-gray-800">
              Appointment Requests
            </h1>
          </div>
          
            <div className="relative shadow-md sm:rounded-lg justify-center ml-4 mt-2">
              <table className="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-sm text-gray-700 uppercase bg-gray-50 text-center">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      PATIENT ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      DOCTOR ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                      DOCTOR SPECIALIZATION
                    </th>
                    <th scope="col" className="px-6 py-3">
                      SCHEDULED DATE
                    </th>
                    <th scope="col" className="px-6 py-3">
                      SCHEDULED TIME
                    </th>
                    <th scope="col" className="px-6 py-3">
                      DISEASE
                    </th>
                    <th scope="col" className="px-6 py-3">
                      STATUS
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ACTIONS
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>

                {appointmentinfo.map((appointment) => (
                  <tbody className="text-center" key={appointment._id}>
                    <tr>
                      <td className="px-6 py-3"> {appointment.patientid} </td>
                      <td className="px-6 py-3"> {appointment.doctorid} </td>
                      <td className="px-6 py-3"> {appointment.doctorspecialization} </td>
                      <td className="px-6 py-3">
                        {new Date(appointment.scheduleddate).toLocaleDateString("en-IN")}
                      </td>
                      <td className="px-6 py-3">{appointment.scheduledtime}</td>
                      <td className="px-6 py-3">{appointment.disease}</td>
                      <td className="px-6 py-3">{appointment.status}</td>
                      <td className="px-6 py-3">
                        <button className="px-3 py-2 mb-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600"
                          onClick={() => handleConfirm(appointment._id)}
                        > Confirm </button>
                      </td>
                      <td className="px-6 py-3 items-center">
                        <button
                          className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600"
                          onClick={() => handleReject(appointment._id)} > Reject </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        )}

        {/* Patients Queue */}
        <div className="flex">
          <h1 className="ml-16 mt-7 text-2xl font-bold text-gray-800">
            Patient's Queue
          </h1>
          <div className="relative ml-[700px] m-5">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:border-blue-500"
            />
            <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        <div className="relative justify-center ml-8 mt-2">
          <table className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 sm:rounded-lg shadow-md  ">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50 text-center">
              <tr>
                <th scope="col" className="px-6 py-3">
                  PATIENT ID
                </th>
                <th scope="col" className="px-6 py-3">
                  PATIENT NAME
                </th>
                <th scope="col" className="px-6 py-3">
                  GENDER
                </th>
                <th scope="col" className="px-6 py-3">
                  DISEASE
                </th>
                <th scope="col" className="px-6 py-3">
                  MOBILE NO
                </th>
                <th scope="col" className="px-6 py-3">
                  TYPE
                </th>
                <th scope="col" className="px-6 py-3">
                  STATUS
                </th>
                <th scope="col" className="px-6 py-3">
                  Doctor
                </th>
              </tr>
            </thead>

            {filteredQueue.map((queue) => (
              <tbody className="text-center" key={queue._id}>
                <tr>
                  <td className="px-6 py-3">{queue.id}</td>
                  <td className="px-6 py-3">{queue.name}</td>
                  <td className="px-6 py-3">{queue.gender}</td>
                  <td className="px-6 py-3">{queue.disease}</td>
                  <td className="px-6 py-3">{queue.mobileno}</td>
                  <td className="px-6 py-3">{queue.type}</td>
                  <td className="px-6 py-3">{queue.status}</td>
                  <td className="px-6 py-3">{getDoctorName(queue.doctorid)}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        {newpatient ? <NewPatientForm setisopen={setnewpatient} /> : null}
        {oldpatient ? <OldPatientForm setisopen={setoldpatient} /> : null}
      </div>
    </div>
  );
}

export default StaffDashboardInfo;
