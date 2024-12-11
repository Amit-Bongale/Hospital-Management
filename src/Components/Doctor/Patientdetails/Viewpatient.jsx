import React from "react";
import { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

import Addtest from "./Addtest";
import Admit from "./Admit";

import { useSelector } from "react-redux";

import {
  FilePlus2,
  Plus,
  ChevronRight,
  Calendar,
  Stethoscope,
  ClipboardList,
  Activity,
  Mic, RotateCcw ,
  MicOff, 
  Dot
} from "lucide-react";

function Viewpatient({ setview, id, appointmenttype }) {
  let [test, settest] = useState(false);
  let [admit, setadmit] = useState(false);
  let [patientinfo, setpatientinfo] = useState([]);
  let [medicalHistory, setMedicalHistory] = useState([]);
  let [testresult, settestresult] = useState();
  let [testname, settestname] = useState();
  let [patientname, setpatientname] = useState();
  let [disease, setdisease] = useState();
  let [prescription, setprescription] = useState("");
  let [medicines , setmedicine] = useState();

  const doctorid = useSelector((state) => state.doctor.doctorid);
  const doctorname = useSelector((state) => state.doctor.doctorname);

  const {
    transcript,
    listening,
    resetTranscript,
    // browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  function handlePrescription(){
    setprescription((prev) => (prev.trim() ? (prev + "\n" + medicines) : medicines))
    setmedicine('')
  }

  function Send() {

    let data = {
      patientid: id,
      doctorid: doctorid,
      doctorname: doctorname,
      disease: disease,
      prescription: prescription,
      appointmenttype: appointmenttype,
    };

    try {
      fetch(
        `${process.env.REACT_APP_API_URL}/medicalhistory/createmedicalhistory`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            console.log(data.message);
            alert(data.message);
          }
          console.log(data);
        })
        .catch((error) => console.log("Fetching Error:", error));
    } catch (error) {
      console.log("error :", error);
    }
  }

  function deletequeue() {
    console.log(id);
    try {
      fetch(`${process.env.REACT_APP_API_URL}/queue/deletepatient`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      })
        .then((res) => res.json())
        .then((data) => alert(data.message))
        .catch((err) => console.error("Error fetching api:", err));
    } catch (error) {
      console.log("Error:", error);
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
          setpatientname(data.name);
          console.log(data);
        })
        .catch((error) => console.log("Fetching Error:", error));
    } catch (error) {
      console.log("error :", error);
    }
  }, [setview, id]);


  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/medicalhistory/patientmedicalhistory/latest/${id}`,
      { method: "POST" }
    )
      .then((res) => res.json())
      .then((data) => {
        const historyData = Array.isArray(data) ? data : [data];
        setMedicalHistory(historyData);
        console.log(historyData);
      })
      .catch((error) => console.log("Fetching Error:", error));
  }, [id]);

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/test/patienttestdetail/${id}`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          settestresult(data.result);
          settestname(data.testname);

          console.log(data);
        })
        .catch((error) => console.log("Fetching Error:", error));
    } catch (error) {
      console.log("error :", error);
    }
  }, [id]);


  return (
    <div className="w-[100vw] h-full fixed  top-0 left-28 flex justify-center items-center  ">
      <div className=" bg-white w-[75%] h-[90%] py-6 px-8 z-20 border-2 shadow-xl  overflow-y-auto rounded-md scrollbar">
        <h2 className="text-2xl font-bold py-2 mb-5 border-b-2 ">
          View Patient
        </h2>
        {patientinfo.map((patient) => (
          <div class=" mb-4 mt-5">
            <table className="w-full text-left">
              <tbody>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">
                    Patient ID :{" "}
                  </td>
                  <td className="py-1 px-4 text-gray-900">{patient.id}</td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">
                    Name :
                  </td>
                  <td className="py-1 px-4 text-gray-900">{patient.name}</td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">
                    Gender :
                  </td>
                  <td className="py-1 px-4 text-gray-900">{patient.gender}</td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">
                    Email :
                  </td>
                  <td className="py-1 px-4 text-gray-900">{patient.email}</td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">
                    Phone :
                  </td>
                  <td className="py-1 px-4 text-gray-900">{patient.phone}</td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">
                    Date of Birth :
                  </td>
                  <td className="py-1 px-4 text-gray-900">
                    {new Date (patient.dob).toLocaleDateString("EN-IN")}
                  </td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">Age :</td>
                  <td className="py-1 px-4 text-gray-900">{patient.age}</td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">
                    Address :
                  </td>
                  <td className="py-1 px-4 text-gray-900">{patient.address}</td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">
                    Emergency Contact :
                  </td>
                  <td className="py-1 px-4 text-gray-900">
                    {patient.emergencycontact}
                  </td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">
                    Blood Group :
                  </td>
                  <td className="py-1 px-4 text-gray-900">
                    {patient.bloodgroup}
                  </td>
                </tr>
                <tr className="">
                  <td className="py-1 px-4 text-gray-600 font-medium">
                    Aaadhar Number :
                  </td>
                  <td className="py-1 px-4 text-gray-900">
                    {patient.aadharno}
                  </td>
                </tr>
                <tr>
                  <td className="py-1 px-4 text-gray-600 font-medium">
                    Medical History :
                  </td>
                </tr>
              </tbody>
            </table>

            {medicalHistory.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <tbody>
                    {medicalHistory.map((history, index) => (
                      <tr
                        key={index}
                        className="odd:bg-gray-100 w-full even:bg-white hover:bg-gray-200"
                      >
                        <td className="py-2 px-4 border border-gray-300">
                          <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {new Date (history.date).toLocaleDateString('EN-IN')}
                          </span>
                        </td>
                        <td className="py-2 px-4 border border-gray-300">
                          <span className="flex items-center gap-2">
                            <Activity className="h-4 w-4" />
                            {history.disease}
                          </span>
                        </td>
                        <td className="py-2 px-4 border border-gray-300">
                          <span className="flex items-center gap-2">
                            <ClipboardList className="h-4 w-4" />
                            {history.prescription}
                          </span>
                        </td>
                        <td className="py-2 px-4 border border-gray-300">
                          <span className="flex items-center gap-2">
                            <Stethoscope className="h-4 w-4" />
                            {history.doctorname}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        ))}

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
              onChange={(e) => {
                setdisease(e.target.value);
              }}
            />
          </div>
        </div>

        <div class="flex mt-5">
          <div>
            <label
              for="prescription"
              class="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
            >
              Add Medicine
            </label>
            <textarea
              id="prescription"
              rows={2}
              type="text"
              class="bg-gray-50 border  border-gray-300 text-gray-900 mr-96 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add prescription"
              onChange={(e) => {
                setmedicine(e.target.value);
              }}
              value={transcript || medicines}
            />
            <button className="text-white bg-black mt-4 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handlePrescription()}> ADD </button>
          </div>

          <div className="flex flex-col gap-4 mt-4 p-4">
            {/* <p>Microphone: {listening ? "on" : "off"}</p> */}
            { listening ?
            <button onClick={() => SpeechRecognition.stopListening()}> <MicOff className="h-6 w-6" /> </button> : <button onClick={() => SpeechRecognition.startListening()}>
            <Mic className="h-6 w-6" />
            </button> }
            <button onClick={resetTranscript}> <RotateCcw className="h-6 w-6" /> </button>
            {/* <p> {transcript}</p> */}
          </div>
        </div>

        {
          prescription && <div className="mt-5">

          <h4 className="text-lg font-bold mb-0">Prescription</h4>
          {prescription.split('\n').map((line, index) => (
              <div key={index} className="flex">
                 <Dot/> {line}
                <br />
              </div>
          ))}
          <button className="text-white bg-black mt-4 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => setprescription("")}> Clear </button>
        </div>
        }

        {testname && (
          <div>
            <div class="flex mt-5">
              <div class="font-semibold text-lg">Test Name : </div>
              <div class="ml-3 text-lg">{testname}</div>
            </div>

            <div class="flex mt-5">
              <div class="font-semibold text-lg">Test Result : </div>
              <div class="ml-3 text-lg">{testresult}</div>
            </div>
          </div>
        )}

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
            {test ? (
              <Addtest settest={settest} id={id} name={patientname} />
            ) : (
              <></>
            )}

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
            {admit ? (
              <Admit setadmit={setadmit} id={id} name={patientname} />
            ) : (
              <></>
            )}

            <button
              onClick={() => Send()}
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 mr-14 flex focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-3  pl-6 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>

            <button
              type="delete"
              class="text-white bg-blue-700 hover:bg-blue-800 flex focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-3  pl-6 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                deletequeue();
                setview(false);
              }}
            >
              Complete
            </button>
          </div>

          <button
            onClick={() => setview(false)}
            class=" text-white bg-black hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Close
          </button>
        </div>
      </div>

      <div
        className="w-[100vw] h-[100vh] bg-slate-400 opacity-90  top-0 left-0 flex justify-center items-center z-10 fixed"
        onClick={() => setview(false)}
      ></div>
    </div>
  );
}

export default Viewpatient;
