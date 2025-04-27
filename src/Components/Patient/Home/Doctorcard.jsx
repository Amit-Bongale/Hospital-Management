import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Doctorcard() {

  let [doctorinfo, setdoctorinfo] = useState([]);

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/doctor/alldoctors`, {
        method: "POST",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          setdoctorinfo(data);
          console.log(data);
        })
        .catch((error) => console.log("error fetching data", error));
    } catch (error) {
      console.log("error:", error);
    }
  }, []);

  return (
    <div>
      <div>
        <h1 class="text-2xl md:text-4xl font-bold text-gray-900 m-4 md:ml-10 ">
          Our Experienced Doctors
        </h1>
      </div>
      <div class="mt-2.5 mb-1">
        <div class="flex flex-wrap items-center justify-around p-1 m-1.5 gap-8">
          {doctorinfo.map((doctor) => (
            <div>
              <div
                class="p-6 max-w-lg border-2 border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col"
                >
                <img
                  src={doctor.image}
                  class="shadow rounded-lg overflow-hidden border w-[275px]"
                  alt="doctor profile"
                />
                <div class="mt-6">
                  <h4 class="font-bold text-xl"> Dr. {doctor.name}</h4>
                  <p class="mt-1 text-gray-600"> {doctor.specialization}</p>
                  <div class="mt-4">
                    <Link to="user/appointmentbooking">
                      <button
                        type="button"
                        class="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-4 text-sm font-medium leading-4 text-white shadow-sm hover:bg-blue-800"
                      >
                        Book Appointment
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctorcard;
