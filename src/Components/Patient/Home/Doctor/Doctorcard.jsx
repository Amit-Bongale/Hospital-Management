import React, { useState } from "react";

import AppointmentForm from "../../AppointmentForm/AppointmentForm";


function Doctorcard() {
  let [appointment, setappointment] = useState(false)

  return (
    <div>
        <div className="mt-14">
            <h1 class="text-3xl font-bold text-gray-900 m-4 ml-24">Our Greate Doctors</h1>
        </div>
        <div class="flex items-center mt-2.5 mb-2 ">
        <div class="flex flex-wrap p-1 m-1.5 ">
        <div class="ml-28 mr-16">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxv-aOP1Kg25NKYqPdJj3hx0jmJEydfAGYCaLywnW6kiyFkrYsockTqIZOArz2v9SRuY&usqp=CAU" alt="" />
            <h1 class = "mx-12 my-2"> Name:Dr Anusha</h1>
            <div>
            <button onClick={() => setappointment(true)}className="mx-11 my-2 "> Book Appointment </button>
            </div>

            {appointment ?<AppointmentForm setappointment={setappointment}/>
            :<></>} 
        </div>
        <div class="ml-10 mr-20">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxv-aOP1Kg25NKYqPdJj3hx0jmJEydfAGYCaLywnW6kiyFkrYsockTqIZOArz2v9SRuY&usqp=CAU" alt="" />
            <h1 class = "mx-12 my-2"> Name:Dr Apoorva</h1>
            <div>
            <button onClick={() => setappointment(true)}className="mx-11 my-2 "> Book Appointment </button>
            </div>

            {appointment ?<AppointmentForm setappointment={setappointment}/>
            :<></>} 
        </div>
        <div class="ml-10 mr-20">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxv-aOP1Kg25NKYqPdJj3hx0jmJEydfAGYCaLywnW6kiyFkrYsockTqIZOArz2v9SRuY&usqp=CAU"alt="" />
            <h1 class = "mx-12 my-2"> Name:Dr Lekhana</h1>
            <div>
            <button onClick={() => setappointment(true)}className="mx-11 my-2 "> Book Appointment </button>
            </div>

            {appointment ?<AppointmentForm setappointment={setappointment}/>
            :<></>} 
        </div>
        <div class="ml-10 mr-20">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxv-aOP1Kg25NKYqPdJj3hx0jmJEydfAGYCaLywnW6kiyFkrYsockTqIZOArz2v9SRuY&usqp=CAU" alt="" />
            <h1 class = "mx-12 my-2"> Name:Dr kavana</h1>
            <div>
            <button onClick={() => setappointment(true)}className="mx-11 my-2 "> Book Appointment </button>
            </div>

            {appointment ?<AppointmentForm setappointment={setappointment}/>
            :<></>} 
        </div>
        </div>
        </div>
    </div>

    
  )
}

export default Doctorcard