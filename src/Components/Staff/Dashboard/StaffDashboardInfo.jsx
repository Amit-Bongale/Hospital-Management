import React, { useEffect, useState } from 'react';
import NewPatientForm from './AddPatientForm/NewPatientForm';
import OldPatientForm from './AddPatientForm/OldPatientForm';
import { Plus, UserSearch, Search } from 'lucide-react';

function StaffDashboardInfo() {
  const [newpatient, setnewpatient] = useState(false);
  const [oldpatient, setoldpatient] = useState(false);
  const [queueinfo, setqueueinfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [appointmentinfo, setappointmentinfo] = useState([]);

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/queue/allpatient`, {
        method: 'POST',
      })
        .then((res) => res.json())
        .then((data) => {
          setqueueinfo(data);
          console.log(data);
        })
        .catch((error) => console.log('Fetching Error:', error));
    } catch (error) {
      console.log('error :', error);
    }
  }, [newpatient, oldpatient]);

  // Filter queue based on searchTerm
  const filteredQueue = queueinfo.filter(
    (queue) =>
      queue.id.toString().includes(searchTerm) ||
      queue.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/appointment/allsppointment`, {
        method: 'POST',
      })
        .then((res) => res.json())
        .then((data) => {
          setappointmentinfo(data);
          console.log(data);
        })
        .catch((error) => console.log('Fetching Error:', error));
    } catch (error) {
      console.log('error :', error);
    }
  }, []);

  const handleConfirm = (patientId) => {
    const appointment = appointmentinfo.find(
      (appointment) => appointment.patientid === patientId
    );

    if (appointment) {
      // Add to queue
      const newQueueItem = {
        id: appointment.patientid,
        name: appointment.name,
        gender: appointment.gender,
        disease: appointment.disease,
        mobileno: appointment.mobileno,
        type: 'Appointment',
        status: 'queue',
      };

      setqueueinfo([...queueinfo, newQueueItem]);

      // Remove from appointments
      setappointmentinfo(
        appointmentinfo.filter((item) => item.patientid !== patientId)
      );

      console.log(`Appointment with Patient ID ${patientId} confirmed.`);
    }
  };

  const handleReject = (patientId) => {
    setappointmentinfo(
      appointmentinfo.filter((appointment) => appointment.patientid !== patientId)
    );
    console.log(`Appointment with Patient ID ${patientId} rejected and deleted.`);
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

        <div className="flex">
          <h1 className="ml-20 mt-7 text-2xl font-bold text-gray-800">Patient's Queue</h1>
          <div className="relative ml-[650px] mt-5">
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

        <div className="relative shadow-md sm:rounded-lg justify-center ml-20 mt-2">
          <table className="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50 text-center">
              <tr>
                <th scope="col" className="px-6 py-3">PATIENT ID</th>
                <th scope="col" className="px-6 py-3">PATIENT NAME</th>
                <th scope="col" className="px-6 py-3">GENDER</th>
                <th scope="col" className="px-6 py-3">DISEASE</th>
                <th scope="col" className="px-6 py-3">MOBILE NO</th>
                <th scope="col" className="px-6 py-3">TYPE</th>
                <th scope="col" className="px-6 py-3">STATUS</th>
              </tr>
            </thead>

            {filteredQueue.map((queue) => (
              <tbody className="text-center" key={queue.id}>
                <tr>
                  <td className="px-6 py-3">{queue.id}</td>
                  <td className="px-6 py-3">{queue.name}</td>
                  <td className="px-6 py-3">{queue.gender}</td>
                  <td className="px-6 py-3">{queue.disease}</td>
                  <td className="px-6 py-3">{queue.mobileno}</td>
                  <td className="px-6 py-3">{queue.type}</td>
                  <td className="px-6 py-3">{queue.status}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        {newpatient ? <NewPatientForm setisopen={setnewpatient} /> : null}
        {oldpatient ? <OldPatientForm setisopen={setoldpatient} /> : null}
      </div>

      <div>
        <div className="flex">
          <h1 className="ml-20 mt-10 text-2xl font-bold text-gray-800">Appointment Queue</h1>
        </div>
        <div className="relative shadow-md sm:rounded-lg justify-center ml-20 mt-2">
          <table className="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-sm text-gray-700 uppercase bg-gray-50 text-center">
              <tr>
                <th scope="col" className="px-6 py-3">PATIENT ID</th>
                <th scope="col" className="px-6 py-3">DOCTOR ID</th>
                <th scope="col" className="px-6 py-3">DOCTOR SPECIALIZATION</th>
                <th scope="col" className="px-6 py-3">SCHEDULED DATE</th>
                <th scope="col" className="px-6 py-3">SCHEDULED TIME</th>
                <th scope="col" className="px-6 py-3">DISEASE</th>
                <th scope="col" className="px-6 py-3">STATUS</th>
                <th scope="col" className="px-6 py-3">ACTIONS</th>
              </tr>
            </thead>

            {appointmentinfo.map((appointment) => (
              <tbody className="text-center" key={appointment.patientid}>
                <tr>
                  <td className="px-6 py-3">{appointment.patientid}</td>
                  <td className="px-6 py-3">{appointment.doctorid}</td>
                  <td className="px-6 py-3">{appointment.doctorspecialization}</td>
                  <td className="px-6 py-3">
                    {new Date(appointment.scheduleddate).toLocaleDateString('en-IN')}
                  </td>
                  <td className="px-6 py-3">{appointment.scheduledtime}</td>
                  <td className="px-6 py-3">{appointment.disease}</td>
                  <td className="px-6 py-3">{appointment.status}</td>
                  <td className="px-6 py-3">
                    <button
                      className="px-3 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600"
                      onClick={() => handleConfirm(appointment.patientid)}
                    >
                      Confirm
                    </button>
                    <button
                      className="ml-2 px-3 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600"
                      onClick={() => handleReject(appointment.patientid)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default StaffDashboardInfo;
