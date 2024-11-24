import React , {useState, useEffect} from "react";
import { Printer } from 'lucide-react';
import logo from '../../../../Assets/Logo/logo.png'
import { useParams } from "react-router-dom";

function PrintLayout({ billData , prescriptionData }) {

  const {patientid} = useParams()

  let [bill , setbill] = useState([])

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/bill/patientdetails`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({patientid})
      })
      .then((res) => res.json())
      .then((data) => {
        setbill(data);
        console.log(data);
      })
      .catch((error) => console.log("Fetching Error:" , error));
    } catch (error) {
      console.log("error :", error);
    }
  },[])

  const sampleBillData = {
    hospitalInfo: {
      name: "City General Hospital",
      address: "123 Healthcare Avenue, Medical District",
      phone: "(555) 123-4567",
      email: "billing@cityhospital.com",
      license: "HSP-12345",
    },
    billInfo: {
      billNo: "BILL-2024-001",
      date: "2024-11-24",
      admissionDate: "2024-11-20",
      dischargeDate: "2024-11-24",
    },
    patientInfo: {
      id: "P123456",
      name: "John Doe",
      age: 45,
      gender: "Male",
      address: "789 Patient Street",
      contact: "(555) 987-6543",
    },
    charges: [
      {
        id: 1,
        description: "Room Charges (General Ward)",
        days: 4,
        ratePerDay: 1000,
        amount: 4000,
      },
      {
        id: 2,
        description: "Doctor's Consultation",
        quantity: 2,
        rate: 1500,
        amount: 3000,
      },
      {
        id: 3,
        description: "Laboratory Tests",
        quantity: 3,
        rate: 800,
        amount: 2400,
      },
      {
        id: 4,
        description: "Medicines",
        quantity: 1,
        rate: 1200,
        amount: 1200,
      },
    ],
  };

  // Sample prescription data structure
  const samplePrescriptionData = {
    prescriptionInfo: {
      prescriptionId: "PRE-2024-001",
      prescribedBy: "Dr. Sarah Smith",
      department: "General Medicine",
      prescriptionDate: "2024-11-24"
    },
    diagnosis: "Acute Bronchitis with Upper Respiratory Infection",
    medicines: [
      { 
        id: 1, 
        name: "Amoxicillin 500mg",
        dosage: "1 tablet",
        frequency: "Three times daily",
        duration: "5 days",
        instructions: "Take after meals"
      },
      { 
        id: 2, 
        name: "Paracetamol 650mg",
        dosage: "1 tablet",
        frequency: "As needed",
        duration: "3 days",
        instructions: "Take if fever exceeds 100°F"
      },
      // Add more medicines as needed
    ],
    specialInstructions: "Rest adequately. Maintain good hydration. Follow-up after 5 days if symptoms persist.",
    labTests: [
      "Complete Blood Count",
      "Chest X-Ray",
      "Sputum Culture"
    ]
  };

  const data = billData || sampleBillData;
  const prescription = prescriptionData || samplePrescriptionData

  const handlePrint = () => {
    window.print();
  };

  const calculateTotal = () => {
    return data.charges.reduce((total, item) => total + item.amount, 0);
  };

  return (
    <div className="relative">
      {/* Print Button - Hidden when printing */}
      <button
        onClick={handlePrint}
        className="fixed top-4 right-4 print:hidden bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
      >
        <Printer className="w-4 h-4" />
        Print Bill & Prescription
      </button>

      {/* A4 Page Container */}
      <div className="w-[210mm] h-[297mm] mx-auto bg-white p-8 shadow-lg print:shadow-none">
        {/* Bill Content */}
        <div className="space-y-6">
          {/* Hospital Header */}
          <div className="text-center space-y-2 border-b pb-4">
            <img
              src={logo}
              alt="Hospital Logo"
              className="mx-auto w-24 h-24"
            />
            <h1 className="text-2xl font-bold text-gray-800">
              City General Hospital 
            </h1>
            
            <div className="text-sm text-gray-600">
              <p>{data.hospitalInfo.address}</p>
              <p>
                Phone: +91 6364541787 | Email:{" "}
                hospitalmangement204@gmail.com
              </p>
              <p>License No: HSP-12345 </p>
            </div>
          </div>

          {/* Bill and Patient Information */}
          <div className="grid grid-cols-2 gap-8 border-b pb-4">
            <div className="space-y-2">
              <h2 className="font-semibold text-gray-800">Bill Details</h2>
              <div className="text-sm space-y-1 text-gray-600">
                <p>Bill No: {data.billInfo.billNo}</p>
                <p>Date: {data.billInfo.date}</p>
                <p>Admission: {data.billInfo.admissionDate}</p>
                <p>Discharge: {data.billInfo.dischargeDate}</p>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold text-gray-800">Patient Details</h2>
              <div className="text-sm space-y-1 text-gray-600">
                <p>Patient ID: {patientid}</p>
                <p>Name: {data.patientInfo.name}</p>
                <p>
                  Age/Gender: {data.patientInfo.age}/{data.patientInfo.gender}
                </p>
                <p>Contact: {data.patientInfo.contact}</p>
              </div>
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
              <tbody>
                {data.charges.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2">{item.description}</td>
                    <td className="border px-4 py-2 text-right">
                      {item.days || item.quantity}
                    </td>
                    <td className="border px-4 py-2 text-right">
                      ₹{(item.ratePerDay || item.rate).toFixed(2)}
                    </td>
                    <td className="border px-4 py-2 text-right">
                      ₹{item.amount.toFixed(2)}
                    </td>
                  </tr>
                ))}
                <tr className="font-bold bg-gray-50">
                  <td colSpan="3" className="border px-4 py-2 text-right">
                    Total Amount:
                  </td>
                  <td className="border px-4 py-2 text-right">
                    ₹{calculateTotal().toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="mt-auto pt-8">
            <div className="grid grid-cols-2 gap-8 text-sm text-gray-600">
              <div className="space-y-2">
                <h3 className="font-semibold">Payment Information</h3>
                <p>Payment Terms: Immediate</p>
                <p>Payment Methods: Cash, Card, UPI</p>
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


      {/* Prescription */}

      <div className="w-[210mm] h-[297mm] mx-auto bg-white p-8 shadow-lg print:shadow-none">
        <div className="space-y-6">
          {/* Hospital Header (Repeated for prescription) */}
          <div className="text-center space-y-2 border-b pb-4">
            <img
              src={logo}
              alt="Hospital Logo"
              className="mx-auto w-24 h-24"
            />
            <h1 className="text-2xl font-bold text-gray-800">
              City General Hospital 
            </h1>
            
            <div className="text-sm text-gray-600">
              <p>{data.hospitalInfo.address}</p>
              <p>
                Phone: +91 6364541787 | Email:{" "}
                hospitalmangement204@gmail.com
              </p>
              <p>License No: HSP-12345 </p>
            </div>
          </div>

          {/* Prescription Header */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <h2 className="font-semibold text-gray-800">Patient Information</h2>
              <div className="text-sm space-y-1 text-gray-600">
                <p>Name: {data.patientInfo.name}</p>
                <p>Age/Gender: {data.patientInfo.age}/{data.patientInfo.gender}</p>
                <p>Patient ID: {data.patientInfo.id}</p>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold text-gray-800">Prescription Details</h2>
              <div className="text-sm space-y-1 text-gray-600">
                <p>Prescription ID: {prescription.prescriptionInfo.prescriptionId}</p>
                <p>Date: {prescription.prescriptionInfo.prescriptionDate}</p>
                <p>Doctor: {prescription.prescriptionInfo.prescribedBy}</p>
              </div>
            </div>
          </div>

          {/* Diagnosis */}
          <div className="space-y-2">
            <h2 className="font-semibold text-gray-800">Diagnosis</h2>
            <p className="text-sm text-gray-600">{prescription.diagnosis}</p>
          </div>

          {/* Medicines */}
          <div className="space-y-4">
            <h2 className="font-semibold text-gray-800">Prescribed Medicines</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border px-4 py-2 text-left">Medicine</th>
                  <th className="border px-4 py-2 text-left">Dosage</th>
                  <th className="border px-4 py-2 text-left">Frequency</th>
                  <th className="border px-4 py-2 text-left">Duration</th>
                  <th className="border px-4 py-2 text-left">Instructions</th>
                </tr>
              </thead>
              <tbody>
                {prescription.medicines.map((medicine) => (
                  <tr key={medicine.id}>
                    <td className="border px-4 py-2">{medicine.name}</td>
                    <td className="border px-4 py-2">{medicine.dosage}</td>
                    <td className="border px-4 py-2">{medicine.frequency}</td>
                    <td className="border px-4 py-2">{medicine.duration}</td>
                    <td className="border px-4 py-2">{medicine.instructions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Lab Tests */}
          <div className="space-y-2">
            <h2 className="font-semibold text-gray-800">Recommended Tests</h2>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {prescription.labTests.map((test, index) => (
                <li key={index}>{test}</li>
              ))}
            </ul>
          </div>

          {/* Special Instructions */}
          <div className="space-y-2">
            <h2 className="font-semibold text-gray-800">Special Instructions</h2>
            <p className="text-sm text-gray-600">{prescription.specialInstructions}</p>
          </div>

          {/* Doctor's Signature */}
          <div className="mt-16 grid grid-cols-2">
            <div></div>
            <div className="text-center">
              <div className="border-t border-gray-400 pt-2">
                <p className="font-semibold">{prescription.prescriptionInfo.prescribedBy}</p>
                <p className="text-sm text-gray-600">{prescription.prescriptionInfo.department}</p>
              </div>
            </div>
          </div>

          {/* Page number */}
          <div className="absolute bottom-4 right-4 text-sm text-gray-500">
            Page 2 of 2
          </div>
        </div>
      </div>
    

    </div>
  );
}

export default PrintLayout;
