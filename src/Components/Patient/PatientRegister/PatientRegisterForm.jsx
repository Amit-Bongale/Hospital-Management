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
        } if (data.sucess) {
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-blue-500">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-6xl flex">
        
        {/* Left Image/Info Section */}
        <div className="w-3/6 bg-cover bg-center rounded-l-lg" style={{ backgroundImage: "url('https://www.jnuhealthcare.com/Uploads/Blogs/25bs_LifeCareHospital.jpg')" }}>
          <div className="flex flex-col justify-center h-full p-8 text-white bg-black bg-opacity-50 rounded-l-lg">
            <h1 className="text-4xl font-bold mb-2">Welcome</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac. </p>
            <Link to={'/login'} className='mt-2 hover:underline'>
                <span> Alerady Have an Account ? </span> <span className=''>Login</span>
            </Link>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full p-8">
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          {/* <p className="text-sm mb-6">Create your account..</p> */}

          <form onSubmit={Send} className="space-y-6">

            <div className="grid grid-cols-2 gap-4">
                
              <input type="text" name="aadhar" placeholder="Aadhar Number" onChange={(e) => setaadharno(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

              <input type="text" name="name" placeholder="Name"  onChange={(e) => setname(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>

            <div className="grid grid-cols-2 gap-4">

              <select name="gender"  onChange={(e) => setgender(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <input type="email" name="email" placeholder="Email"  onChange={(e) => setemail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>

            <div className="grid grid-cols-2 gap-4">

              <input type="tel" name="phone" placeholder="Phone"  onChange={(e) => setphone(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

              <input type="text" name="emergencyContact" placeholder="Emergency Contact" onChange={(e) => setemergencycontact(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

              
            </div>

            

            <div className="grid grid-cols-2 gap-4">

                <input type="number" name="age" placeholder="Age"  onChange={(e) => setage(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                <input type="date" name="dob" placeholder="DOB" onChange={(e) => setdob(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>

            <div className="grid  grid-cols-2  gap-4">

            <select
                name="blood"
                id="blood"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="blood group"
                required
                onChange={(e) => setbloodgroup(e.target.value)}
              >
                <option value="" key="">Choose Blood Group</option>
                <option value="A+" key="">
                  A+
                </option>
                <option value="A-" key="">
                  A-
                </option>
                <option value="B+" key="">
                  B+
                </option>
                <option value="B-" key="">
                  B-
                </option>
                <option value="O+" key="">
                  O+
                </option>
                <option value="O-" key="">
                  O-
                </option>
                <option value="AB+" key="">
                  AB+
                </option>
                <option value="AB-" key="">
                  AB-
                </option>
              </select>

              <input type="text" name="address" placeholder="Address" onChange={(e) => setaddress(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

            </div>

            <textarea name="medicalHistory" placeholder="Allergy / Medical Conditions" onChange={(e) => sethistory(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>

            <div className="grid  gap-4">
                <input type="password" name="password" placeholder="Enter Password" onChange={(e) => setpassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>



            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold">Register Now</button>

          </form>

        </div>
      </div>
    </div>
  )
}

export default PatientRegisterForm