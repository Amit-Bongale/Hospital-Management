import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


function PatientRegisterForm() {

  let [aadharno , setaadharno] = useState()
  let [name , setname ] = useState()
  let [gender , setgender] = useState()
  let [age , setage] = useState()
  let [email , setemail] = useState()
  let [phone , setphone] = useState()
  let [dob , setdob ] = useState()
  let [address , setaddress] = useState()
  let [bloodgroup , setbloodgroup] = useState()
  let [emergencycontact , setemergencycontact] = useState()
  let [history , sethistory] = useState()
  let [password , setpassword] = useState()

  function Send(e){
    e.preventDefault()

    let data = {
        "id": aadharno,
        "name": name,
        "gender": gender,
        "email": email,
        "phone" : phone,
        "dob" : dob,
        "age" :age,
        "address" : address,
        "emergencycontact" : emergencycontact,
        "bloodgroup" : bloodgroup,
        "aadharno": aadharno,
        "medicalhistory" : history,
        "password" : password,
    }
  
    try {
    fetch(`${process.env.REACT_APP_API_URL}/patient/createnewuser`, {
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
        if (data.success) {
          window.location.href = '/'
        } 
        console.log(data);
    })
    .catch((error) => console.log("Fetching Error:" , error));
    } catch (error) {
    console.log("error :", error);
    }
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-blue-500 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl flex flex-col md:flex-row">
        
        {/* Left Image/Info Section */}
        <div 
          className="w-full md:w-2/5 bg-cover bg-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none"  
          style={{ backgroundImage: "url('https://www.jnuhealthcare.com/Uploads/Blogs/25bs_LifeCareHospital.jpg')" }}
        >
          <div className="flex flex-col justify-center h-full p-8 text-white bg-black bg-opacity-50 rounded-t-lg md:rounded-l-lg">
            <h1 className="text-3xl md:text-5xl font-medium mb-2">Welcome</h1>
            <p className="text-sm">Your health is our commitment. Experience compassionate care, advanced technology, and a dedicated team ready to support your healing journey.</p>
            <Link to={'/login'} className='mt-2 hover:underline text-md font-medium'>
                Already Have an Account? <span className='font-semibold'>Login</span>
            </Link>
          </div>
        </div>
  
        {/* Form Section */}
        <div className="w-full md:w-3/6 p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
  
          <form onSubmit={Send} className="space-y-4">
            {/* Name & Aadhar Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="aadhar" placeholder="Aadhar Number" onChange={(e) => setaadharno(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2" />
              <input type="text" name="name" placeholder="Name" onChange={(e) => setname(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2" />
            </div>
  
            {/* Gender & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select name="gender" onChange={(e) => setgender(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2">
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input type="email" name="email" placeholder="Email" onChange={(e) => setemail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2" />
            </div>
  
            {/* Phone & Emergency Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="tel" name="phone" placeholder="Phone" onChange={(e) => setphone(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2" />
              <input type="text" name="emergencyContact" placeholder="Emergency Contact" onChange={(e) => setemergencycontact(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2" />
            </div>
  
            {/* Age & DOB */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="number" name="age" placeholder="Age" onChange={(e) => setage(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2" />
              <input type="date" name="dob" placeholder="DOB" onChange={(e) => setdob(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2" />
            </div>
  
            {/* Blood Group & Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select name="blood" id="blood" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2" required onChange={(e) => setbloodgroup(e.target.value)}>
                <option value="">Choose Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
              <input type="text" name="address" placeholder="Address" onChange={(e) => setaddress(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2" />
            </div>
  
            {/* Medical History */}
            <textarea name="medicalHistory" placeholder="Allergy / Medical Conditions" onChange={(e) => sethistory(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2"></textarea>
  
            {/* Password */}
            <input type="password" name="password" placeholder="Enter Password" onChange={(e) => setpassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2" />
  
            {/* Submit Button */}
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition-all">
              Register Now
            </button>
          </form>
        </div>
      </div>

      <style>{`
      .bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-2 {
  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}

      `}
      
      </style>


    </div>
  );
  
}

export default PatientRegisterForm