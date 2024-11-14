import React from "react";
import { useState, useEffect } from "react";

import Addtest from "./Addtest";
import Admit from "./Admit";

import {useSelector} from 'react-redux';

import { FilePlus2 , Plus, ChevronRight } from 'lucide-react';

function Viewpatient({ setview, id, name}) {
  let [test, settest] = useState(false);
  let [admit, setadmit] = useState(false);
  let [patientinfo, setpatientinfo] = useState([]);
  let [patientname , setpatientname] = useState([])


  let [disease, setdisease] = useState()
  let [prescription , setprescription ] = useState()

  const doctorid = useSelector((state)=> state.doctor.doctorid)
  
  
  function Send(){

    let data = {
      "patientid" : id,
      "doctorid" : doctorid,
      "disease" : disease,
      "prescription": prescription
      
    }

    try {
      fetch(`${process.env.REACT_APP_API_URL}/medicalhistory/createmedicalhistory`, {
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
        console.log(data);
      })
      .catch((error) => console.log("Fetching Error:" , error));
    } catch (error) {
      console.log("error :", error);
    }
  }



  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/patient/findpatient/${id}`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            console.log(data.message);
            alert(data.message);
          }
          const patients = Array.isArray(data) ? data : [data];
          setpatientinfo(patients);

          setpatientname(data.name) 
          console.log(data);
        })
        .catch((error) => console.log("Fetching Error:", error));
    } catch (error) {
      console.log("error :", error);
    }
  }, [setview, id]);

  

  return (
    <div className="w-[100vw] h-full fixed  top-0 left-0 flex justify-center items-center  ">
      <div className=" bg-white w-[55%] h-[90%] py-6 px-8 z-20 border-2 shadow-xl  overflow-y-auto rounded-md scrollbar">
        <h2 className="text-2xl font-bold py-2 mb-5 border-b-2 "> View Patient</h2>
        <div class=" mb-4 mt-5">
          <table className="w-full text-left">
            { patientinfo.map((patient) => (
              <tbody>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">Patient ID : </td>
                  <td className="py-1 px-4 text-gray-900">{patient.id}</td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">Name : </td>
                  <td className="py-1 px-4 text-gray-900">{patient.name}</td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">Gender :</td>
                  <td className="py-1 px-4 text-gray-900">{patient.gender}</td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">Email :</td>
                  <td className="py-1 px-4 text-gray-900">{patient.email}</td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">Phone :</td>
                  <td className="py-1 px-4 text-gray-900">{patient.phone}</td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">Date of Birth :</td>
                  <td className="py-1 px-4 text-gray-900">{(patient.dob).split('T')[0]}</td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">Age :</td>
                  <td className="py-1 px-4 text-gray-900">{patient.age}</td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">Address :</td>
                  <td className="py-1 px-4 text-gray-900">{patient.address}</td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">Emergency Contact :</td>
                  <td className="py-1 px-4 text-gray-900">{patient.emergencycontact}</td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">Blood Group :</td>
                  <td className="py-1 px-4 text-gray-900">{patient.bloodgroup}</td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">Aaadhar Number :</td>
                  <td className="py-1 px-4 text-gray-900">{patient.aadharno}</td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">Medical History :</td>
                  <td className="py-1 px-4 text-gray-900">{patient.medicalhistory}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <div class="flex mt-10">
          <div>
            <label
              for="adding disease"
              class="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
            >
              Disease
            </label>
            <input
              type="text"
              id="disease"
              class="bg-gray-50 border border-gray-300 text-gray-900 mr-96 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add disease"
              onChange={(e) => {setdisease(e.target.value)}}

            />
          </div>
        </div>

        <div class="flex mt-5">
          <div>
            <label
              for="adding prescription"
              class="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
            >
              Prescription
            </label>
            <input
              type="text"
              id="prescription"
              class="bg-gray-50 border border-gray-300 text-gray-900 mr-96 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add prescription"
              onChange={(e) => {setprescription(e.target.value)}}

            />
          </div>
        </div>

        <div class="flex mt-5">
          <div>Test Result : </div>
          <div class="ml-3">Positive</div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="flex">
            <div cals>
              <button
                onClick={() => settest(true)}
                type="Add test"
                class="text-white bg-blue-700 flex hover:bg-blue-800 mr-8 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 pr-6 py-3  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <FilePlus2 className="w-4 h-4 mr-2" />
                Add test
              </button>
            </div>
            {test ? <Addtest settest={settest} id={id} name={patientname} /> : <></>}

            <div>
              <button
                onClick={() => setadmit(true)}
                type="Admit"
                class="text-white bg-blue-700 hover:bg-blue-800 mr-8 flex focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 pr-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <Plus className="w-5 h-5 mr-2" />
                Admit
              </button>
            </div>
            {admit ? <Admit setadmit={setadmit} id={id} name={patientname} /> : <></>}

            <button
              onClick={() => Send()}
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 mr-14 flex focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-3  pl-6 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>

          </div>
          

          <button
            onClick={() => setview(false)}
            class="ml-4 text-white bg-black hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Close
          </button>
        </div>
      </div>

      <div
        className="w-[100vw] h-[100vh] bg-slate-400 opacity-90  top-0 left-0 flex justify-center items-center z-10 fixed"
        onClick={() => setview(false)}>
      </div>
    
    </div>
  );
}

export default Viewpatient;
