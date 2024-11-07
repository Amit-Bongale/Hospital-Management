import React, { useState, useEffect } from "react";

import { User, Mail, Calendar, MessageSquare } from "lucide-react";

function ContactRequestDetails() {
  let [contactRequests, setcontact] = useState([]);

  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/contactus/allrequest`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          setcontact(data);
        })
        .catch((err) => console.log("Error Fetching Data :", err));
    } catch (error) {
      console.log("Error :", error);
    }
  }, []);

  return (
    <div className="bg-white rounded-lg p-4 ">
      <div className="mb-4">
        <h2 className="text-xl font-medium text-center ">Contact Requests</h2>
      </div>
      <div className="space-x-4 space-y-4">
        {contactRequests.length > 0 ? (
          contactRequests.map((request, index) => (
            <div
              key={index}
              className="border-2 rounded-lg p-4 mt-5 gap-6 text-wrap"
            >
              <div className="flex gap-10">
                <div className="flex items-center space-x-4 mb-2">
                  <User className="text-gray-500" />
                  <h3 className="text-md font-medium">{request.name}</h3>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 mb-2">
                  <Mail className="h-5 w-5" />
                  <span>{request.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 mb-2 text-nowrap">
                  <Calendar className="h-5 w-5" />
                  <span>{request.date.slice(0, 10)}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-gray-500 my-2">
                <MessageSquare className="h-5 w-5 absolute " />
                <div className="text-wrap pl-8">{request.message}</div>
              </div>

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
