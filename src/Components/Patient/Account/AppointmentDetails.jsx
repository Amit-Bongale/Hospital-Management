import React from 'react';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { 
  Calendar,
  Clock, 
  Search,
  AlertCircle,
  CheckCircle,
  CircleDashed,
  XCircle,
  FileText,
  ChevronDown

} from 'lucide-react';



function AppointmentDetails(){

  const patientid = useSelector((state) => state.patient.patientId)

  const [appointmetsinfo , setappointmentsinfo] = useState([])
  const [appointmentdata , setappointmentdata] = useState(true)

  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDateRange, setSelectedDateRange] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  // fetch all appointmetns of a patient
  useEffect(() => {
    try {
      fetch(`${process.env.REACT_APP_API_URL}/appointment/details/${patientid}`, {
      method: "POST",
      })
      .then((res) => res.json())
      .then((data) => {
      if (data.message) {
        console.log(data.message);
      }
      if(data.success){
        setappointmentdata(false)
      }
      setappointmentsinfo(data.appointments)
      console.log(data);
      })
      .catch((error) => console.log("Fetching Error:" , error));
    } catch (error) {
      console.log("error :", error);
    }
  },[patientid])


  // set bg clour according to status
  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-200 text-black';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Pending':
        return <CircleDashed className="w-5 h-5 text-yellow-500" />;
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'upcoming':
        return <AlertCircle className="w-5 h-5 text-blue-500" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };


  if(appointmentdata){
    return <div>No appointments found</div>;
  }

  return (
    <div className="w-[80vw] mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md">
        {/* Header */}
        <div className="p-6 border-b flex justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">My Appointments</h1>
            <p className="text-gray-600">View and manage your appointments</p>
          </div>
          <Link to="/user/appointmentbooking">
            <button className="px-6 py-3 m-2 rounded-3xl bg-blue-600 text-white font-medium ">Book Appointment</button>
          </Link>
        </div>

          

        {/* Filters */}
        <div className="p-4 border-b bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search doctor, specialization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Status Filter */}
            <div>
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            {/* Date Range Filter */}
            {/* <div>
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={selectedDateRange}
                onChange={(e) => setSelectedDateRange(e.target.value)}
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="custom">Custom Range</option>
              </select>
            </div> */}
          </div>
        </div>

        {/* Appointments List */}
        <div className="divide-y divide-gray-200">
          {appointmetsinfo.map((appointment) => (
            <div key={appointment.id} className="p-6 hover:bg-gray-50 hover:cursor-pointer" >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between"
              onClick={() => setExpandedId(expandedId === appointment._id ? null : appointment._id)}>
                <div className="flex items-start space-x-4" >
                  <div className="flex-shrink-0">
                    {getStatusIcon(appointment.status)}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-medium text-gray-900">
                        {appointment.doctorname}
                      </h3>
                      <span className="text-sm text-gray-500">
                        ({appointment.doctorspecialization})
                      </span>
                    </div>
                    <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        { new Date (appointment.scheduleddate).toLocaleDateString("en-IN")}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {appointment.scheduledtime}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex items-center space-x-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
                    {appointment.status}
                  </span>
                  <button
                    onClick={() => setExpandedId(expandedId === appointment._id ? null : appointment._id)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <ChevronDown className={`w-5 h-5 transform transition-transform ${expandedId === appointment._id ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedId === appointment._id && (
                <div className="mt-4 pl-8 border-l-2 border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Appointment Type</h4>
                      <p className="mt-1">{appointment.type}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Disease</h4>
                      <p className="mt-1">{appointment.disease}</p>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="mt-4 flex space-x-3">
                    {appointment.status === 'Pending' && (
                      <>
                        <button className="inline-flex items-center px-4 py-2 border border-red-300 text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                          Cancel Appointment
                        </button>
                      </>
                    )}

                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;