import React, { useState, useEffect } from "react";


function Doctorcard() {

  let [doctorinfo, setdoctorinfo] = useState([])

  useEffect(()=>{ 
    try {
      fetch(`${process.env.REACT_APP_API_URL}/doctor/alldoctors` , { method: "POST" })
      .then((res)=> res.json())
      .then((data)=>{ setdoctorinfo(data); console.log(data) })
      .catch((error)=>console.log('error fetching data',error))
      
    } catch (error) {
      console.log('error:', error)

    }
  },[])

  return (
    <div>
      <div className="mt-14">
        <h1 class="text-3xl font-bold text-gray-900 m-4 ml-24">
          Our Greate Doctors
        </h1>
      </div>
      <div class="flex items-center mt-2.5 mb-2 ">
        <div class="flex flex-wrap p-1 m-1.5 ">
          { doctorinfo.map((doctor)=>(

            <div class="ml-28 mr-16">
            <img
              src={doctor.image}
              alt="doctor profile"
              className="w-56"
            />
            <h1 class="mx-12 my-2"> {doctor.name} </h1>
            <div>
              <button
            
                className="mx-11 my-2 "
              >
                Book Appointment
              </button>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default Doctorcard;
