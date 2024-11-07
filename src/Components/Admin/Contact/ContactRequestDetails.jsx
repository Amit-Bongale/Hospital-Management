import React, { useState, useEffect } from "react";

import { User, Mail, Calendar } from 'lucide-react';

function ContactRequestDetails() {
  let [contactRequests, setcontact] = useState([]);

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/contactus/allrequest` , { method: "POST" })
      .then((res) => res.json())
      .then((data) => {setcontact(data); })
      .catch((err) => console.log("Error Fetching Data :" , err))
    } catch (error) {
      console.log("Error :" , error)
    }
  },[])

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full">
      <div className="mb-4">
        <h2 className="text-lg font-medium text-center ">Contact Requests</h2>
      </div>
      <div className="space-x-4 flex flex-wrap">
        {contactRequests.length > 0 ? (
          contactRequests.map((request, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4 mt-5">
              <div className="flex items-center space-x-4 mb-2">
                <User className="text-gray-500" />
                <h3 className="text-md font-medium">{request.name}</h3>
              </div>
              <div className="flex items-center space-x-2 text-gray-500 mb-2">
                <Mail className="h-5 w-5" /> 
                <span>{request.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500 mb-2">
                <Calendar className="h-5 w-5" />
                <span>{(request.date).slice(0,10)}</span>
              </div>
              <p>{request.message}</p>
            </div>
          ))
        ) : (
          <div className="text-gray-500">No contact requests found.</div>
        )}
      </div>
    </div>
  );
}

export default ContactRequestDetails;
