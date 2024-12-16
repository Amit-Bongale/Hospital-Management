import React, { useEffect, useState } from "react";
import { Printer } from "lucide-react";
import logo from "../../../../Assets/Logo/logo.png";
import { useParams } from "react-router-dom";
import { Dot } from "lucide-react";

function Layout() {
  const { billno , patientid} = useParams();
  const [bill, setbillinfo] = useState([]);
  const [patientinfo, setpatientinfo] = useState([]);
  const [prescription, setpriscription] = useState([]);
  const [test, settest] = useState([]);
  
  const [total, settotal] = useState();

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/bill/findbill/${billno}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched Bill Data:", data);
          const billdata = Array.isArray(data) ? data : [data];
          setbillinfo(billdata);
          settotal(
            data.fees.consultationfee +
            data.fees.testfee +
            data.fees.admissionfee
          );
        })
        .catch((error) => console.error("Error fetching bill:", error));
    } catch (error) {
      console.log("Error fetching the bill details", error);
    }

    try {
      fetch(
        `${process.env.REACT_APP_API_URL}/patient/findpatient/${patientid}`,
        { method: "POST" }
      )
        .then((res) => res.json())
        .then((data) => {
          const patientdata = Array.isArray(data) ? data : [data];
          setpatientinfo(patientdata);
        })
        .catch((err) => console.log("Error Fetching Data :", err));
    } catch (error) {
      console.log("Error :", error);
    }

    try {
      fetch(
        `${process.env.REACT_APP_API_URL}/medicalhistory/prescription/${patientid}`,
        { method: "POST" }
      )
        .then((res) => res.json())
        .then((data) => {
          const historyData = Array.isArray(data) ? data : [data];
          setpriscription(historyData);
          console.log(historyData);
        })
        .catch((error) => console.log("Fetching Error:", error));
    } catch (error) {
      console.log("Error :", error);
    }

    try {
      fetch(`${process.env.REACT_APP_API_URL}/test/last/${patientid}`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          const testdata = Array.isArray(data) ? data : [data];
          settest(testdata);
          console.log(testdata);
        })
        .catch((error) => console.log("Fetching Error:", error));
    } catch (error) {
      console.log("Error :", error);
    }
  }, [billno, patientid]);

  const handlePrint = () => {
    window.print();

    try {
      fetch(
        `${process.env.REACT_APP_API_URL}/bill/paid`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({billno}),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            console.log(data.message);
            alert(data.message);
          }
        })
        .catch((error) => console.log("Fetching Error:", error));
    } catch (error) {
      console.log("error :", error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handlePrint}
        className="fixed top-4 right-4 print:hidden bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
      >
        <Printer className="w-4 h-4" />
        Print Bill & Prescription
      </button>

      {/* Bill */}

      <div className="w-[210mm] h-[297mm] mx-auto bg-white p-8 shadow-lg print:shadow-none">
        {/* Bill Content */}
        <div className="space-y-6">
          {/* Hospital Header */}
          <div className="text-center space-y-2 border-b pb-4">
            <img src={logo} alt="Hospital Logo" className="mx-auto w-24 h-24" />
            <h1 className="text-2xl font-bold text-gray-800">
              City General Hospital
            </h1>

            <div className="text-sm text-gray-600">
              <p>123 Healthcare Avenue, Medical District</p>
              <p>
                Phone: +91 6364541787 | Email: hospitalmangement204@gmail.com
              </p>
              <p>License No: HSP-12345 </p>
            </div>
          </div>

          {/* Bill and Patient Information */}
          <div className="grid grid-cols-2 gap-8 border-b pb-4">
            <div className="space-y-2">
              <h2 className="font-semibold text-gray-800">Bill Details</h2>
              <div className="text-sm space-y-1 text-gray-600">
                {bill.map((billinfo) => (
                  <div>
                    <p>Bill No: {billinfo.billno}</p>
                    <p>
                      Date:{" "}
                      {new Date(billinfo.date).toLocaleDateString("en-IN")}
                    </p>
                  </div>
                ))}
                <p>Admission: -- </p>
                <p>Discharge: -- </p>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold text-gray-800">Patient Details</h2>
              {patientinfo.map((patient) => (
                <div className="text-sm space-y-1 text-gray-600">
                  <p>Patient ID: {patientid} </p>
                  <p>Name: {patient.name}</p>
                  <p>
                    Age/Gender: {patient.age} / {patient.gender}
                  </p>
                  <p>Contact: {patient.phone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Charges Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border px-4 py-2 text-left">Description</th>
                  <th className="border px-4 py-2 text-right">Quantity/Days</th>
                  <th className="border px-4 py-2 text-right">Rate</th>
                  <th className="border px-4 py-2 text-right">Amount</th>
                </tr>
              </thead>
              {bill.map((billinfo, index) => (
                <tbody key={index}>
                  <tr>
                    <td className="border px-4 py-2">Consultation Fee</td>
                    <td className="border px-4 py-2 text-right">{}</td>
                    <td className="border px-4 py-2 text-right">₹{}</td>
                    <td className="border px-4 py-2 text-right">
                      ₹{billinfo.fees.consultationfee}
                    </td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">test Fee</td>
                    <td className="border px-4 py-2 text-right">{}</td>
                    <td className="border px-4 py-2 text-right">₹{}</td>
                    <td className="border px-4 py-2 text-right">
                      ₹{billinfo.fees.testfee}
                    </td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">Admission Fee</td>
                    <td className="border px-4 py-2 text-right">{}</td>
                    <td className="border px-4 py-2 text-right">₹{}</td>
                    <td className="border px-4 py-2 text-right">
                      ₹{billinfo.fees.admissionfee}
                    </td>
                  </tr>

                  <tr className="font-bold bg-gray-50">
                    <td colSpan="3" className="border px-4 py-2 text-right">
                      Total Amount:
                    </td>
                    <td className="border px-4 py-2 text-right">₹{total}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-8">
            <div className="grid grid-cols-2 gap-8 text-sm text-gray-600">
              <div className="space-y-2">
                <h3 className="font-semibold">Payment Information</h3>
                <p>Payment Methods: Cash/Card/UPI</p>
                <p className="mt-4">This is a computer-generated bill</p>
              </div>
              <div className="text-right space-y-2">
                <p className="mb-16">Authorized Signatory</p>
                <div className="border-t border-gray-400 w-48 ml-auto"></div>
                <p className="text-sm">Hospital Authority</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* billend */}

      {/* Prescription */}

      <div className="w-[210mm] h-[297mm] mx-auto bg-white p-8 shadow-lg print:shadow-none">
        <div className="space-y-6">
          {/* Hospital Header (Repeated for prescription) */}
          <div className="text-center space-y-2 border-b pb-4">
            <img src={logo} alt="Hospital Logo" className="mx-auto w-24 h-24" />
            <h1 className="text-2xl font-bold text-gray-800">
              City General Hospital
            </h1>

            <div className="text-sm text-gray-600">
              <p>123 Healthcare Avenue, Medical District</p>
              <p>
                Phone: +91 6364541787 | Email: hospitalmangement204@gmail.com
              </p>
              <p>License No: HSP-12345 </p>
            </div>
          </div>

          {/* Prescription Header */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <h2 className="font-semibold text-gray-800">
                Patient Information
              </h2>
              {patientinfo.map((patient) => (
                <div className="text-sm space-y-1 text-gray-600">
                  <p>Patient ID: {patientid} </p>
                  <p>Name: {patient.name}</p>
                  <p>
                    Age/Gender: {patient.age} / {patient.gender}
                  </p>
                  <p>Contact: {patient.phone}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold text-gray-800">
                Prescription Details
              </h2>
              {prescription.map((item) => (
                <div className="text-sm space-y-1 text-gray-600">
                  {/* <p>Prescription ID: {}</p> */}
                  <p>Date: {new Date(item.date).toLocaleDateString("en-IN")}</p>
                  <p>Doctor: {item.doctorname}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnosis */}
          <div className="space-y-2">
            {prescription.map((item) => (
              <div>
                <h2 className="font-semibold text-gray-800">Diagnosis</h2>
                <p className="text-sm text-gray-600">{item.disease}</p>
              </div>
            ))}
          </div>

          {/* Medicines */}
          <div className="space-y-4">
            <h2 className="font-semibold text-gray-800">
              Prescribed Medicines
            </h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border px-4 py-2 text-left">Medicine</th>
                </tr>
              </thead>
              <tbody>
                {prescription.map((medicine) => (
                  <tr>
                    {medicine.prescription.split('\n').map((line, index) => (
                      <div key={index} className="flex">
                        <Dot/> {line}
                        <br />
                      </div>
                    ))}
                  </tr>
                ))}
                
              </tbody>

            </table>
          </div>

          {/* Lab Tests */}
          <div className="space-y-2">
            <h2 className="font-semibold text-gray-800">Test Details</h2>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {test.map((test, index) => (
                <div key={index}>
                  <li> Name : {test.testname}</li>
                  <li> Result : {test.result}</li>
                </div>
              ))}
            </ul>
          </div>

          {/* Special Instructions */}
          <div className="space-y-2">
            <h2 className="font-semibold text-gray-800">
              {/* Special Instructions */}
            </h2>
            <p className="text-sm text-gray-600">
              {/* {prescription.specialInstructions} */}
            </p>
          </div>

          {/* Doctor's Signature */}
          <div className="mt-16 grid grid-cols-2">
            <div></div>
            <div className="text-center">
              {prescription.map((item) => (
                <div className="border-t border-gray-400 pt-2">
                  <p className="font-semibold">
                    {item.doctorname}
                  </p>
                  <p className="text-sm text-gray-600">
                    {/* {prescription.prescriptionInfo.department} */}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Prescription End */}
    </div>
  );
}

export default Layout;
