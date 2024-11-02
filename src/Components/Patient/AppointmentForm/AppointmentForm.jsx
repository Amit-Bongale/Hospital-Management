import React, { useState , useEffect} from 'react'

import { useSelector } from 'react-redux'

function AppointmentForm() {

  const patientid = useSelector((state) => state.patient.patientId)
  
  let [patientinfo , setpatientinfo] = useState([])
  let [doctorinfo, setdoctorinfo] = useState([])

  let [doctorid , setdoctorid] = useState('')
  let [appointmentdate , setappointmentdate] = useState('')
  let [appointmenttime , setappointmenttime] = useState('')
  let [appointmenttype , setappointmenttype] = useState('')
  let [disease , setdisease] = useState('')

  let [doctorname , setdoctorname] = useState('')
  let [specialization , setspecialization] = useState('')

  function Send(e){

    e.preventDefault()

    let data = {
      "doctorid": doctorid,
      'doctorname' : doctorname,
      'doctorspecialization' : specialization,
      "patientid": patientid,
      "scheduleddate": appointmentdate,
      "scheduledtime": appointmenttime,
      "type" : appointmenttype,
      "disease": disease,
    }

    try {
      fetch(`${process.env.REACT_APP_API_URL}/appointment/createappointment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          console.log(data.message);
          alert(data.message);
        }
        if(data.success){
          window.location.href = '/'
        }
        console.log(data);
      })
      .catch((error) => console.log("Fetching Error:" , error));
    } catch (error) {
      console.log("error :", error);
    }
  }

  function handleChange(doctorid){

    if (!doctorid) return;

    try {
      fetch(`${process.env.REACT_APP_API_URL}/doctor/finddoctor/${doctorid}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          setdoctorname(data.name);
          setspecialization(data.specialization);
          console.log(data);
        })
        .catch((err) => console.log("Error Fetching Data :", err));
    } catch (error) {
      console.log("Error :", error);
    }
  }

  // fetch patient details
  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/patient/findpatient/${patientid}`, {
        method: "POST",
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          console.log(data.message);
          alert(data.message);
        }
        const patients = Array.isArray(data) ? data : [data];
        setpatientinfo(patients)
        console.log(data);
      })
      .catch((error) => console.log("Fetching Error:" , error));
    } catch (error) {
      console.log("error :", error);
    }
  },[patientid])

  // fetch doctor details 
  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/doctor/alldoctors` , { method: "POST" })
      .then((res) => res.json())
      .then((data) => setdoctorinfo(data))
      .catch((err) => console.log("Error Fetching Data :" , err))
    } catch (error) {
      console.log("Error :" , error)
    }
  },[])


  const timeSlots = [
    '10:00 AM', '10:30 AM',  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
    '07:00 PM', '07:30 PM', '08:00 PM',
  ];

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();
  
    if (selectedDate < today) {
      alert("Please select today's date or a future date.");
      e.target.value = today.toISOString().slice(0, 10); // Set to today's date
      setappointmentdate(today.toISOString().slice(0, 10)); // Update the state to today's date
    } else {
      setappointmentdate(e.target.value.slice(0, 10));
    }
  };


  return (
    <div className="w-[100vw] h-full mt-4 left-0 flex justify-center items-center  ">
    <div className=" bg-white w-[60%] h-[90%] py-6 px-8 z-20  rounded-3xl">
      <h2 className="text-2xl font-bold py-2 mb-5 ">Appointment Booking</h2>

      <form onSubmit={Send}>
        {patientinfo.map((patient) => (
          <table>
          <tbody key={patient.id}>
            <tr className="border-b">
              <td className="py-2 px-4 text-gray-600 font-medium">Patient ID: </td>
              <td className="py-2 pr-14 text-gray-900 font-semibold">{patient.id}</td>
              <td className="py-2 px-4 text-gray-600 font-medium">Name:</td>
              <td className="py-2 pr-14 text-gray-900 font-semibold">{patient.name}</td>
              <td className="py-2 px-4 text-gray-600 font-medium">Gender:</td>
              <td className="py-2 pr-14 text-gray-900 font-semibold">{patient.gender}</td>
            </tr>

            <tr className="border-b">
              <td className="py-4 px-4 text-gray-600 font-medium">Phone:</td>
              <td className="py-4 pr-12 text-gray-900 font-semibold">{patient.phone}</td>
              <td className="py-4 px-4 text-gray-600 font-medium">Age:</td>
              <td className="py-4 pr-14 text-gray-900 font-semibold">{patient.age}</td>
              <td className="py-4 px-4 text-gray-600 font-medium">Blood Group: </td>
              <td className="py-4 pr-14 text-gray-900 font-semibold">{patient.bloodgroup}</td>
            </tr>

          </tbody>
          </table>
        ))}
        <div class="grid gap-6 mb-6 md:grid-cols-2 mt-8">
          <div>
            <label
              for="Doctor"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Choose Doctor
            </label>
            <select
              id="Doctor"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={(e) => {setdoctorid(e.target.value); handleChange(e.target.value)}}
            >
              <option value="">Choose Doctor</option>
              {doctorinfo.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>{doctor.name} ({doctor.specialization})</option>
              ))}
            </select>
  
          </div>
          
          <div>
            <label
              for="date"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={handleDateChange}
            />
          </div>

          <div>
            <label
              for="time"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Time
            </label>
            <select
              id="time"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={(e) => setappointmenttime(e.target.value)}
            >
              <option value="">Select time</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>{slot}</option>
              ))}
            </select>
          </div>

          <div>
            <label
              for="type"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Appointment Type
            </label>
            <select
              id="type"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={(e) => setappointmenttype(e.target.value)}
            >
              <option value="">Select appointment type</option>
              <option value="Consultation">Consultation</option>
              <option value="Followup">Follow-up</option>
              <option value="Emergency">Emergency</option>
              <option value="Routine">Routine Checkup</option>
            </select> 
          </div>

        </div>

        <div>
          <label
            for="disease"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Disease / Syntoms
          </label>
          <input
            type="text"
            id="disease"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
            onChange={(e) => setdisease(e.target.value)}
          />
        </div>
        
        
        <button
          type="submit"
          class="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Book Appointment
        </button>
        
      </form>
      
    </div>
  </div>
  )
}

export default AppointmentForm